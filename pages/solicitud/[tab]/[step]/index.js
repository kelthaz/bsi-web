import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import TabInformativo from '../../../../components/shared/tab-informativo/TabInformativo';
import Step from '../../../../components/shared/step/Step';
import SvgPatronesSolicitud from '../../../../components/svgs/SvgPatronesSolicitud';
import solicitudRoutes from '../../../../components/features/solicitud/solicitud.routes';
import usePreventWindowUnload from '../../../../hooks/usePreventWindowUnload';

const Solicitud = ({ index }) => {
  usePreventWindowUnload();

  const tabs = [
    { path: 'datos-personales', label: 'Datos personales' },
    { path: 'datos-empresa', label: 'Datos de tu empresa' },
    { path: 'oferta', label: 'Oferta' },
    { path: 'documentacion', label: 'Documentación' },
  ];
  const { component: Component, data } = solicitudRoutes[index];
  const { push, pathname, query } = useRouter();
  const {
    currentStep: { step: stepRedux, tab: tabRedux },
  } = useSelector((state) => state.solicitud);

  const steps = solicitudRoutes
    .filter(({ data: { step }, tab }) => Number.isInteger(step) && tabRedux === tab)
    .map(({ data: { step }, path }) => ({
      step,
      action: () => push(pathname, path),
    }));

  return (
    <>
      <TabInformativo
        show={!!data.step}
        tabs={tabs}
        currentTab={query.tab}
        currentStep={parseInt(query.step, 10)}
        valipStep={parseInt(stepRedux, 10)}
        steps={steps}
      />
      <Step
        show={!!data.step}
        currentStep={parseInt(query.step, 10)}
        valipStep={parseInt(stepRedux, 10)}
        steps={steps}
      />
      <Component />
      <SvgPatronesSolicitud className="only-lg fixed-left-bottom" />
    </>
  );
};

export async function getServerSideProps(context) {
  const { tab, step } = context.params;
  const index = solicitudRoutes.findIndex((route) => route.tab === tab && route.step === step);
  return {
    props: { index },
  };
}

Solicitud.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Solicitud;
