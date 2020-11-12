/* eslint-disable complexity */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import ValidatePassword from '../../../../shared/validate-password/ValidatePassword';
import styles from '../../../../shared/validate-password/validate-password.module.scss';

const StepFive = () => {
  const [resultState, setResulState] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues, validationSchema } =
    datosPersonales.personType === 'Persona Moral'
      ? {
          initialValues: {
            rfc: datosPersonales.rfc,
            contrasena: datosPersonales.contraseña,
            confirmarContraseña: datosPersonales.confirmarContraseña,
          },
          validationSchema: Yup.object({
            rfc: Yup.string().trim().min(12, '12 caracteres mínimo').required('Campo requerido'),
            contrasena: Yup.string()
              .max(20, 'máximo 20 caracteres')
              .min(8, '8 caracteres mínimo')
              .matches(/^((?:.*[A-Z]){1})((?:.*[a-z]){1})/, 'Debe tener mínimo 1 letra mayúscula y 1 minúscula')
              .matches(/^(?!.*(.)\1)/, 'Sin números consecutivos')
              .matches(/\d{1,}/, 'Debe tener mínimo 1 número')
              .required('Campo requerido'),

            confirmarContraseña: Yup.string()
              .max(20, 'máximo 20 caracteres')
              .oneOf([Yup.ref('contrasena'), null], 'Las contraseñas deben coincidir')
              .required('Campo requerido'),
          }),
        }
      : {
          initialValues: {
            rfc: datosPersonales.rfc,
            contrasena: datosPersonales.contraseña,
            confirmarContraseña: datosPersonales.confirmarContraseña,
          },
          validationSchema: Yup.object({
            rfc: Yup.string().trim().min(13, '13 caracteres mínimo').required('Campo requerido'),
            contrasena: Yup.string()
              .max(20, 'máximo 20 caracteres')
              .min(8, '8 caracteres mínimo')
              .matches(/^((?:.*[A-Z]){1})((?:.*[a-z]){1})/, 'Debe tener mínimo 1 letra mayúscula y 1 minúscula')
              .matches(/^(?!.*(.)\1)/, 'Sin números consecutivos')
              .matches(/\d{1,}/, 'Debe tener mínimo 1 número')
              .required('Campo requerido'),

            confirmarContraseña: Yup.string()
              .max(20, 'máximo 20 caracteres')
              .oneOf([Yup.ref('contrasena'), null], 'Las contraseñas deben coincidir')
              .required('Campo requerido'),
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

  const checkedButton = () => {
    if (checked === false) {
      setChecked(true);
      setDisabled(true);
    } else {
      setDisabled(false);
      setChecked(false);
    }
  };
  let validation = {
    hiddenMaxMin: true,
    hiddenCapital: true,
    minNum: true,
    notConsecutives: true,
  };
  const textFieldValidated = (form) => {
    switch (form.errors.contrasena) {
      case '8 caracteres mínimo':
        validation = {
          hiddenMaxMin: !validation.hiddenMaxMin,
          hiddenCapital: false,
          minNum: false,
          notConsecutives: false,
        };
        break;
      case 'Debe tener mínimo 1 letra mayúscula y 1 minúscula':
        validation = {
          hiddenMaxMin: true,
          hiddenCapital: false,
          minNum: false,
          notConsecutives: true,
        };
        break;
      case 'Debe tener mínimo 1 número':
        validation = {
          hiddenMaxMin: true,
          hiddenCapital: true,
          minNum: false,
          notConsecutives: true,
        };
        break;
      case 'Sin números consecutivos' || null:
        validation = {
          hiddenMaxMin: true,
          hiddenCapital: true,
          minNum: true,
          notConsecutives: false,
        };
        break;
      default:
        break;
    }
    if (form.values.contrasena.length > 8 && form.values.contrasena.length < 20) {
      validation.hiddenMaxMin = true;
    }
    if (/^((?:.*[A-Z]){1})((?:.*[a-z]){1})/.test(form.values.contrasena)) {
      validation.hiddenCapital = true;
    }
    if (/^(?!.*(.)\1)/.test(form.values.contrasena)) {
      validation.notConsecutives = true;
    }
    if (/\d{1,}/.test(form.values.contrasena)) {
      validation.minNum = true;
    }
    return validation;
  };

  useEffect(() => {
    if (formulario.values.contrasena && formulario.values.contrasena.length > 0) {
      setResulState(true);
    } else {
      setResulState(false);
    }
  }, [formulario.values.contrasena]);

  return (
    <div className="container px-xs-0">
      <div className="contedor-solicitud ">
        <form onSubmit={formulario.handleSubmit} noValidate>
          <h2 className="color-blue-storm">¡Sólo falta crear tu cuenta!</h2>
          {datosPersonales.personType === 'Persona Moral' ? (
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
              {datosPersonales.personType === 'Persona Moral' ? (
                <p className="input color-gray">El RFC es</p>
              ) : (
                <p className="input color-gray">Mi RFC es</p>
              )}
            </div>
            <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
              {datosPersonales.personType === 'Persona Moral' ? (
                <TextField
                  name="rfc"
                  format="uppercase"
                  maxlength={12}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="TLMF160693H17"
                />
              ) : (
                <TextField
                  name="rfc"
                  format="uppercase"
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
                maxlength={20}
                formulario={formulario}
                type="password"
                size="big"
                label="Contraseña"
              />
            </div>
            {resultState && (
              <div className="col-lg-8 col-md-11 ">
                <ValidatePassword isValidated={textFieldValidated(formulario)} />
              </div>
            )}
            <div className="col-lg-5 col-md-6 col-xs-12 ">
              <p className="input color-gray">Confirmo que será</p>
            </div>
            <div className="col-lg-5 col-md-5 col-xs-12 pb-sm-3 pb-xs-3">
              <TextField
                name="confirmarContraseña"
                formulario={formulario}
                maxlength={20}
                type="password"
                size="big"
                label="Contraseña"
              />
            </div>

            <div className="card-simple-gray">
              <div className="row">
                <span className={` ${styles['content-check']}`}>
                  <input id="my-check" className={` ${styles['my-check']}`} type="checkbox" onClick={checkedButton} />
                  <label htmlFor="my-check" className={`${styles.label}`}>
                    {' '}
                  </label>
                </span>
                <p className="col-11">
                  Acepto: (1) los&nbsp;
                  <a className="btn-link-blue" target="_blank" rel="noreferrer">
                    Términos y Condiciones
                  </a>
                  , (2) el&nbsp;
                  <a className="btn-link-blue">Aviso de Privacidad</a>, (3) tu Solicitud de Crédito y que (4) los
                  productos y/o servicios que ofrece BanCoppel serán promocionados, aceptados y/o modificados a través
                  de medios electrónicos, telefónicos, digitales y/o cualquier otra tecnología.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-column-center-config my-3 ">
            <button
              className="btn-medium"
              type="submit"
              aria-label="Avanzar"
              disabled={!(formulario.isValid && formulario.dirty) || disabled === false}
            >
              <span>Crea tu contraseña</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default StepFive;
