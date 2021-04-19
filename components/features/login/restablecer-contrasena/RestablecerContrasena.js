import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import {
  campoRequerido,
  longitudMaxima,
  longitudMinima,
  lowerUpperCase,
  minOneNumber,
  noConsecutives,
} from '../../../../constants/errors';
import TextField from '../../../shared/text-field/TextField';
import { regexMinOneNumber, regexNoConsecutives, regexUpperAndLowerCase } from '../../../../constants/regex';
import ValidatePassword from '../../../shared/validate-password/ValidatePassword';
import SvgClaveCambiada from '../../../svgs/login/SvgClaveCambiada';
import LoginRepositorio from '../../../../services/login/login.repositorio';

const RestablecerContrasena = () => {
  const [send, setSend] = useState(false);

  const formulario = useFormik({
    initialValues: {
      contrasena: '',
      confirmarContrasena: '',
    },
    validationSchema: Yup.object().shape({
      contrasena: Yup.string()
        .max(20, longitudMaxima)
        .min(8, longitudMinima)
        .matches(regexUpperAndLowerCase, lowerUpperCase)
        .matches(regexNoConsecutives, noConsecutives)
        .matches(regexMinOneNumber, minOneNumber)
        .required(campoRequerido),

      confirmarContrasena: Yup.string()
        .max(20, longitudMaxima)
        .oneOf([Yup.ref('contrasena'), null], 'Las contraseñas deben coincidir')
        .required(campoRequerido),
    }),
    onSubmit: async (values) => {
      const seRestablecio = await LoginRepositorio.pathCambiarPassword(values.contrasena)
        .then(() => true)
        .catch(() => false);
      setSend(seRestablecio);
    },
  });

  return (
    <>
      {send ? (
        <div className="d-flex h-100 flex-column justify-content-between">
          <div className="d-flex h-100 flex-column justify-content-center">
            <div className="row d-flex justify-content-center py-3">
              <SvgClaveCambiada />
            </div>

            <h3 className="color-blue-storm text-center pt-3">¡Ya puedes entrar!</h3>
            <p className="body2 color-gray-dark text-center">
              Tu contraseña se restableció con éxito. <br className="only-lg-inline" /> Una confirmación fue enviada a
              tu correo.
            </p>
          </div>
          <div className="row d-flex justify-content-center py-3">
            <Link href="/login/[option]" as="/login/iniciar-sesion">
              <button type="submit" className="btn-medium">
                Iniciar sesión
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <form
          className="d-flex h-100 flex-column justify-content-between"
          onSubmit={formulario.handleSubmit}
          noValidate
        >
          <div>
            <h2 className="color-blue-storm text-center pt-3">
              Restablecer <br /> contraseña
            </h2>
            <p className="body2 color-gray-dark text-center">Ingresa tu nueva contraseña.</p>

            <TextField
              name="contrasena"
              paste={false}
              format="passwordspace"
              maxlength={20}
              type="password"
              size="small"
              label="Contraseña"
              {...formulario.getFieldMeta('contrasena')}
              {...formulario.getFieldHelpers('contrasena')}
            />

            <div className="py-2">
              <ValidatePassword formulario={formulario} field="contrasena" showAlways />
            </div>

            <TextField
              name="confirmarContrasena"
              format="passwordspace"
              paste={false}
              maxlength={20}
              type="password"
              size="small"
              label="Contraseña"
              {...formulario.getFieldMeta('confirmarContrasena')}
              {...formulario.getFieldHelpers('confirmarContrasena')}
            />
          </div>

          <div className="row d-flex justify-content-center py-3">
            <button type="submit" className="btn-medium">
              Guardar
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default RestablecerContrasena;
