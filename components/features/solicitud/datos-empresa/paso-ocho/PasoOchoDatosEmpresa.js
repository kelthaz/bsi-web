import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import TextField from '../../../../shared/text-field/TextField';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import SvgPrivacidad from '../../../../svgs/SvgPrivacidad';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';
import { campoRequerido, aceptarTerminos, ciecInvalida } from '../../../../../constants/errors';
import ModalAutorizacionCiec from '../../../../core/modals/solicitud/modal-autorizacion-ciec/ModalAutorizacionCiec';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import CiecRepositorio from '../../../../../services/solicitud/ciec.repositorio';
import { CONTRATO_LEGALEX_DATOS_EMPRESA_ROUTE } from '../../../../../constants/routes/solicitud/empresa';
import { MORAL } from '../../../../../constants/persona';

const PasoOchoDatosEmpresa = ({ validate }) => {
  const [openWhyCiec, setOpenWhyCiec] = useState(false);
  const { currentStep, datosPersonales, datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const { initialValues, validationSchema } = {
    initialValues: {
      ciec: datosEmpresa.ciec,
      autorizoTerminosCiec: datosEmpresa.autorizoTerminosCiec,
    },
    validationSchema: Yup.object({
      ciec: Yup.string().required(campoRequerido),
      autorizoTerminosCiec: Yup.boolean().nullable().oneOf([true], aceptarTerminos),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          datosEmpresa: {
            ...datosEmpresa,
            ...values,
          },
        })
      );
    },
  });

  const validateCiec = async () => {
    let valid = true;

    if (!formulario.errors.ciec) {
      valid = await CiecRepositorio.pathValidarCiec({
        ciec: datosEmpresa.ciec,
        rfc: datosPersonales.rfc,
      })
        .then(() => true)
        .catch(() => {
          formulario.setFieldError('ciec', ciecInvalida());
          return false;
        });
    }
    return valid;
  };

  const [handleSubmit] = useOnChangePage(formulario, CONTRATO_LEGALEX_DATOS_EMPRESA_ROUTE, validate, validateCiec);

  return (
    <>
      <ModalAutorizacionCiec openModal={openWhyCiec} setOpenModal={setOpenWhyCiec} />
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud">
          <div className="container p-0">
            <form onSubmit={handleSubmit} noValidate>
              <p className="color-dark-gray sub ">
                {datosPersonales.tipoPersona === MORAL
                  ? 'Primero necesitamos que nos autorices acceso de lectura con la clave CIEC de la empresa. '
                  : 'Primero necesitamos que nos autorices acceso con tu clave CIEC. '}

                <button type="button" className="btn-link sub" onClick={() => setOpenWhyCiec(true)}>
                  ¿Por qué te pedimos esto?
                </button>
              </p>

              <div className="row no-gutters">
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                  <p className="input color-gray">Mi CIEC es</p>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 ">
                  <TextField
                    name="ciec"
                    format="passwordspace"
                    maxlength={80}
                    type="password"
                    size="big"
                    label="**********"
                    {...formulario.getFieldMeta('ciec')}
                    {...formulario.getFieldHelpers('ciec')}
                  />
                </div>
              </div>
              <div className="card-simple">
                <div className="row no-gutters">
                  <div className="col-1">
                    <SvgPrivacidad />
                  </div>
                  <p className="col-11 body2">
                    Tus datos estarán protegidos.
                    <br />
                    Cualquier duda te invitamos a conocer más sobre tu CIEC en la página oficial del SAT haciendo{' '}
                    <a
                      className="sub link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://aplicaciones.sat.gob.mx/PTSC/ADC/resources/pages/operaciones/generarContrasena/ingresarRfc.xhtml"
                    >
                      clic aquí
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="card-simple-gray">
                  <CheckTextBox name="autorizoTerminosCiec" formulario={formulario}>
                    <p className=" color-gray mb-0">
                      {'Acepto '}
                      <a className="sub link" target="_blank" rel="noreferrer">
                        términos y condiciones
                      </a>
                      {datosPersonales.tipoPersona === MORAL
                        ? ' de BanCoppel, en específico el uso de la CIEC de mi empresa para manifestar mi voluntad por medios electrónicos.'
                        : ' de BanCoppel, en específico el uso de mi CIEC para manifestar mi voluntad por medios electrónicos.'}
                    </p>
                  </CheckTextBox>
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
    </>
  );
};

PasoOchoDatosEmpresa.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoOchoDatosEmpresa;
