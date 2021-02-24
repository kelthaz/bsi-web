import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DATO_PERSONA, OBLIGADO_SOLIDARIO } from '../../../../constants/formularios';
import { SIMULADOR_ROUTE } from '../../../../constants/routes/publico/publico';
import usePreventWindowUnload from '../../../../hooks/usePreventWindowUnload';
import solicitudRoutes from '../../../features/solicitud/solicitud.routes';
import Step from '../../../shared/step/Step';
import TabInformativo from '../../../shared/tab-informativo/TabInformativo';
import SvgPatronesSolicitud from '../../../svgs/SvgPatronesSolicitud';
import HeaderSolicitud from '../../header/solicitud/HeaderSolicitud';
import ModalActualizar from '../../modals/solicitud/modal-actualizar/ModalActualizar';

const SolicitudContainer = ({ pageComponent, servicesData }) => {
  const { component, data } = pageComponent;
  const [componentPFAE, componentPM] = component;
  const { formulario, paso, step, tab: tabComponent, tipoPersona } = data;
  const [tabPFAE, tabPM] = tabComponent;
  const { sincronizado, currentStep, tipoPersonaRedux } = useSelector((state) => state.solicitud);
  const { replace } = useRouter();
  usePreventWindowUnload();

  let Component = componentPFAE;
  let tab = tabPFAE;

  if (tipoPersona === '' && componentPM && tipoPersonaRedux === 'MORAL') {
    Component = componentPM;
  }

  if (tipoPersona === '' && tabPM && tipoPersonaRedux === 'MORAL') {
    tab = tabPM;
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

  const tabsSolicitante = [
    { path: 'datos-personales', label: 'Datos personales' },
    { path: 'datos-empresa', label: 'Datos de tu empresa' },
    { path: 'oferta', label: 'Oferta' },
    { path: 'documentacion', label: 'Documentación' },
  ];

  const tabsObligado = [
    { path: 'preguntas', label: 'Preguntas' },
    { path: 'carga-documentos', label: 'Carga de documentos' },
    { path: 'autorizacion', label: 'Autorización' },
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
          tabs={formulario === OBLIGADO_SOLIDARIO ? tabsObligado : tabsSolicitante}
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
