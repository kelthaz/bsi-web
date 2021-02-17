import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import { campoRequerido, longitudMaxima, longitudMinima } from '../../../../../constants/errors';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { PASO_SIETE_DATOS_EMPRESA_ROUTE } from '../../../../../constants/routes/solicitud/empresa';

const StepSix = () => {
  const { currentStep, datosEmpresa, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const validate = currentStep.step === query.step;

  const { initialValues, validationSchema } = {
    initialValues: {
      curp: datosEmpresa.curp,
    },
    validationSchema: Yup.object({
      curp: Yup.string().max(18, longitudMaxima).min(18, longitudMinima).required(campoRequerido),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate ? { tab: 'datos-empresa', step: '7' } : { ...currentStep },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_SIETE_DATOS_EMPRESA_ROUTE, currentStep);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud ">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
            <p className="color-dark-gray sub position-relative">
              {datosPersonales.tipoPersona.value === 'MORAL'
                ? 'Ahora dinos, ¿cuál es el CURP del Representante Legal'
                : 'Ahora dinos, ¿Cuál es tu CURP?'}
              <Tooltip message="Es la Clave Única de Registro de Población (CURP) que consta de 18 caracteres. " />
            </p>

            <div className="row no-gutters">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                <p className="input color-gray">Mi CURP es </p>
              </div>
              <div className="col-lg-7 col-md-7 col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                <TextField
                  name="curp"
                  format="rfcformatter"
                  maxlength={18}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="TLMF160693H17"
                />
              </div>
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
export default StepSix;
