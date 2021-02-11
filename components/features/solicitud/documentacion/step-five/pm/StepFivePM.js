import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import CheckBox from '../../../../../shared/check-box/CheckBox';
import TextField from '../../../../../shared/text-field/TextField';
import { campoRequerido } from '../../../../../../constants/errors';

const StepFivePFAE = () => {
  const { documentacion } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    initialValues: {
      usosCuentaSeleccionados: documentacion.usosCuentaSeleccionados,
      usoCuenta: documentacion.usosCuentaSeleccionados.find(({ label }) => label === 'Otros, especifique')
        ? documentacion.usosCuentaSeleccionados.find(({ label }) => label === 'Otros, especifique').value
        : '',
    },
    validationSchema: Yup.object().shape({
      usoCuenta: Yup.string().when('usosCuentaSeleccionados', {
        is: (seleccionados) => seleccionados.find(({ label }) => label === 'Otros, especifique'),
        then: Yup.string().required(campoRequerido),
        otherwise: Yup.string().notRequired(),
      }),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: '7' },
          documentacion: { ...documentacion, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/8');
    },
  });

  const opcionesUsoCuenta = [
    { value: 'Concentración / Disperción de fondos', label: 'Concentración / Disperción de fondos' },
    { value: 'Compra venta de divisas', label: 'Compra venta de divisas' },
    { value: 'Administración de gastos / Ingresos', label: 'Administración de gastos / Ingresos' },
    { value: 'Pago de nómina', label: 'Pago de nómina' },
    { value: 'Cuenta eje', label: 'Cuenta eje' },
    { value: 'Pago de crédito', label: 'Pago de crédito' },
    { value: 'Pago relacionado', label: 'Pago relacionado' },
    { value: 'Pago de comisiones', label: 'Pago de comisiones' },
    { value: 'Giros y/o transferencias al extranjero', label: 'Giros y/o transferencias al extranjero' },
    { value: 'Pago de proveedores', label: 'Pago de proveedores' },
    { value: formulario.values.usoCuenta, label: 'Otros, especifique' },
  ];

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container pl-md-3 pl-xs-0">
          <form className="mt-xs-5 mt-md-0 mt-lg-0" onSubmit={formulario.handleSubmit} noValidate>
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
            <div className="row px-md-3 px-xs-0">
              {opcionesUsoCuenta.map(({ value, label }) => (
                <div key={label} className="pt-3 col-md-6 px-0">
                  <CheckBox name="concentracion" formulario={formulario} value={value}>
                    <p className="body2 ml-1">{label}</p>
                  </CheckBox>
                </div>
              ))}
              <div className="col-md-7 pl-0">
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
                disabled={!(formulario.dirty && formulario.isValid)}
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
export default StepFivePFAE;
