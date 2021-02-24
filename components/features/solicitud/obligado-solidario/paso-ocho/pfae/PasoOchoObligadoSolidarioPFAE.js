import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { regexRFCFisica } from '../../../../../../constants/regex';
import {
  campoRequerido,
  longitudMaxima,
  longitudMinima,
  seleccionOpcion,
  rfcInvalido,
} from '../../../../../../constants/errors';
import EjerceControlSobreFisico from '../../../shared/ejerce-control-sobre-fisico/EjerceControlSobreFisico';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { PASO_NUEVE_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';
import { nextStepObligadoSolidario } from '../../../../../../redux/actions/obligado';

const PasoOchoObligadoSolidarioPFAE = ({ validate }) => {
  const { currentStep, obligadoSolidario } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

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
      controladosFisicosComoFisico: obligadoSolidario.controladosFisicosComoFisico,
      tieneControladosFisicosComoFisico: obligadoSolidario.tieneControladosFisicosComoFisico,
      cantidadControladosFisicosComoFisico: obligadoSolidario.cantidadControladosFisicosComoFisico,
    },
    validationSchema: Yup.object().shape({
      controladosFisicosComoFisico: Yup.array().of(subformValidationSchema),
      tieneControladosFisicosComoFisico: Yup.string().required(campoRequerido),
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

  const [handleSubmit] = useOnChangePage(formulario, PASO_NUEVE_OBLIGADO_SOLIDARIO_ROUTE, currentStep);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container ">
          <form onSubmit={handleSubmit} noValidate>
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

PasoOchoObligadoSolidarioPFAE.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoOchoObligadoSolidarioPFAE;
