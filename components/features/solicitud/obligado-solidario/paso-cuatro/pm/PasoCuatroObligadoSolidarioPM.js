import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Tooltip from '../../../../../shared/tooltip/Tooltip';
import { regexMultipleSpaces, regexRFCMoral } from '../../../../../../constants/regex';
import {
  longitudMaxima,
  campoRequerido,
  longitudMinima,
  rfcInvalido,
  numeroMaximo,
  numeroMinimo,
} from '../../../../../../constants/errors';
import { nextStepObligadoSolidario } from '../../../../../../redux/actions/obligado';
import EjerceControlSobreMoral from '../../../shared/ejerce-control-sobre-moral/EjerceControlSobreMoral';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { PASO_CINCO_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';

const PasoCuatroObligadoSolidarioPM = ({ validate }) => {
  const { obligadoSolidario, currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const nombrePersonaFisica = `${datosPersonales.primerNombre} ${datosPersonales.segundoNombre} ${datosPersonales.primerApellido} ${datosPersonales.segundoApellido}`.replace(
    regexMultipleSpaces,
    ' '
  );
  const nombrePersonaMoral = `${obligadoSolidario.razonSocial} ${obligadoSolidario.tipoSociedad}`;

  const subformValidationSchema = Yup.object().shape({
    nombreNegocio: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    rfc: Yup.string().trim().matches(regexRFCMoral, rfcInvalido).min(12, longitudMinima).required(campoRequerido),
    porcentajeDirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
    porcentajeIndirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
  });

  const formulario = useFormik({
    initialValues: {
      controladosMoralesComoMoral: obligadoSolidario.controladosMoralesComoMoral,
      tieneControladosMoralesComoMoral: obligadoSolidario.tieneControladosMoralesComoMoral,
      cantidadControladosMoralesComoMoral: obligadoSolidario.cantidadControladosMoralesComoMoral,
      controladosMoralesComoFisico: obligadoSolidario.controladosMoralesComoFisico,
      tieneControladosMoralesComoFisico: obligadoSolidario.tieneControladosMoralesComoFisico,
      cantidadControladosMoralesComoFisico: obligadoSolidario.cantidadControladosMoralesComoFisico,
    },
    validationSchema: Yup.object().shape({
      controladosMoralesComoFisico: Yup.array().of(subformValidationSchema),
      tieneControladosMoralesComoFisico: Yup.string().required(campoRequerido),
      controladosMoralesComoMoral: Yup.array().of(subformValidationSchema),
      tieneControladosMoralesComoMoral: Yup.string().required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepObligadoSolidario({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          obligadoSolidario: { ...obligadoSolidario, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_CINCO_OBLIGADO_SOLIDARIO_ROUTE, currentStep);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container ">
          <form onSubmit={handleSubmit} noValidate>
            <p className="body2">
              Ahora vamos a realizarte unas preguntas que nos deberás contestar como Persona Moral ({nombrePersonaMoral}
              ) y como Persona Física ({nombrePersonaFisica})
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

            <p className="sub color-dark-gray position-relative">
              Cuéntanos, ¿Existe una persona moral sobre la que tú ejerces control?
              <Tooltip message="..." />
            </p>

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

PasoCuatroObligadoSolidarioPM.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoCuatroObligadoSolidarioPM;
