import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TabInformativo from '../../../../components/shared/tab-informativo/TabInformativo';
import Step from '../../../../components/shared/step/Step';
import SvgPatronesSolicitud from '../../../../components/svgs/SvgPatronesSolicitud';
import solicitudRoutes from '../../../../components/features/solicitud/solicitud.routes';
import usePreventWindowUnload from '../../../../hooks/usePreventWindowUnload';

const Solicitud = ({ index, data }) => {
  usePreventWindowUnload();
  const [showComponent, setShowComponent] = useState(true);

  const tabs = [
    { path: 'datos-personales', label: 'Datos personales' },
    { path: 'datos-empresa', label: 'Datos de tu empresa' },
    { path: 'oferta', label: 'Oferta' },
    { path: 'documentacion', label: 'Documentación' },
  ];
  const { component: Component, stepNumber } = solicitudRoutes[index];
  const { query, events } = useRouter();
  const {
    currentStep: { step: stepRedux, tab: tabRedux },
  } = useSelector((state) => state.solicitud);

  const steps = solicitudRoutes
    .filter(({ stepNumber: step, tab }) => Number.isInteger(step) && tabRedux === tab)
    .map(({ stepNumber: step, path }) => ({
      step,
      action: path,
    }));

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
      <TabInformativo
        show={!!stepNumber}
        tabs={tabs}
        currentTab={query.tab}
        currentStep={parseInt(query.step, 10)}
        valipStep={parseInt(stepRedux, 10)}
        steps={steps}
      />
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
  const { tab, step } = context.params;
  const index = solicitudRoutes.findIndex((route) => route.tab === tab && route.step === step);
  const { services } = solicitudRoutes[index];
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

Solicitud.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};

export default Solicitud;
