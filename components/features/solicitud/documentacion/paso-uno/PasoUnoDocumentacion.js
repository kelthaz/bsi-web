import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';

import { regexMultipleSpaces, regexRFCMoral } from '../../../../../constants/regex';
import {
  longitudMaxima,
  campoRequerido,
  longitudMinima,
  rfcInvalido,
  numeroMaximo,
  numeroMinimo,
} from '../../../../../constants/errors';
import EjerceControlSobreMoral from '../../shared/ejerce-control-sobre-moral/EjerceControlSobreMoral';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { PASO_DOS_DOCUMENTACION_ROUTE } from '../../../../../constants/routes/solicitud/documentacion';

const PasoUnoDocumentacionPM = ({ validate }) => {
  const { currentStep, datosPersonales, documentacion } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const nombrePersonaFisica = `${datosPersonales.primerNombre} ${datosPersonales.segundoNombre} ${datosPersonales.primerApellido} ${datosPersonales.segundoApellido}`.replace(
    regexMultipleSpaces,
    ' '
  );
  const nombrePersonaMoral = `${datosPersonales.razonSocial} ${datosPersonales.tipoSociedad.label}`;

  const subformValidationSchema = Yup.object().shape({
    nombreNegocio: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    rfc: Yup.string().trim().matches(regexRFCMoral, rfcInvalido).min(12, longitudMinima).required(campoRequerido),
    porcentajeDirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
    porcentajeIndirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
  });

  const { initialValues, validationSchema } = {
    initialValues: {
      controladosMoralesComoFisico: documentacion.controladosMoralesComoFisico,
      tieneControladosMoralesComoFisico: documentacion.tieneControladosMoralesComoFisico,
      cantidadControladosMoralesComoFisico: documentacion.cantidadControladosMoralesComoFisico,
    },
    validationSchema: {
      controladosMoralesComoFisico: Yup.array().of(subformValidationSchema),
      tieneControladosMoralesComoFisico: Yup.string().required(campoRequerido),
    },
  };

  if (datosPersonales.tipoPersona === 'MORAL') {
    initialValues.controladosMoralesComoMoral = documentacion.controladosMoralesComoMoral;
    initialValues.tieneControladosMoralesComoMoral = documentacion.tieneControladosMoralesComoMoral;
    initialValues.cantidadControladosMoralesComoMoral = documentacion.cantidadControladosMoralesComoMoral;

    validationSchema.controladosMoralesComoMoral = Yup.array().of(subformValidationSchema);
    validationSchema.tieneControladosMoralesComoMoral = Yup.string().required(campoRequerido);
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
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          documentacion: { ...documentacion, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_DOS_DOCUMENTACION_ROUTE, currentStep);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container ">
          <form onSubmit={handleSubmit} noValidate>
            {datosPersonales.tipoPersona === 'MORAL' ? (
              <>
                <p className="body2">
                  Ahora vamos a realizarte unas preguntas que nos deberás contestar como Persona Moral (
                  {nombrePersonaMoral}) y como Persona Física ({nombrePersonaFisica})
                </p>

                <p className="sub color-blue-storm">
                  <img src="/requisitos/PM.svg" alt="Persona moral" />
                  Respondiendo como: {nombrePersonaMoral} (Persona Moral)
                </p>

                <p className="sub color-dark-gray position-relative">
                  ¿Existe una persona moral sobre la que tú ejerces control?
                  <Tooltip message="..." />
                </p>

                <EjerceControlSobreMoral
                  formulario={formulario}
                  nameControlados="controladosMoralesComoMoral"
                  nameTieneControlados="tieneControladosMoralesComoMoral"
                  nameCantidadControlados="cantidadControladosMoralesComoMoral"
                  numeroMaximo={5}
                />

                <p className="sub color-blue-storm">
                  <img src="/requisitos/PM.svg" alt="Persona moral" />
                  Respondiendo como: {nombrePersonaFisica} (Persona Física)
                </p>

                <p className="sub color-dark-gray">¿Existe una persona moral sobre la que tú ejerces control?</p>
              </>
            ) : (
              <p className="sub color-dark-gray position-relative">
                Cuéntanos, ¿Existe una persona moral sobre la que tú ejerces control?
                <Tooltip message="..." />
              </p>
            )}

            <EjerceControlSobreMoral
              formulario={formulario}
              nameControlados="controladosMoralesComoFisico"
              nameTieneControlados="tieneControladosMoralesComoFisico"
              nameCantidadControlados="cantidadControladosMoralesComoFisico"
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

PasoUnoDocumentacionPM.propTypes = {
  validate: PropTypes.bool.isRequired,
};
export default PasoUnoDocumentacionPM;
