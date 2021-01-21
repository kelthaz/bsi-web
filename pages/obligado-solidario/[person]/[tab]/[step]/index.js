import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import TabInformativo from '../../../../../components/shared/tab-informativo/TabInformativo';
import Step from '../../../../../components/shared/step/Step';
import SvgPatronesSolicitud from '../../../../../components/svgs/SvgPatronesSolicitud';
import usePreventWindowUnload from '../../../../../hooks/usePreventWindowUnload';
import ModalActualizar from '../../../../../components/core/modals/solicitud/modal-actualizar/ModalActualizar';
import obligadoSolidarioRoutes from '../../../../../components/features/obligado-solidario/obligado-solidario.routes';

const ObligadoSolidario = ({ index, data }) => {
  usePreventWindowUnload();
  const [showComponent, setShowComponent] = useState(true);

  const tabs = [
    { path: 'preguntas', label: 'Preguntas' },
    { path: 'carga-documentos', label: 'Carga de documentos' },
    { path: 'autorizacion', label: 'Autorización' },
  ];
  const { component: Component, stepNumber, step: currentStep } = obligadoSolidarioRoutes[index];

  const { query, events } = useRouter();
  const {
    currentStep: { step: stepRedux, tab: tabRedux },
  } = useSelector((state) => state.obligado);

  const steps = obligadoSolidarioRoutes
    .filter(({ stepNumber: step, tab }) => Number.isInteger(step) && tabRedux === tab)
    .map(({ stepNumber: step, path }) => ({
      step,
      action: path,
    }));

  // useEffect(() => {
  //   console.log(index);
  // }, [index]);

  useEffect(() => {
    const handleRouteChange = () => {
      setShowComponent(false);
    };

    const handleRouteChangeComplete = () => {
      setShowComponent(true);
    };

    events.on('routeChangeStart', handleRouteChange);
    events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      events.off('routeChangeStart', handleRouteChange);
      events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  return (
    <>
      {/* <Head>
        <title>{`BanCoppel | Pymes - Paso: ${currentStep}`}</title>
      </Head> */}
      <ModalActualizar />
      {showComponent && (
        <TabInformativo
          show={!!stepNumber}
          tabs={tabs}
          currentTab={query.tab}
          currentStep={parseInt(query.step, 10)}
          valipStep={parseInt(stepRedux, 10)}
          steps={steps}
        />
      )}

      <Step
        show={!!stepNumber}
        currentStep={parseInt(query.step, 10)}
        valipStep={parseInt(stepRedux, 10)}
        steps={steps}
      />
      {showComponent && <Component {...data} />}
      <SvgPatronesSolicitud className="fixed-left-bottom" />
    </>
  );
};

export async function getServerSideProps(context) {
  const data = {};
  const index = obligadoSolidarioRoutes.findIndex((route) => context.resolvedUrl.includes(route.path));
  const { services } = obligadoSolidarioRoutes[index];
  const respData = await Promise.all(services.map(({ service }) => service())).then((respArr) =>
    respArr.map((resp) => resp.data)
  );
  services.forEach(({ name }, indexService) => {
    data[name] = respData[indexService];
  });
  return {
    props: { index, data },
  };
}

ObligadoSolidario.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};

export default ObligadoSolidario;
