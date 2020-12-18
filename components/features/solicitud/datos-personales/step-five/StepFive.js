import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import ValidatePassword from '../../../../shared/validate-password/ValidatePassword';
import {
  regexUpperAndLowerCase,
  regexNoConsecutives,
  regexMinOneNumber,
  regexRFCFisica,
  regexRFCMoral,
} from '../../../../../constants/regex';
import {
  longitudMaxima,
  campoRequerido,
  longitudMinima,
  lowerUpperCase,
  noConsecutives,
  minOneNumber,
  aceptarTerminos,
  rfcInvalido,
} from '../../../../../constants/errors';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';

const StepFive = () => {
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues, validationSchema } = {
    initialValues: {
      rfc: datosPersonales.rfc,
      contrasena: datosPersonales.contrasena,
      confirmarContrasena: datosPersonales.confirmarContrasena,
      aceptoTerminos: datosPersonales.aceptoTerminos,
    },
    validationSchema: Yup.object({
      rfc: Yup.string()
        .trim()
        .matches(datosPersonales.tipoPersona === 'Persona Moral' ? regexRFCMoral : regexRFCFisica, rfcInvalido)
        .min(datosPersonales.tipoPersona === 'Persona Moral' ? 12 : 13, longitudMinima)
        .required(campoRequerido),
      contrasena: Yup.string()
        .trim()
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

      aceptoTerminos: Yup.boolean().oneOf([true], aceptarTerminos),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          datosPersonales: {
            ...datosPersonales,
            ...values,
            validSteps: ['agradecimiento'],
            currentStep: 'agradecimiento',
          },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-personales/agradecimiento');
    },
  });

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <h2 className="color-blue-storm">¡Sólo falta crear tu cuenta!</h2>
            {datosPersonales.tipoPersona === 'Persona Moral' ? (
              <p className="color-dark-gray sub">
                Tu usuario será el RFC con el que factura tu empresa y crearás una contraseña. Con tu cuenta podrás
                retomar el proceso en cualquier momento.
              </p>
            ) : (
              <p className="color-dark-gray sub">
                Tu usuario será el RFC con el que facturas y crearás una contraseña. Con tu cuenta podrás retomar el
                proceso en cualquier momento.
              </p>
            )}

            <div className="row no-gutters">
              <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 ">
                {datosPersonales.tipoPersona === 'Persona Moral' ? (
                  <p className="input color-gray">El RFC es</p>
                ) : (
                  <p className="input color-gray">Mi RFC es</p>
                )}
              </div>
              <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                {datosPersonales.tipoPersona === 'Persona Moral' ? (
                  <TextField
                    name="rfc"
                    format="rfcformatter"
                    maxlength={12}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="TLMF160693H17"
                  />
                ) : (
                  <TextField
                    name="rfc"
                    format="rfcformatter"
                    maxlength={13}
                    formulario={formulario}
                    type="text"
                    size="big"
                    label="TLMF160693H17"
                  />
                )}
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 ">
                <p className="input color-gray">Mi contraseña será</p>
              </div>
              <div className="col-lg-5 col-md-5 col-xs-12 pb-sm-3 pb-xs-3">
                <TextField
                  name="contrasena"
                  paste={false}
                  format="passwordspace"
                  maxlength={20}
                  formulario={formulario}
                  type="password"
                  size="big"
                  label="Contraseña"
                />
              </div>

              <div className="col-lg-8 col-md-11 ">
                <ValidatePassword formulario={formulario} field="contrasena" />
              </div>

              <div className="col-lg-5 col-md-6 col-xs-12 ">
                <p className="input color-gray">Confirmo que será</p>
              </div>
              <div className="col-lg-5 col-md-5 col-xs-12 pb-sm-3 pb-xs-3">
                <TextField
                  name="confirmarContrasena"
                  format="passwordspace"
                  paste={false}
                  formulario={formulario}
                  maxlength={20}
                  type="password"
                  size="big"
                  label="Contraseña"
                />
              </div>
            </div>

            <div className="row">
              <CheckTextBox name="aceptoTerminos" formulario={formulario}>
                <p className="m-0">
                  <span>Acepto: (1) los </span>
                  <a className="link" target="_blank" rel="noreferrer">
                    Términos y Condiciones
                  </a>
                  <span>, (2) el </span>
                  <Link href="/aviso-privacidad">
                    <a className="link">Aviso de Privacidad</a>
                  </Link>
                  <span>
                    , (3) tu Solicitud de Crédito y que (4) los productos y/o servicios que ofrece BanCoppel serán
                    promocionados, aceptados y/o modificados a través de medios electrónicos, telefónicos, digitales y/o
                    cualquier otra tecnología.
                  </span>
                </p>
              </CheckTextBox>
            </div>
            <div className="flex-column-center-config my-3 ">
              <button
                className="btn-medium"
                type="submit"
                aria-label="Avanzar"
                disabled={!(formulario.isValid && formulario.dirty)}
              >
                <span>Crea tu contraseña</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default StepFive;
