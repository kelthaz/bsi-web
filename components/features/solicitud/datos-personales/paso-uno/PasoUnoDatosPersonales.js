import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import { longitudMaxima, campoRequerido } from '../../../../../constants/errors';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { PASO_DOS_DATOS_PERSONA_ROUTE } from '../../../../../constants/routes/solicitud/persona';

const PasoUnoDatosPersonales = ({ validate }) => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      primerNombre: datosPersonales.primerNombre,
      segundoNombre: datosPersonales.segundoNombre,
      primerApellido: datosPersonales.primerApellido,
      segundoApellido: datosPersonales.segundoApellido,
    },
    validationSchema: Yup.object().shape({
      primerNombre: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
      segundoNombre: Yup.string().max(60, longitudMaxima),
      primerApellido: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
      segundoApellido: Yup.string().max(60, longitudMaxima),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          datosPersonales: { ...datosPersonales, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_DOS_DATOS_PERSONA_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
            <h2 className="color-blue-storm">Para comenzar</h2>
            <p className="color-dark-gray sub">Cuéntanos, ¿Cómo te llamas?</p>

            <div className="row no-gutters">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                <p className="input color-gray">Mi nombre es</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                <TextField
                  name="primerNombre"
                  format="uppercase"
                  maxlength={60}
                  type="text"
                  size="big"
                  label="Nombre"
                  {...formulario.getFieldMeta('primerNombre')}
                  {...formulario.getFieldHelpers('primerNombre')}
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <TextField
                  name="segundoNombre"
                  format="uppercase"
                  maxlength={60}
                  type="text"
                  size="big"
                  label="Nombre"
                  optional
                  {...formulario.getFieldMeta('segundoNombre')}
                  {...formulario.getFieldHelpers('segundoNombre')}
                />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                <TextField
                  name="primerApellido"
                  format="uppercase"
                  maxlength={60}
                  type="text"
                  size="big"
                  label="Apellido paterno"
                  {...formulario.getFieldMeta('primerApellido')}
                  {...formulario.getFieldHelpers('primerApellido')}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <TextField
                  name="segundoApellido"
                  format="uppercase"
                  maxlength={60}
                  type="text"
                  size="big"
                  label="Apellido materno"
                  {...formulario.getFieldMeta('segundoApellido')}
                  {...formulario.getFieldHelpers('segundoApellido')}
                />
              </div>
            </div>
            <div className="row no-gutters card-simple-blue-light text-md-center ">
              <p>Favor de llenar los campos con los nombres y apellidos presentados en tu Identificación oficial INE</p>
            </div>
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

PasoUnoDatosPersonales.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoUnoDatosPersonales;
