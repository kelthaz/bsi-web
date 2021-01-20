import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import RadioButton from '../../../../shared/radio-button/RadioButton';

const StepNine = () => {
  const { documentacion } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues, validationSchema } = {
    initialValues: {
      actaConstitutiva: documentacion.actaConstitutiva,
      poderNotarial: documentacion.poderNotarial,
      escrituraReforma: documentacion.escrituraReforma,
      comprobanteDomicilioComercial: documentacion.comprobanteDomicilioComercial,
      comprobanteDomicilioFiscal: documentacion.comprobanteDomicilioFiscal,
      ine: documentacion.ine,
      ineReverso: documentacion.ineReverso,
    },
    validationSchema: Yup.object({
      // actaConstitutiva: Yup.string().required(campoRequerido),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'preguntas', step: '10' },
          documentacion: { ...documentacion, ...values },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/10');
    },
    validateOnMount: true,
  });

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud mt-xs-0 mt-md-5">
          <div className="container pl-md-3 pl-xs-0 p-0">
            <form onSubmit={formulario.handleSubmit} noValidate>
              <div className="row pl-3 pb-md-3 pb-xs-1">
                <p className="color-dark-gray sub">
                  Para saber qué documentos solicitarte, necesitamos que nos respondas. ¿Eres casada(o)?
                </p>
              </div>
              <div className="row">
                <div className="col-12">
                  <RadioButton name="bienesSeparados" formulario={formulario} value="siMancomunados">
                    <span className="input color-gray">Sí, por bienes mancomunados</span>
                  </RadioButton>
                </div>
                <div className="col-12 mt-3">
                  <RadioButton name="bienesSeparados" formulario={formulario} value="siSeparados">
                    <span className="input color-gray">Sí, por bienes separados</span>
                  </RadioButton>
                </div>
                <div className="col-12 mt-3">
                  <RadioButton name="bienesSeparados" formulario={formulario} value="no">
                    <span className="input color-gray">No</span>
                  </RadioButton>
                </div>
              </div>
              <div className="flex-column-center-config">
                <button
                  disabled={!formulario.dirty}
                  type="submit"
                  className="cicle-button-blue my-3"
                  aria-label="Avanzar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepNine;
