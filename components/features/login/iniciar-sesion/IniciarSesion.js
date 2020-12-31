import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Tab from '../../../shared/tab/Tab';
import TabItem from '../../../shared/tab/TabItem';
import { regexRFCFisicaMoral } from '../../../../constants/regex';
import { campoRequerido, captcha, longitudMaxima, longitudMinima, rfcInvalido } from '../../../../constants/errors';
import TextField from '../../../shared/text-field/TextField';
import Captcha from '../../../shared/captcha/Captcha';
import RadioButton from '../../../shared/radio-button/RadioButton';

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
      mantenerSesion: Yup.string().required(campoRequerido),
    }),
    onSubmit: (values) => {
      alert(values);
    },
  });

  return (
    <div className="card-simple-white">
      <Tab>
        <TabItem tab="Portal Bancario" keyTab="1">
          sdf
        </TabItem>
        <TabItem tab="Plataforma Pyme" keyTab="2">
          <form onSubmit={formulario.handleSubmit} noValidate>
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
            <RadioButton name="mantenerSesion" formulario={formulario} value="si">
              Mantener sesión iniciada
            </RadioButton>
            <Captcha name="check" formulario={formulario} />
            <div className="row">
              <button type="submit" className="btn-medium">
                Iniciar sesión
              </button>
            </div>
            <div className="row">
              <button type="button" className="btn-link">
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          </form>
        </TabItem>
      </Tab>
    </div>
  );
};

export default IniciarSesion;
