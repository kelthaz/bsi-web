import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import CheckTextBox from '../../../../../shared/check-text-box/CheckTextBox';
import TextField from '../../../../../shared/text-field/TextField';

const StepNine = () => {
  const { documentacion } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues } = {
    initialValues: {
      ahorro: documentacion.ahorro,
      negocioPropio: documentacion.negocioPropio,
      ventaNegocioPropiedad: documentacion.ventaNegocioPropiedad,
      credito: documentacion.credito,
      recursoTerceros: documentacion.recursoTerceros,
      otros: documentacion.otros,
      usoCuenta: documentacion.usoCuenta,
    },
  };

  const formulario = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: '9' },
          documentacion: { ...documentacion, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/10');
    },
    validateOnMount: true,
  });

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
                <div className="pt-3 col-md-12 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="ahorro" formulario={formulario}>
                    <p className="ml-1">Ahorros</p>
                  </CheckTextBox>
                </div>
                <div className="pt-3 col-md-12 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="negocioPropio" formulario={formulario}>
                    <p className="ml-1 ">Negocio propio</p>
                  </CheckTextBox>
                </div>
                <div className="pt-2 col-md-12 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="ventaNegocioPropiedad" formulario={formulario}>
                    <p className="ml-1 ">Venta de negocios o propiedades</p>
                  </CheckTextBox>
                </div>
                <div className="pt-2 col-md-12 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="creditos" formulario={formulario}>
                    <p className="ml-1 ">Créditos</p>
                  </CheckTextBox>
                </div>
                <div className="pt-2 col-md-12 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="recursoTerceros" formulario={formulario}>
                    <p className="ml-1 ">Recursos de terceros</p>
                  </CheckTextBox>
                </div>
                <div className="pt-2 col-md-4 px-0">
                  <CheckTextBox isGrayColor notBackground={false} name="otros" formulario={formulario}>
                    <p className="ml-1 ">Otros, especifique</p>
                  </CheckTextBox>
                </div>
                <div className="col-md-7 pl-0">
                  <TextField
                    name="usoCuenta"
                    formulario={formulario}
                    type="text"
                    size="small"
                    label="Recurso de pago"
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
export default StepNine;
