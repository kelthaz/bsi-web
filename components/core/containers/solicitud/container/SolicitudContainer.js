import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DATO_PERSONA, OBLIGADO_SOLIDARIO } from '../../../../../constants/formularios';
import { MORAL } from '../../../../../constants/persona';
import { SIMULADOR_ROUTE } from '../../../../../constants/routes/publico/publico';
import usePreventWindowUnload from '../../../../../hooks/usePreventWindowUnload';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import solicitudRoutes from '../../../../features/solicitud/solicitud.routes';
import Step from '../step/Step';
import TabInformativo from '../tab-informativo/TabInformativo';
import SvgPatronesSolicitud from '../../../../svgs/SvgPatronesSolicitud';
import Error404 from '../../../error404/Error404';
import HeaderSolicitud from '../header/HeaderSolicitud';
import ModalActualizar from '../modal-actualizar/ModalActualizar';

const SolicitudContainer = ({ pageComponent, servicesData, userData }) => {
  usePreventWindowUnload();
  const { component, data } = pageComponent;
  const [componentPFAE, componentPM] = component;
  const { formulario, paso, step, tab: tabComponent, tipoPersona } = data;
  const [tabPFAE, tabPM] = tabComponent;
  const { sincronizado, currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const { replace } = useRouter();
  const dispatch = useDispatch();

  const invalidComponent = tipoPersona !== '' && datosPersonales.tipoPersona !== tipoPersona;

  let Component = invalidComponent ? Error404 : componentPFAE;
  let tab = tabPFAE;

  if (tipoPersona === '' && componentPM && datosPersonales.tipoPersona === MORAL) {
    Component = componentPM;
  }

  if (tipoPersona === '' && tabPM && datosPersonales.tipoPersona === MORAL) {
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
      (dataComponent.tipoPersona === '' || dataComponent.tipoPersona === datosPersonales.tipoPersona)
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
    if (!sincronizado) {
      if (formulario === DATO_PERSONA) {
        replace(SIMULADOR_ROUTE);
      } else {
        dispatch(
          nextStepDatosPersonales({
            sincronizado: true,
            datosPersonales: {
              ...datosPersonales,
              tipoPersona: userData.sub.length === 12 ? 'MORAL' : 'FISICO',
              rfc: userData.sub,
            },
          })
        );
      }
    }
  }, []);

  return (
    <>
      <HeaderSolicitud formulario={formulario} />
      <ModalActualizar />

      {!invalidComponent && !!tab && (
        <TabInformativo
          tabs={formulario === OBLIGADO_SOLIDARIO ? tabsObligado : tabsSolicitante}
          currentTab={tab}
          currentStep={paso}
          valipStep={currentStep.paso}
          steps={componentsFormulario}
        />
      )}

      {!invalidComponent && !!step && <Step currentStep={step} valipStep={currentStep.valipStep} steps={steps} />}
      <Component {...servicesData} validate={currentStep.paso === paso} />
      <SvgPatronesSolicitud className="fixed-left-bottom" />
    </>
  );
};

SolicitudContainer.propTypes = {
  pageComponent: PropTypes.any.isRequired,
  servicesData: PropTypes.any.isRequired,
  userData: PropTypes.any.isRequired,
};

export default SolicitudContainer;