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
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
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
  const nombrePersonaMoral = `${obligadoSolidario.razonSocial} ${obligadoSolidario.tipoSociedad?.label}`;

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
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          obligadoSolidario: { ...obligadoSolidario, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_CINCO_OBLIGADO_SOLIDARIO_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container ">
          <form onSubmit={handleSubmit} noValidate>
            <p className="body2">
              Ahora vamos a realizarte unas preguntas que nos deber??s contestar como Persona Moral ({nombrePersonaMoral}
              ) y como Persona F??sica ({nombrePersonaFisica})
            </p>

            <p className="sub color-blue-storm">
              <img src="/requisitos/PM.svg" alt="Persona moral" />
              Respondiendo como: {nombrePersonaMoral} (Persona Moral)
            </p>

            <p className="sub color-dark-gray position-relative">
              ??Existe una persona moral sobre la que t?? ejerces control?
              <Tooltip
                message="Aquellas personas morales que tienen participaci??n de manera directa en tu negocio"
                position="top"
              />
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
              Respondiendo como: {nombrePersonaFisica} (Persona F??sica)
            </p>

            <p className="sub color-dark-gray">??Existe una persona moral sobre la que t?? ejerces control?</p>

            <p className="sub color-dark-gray position-relative">
              Cu??ntanos, ??Existe una persona moral sobre la que t?? ejerces control?
              <Tooltip
                message="Aquellas personas morales en las que tiene participaci??n ya sea de manera directa aportando capital social o de manera indirecta mediante la participaci??n en el capital social de una tercera empresa a trav??s de la participaci??n en el capital social de manera directa en una segunda."
                position="top"
              />
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
