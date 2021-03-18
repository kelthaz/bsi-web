import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { nextStepDatosPersonales, resetDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import ValidatePassword from '../../../../shared/validate-password/ValidatePassword';
import {
  regexUpperAndLowerCase,
  regexNoConsecutives,
  regexMinOneNumber,
  regexRFCFisica,
  regexRFCMoral,
  regexWordBancoppel,
  regexHyphen,
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
  noPalabraBancoppel,
} from '../../../../../constants/errors';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import LoginRepositorio from '../../../../../services/login/login.repositorio';
import { AGRADECIMIENTO_DATOS_PERSONA_ROUTE } from '../../../../../constants/routes/solicitud/persona';
import { MORAL } from '../../../../../constants/persona';
import { AVISO_ROUTE } from '../../../../../constants/routes/publico/publico';

const PasoCincoDatosPersonales = ({ validate }) => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const { changePage } = useSelector((state) => state.formulario);
  const {
    dataSimulador: { monto, plazo, periodicidad },
  } = useSelector((state) => state.simulador);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      rfc: datosPersonales.rfc,
      contrasena: datosPersonales.contrasena,
      confirmarContrasena: datosPersonales.confirmarContrasena,
      aceptoTerminos: datosPersonales.aceptoTerminos,
    },
    validationSchema: Yup.object().shape({
      rfc: Yup.string()
        .matches(datosPersonales.tipoPersona === MORAL ? regexRFCMoral : regexRFCFisica, rfcInvalido)
        .min(datosPersonales.tipoPersona === MORAL ? 12 : 13, longitudMinima)
        .required(campoRequerido),
      contrasena: Yup.string()
        .max(20, longitudMaxima)
        .min(8, longitudMinima)
        .matches(regexUpperAndLowerCase, lowerUpperCase)
        .matches(regexNoConsecutives, noConsecutives)
        .matches(regexWordBancoppel, noPalabraBancoppel)
        .matches(regexMinOneNumber, minOneNumber)
        .required(campoRequerido),

      confirmarContrasena: Yup.string()
        .max(20, longitudMaxima)
        .oneOf([Yup.ref('contrasena'), null], 'Las contraseñas deben coincidir')
        .required(campoRequerido),

      aceptoTerminos: Yup.boolean().oneOf([true], aceptarTerminos).nullable(),
    }),
    onSubmit: (values) => {
      if (changePage) {
        dispatch(
          nextStepDatosPersonales({
            currentStep: { ...currentStep, lastStep: true },
            datosPersonales: { ...datosPersonales, ...values },
          })
        );
      } else {
        dispatch(resetDatosPersonales());
      }
    },
  });

  useEffect(async () => {
    if (currentStep.lastStep) {
      await formulario.setFieldTouched('rfc', true);
    }
  }, []);

  const validateSaveInfo = async () => {
    if (!changePage) {
      const data = {
        ...datosPersonales,
        celular: datosPersonales.celular.replace(regexHyphen, ''),
        tipoSociedad: datosPersonales.tipoSociedad?.label,
        sector: datosPersonales.sector.value,
        giro: datosPersonales.giro.value,
        rfc: formulario.values.rfc,
        password: formulario.values.contrasena,
        simulador: { monto, plazo: plazo.value, periodicidad: periodicidad.value },
      };
      delete data.aceptoTerminos;
      delete data.contrasena;
      delete data.confirmarContrasena;

      if (datosPersonales.tipoPersona !== MORAL) {
        delete data.tipoSociedad;
        delete data.razonSocial;
      }

      const valid = await LoginRepositorio.postRegistro(data)
        .then(() => true)
        .catch(() => false);
      return valid;
    }
    return true;
  };

  const [handleSubmit] = useOnChangePage(formulario, AGRADECIMIENTO_DATOS_PERSONA_ROUTE, validate, validateSaveInfo);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
            <h2 className="color-blue-storm">¡Sólo falta crear tu cuenta!</h2>
            {datosPersonales.tipoPersona === MORAL ? (
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
                {datosPersonales.tipoPersona === MORAL ? (
                  <p className="input color-gray">El RFC es</p>
                ) : (
                  <p className="input color-gray">Mi RFC es</p>
                )}
              </div>
              <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                <TextField
                  name="rfc"
                  format="rfcformatter"
                  maxlength={datosPersonales.tipoPersona === MORAL ? 12 : 13}
                  type="text"
                  size="big"
                  label="TLMF160693H17"
                  {...formulario.getFieldMeta('rfc')}
                  {...formulario.getFieldHelpers('rfc')}
                />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 ">
                <p className="input color-gray">Mi contraseña será</p>
              </div>
              <div className="col-lg-5 col-md-5 col-xs-12">
                <TextField
                  name="contrasena"
                  paste={false}
                  format="passwordspace"
                  maxlength={20}
                  type="password"
                  size="big"
                  label="Contraseña"
                  {...formulario.getFieldMeta('contrasena')}
                  {...formulario.getFieldHelpers('contrasena')}
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
                  maxlength={20}
                  type="password"
                  size="big"
                  label="Contraseña"
                  {...formulario.getFieldMeta('confirmarContrasena')}
                  {...formulario.getFieldHelpers('confirmarContrasena')}
                />
              </div>
            </div>

            <div className="row no-gutters">
              <CheckTextBox name="aceptoTerminos" formulario={formulario}>
                <p className="m-0">
                  <span>Acepto: (1) los </span>
                  <a className="link" target="_blank" rel="noreferrer">
                    Términos y Condiciones
                  </a>
                  <span>, (2) el </span>
                  <Link href={AVISO_ROUTE}>
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
                disabled={currentStep.lastStep ? !formulario.isValid : !(formulario.isValid && formulario.dirty)}
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

PasoCincoDatosPersonales.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoCincoDatosPersonales;
