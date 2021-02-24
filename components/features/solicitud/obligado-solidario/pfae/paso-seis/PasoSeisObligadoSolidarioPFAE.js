import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
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
import { nextStepObligadoSolidario } from '../../../../../../redux/actions/obligado';
import { PASO_SIETE_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';

const PasoSeisObligadoSolidarioPFAE = () => {
  const { pfae, currentStep } = useSelector((state) => state.obligado);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const validate = currentStep.step === query.step;

  const subformValidationSchema = Yup.object().shape({
    nombreNegocio: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    rfc: Yup.string().trim().matches(regexRFCMoral, rfcInvalido).min(12, longitudMinima).required(campoRequerido),
    porcentajeDirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
    porcentajeIndirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
  });

  const formulario = useFormik({
    initialValues: {
      controladosMoralesComoFisico: pfae.controladosMoralesComoFisico,
      tieneControladosMoralesComoFisico: pfae.tieneControladosMoralesComoFisico,
      cantidadControladosMoralesComoFisico: pfae.cantidadControladosMoralesComoFisico,
    },
    validationSchema: Yup.object().shape({
      controladosMoralesComoFisico: Yup.array().of(subformValidationSchema),
      tieneControladosMoralesComoFisico: Yup.string().required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepObligadoSolidario({
          currentStep: validate ? { tab: 'preguntas', step: '7' } : { ...currentStep },
          pfae: { ...pfae, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_SIETE_OBLIGADO_SOLIDARIO_ROUTE, currentStep);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container ">
          <form onSubmit={handleSubmit} noValidate>
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

export default PasoSeisObligadoSolidarioPFAE;