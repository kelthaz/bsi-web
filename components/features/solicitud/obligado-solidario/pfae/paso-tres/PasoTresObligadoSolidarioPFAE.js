/* eslint-disable complexity */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import TextField from '../../../../../shared/text-field/TextField';
import RadioButton from '../../../../../shared/radio-button/RadioButton';
import Tooltip from '../../../../../shared/tooltip/Tooltip';
import { campoRequerido } from '../../../../../../constants/errors';
import { PASO_CUATRO_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { nextStepObligadoSolidario } from '../../../../../../redux/actions/obligado';

const PasoTresObligadoSolidarioPFAE = () => {
  const { pfae, currentStep } = useSelector((state) => state.obligado);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const validate = currentStep.step === query.step;

  const formulario = useFormik({
    initialValues: {
      tieneDepositosEInversiones: pfae.tieneDepositosEInversiones,
      sumaDepositosEInversiones: pfae.sumaDepositosEInversiones,
    },
    validationSchema: Yup.object().shape({
      tieneDepositosEInversiones: Yup.string().required(campoRequerido),
      sumaDepositosEInversiones: Yup.string().when('tieneDepositosEInversiones', {
        is: 'si',
        then: Yup.string().required(campoRequerido),
        otherwise: Yup.string().notRequired(),
      }),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepObligadoSolidario({
          currentStep: validate ? { tab: 'preguntas', step: '4' } : { ...currentStep },
          pfae: { ...pfae, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_CUATRO_OBLIGADO_SOLIDARIO_ROUTE, currentStep);

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud ">
          <div className="container p-0">
            <form onSubmit={handleSubmit} noValidate>
              <p className="color-dark-gray sub">
                ¿Tienes cuentas con depósitos e inversiones líquidas? <Tooltip message="..." />
              </p>
              <div className="row">
                <div className="col-md-2 col-xs-4">
                  <RadioButton name="tieneDepositosEInversiones" formulario={formulario} value="si">
                    <span className="input color-gray">Sí</span>
                  </RadioButton>
                </div>
                <div className="col-md-6 col-xs-4">
                  <RadioButton name="tieneDepositosEInversiones" formulario={formulario} value="no">
                    <span className="input color-gray">No</span>
                  </RadioButton>
                </div>
              </div>
              {formulario.values.tieneDepositosEInversiones === 'si' && (
                <div className="row no-gutters mt-3">
                  <p className="color-dark-gray sub">¿Cual es la suma total de los depósitos e inversiones líquidas?</p>
                  <div className="col-md-7 col-xs-12">
                    <TextField
                      name="sumaDepositosEInversiones"
                      maxlength={11}
                      formulario={formulario}
                      type="phone"
                      size="big"
                      label="$.00"
                      format="money"
                    />
                  </div>
                </div>
              )}
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
    </>
  );
};
export default PasoTresObligadoSolidarioPFAE;