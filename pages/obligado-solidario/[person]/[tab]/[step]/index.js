import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TabInformativo from '../../../../../components/shared/tab-informativo/TabInformativo';
import Step from '../../../../../components/shared/step/Step';
import SvgPatronesSolicitud from '../../../../../components/svgs/SvgPatronesSolicitud';
import usePreventWindowUnload from '../../../../../hooks/usePreventWindowUnload';
import ModalActualizar from '../../../../../components/core/modals/solicitud/modal-actualizar/ModalActualizar';
import obligadoSolidarioRoutes from '../../../../../components/features/solicitud/obligado-solidario/obligado-solidario.routes';

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
    .filter(
      ({ stepNumber: step, tab, path }) => Number.isInteger(step) && tabRedux === tab && path.includes(query.person)
    )
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
      <ModalActualizar as="/obligado-solidario/[person]/[tab]/[step]" />
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
  console.log(context);
  console.log('------------------------------------------------');
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
