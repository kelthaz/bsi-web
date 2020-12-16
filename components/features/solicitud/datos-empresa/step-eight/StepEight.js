import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Modal from '../../../../shared/modal/Modal';
import TextField from '../../../../shared/text-field/TextField';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';

import styles from './StepEight.module.scss';
import SvgPrivacidad from '../../../../svgs/SvgPrivacidad';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';

import { longitudMaxima, campoRequerido, longitudMinima, aceptarTerminos } from '../../../../../constants/errors';

const StepEight = () => {
  const [openWhyCiec, setOpenWhyCiec] = useState(false);
  const { datosPersonales, datosEmpresa } = useSelector((state) => state.solicitud);
  const router = useRouter();

  const dispatch = useDispatch();

  const { initialValues, validationSchema } = {
    initialValues: {
      ciec: datosEmpresa.ciec,
      autorizoTerminosCiec: datosEmpresa.autorizoTerminosCiec,
    },
    validationSchema: Yup.object({
      ciec: Yup.string().max(8, longitudMaxima).min(8, longitudMinima).required(campoRequerido),
      autorizoTerminosCiec: Yup.boolean().nullable().oneOf([true], aceptarTerminos),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'datos-empresa', step: '8' },
          datosEmpresa: {
            ...datosEmpresa,
            ...values,
          },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/9');
    },
  });

  return (
    <>
      <Modal openModal={openWhyCiec} setOpenModal={setOpenWhyCiec}>
        <div className={`container px-xs-0 px-md-0 ${styles['modal-container']}`}>
          <h4 className="color-blue-storm">¿Qué es la CIEC y por qué solicitamos esto?</h4>
          <p className="dark-gray body2">
            Tu historial crediticio nos ayuda a diseñar tu oferta en segundos, por lo que requerimos tus credenciales
            del SAT para que firmes la autorización y poder consultarlo.
          </p>
          <p className="sub color-gray">
            <SvgPrivacidad /> Tus datos estarán protegidos.
          </p>
          <iframe
            className={` ${styles['modal-video']}`}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/r7HHOYZQb4M"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="¿Qué es la CIEC y por qué solicitamos esto?"
          />
        </div>
      </Modal>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud">
          <div className="container p-0">
            <form onSubmit={formulario.handleSubmit} noValidate>
              <p className="color-dark-gray sub ">
                {datosPersonales.tipoPersona === 'Persona Moral'
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
                    maxlength={8}
                    formulario={formulario}
                    type="password"
                    size="big"
                    label="**********"
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
                          términos y condiciones
                        </a>
                        {datosPersonales.tipoPersona === 'Persona Moral'
                          ? ' de BanCoppel, en específico el uso de la CIEC de mi empresa para manifestar mi voluntad por medios electrónicos.'
                          : ' de BanCoppel, en específico el uso de mi CIEC para manifestar mi voluntad por medios electrónicos.'}
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
                  disabled={!(formulario.isValid && formulario.dirty)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepEight;
