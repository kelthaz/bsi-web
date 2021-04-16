import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Tab from '../../../shared/tab/Tab';
import TabItem from '../../../shared/tab/TabItem';
import {
  campoRequerido,
  captcha,
  longitudMaxima,
  longitudMinima,
  rfcContrasenaInvalida,
} from '../../../../constants/errors';
import TextField from '../../../shared/text-field/TextField';
import Captcha from '../../../shared/captcha/Captcha';
import LoginRepositorio from '../../../../services/login/login.repositorio';
import CheckBox from '../../../shared/check-box/CheckBox';
import { OLVIDO_CONTRASENA } from '../../../../constants/routes/login/login';

const IniciarSesion = () => {
  const { push } = useRouter();
  const formulario = useFormik({
    initialValues: {
      rfc: '',
      contrasena: '',
      check: '',
      mantenerSesion: false,
    },
    validationSchema: Yup.object({
      rfc: Yup.string().required(campoRequerido),
      contrasena: Yup.string().max(20, longitudMaxima).min(8, longitudMinima).required(campoRequerido),
      check: Yup.string().required(captcha),
      mantenerSesion: Yup.boolean(),
    }),
    onSubmit: async (values) => {
      const valid = await LoginRepositorio.postLogin({
        username: values.rfc,
        password: values.contrasena,
      })
        .then(() => true)
        .catch(() => false);
      if (valid) {
        push('/inicio');
      } else {
        formulario.setFieldError('contrasena', rfcContrasenaInvalida());
      }
    },
  });

  return (
    <>
      <Tab initOption={1}>
        <TabItem
          tab="Portal Bancario"
          keyTab="1"
          onChangeOption={() => window.open('https://www.bancoppel.com/empresas/index.html')}
          blocked
        />
        <TabItem tab="Plataforma Pyme" keyTab="2" />
      </Tab>
      <form onSubmit={formulario.handleSubmit} noValidate className="px-xs-3 px-md-0">
        <h2 className="color-blue-storm text-center pt-3">¡Bienvenido!</h2>
        <p className="body2 color-gray-dark text-center">
          Ingresa tu usuario{' '}
          <span className="color-blue-storm">(RFC en caso de ser cliente o correo en caso de ser obligado)</span> y
          contraseña para ingresar a la plataforma o retomar tu solicitud.
        </p>

        <TextField
          name="rfc"
          format="email"
          maxlength={100}
          type="text"
          size="small"
          label="Usuario"
          {...formulario.getFieldMeta('rfc')}
          {...formulario.getFieldHelpers('rfc')}
        />
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
        <div className="py-3">
          <CheckBox name="mantenerSesion" {...formulario.getFieldProps('mantenerSesion')}>
            <p className="m-0 body3">Mantener sesión iniciada</p>
          </CheckBox>
        </div>
        <Captcha name="check" formulario={formulario} />
        <div className="row d-flex justify-content-center py-3">
          <button type="submit" className="btn-medium" disabled={!(formulario.isValid && formulario.dirty)}>
            Iniciar sesión
          </button>
        </div>
        <div className="row d-flex justify-content-center ">
          <Link href={OLVIDO_CONTRASENA}>
            <button type="button" className="btn-link">
              ¿Olvidaste tu contraseña?
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default IniciarSesion;
