import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DATO_PERSONA } from '../../../../constants/formularios';
import { SIMULADOR_ROUTE } from '../../../../constants/routes/publico/publico';
import solicitudRoutes from '../../../features/solicitud/solicitud.routes';
import Step from '../../../shared/step/Step';
import TabInformativo from '../../../shared/tab-informativo/TabInformativo';
import SvgPatronesSolicitud from '../../../svgs/SvgPatronesSolicitud';
import HeaderSolicitud from '../../header/solicitud/HeaderSolicitud';
import ModalActualizar from '../../modals/solicitud/modal-actualizar/ModalActualizar';

const SolicitudContainer = ({ pageComponent, servicesData }) => {
  const { component, data } = pageComponent;
  const [componentPFAE, componentPM] = component;
  const { formulario, paso, step, tab, tipoPersona } = data;
  const { sincronizado, currentStep, tipoPersonaRedux } = useSelector((state) => state.solicitud);
  const { replace } = useRouter();

  let Component = <></>;

  if (tipoPersona === '' && componentPM) {
    Component = tipoPersonaRedux === 'MORAL' ? componentPM : componentPFAE;
  } else {
    Component = componentPFAE;
  }

  const componentsFormulario = solicitudRoutes
    .filter(({ data: dataComponent }) => dataComponent.formulario === formulario)
    .map(({ data: dataComponent, route }) => ({
      step: dataComponent.step,
      paso: dataComponent.paso,
      tipoPersona: dataComponent.tipoPersona,
      action: route,
    }));

  const steps = componentsFormulario.filter(
    (dataComponent) =>
      Number.isInteger(dataComponent.step) &&
      (dataComponent.tipoPersona === '' || dataComponent.tipoPersona === tipoPersonaRedux)
  );

  const tabs = [
    { path: 'datos-personales', label: 'Datos personales' },
    { path: 'datos-empresa', label: 'Datos de tu empresa' },
    { path: 'oferta', label: 'Oferta' },
    { path: 'documentacion', label: 'Documentación' },
  ];

  useEffect(() => {
    if (!sincronizado && formulario === DATO_PERSONA) {
      replace(SIMULADOR_ROUTE);
    }
  }, []);

  return (
    <>
      <HeaderSolicitud />
      <ModalActualizar />

      {!!tab && (
        <TabInformativo
          tabs={tabs}
          currentTab={tab}
          currentStep={paso}
          valipStep={currentStep.paso}
          steps={componentsFormulario}
        />
      )}

      {!!step && <Step currentStep={step} valipStep={currentStep.valipStep} steps={steps} />}
      <Component {...servicesData} validate={currentStep.paso === paso} />
      <SvgPatronesSolicitud className="fixed-left-bottom" />
    </>
  );
};

SolicitudContainer.propTypes = {
  pageComponent: PropTypes.any.isRequired,
  servicesData: PropTypes.any.isRequired,
};

export default SolicitudContainer;
