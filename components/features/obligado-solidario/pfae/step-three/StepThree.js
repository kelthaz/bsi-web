/* eslint-disable complexity */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import { campoRequerido } from '../../../../../constants/errors';
import useCreateFormArray from '../../../../../hooks/useCreateFormArray';

const StepThree = () => {
  const { pfae } = useSelector((state) => state.obligado);
  const dispatch = useDispatch();
  const router = useRouter();

  const subformValidationSchema = Yup.object().shape({
    cuentas: Yup.string().required(campoRequerido),
  });

  const { initialValues, validationSchema } = {
    initialValues: {
      cuentasLiquidas: pfae.cuentasLiquidas,
      cuentasArray: [],
      cuentas: pfae.cuentas,
      cantAcciones: 1,
    },
    validationSchema: Yup.object().shape({
      cuentasLiquidas: Yup.string().required(campoRequerido),
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
          pfae: {
            ...pfae,
            ...values,
          },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/4');
    },
  });

  useCreateFormArray(
    formulario,
    formulario.values.cuentasLiquidas === 'si',
    [formulario.values.cuentasLiquidas, formulario.values.cantAcciones],
    {
      cuentas: '',
    },
    'cuentasArray',
    'cantAcciones'
  );

  const formControlados = (nameControlador) =>
    formulario.values[nameControlador].map((value, index) => (
      <div key={value}>
        <div className="row no-gutters mt-3">
          <p className="color-dark-gray sub">¿Tienes cuentas con depósitos e inversiones líquidas?</p>
          <div className="col-md-7 col-xs-12">
            <TextField
              name={`${nameControlador}[${index}].cuentas`}
              maxlength={11}
              formulario={formulario}
              type="text"
              size="big"
              label="$.00"
              format="money"
            />
          </div>
        </div>
      </div>
    ));
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
              {formControlados('cuentasArray')}
              <div className="flex-column-center-config">
                <button
                  type="submit"
                  className="cicle-button-blue my-3"
                  aria-label="Avanzar"
                  disabled={!formulario.isValid}
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
