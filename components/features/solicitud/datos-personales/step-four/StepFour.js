import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { numeroInvalido, correoInvalido, campoRequerido } from '../../../../../constants/errors';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import EmailageRepositorio from '../../../../../services/solicitud/emailage.repositorio';
import { PASO_CINCO_DATOS_PERSONA_ROUTE } from '../../../../../constants/routes/solicitud/persona';

const StepFour = () => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const validate = currentStep.step === query.step;

  const formulario = useFormik({
    initialValues: {
      celular: datosPersonales.celular,
      correo: datosPersonales.correo,
    },
    validationSchema: Yup.object({
      celular: Yup.string().trim().min(12, numeroInvalido).max(12, numeroInvalido).required(campoRequerido),
      correo: Yup.string().trim().email(correoInvalido).required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { ...currentStep, step: '5' },
          datosPersonales: { ...datosPersonales, ...values },
        })
      );
    },
  });

  const validateEmail = async () => {
    if (!formulario.errors.correo) {
      const emailScore = await EmailageRepositorio.postEmailScore(formulario.values.correo)
        .then((resp) => resp.data.fraudRisk.split(' ')[0])
        .catch(() => 801);
      if (emailScore >= 800) {
        formulario.setFieldError('correo', 'El correo no existente, favor de corregirlo.');
        return false;
      }
    }
    return true;
  };

  const [handleSubmit] = useOnChangePage(formulario, PASO_CINCO_DATOS_PERSONA_ROUTE, currentStep, validateEmail);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
            <h2 className="color-blue-storm">¡Perfecto, {datosPersonales.primerNombre}!</h2>
            <p className="color-dark-gray sub position-relative">
              <span>Ahora, ¿cuál es tu número de teléfono celular y correo electrónico?</span>
              <Tooltip
                message="Nos servirá para llamarte o enviarte mensajes de texto para dar seguimiento a tu solicitud del crédito."
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
                <TextField
                  name="celular"
                  formulario={formulario}
                  type="tel"
                  size="big"
                  label="55-9999-9999"
                  format="phone"
                  maxlength={12}
                />
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
                  format="email"
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

export default StepFour;
