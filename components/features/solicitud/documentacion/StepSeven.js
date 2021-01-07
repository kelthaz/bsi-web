import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../redux/actions/solicitud';
import CheckTextBox from '../../../shared/check-text-box/CheckTextBox';
import TextField from '../../../shared/text-field/TextField';

const StepSeven = () => {
  const { documentacion } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues } = {
    initialValues: {
      concentracion: documentacion.concentracion,
      compraDivisas: documentacion.compraDivisas,
      administracionGastos: documentacion.administracionGastos,
      pagoNomina: documentacion.pagoNomina,
      cuentaEje: documentacion.cuentaEje,
      pagoCredito: documentacion.pagoCredito,
      pagoRelacionado: documentacion.pagoRelacionado,
      pagoComisiones: documentacion.pagoComisiones,
      giros: documentacion.giros,
      pagoProveedores: documentacion.pagoProveedores,
      otros: documentacion.otros,
      usoCuenta: documentacion.usoCuenta,
    },
  };

  const formulario = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: '7' },
          documentacion: { ...documentacion, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/8');
    },
    validateOnMount: true,
  });

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud mw-100">
          <div className="container pl-md-3 pl-xs-0 p-0">
            <form className="mt-xs-5 mt-md-0 mt-lg-0" onSubmit={formulario.handleSubmit} noValidate>
              <div className="row ">
                <h2 className="color-blue-storm">Ahora, sobre tu cuenta...</h2>
                <p>
                  Necesitamos que respondas algunas cosas referente a cómo usarás la cuenta BanCoppel que te
                  aperturaremos:
                </p>
                <p className="color-dark-gray sub">
                  ¿Cuál será el uso que le darás a la cuenta? (Puedes elegir más de una opción)
                </p>
              </div>
              <div className="row ">
                <div className="pt-3 col-md-6 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="concentracion" formulario={formulario}>
                    <p className="ml-1">Concentración / Disperción de fondos</p>
                  </CheckTextBox>
                </div>
                <div className="pt-3 col-md-6 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="compraDivisas" formulario={formulario}>
                    <p className="ml-1 ">Compra venta de divisas</p>
                  </CheckTextBox>
                </div>
                <div className="pt-2 col-md-6 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="administracionGastos" formulario={formulario}>
                    <p className="ml-1 ">Administración de gastos / Ingresos</p>
                  </CheckTextBox>
                </div>
                <div className="pt-2 col-md-6 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="pagoNomina" formulario={formulario}>
                    <p className="ml-1 ">Pago de nómina</p>
                  </CheckTextBox>
                </div>
                <div className="pt-2 col-md-6 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="cuentaEje" formulario={formulario}>
                    <p className="ml-1 ">Cuenta eje</p>
                  </CheckTextBox>
                </div>
                <div className="pt-2 col-md-6 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="pagoCredito" formulario={formulario}>
                    <p className="ml-1 ">Pago de crédito</p>
                  </CheckTextBox>
                </div>
                <div className="pt-2 col-md-6 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="pagoRelacionado" formulario={formulario}>
                    <p className="ml-1 ">Pago relacionado</p>
                  </CheckTextBox>
                </div>
                <div className="pt-2 col-md-6 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="pagoComisiones" formulario={formulario}>
                    <p className="ml-1 ">Pago de comisiones</p>
                  </CheckTextBox>
                </div>
                <div className="pt-2 col-md-6 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="giros" formulario={formulario}>
                    <p className="ml-1 ">Giros y/o transferencias al extranjero</p>
                  </CheckTextBox>
                </div>
                <div className="pt-2 col-md-6 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="pagoProveedores" formulario={formulario}>
                    <p className="ml-1 ">Pago de proveedores</p>
                  </CheckTextBox>
                </div>
                <div className="pt-2 col-md-4 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="otros" formulario={formulario}>
                    <p className="ml-1 ">Otros, especifique</p>
                  </CheckTextBox>
                </div>
                <div className="col-md-7 pl-0">
                  <TextField name="usoCuenta" formulario={formulario} type="text" size="small" label="Uso de cuenta" />
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
