import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { numeroInvalido, correoInvalido, campoRequerido } from '../../../../../constants/errors';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import Tooltip from '../../../../shared/tooltip/Tooltip';

const StepFour = () => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    initialValues: {
      celular: datosPersonales.phone,
      correo: datosPersonales.correo,
    },
    validationSchema: Yup.object({
      celular: Yup.string().trim().min(10, numeroInvalido).max(10, numeroInvalido).required(campoRequerido),
      correo: Yup.string().trim().email(correoInvalido).required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { ...currentStep, step: '5' },
          datosPersonales: { ...datosPersonales, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-personales/5');
    },
    validateOnMount: true,
  });

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <h2 className="color-blue-storm">¡Perfecto, {datosPersonales.name}!</h2>
            <p className="color-dark-gray sub">
              <span>Ahora, ¿cuál es tu número de teléfono celular y correo electrónico? </span>
              <Tooltip
                message="Nos servirá para llamarte o enviarte mensajes de texto paradar seguimiento a tu solicitud del crédito."
                position="bottom"
              />
            </p>
            <div className="row no-gutters">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <p className="input color-gray">
                  <span>Mi número es</span>
                </p>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                <TextField name="celular" formulario={formulario} type="number" size="big" label="55-9999-9999" />
              </div>
            </div>

            <div className="row no-gutters">
              <div className="col-12">
                <p className="input color-gray">y mi correo electrónico es</p>
              </div>
            </div>

            <div className="row no-gutters">
              <div className="col-12">
                <TextField
                  maxlength={100}
                  name="correo"
                  formulario={formulario}
                  type="email"
                  size="big"
                  label="ejemplo@mail.com"
                />
              </div>
            </div>

            <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
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
  );
};

export default StepFour;
