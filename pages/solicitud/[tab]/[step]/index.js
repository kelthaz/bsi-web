import { useState } from 'react';
import PropTypes from 'prop-types';
import TabInformativo from '../../../../components/shared/tab-informativo/TabInformativo';
import Step from '../../../../components/shared/step/Step';
import SvgPatronesSolicitud from '../../../../components/svgs/SvgPatronesSolicitud';
import solicitudRoutes from '../../../../components/features/solicitud/solicitud.routes';

const Solicitud = ({ index }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const { component: Component, data } = solicitudRoutes[index];

  return (
    <>
      <TabInformativo show={!!data.step} />
      <Step show={!!data.step} currentStep={currentStep} setCurrentStep={setCurrentStep} />
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
