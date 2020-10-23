import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import TabInformativo from '../../../../components/shared/tab-informativo/TabInformativo';
import Step from '../../../../components/shared/step/Step';
import SvgPatronesSolicitud from '../../../../components/svgs/SvgPatronesSolicitud';
import solicitudRoutes from '../../../../components/features/solicitud/solicitud.routes';

const Solicitud = ({ index }) => {
  const { component: Component, data } = solicitudRoutes[index];
  const { push, pathname, query } = useRouter();
  const {
    currentStep: { step: stepRedux, tab: tabRedux },
  } = useSelector((state) => state.solicitud);

  // console.log(stepRouter, tabRouter, reduxStep, reduxTab);
  // console.log(stepRedux, tabRedux, query);
  const steps = solicitudRoutes
    .filter(({ data: { step }, tab }) => Number.isInteger(step) && tabRedux === tab)
    .map(({ data: { step }, path }) => ({
      step,
      action: () => push(pathname, path),
    }));
  // console.log(steps);
  // useEffect(() => {
  //   console.log('antes iniciar el componente');
  // }, []);

  return (
    <>
      <TabInformativo show={!!data.step} />
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
