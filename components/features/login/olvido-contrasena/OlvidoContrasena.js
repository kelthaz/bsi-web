import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { campoRequerido, correoInvalido } from '../../../../constants/errors';
import TextField from '../../../shared/text-field/TextField';
import SvgEnviarCorreo from '../../../svgs/login/SvgEnviarCorreo';
import SvCorreoEnviado from '../../../svgs/login/SvCorreoEnviado';

const OlvidoContrasena = () => {
  const [send, setSend] = useState(false);

  const formulario = useFormik({
    initialValues: {
      correo: '',
    },
    validationSchema: Yup.object({
      correo: Yup.string().trim().email(correoInvalido).required(campoRequerido),
    }),
    onSubmit: () => {
      setSend(true);
    },
  });

  return (
    <>
      {send ? (
        <div className="d-flex h-100 flex-column justify-content-between">
          <div className="d-flex h-100 flex-column justify-content-center">
            <div className="row d-flex justify-content-center py-3">
              <SvCorreoEnviado />
            </div>

            <h3 className="color-blue-storm text-center pt-3">¡Correo enviado!</h3>
            <p className="body2 color-gray-dark text-center">
              Revisa tu correo
              <span className="color-blue-storm"> {formulario.values.correo}</span> y sigue las instrucciones para
              restablecer tu contraseña.
            </p>
          </div>
          <div className="row d-flex justify-content-center py-3">
            <button type="submit" className="btn-medium">
              Reenviar correo
            </button>
          </div>
        </div>
      ) : (
        <form
          className="d-flex h-100 flex-column justify-content-between"
          onSubmit={formulario.handleSubmit}
          noValidate
        >
          <div>
            <div className="row d-flex justify-content-center py-3">
              <SvgEnviarCorreo />
            </div>

            <h3 className="color-blue-storm text-center pt-3">¿No puedes entrar?</h3>
            <p className="body2 color-gray-dark text-center">
              Ingresa tu correo que usaste en el registro del Crédito Digital Pymes, donde se enviarán las instrucciones
              para restablecer tu contraseña.
            </p>

            <TextField
              name="correo"
              format="email"
              maxlength={100}
              formulario={formulario}
              type="email"
              size="small"
              label="Correo"
            />
          </div>

          <div className="row d-flex justify-content-center py-3">
            <button type="submit" className="btn-medium">
              Enviar
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default OlvidoContrasena;
