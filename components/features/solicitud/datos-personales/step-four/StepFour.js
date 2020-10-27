import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import Tooltip from '../../../../shared/tooltip/Tooltip';

const StepFour = () => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    initialValues: {
      phone: datosPersonales.phone,
      email: datosPersonales.email,
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .min(10, 'Numero invalido')
        .required('Campo requerido')
        .max(10, 'Must be 15 characters or less')
        .required('Campo requerido'),
      email: Yup.string().email('Correo invalido').required('Campo requerido'),
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
  });

  return (
    <div className="container">
      <div className="contedor-solicitud">
        <form onSubmit={formulario.handleSubmit} noValidate>
          <h2 className="color-blue-storm">¡Perfecto, {datosPersonales.name}!</h2>
          <p className="color-dark-gray sub">
            Ahora, ¿cuál es tu número de teléfono celular y correo electrónico?
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
              <TextField name="phone" formulario={formulario} type="number" size="big" label="55-9999-9999" />
            </div>
          </div>

          <div className="row no-gutters">
            <div className="col-12">
              <p className="input color-gray">y mi correo electrónico es</p>
            </div>
          </div>

          <div className="row no-gutters">
            <div className="col-12">
              <TextField name="email" formulario={formulario} type="email" size="big" label="ejemplo@mail.com" />
            </div>
          </div>

          <div className="flex-column-center-config">
            <button
              type="submit"
              className="cicle-button-blue my-3"
              aria-label="Avanzar"
              disabled={!(formulario.isValid && formulario.dirty)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default StepFour;
