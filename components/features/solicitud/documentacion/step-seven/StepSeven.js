import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import CheckBox from '../../../../shared/check-box/CheckBox';
import TextField from '../../../../shared/text-field/TextField';
import { campoRequerido } from '../../../../../constants/errors';

const StepSeven = () => {
  const { datosPersonales: tipoPersona, documentacion } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    initialValues: {
      procedenciaPagoCreditoSeleccionados: documentacion.procedenciaPagoCreditoSeleccionados,
      recursoPago: documentacion.procedenciaPagoCreditoSeleccionados.find(({ label }) => label === 'Otros, especifique')
        ? documentacion.procedenciaPagoCreditoSeleccionados.find(({ label }) => label === 'Otros, especifique').value
        : '',
    },
    validationSchema: Yup.object().shape({
      recursoPago: Yup.string().when('procedenciaPagoCreditoSeleccionados', {
        is: (seleccionados) => seleccionados.find(({ label }) => label === 'Otros, especifique'),
        then: Yup.string().required(campoRequerido),
        otherwise: Yup.string().notRequired(),
      }),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: '9' },
          documentacion: { ...documentacion, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/10');
    },
  });

  const opcionesProcedenciaPagoCredito = [
    { value: 'Ahorros', label: 'Ahorros' },
    { value: 'Negocio propio', label: 'Negocio propio' },
    { value: 'Venta de negocios o propiedades', label: 'Venta de negocios o propiedades' },
    { value: 'Créditos', label: 'Créditos' },
    { value: 'Recursos de terceros', label: 'Recursos de terceros' },
    { value: formulario.values.recursoPago, label: 'Otros, especifique' },
  ];

  useEffect(() => {
    if (tipoPersona.value !== 'MORAL') {
      router.replace('/inicio');
    }
  }, []);

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud ">
          <div className="container pl-md-3 pl-xs-0">
            <form className="mt-xs-5 mt-md-0 mt-lg-0" onSubmit={formulario.handleSubmit} noValidate>
              <div className="row ">
                <p className="color-dark-gray sub">
                  ¿Cuál será la procedencia de los recursos para pagar el crédito? Puedes seleccionar más de una opción:
                </p>
              </div>
              <div className="row ">
                {opcionesProcedenciaPagoCredito.map(({ value, label }) => (
                  <div key={label} className="pt-3 col-md-12 px-0">
                    <CheckBox name="ahorro" formulario={formulario} value={value}>
                      <p className="ml-1">{label}</p>
                    </CheckBox>
                  </div>
                ))}
                <div className="col-md-7 pl-0">
                  <TextField
                    name="recursoPago"
                    formulario={formulario}
                    type="text"
                    size="small"
                    label="Recurso de pago"
                    maxlength={50}
                  />
                </div>
              </div>
              <div className="flex-column-center-config">
                <button type="submit" className="cicle-button-blue my-3" aria-label="Avanzar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepSeven;
