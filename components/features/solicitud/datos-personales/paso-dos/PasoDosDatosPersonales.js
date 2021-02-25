import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { seleccionOpcion } from '../../../../../constants/errors';
import { PASO_TRES_DATOS_PERSONA_ROUTE } from '../../../../../constants/routes/solicitud/persona';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import SvgPersonaFisicaActividadFisica from '../../../../svgs/SvgPersonaFisicaActividadFisica';
import SvgPersonaMoral from '../../../../svgs/SvgPersonaMoral';
import { FISICA, MORAL } from '../../../../../constants/persona';

const PasoDosDatosPersonales = ({ validate }) => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      tipoPersona: datosPersonales.tipoPersona,
    },
    validationSchema: Yup.object().shape({
      tipoPersona: Yup.string().required(seleccionOpcion),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          datosPersonales: {
            ...datosPersonales,
            ...values,
          },
        })
      );
    },
  });

  const { values, setFieldTouched, setFieldValue, touched } = formulario;

  const handleTipoPersona = async (tipoPersona) => {
    await setFieldValue('tipoPersona', tipoPersona);
    if (!touched.tipoPersona) {
      await setFieldTouched('tipoPersona', true);
    }
  };

  const [handleSubmit] = useOnChangePage(formulario, PASO_TRES_DATOS_PERSONA_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
            <h2 className="color-blue-storm text-overflow">¡Hola, {datosPersonales.primerNombre}!</h2>
            <p className="color-dark-gray sub">Conozcámonos un poco más, ¿Qué tipo de persona eres?</p>

            <div className="row my-3">
              <div className="col-lg-6 col-md-6 col-sm-12 pl-lg-5 pl-md-5 col-xs-12 mb-sm-2 mb-xs-2">
                <button
                  type="button"
                  className={`card-simple-white-svg card-button ${
                    values.tipoPersona === FISICA && 'card-selected-blue-sky'
                  }`}
                  onClick={() => handleTipoPersona(FISICA)}
                >
                  <div>
                    <SvgPersonaFisicaActividadFisica />
                  </div>
                  <p className="px-md-5 px-lg-5">Persona Física con Actividad Empresarial</p>
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-5 pr-md-5">
                <button
                  type="button"
                  className={`card-simple-white-svg card-button ${
                    values.tipoPersona === MORAL && 'card-selected-blue-sky'
                  }`}
                  onClick={() => handleTipoPersona(MORAL)}
                >
                  <div>
                    <SvgPersonaMoral />
                  </div>

                  <p>Persona Moral</p>
                </button>
              </div>
            </div>
            <p className="color-gray-dark sub">
              <span>¿Eres persona física? ¡Adquiere tu crédito en </span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.bancoppel.com/ahorro_bcopp/cuenta_efectiva.html"
                className="link"
              >
                BanCoppel Personas!
              </a>
            </p>
            <div className="flex-column-center-config">
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

PasoDosDatosPersonales.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoDosDatosPersonales;
