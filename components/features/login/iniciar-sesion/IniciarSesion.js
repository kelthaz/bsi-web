import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Tab from '../../../shared/tab/Tab';
import TabItem from '../../../shared/tab/TabItem';
import { regexRFCFisicaMoral } from '../../../../constants/regex';
import { campoRequerido, captcha, longitudMaxima, longitudMinima, rfcInvalido } from '../../../../constants/errors';
import TextField from '../../../shared/text-field/TextField';
import Captcha from '../../../shared/captcha/Captcha';
import CheckTextBox from '../../../shared/check-text-box/CheckTextBox';

const IniciarSesion = () => {
  const formulario = useFormik({
    initialValues: {
      rfc: '',
      contrasena: '',
      check: '',
      mantenerSesion: '',
    },
    validationSchema: Yup.object({
      rfc: Yup.string().matches(regexRFCFisicaMoral, rfcInvalido).min(13, longitudMinima).required(campoRequerido),
      contrasena: Yup.string().max(20, longitudMaxima).min(8, longitudMinima).required(campoRequerido),
      check: Yup.string().required(captcha),
      mantenerSesion: Yup.string(),
    }),
    onSubmit: (values) => {
      alert(values);
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
          Ingresa tu RFC y contraseña para ingresar a la plataforma o retomar tu solicitud.
        </p>

        <TextField
          name="rfc"
          format="rfcformatter"
          maxlength={13}
          formulario={formulario}
          type="text"
          size="small"
          label="RFC"
        />
        <TextField
          name="contrasena"
          paste={false}
          format="passwordspace"
          maxlength={20}
          formulario={formulario}
          type="password"
          size="small"
          label="Contraseña"
        />
        <div className="py-3">
          <CheckTextBox notBackground={false} name="mantenerSesion" formulario={formulario}>
            <p className="ml-1 body3">Mantener sesión iniciada</p>
          </CheckTextBox>
        </div>
        <Captcha name="check" formulario={formulario} />
        <div className="row d-flex justify-content-center py-3">
          <button type="submit" className="btn-medium">
            Iniciar sesión
          </button>
        </div>
        <div className="row d-flex justify-content-center ">
          <Link href="/login/[option]" as="/login/olvide-contrasena">
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
