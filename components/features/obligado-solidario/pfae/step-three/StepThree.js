/* eslint-disable complexity */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import { campoRequerido } from '../../../../../constants/errors';

const StepThree = () => {
  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const [cantCuentas, setCantCuentas] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const subformValidationSchema = Yup.object().shape({
    cuentas: Yup.string().required(campoRequerido),
  });

  const { initialValues, validationSchema } = {
    initialValues: {
      cuentasLiquidas: null,
      cuentasArray: [],
      cuentas: '',
    },
    validationSchema: Yup.object().shape({
      cuentasArray: Yup.array().of(subformValidationSchema),
    }),
  };
  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'preguntas', step: '4' },
          datosEmpresa: {
            ...datosEmpresa,
            ...values,
          },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/4');
    },
  });

  useEffect(() => {
    if (formulario.values.cuentasLiquidas === 'si') {
      setCantCuentas(true);
    } else if (formulario.values.cuentasLiquidas === 'no') {
      setCantCuentas(false);
    }
  }, [formulario.values.cuentasLiquidas]);
  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud ">
          <div className="container p-0">
            <form onSubmit={formulario.handleSubmit} noValidate>
              <p className="color-dark-gray sub">
                ¿Tienes cuentas con depósitos e inversiones líquidas? <Tooltip message="..." />
              </p>
              <div className="row">
                <div className="col-md-2 col-xs-4">
                  <RadioButton name="cuentasLiquidas" formulario={formulario} value="si">
                    <span className="input color-gray">Sí</span>
                  </RadioButton>
                </div>
                <div className="col-md-6 col-xs-4">
                  <RadioButton name="cuentasLiquidas" formulario={formulario} value="no">
                    <span className="input color-gray">No</span>
                  </RadioButton>
                </div>
              </div>
              {cantCuentas ? (
                <div className="row no-gutters mt-3">
                  <p className="color-dark-gray sub">¿Tienes cuentas con depósitos e inversiones líquidas?</p>
                  <div className="col-md-7 col-xs-12">
                    <TextField
                      name="cuentas"
                      maxlength={60}
                      formulario={formulario}
                      type="text"
                      size="big"
                      label="$.00"
                      format="money"
                    />
                  </div>
                </div>
              ) : (
                ''
              )}
              <div className="flex-column-center-config">
                <button
                  type="submit"
                  className="cicle-button-blue my-3"
                  aria-label="Avanzar"
                  disabled={!formulario.dirty}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepThree;
