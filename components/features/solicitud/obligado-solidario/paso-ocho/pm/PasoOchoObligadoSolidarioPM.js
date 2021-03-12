import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import TextField from '../../../../../shared/text-field/TextField';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';

import SvgPrivacidad from '../../../../../svgs/SvgPrivacidad';
import CheckTextBox from '../../../../../shared/check-text-box/CheckTextBox';

import { campoRequerido, aceptarTerminos } from '../../../../../../constants/errors';
import ModalAutorizacionCiec from '../../../../../core/modals/solicitud/modal-autorizacion-ciec/ModalAutorizacionCiec';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { CONTRATO_LEGALEX_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';

const StepEight = ({ validate }) => {
  const [openWhyCiec, setOpenWhyCiec] = useState(false);
  const { currentStep, obligadoSolidario } = useSelector((state) => state.solicitud);

  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      ciec: obligadoSolidario.ciec,
      autorizoTerminosCiec: obligadoSolidario.autorizoTerminosCiec,
    },
    validationSchema: Yup.object({
      ciec: Yup.string().required(campoRequerido),
      autorizoTerminosCiec: Yup.boolean().nullable().oneOf([true], aceptarTerminos),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          obligadoSolidario: {
            ...obligadoSolidario,
            ...values,
          },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, CONTRATO_LEGALEX_OBLIGADO_SOLIDARIO_ROUTE, validate);

  return (
    <>
      <ModalAutorizacionCiec openModal={openWhyCiec} setOpenModal={setOpenWhyCiec} />
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud">
          <div className="container p-0">
            <form onSubmit={handleSubmit} noValidate>
              <p className="color-dark-gray sub ">
                Primero necesitamos que nos autorices acceso de lectura con la clave CIEC de la empresa.
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
              <div className="row no-gutters">
                <div className="card-simple">
                  <div className="row">
                    <SvgPrivacidad />
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

                <div className="card-simple-gray">
                  <div className="row">
                    <CheckTextBox name="autorizoTerminosCiec" formulario={formulario}>
                      <p className=" color-gray mb-0">
                        {'Acepto '}
                        <a className="sub link" target="_blank" rel="noreferrer">
                          términos y condiciones{' '}
                        </a>
                        de BanCoppel, en específico el uso de la CIEC de mi empresa para manifestar mi voluntad por
                        medios electrónicos.
                      </p>
                    </CheckTextBox>
                  </div>
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

StepEight.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default StepEight;
