import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Tooltip from '../../../../../shared/tooltip/Tooltip';
import { regexRFCMoral } from '../../../../../../constants/regex';
import {
  longitudMaxima,
  campoRequerido,
  longitudMinima,
  rfcInvalido,
  numeroMaximo,
  numeroMinimo,
} from '../../../../../../constants/errors';
import EjerceControlSobreMoral from '../../../shared/ejerce-control-sobre-moral/EjerceControlSobreMoral';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import { PASO_SIETE_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';

const PasoSeisObligadoSolidarioPFAE = ({ validate }) => {
  const { obligadoSolidario, currentStep } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const subformValidationSchema = Yup.object().shape({
    nombreNegocio: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    rfc: Yup.string().trim().matches(regexRFCMoral, rfcInvalido).min(12, longitudMinima).required(campoRequerido),
    porcentajeDirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
    porcentajeIndirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
  });

  const formulario = useFormik({
    initialValues: {
      controladosMoralesComoFisico: obligadoSolidario.controladosMoralesComoFisico,
      tieneControladosMoralesComoFisico: obligadoSolidario.tieneControladosMoralesComoFisico,
      cantidadControladosMoralesComoFisico: obligadoSolidario.cantidadControladosMoralesComoFisico,
    },
    validationSchema: Yup.object().shape({
      controladosMoralesComoFisico: Yup.array().of(subformValidationSchema),
      tieneControladosMoralesComoFisico: Yup.string().required(campoRequerido),
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

PasoSeisObligadoSolidarioPFAE.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoSeisObligadoSolidarioPFAE;
