import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Tooltip from '../../../../../shared/tooltip/Tooltip';
import {
  campoRequerido,
  longitudMaxima,
  longitudMinima,
  rfcInvalido,
  seleccionOpcion,
} from '../../../../../../constants/errors';
import { regexMultipleSpaces, regexRFCFisica } from '../../../../../../constants/regex';
import SvgPersonaMoral from '../../../../../svgs/SvgPersonaMoral';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import { PASO_SIETE_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import EjerceControlSobreFisico from '../../../shared/ejerce-control-sobre-fisico/EjerceControlSobreFisico';

const PasoSeisObligadoSolidarioPM = ({ validate }) => {
  const { currentStep, obligadoSolidario, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const nombrePersonaFisica = `${datosPersonales.primerNombre} ${datosPersonales.segundoNombre} ${datosPersonales.primerApellido} ${datosPersonales.segundoApellido}`.replace(
    regexMultipleSpaces,
    ' '
  );
  const nombrePersonaMoral = `${obligadoSolidario.razonSocial} ${obligadoSolidario.tipoSociedad}`;

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

  const formulario = useFormik({
    initialValues: {
      controladosFisicosComoMoral: obligadoSolidario.controladosFisicosComoMoral,
      tieneControladosFisicosComoMoral: obligadoSolidario.tieneControladosFisicosComoMoral,
      cantidadControladosFisicosComoMoral: obligadoSolidario.cantidadControladosFisicosComoMoral,
      controladosFisicosComoFisico: obligadoSolidario.controladosFisicosComoFisico,
      tieneControladosFisicosComoFisico: obligadoSolidario.tieneControladosFisicosComoFisico,
      cantidadControladosFisicosComoFisico: obligadoSolidario.cantidadControladosFisicosComoFisico,
    },
    validationSchema: Yup.object().shape({
      controladosFisicosComoMoral: Yup.array().of(subformValidationSchema),
      tieneControladosFisicosComoMoral: Yup.string().required(campoRequerido),
      controladosFisicosComoFisico: Yup.array().of(subformValidationSchema),
      tieneControladosFisicosComoFisico: Yup.string().required(campoRequerido),
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

  const [handleSubmit] = useOnChangePage(formulario, PASO_SIETE_OBLIGADO_SOLIDARIO_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container ">
          <form onSubmit={handleSubmit} noValidate>
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

PasoSeisObligadoSolidarioPM.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoSeisObligadoSolidarioPM;
