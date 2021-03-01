import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import CheckBox from '../../../../../shared/check-box/CheckBox';
import TextField from '../../../../../shared/text-field/TextField';
import { campoRequerido } from '../../../../../../constants/errors';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { PASO_SEIS_DOCUMENTACION_ROUTE } from '../../../../../../constants/routes/solicitud/documentacion';

const PasoCincoDocumentacionPM = ({ validate }) => {
  const { currentStep, documentacion } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      usosCuentaSeleccionados: documentacion.usosCuentaSeleccionados.map((uso) =>
        uso.includes('Otros:') ? 'Otros:' : uso
      ),
      usoCuenta: documentacion.usosCuentaSeleccionados.find((uso) => uso.includes('Otros:'))
        ? documentacion.usosCuentaSeleccionados.find((uso) => uso.includes('Otros:')).replace('Otros:', '')
        : '',
    },
    validationSchema: Yup.object().shape({
      usosCuentaSeleccionados: Yup.array().min(1, 'Debe seleccionar al menos 1'),
      usoCuenta: Yup.string().when('usosCuentaSeleccionados', {
        is: (seleccionados) => seleccionados.find((uso) => uso.includes('Otros:')),
        then: Yup.string().required(campoRequerido),
        otherwise: Yup.string().notRequired(),
      }),
    }),
    onSubmit: (values) => {
      const usosCuentaSeleccionados = values.usosCuentaSeleccionados.map((uso) =>
        uso.includes('Otros:') ? `${uso} ${values.usoCuenta}` : uso
      );
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          documentacion: { ...documentacion, ...values, usosCuentaSeleccionados },
        })
      );
    },
  });

  const opcionesUsoCuenta = [
    'Concentración / Disperción de fondos',
    'Compra venta de divisas',
    'Administración de gastos / Ingresos',
    'Pago de nómina',
    'Cuenta eje',
    'Pago de crédito',
    'Pago relacionado',
    'Pago de comisiones',
    'Giros y/o transferencias al extranjero',
    'Pago de proveedores',
  ];

  const [handleSubmit] = useOnChangePage(formulario, PASO_SEIS_DOCUMENTACION_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container pl-md-3 pl-xs-0">
          <form className="mt-xs-5 mt-md-0 mt-lg-0" onSubmit={handleSubmit} noValidate>
            <div className="row px-md-3 px-xs-0">
              <h2 className="color-blue-storm">Ahora, sobre tu cuenta...</h2>
              <p>
                Necesitamos que respondas algunas cosas referente a cómo usarás la cuenta BanCoppel que te
                aperturaremos:
              </p>

              <p className="color-dark-gray sub">
                ¿Cuál será el uso que le darás a la cuenta? (Puedes elegir más de una opción)
              </p>
            </div>
            <div className="row no-gutters">
              {opcionesUsoCuenta.map((value) => (
                <div key={value} className="pt-3 col-md-6 ">
                  <CheckBox name="usosCuentaSeleccionados" formulario={formulario} value={value}>
                    <p className="body2 m-0">{value}</p>
                  </CheckBox>
                </div>
              ))}
            </div>
            <div className="row pt-3 no-gutters">
              <div className="col-md-4 px-0 align-self-center">
                <CheckBox name="usosCuentaSeleccionados" formulario={formulario} value="Otros:">
                  <p className="body2 m-0">Otros, especifique</p>
                </CheckBox>
              </div>
              <div className="col-md-8 pl-0">
                <TextField
                  name="usoCuenta"
                  formulario={formulario}
                  type="text"
                  size="small"
                  label="Uso de cuenta"
                  maxlength={60}
                />
              </div>
            </div>
            <div className="flex-column-center-config">
              <button
                type="submit"
                disabled={validate && !(formulario.isValid && formulario.dirty)}
                className="cicle-button-blue my-3"
                aria-label="Avanzar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

PasoCincoDocumentacionPM.propTypes = {
  validate: PropTypes.bool.isRequired,
};
export default PasoCincoDocumentacionPM;
