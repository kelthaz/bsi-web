import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import {
  campoRequerido,
  longitudMaxima,
  longitudMinima,
  rfcInvalido,
  seleccionOpcion,
} from '../../../../../constants/errors';
import { regexMultipleSpaces, regexRFCFisica } from '../../../../../constants/regex';
import SvgPersonaMoral from '../../../../svgs/SvgPersonaMoral';
import EjerceControlSobreFisico from '../../shared/ejerce-control-sobre-fisico/EjerceControlSobreFisico';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { PASO_CUATRO_DOCUMENTACION_ROUTE } from '../../../../../constants/routes/solicitud/documentacion';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';

const PasoTresDocumentacion = () => {
  const { currentStep, documentacion, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const validate = currentStep.step === query.step;

  const nombrePersonaFisica = `${datosPersonales.primerNombre} ${datosPersonales.segundoNombre} ${datosPersonales.primerApellido} ${datosPersonales.segundoApellido}`.replace(
    regexMultipleSpaces,
    ' '
  );
  const nombrePersonaMoral = `${datosPersonales.razonSocial} ${datosPersonales.tipoSociedad.label}`;

  const subformValidationSchema = Yup.object().shape({
    primerNombre: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    segundoNombre: Yup.string().trim().max(60, longitudMaxima),
    primerApellido: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    segundoApellido: Yup.string().trim().max(60, longitudMaxima),
    rfc: Yup.string().trim().matches(regexRFCFisica, rfcInvalido).min(13, longitudMinima).required(campoRequerido),
    parentesco: Yup.object()
      .shape({
        value: Yup.string(),
        label: Yup.string(),
      })
      .nullable()
      .required(seleccionOpcion),
  });

  const { initialValues, validationSchema } = {
    initialValues: {
      controladosFisicosComoFisico: documentacion.controladosFisicosComoFisico,
      tieneControladosFisicosComoFisico: documentacion.tieneControladosFisicosComoFisico,
      cantidadControladosFisicosComoFisico: documentacion.cantidadControladosFisicosComoFisico,
    },
    validationSchema: {
      controladosFisicosComoFisico: Yup.array().of(subformValidationSchema),
      tieneControladosFisicosComoFisico: Yup.string().required(campoRequerido),
    },
  };

  if (datosPersonales.tipoPersona.value === 'MORAL') {
    initialValues.controladosFisicosComoMoral = documentacion.controladosFisicosComoMoral;
    initialValues.tieneControladosFisicosComoMoral = documentacion.tieneControladosFisicosComoMoral;
    initialValues.cantidadControladosFisicosComoMoral = documentacion.cantidadControladosFisicosComoMoral;

    validationSchema.controladosFisicosComoMoral = Yup.array().of(subformValidationSchema);
    validationSchema.tieneControladosFisicosComoMoral = Yup.string().required(campoRequerido);
  }

  const formulario = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema: Yup.object().shape({
      ...validationSchema,
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate ? { tab: 'documentacion', step: '4' } : { ...currentStep },
          documentacion: { ...documentacion, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_CUATRO_DOCUMENTACION_ROUTE, currentStep);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container ">
          <form onSubmit={handleSubmit} noValidate>
            {datosPersonales.tipoPersona.value === 'MORAL' && (
              <>
                <p className="sub color-blue-storm">
                  <SvgPersonaMoral />
                  Respondiendo como: {nombrePersonaMoral} (Persona Moral)
                </p>
                <p className="sub color-dark-gray">
                  ¿Existe una persona física relacionada? <Tooltip message="..." />
                </p>
                <EjerceControlSobreFisico
                  formulario={formulario}
                  nameControlados="controladosFisicosComoMoral"
                  nameTieneControlados="tieneControladosFisicosComoMoral"
                  nameCantidadControlados="cantidadControladosFisicosComoMoral"
                  numeroMaximo={5}
                />
                <p className="sub color-blue-storm">
                  <img src="/requisitos/PM.svg" alt="Persona moral" />
                  Respondiendo como: {nombrePersonaFisica} (Persona Física)
                </p>
              </>
            )}

            <p className="sub color-dark-gray">¿Existe una persona física relacionada?</p>

            <EjerceControlSobreFisico
              formulario={formulario}
              nameControlados="controladosFisicosComoFisico"
              nameTieneControlados="tieneControladosFisicosComoFisico"
              nameCantidadControlados="cantidadControladosFisicosComoFisico"
              numeroMaximo={5}
            />

            <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
              <button
                type="submit"
                className="cicle-button-blue my-3"
                aria-label="Avanzar"
                disabled={validate && !(formulario.isValid && formulario.dirty)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasoTresDocumentacion;