import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import CheckField from '../../../../shared/check-field/CheckField';

const StepFive = () => {
  const [resultState, setResulState] = useState(false);
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();
  const formulario = useFormik({
    initialValues: {
      rfc: datosPersonales.rfc,
      contrasena: datosPersonales.contraseña,
      confirmarContraseña: datosPersonales.confirmarContraseña,
    },
    validationSchema: Yup.object({
      rfc: Yup.string().min(12, '12 caracteres mínimo').required('Campo requerido'),
      contrasena: Yup.string()
        .max(20, 'máximo 20 caracteres')
        .min(8, '8 caracteres mínimo')
        .matches(/^((?:.*[A-Z]){1})((?:.*[a-z]){1})/, 'Debe tener mínimo 1 letra mayúscula y 1 minúscula')
        .required('Campo requerido'),

      confirmarContraseña: Yup.string().max(20, 'máximo 20 caracteres').required('Campo requerido'),
    }),
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
          <p className="color-dark-gray sub">
            Tu usuario será el RFC con el que facturas y crearás una contraseña. Con tu cuenta podrás retomar el proceso
            en cualquier momento.
          </p>

          <div className="row no-gutters">
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 ">
              <p className="input color-gray">Mi RFC es</p>
            </div>
            <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
              <TextField name="rfc" formulario={formulario} type="text" size="big" label="TLMF160693H17" />
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 ">
              <p className="input color-gray">Mi contraseña será</p>
            </div>
            <div className="col-lg-5 col-md-5 col-xs-12 pb-sm-3 pb-xs-3">
              <TextField name="contrasena" formulario={formulario} type="password" size="big" label="Contraseña" />
            </div>
            {resultState && (
              <div className="col-lg-8 col-md-11 ">
                <CheckField formulario={formulario} />
              </div>
            )}
            <div className="col-lg-5 col-md-6 col-xs-12 ">
              <p className="input color-gray">Confirmo que será</p>
            </div>
            <div className="col-lg-5 col-md-5 col-xs-12 pb-sm-3 pb-xs-3">
              <TextField
                name="confirmarContraseña"
                formulario={formulario}
                type="password"
                size="big"
                label="Contraseña"
              />
            </div>

            <div className="card-simple-gray">
              <div className="row">
                <input className="col-1 " type="checkbox" />
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
              disabled={!(formulario.isValid && formulario.dirty)}
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
