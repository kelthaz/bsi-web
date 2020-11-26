import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Modal from '../../../../shared/modal/Modal';
import TextField from '../../../../shared/text-field/TextField';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import Link from 'next/link';

import styles from './StepEight.module.scss';
import SvgPrivacidad from '../../../../svgs/SvgPrivacidad';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';

import {
  longitudMaxima,
  campoRequerido,
  longitudMinima,
  aceptarTerminos,
} from '../../../../../constants/errors';

const StepEight = () => {
  const [openWhyCiec, setOpenWhyCiec] = useState(false);
  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const router = useRouter();

  const dispatch = useDispatch();

  const { initialValues, validationSchema } = {
    initialValues: {
      ciec: datosEmpresa.ciec,
      firmaElectronica: false
    },
    validationSchema: Yup.object({
      ciec: Yup.string()
        .max(20, longitudMaxima)
        .min(7, longitudMinima)
        .required(campoRequerido),
        firmaElectronica: Yup.boolean()
        .oneOf([true], aceptarTerminos)
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
            ...values
          },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/9');
    },
  });

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <Modal openModal={openWhyCiec} setOpenModal={setOpenWhyCiec}>
            <div className={styles['modal-container']}>
              <h4 className="color-blue-storm">¿Qué es la CIEC y por qué solicitamos esto?</h4>
              <p className="dark-gray body2">
                Tu historial crediticio nos ayuda a diseñar tu oferta en segundos, por lo que requerimos
                tus credenciales del SAT para que firmes la autorización y poder consultarlo.
              </p>
              <p className="sub color-gray">
                <SvgPrivacidad /> Tus datos estarán protegidos.
              </p>
              <iframe
                className={styles['modal-video']}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/r7HHOYZQb4M"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="¿Qué es la CIEC y por qué solicitamos esto?"
               />
            </div>
<<<<<<< HEAD
            <div className="text-center offset-md-4 offset-xs-3 my-3 ">
              <Link href="/simulador">
                <button className="btn-medium" type="submit" aria-label="Avanzar">
                  <span>De acuerdo</span>
                </button>
              </Link>
=======
          </Modal>
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="color-dark-gray sub">
              Primero necesitamos que nos autorices acceso con tu clave CIEC.<br />
              <a className="sub link" onClick={() => setOpenWhyCiec(true)} role="button" tabIndex="0">¿Por qué te pedimos esto?</a>
            </p>

            <div className="row no-gutters">
              <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 ">
                <p className="input color-gray">Mi CIEC es</p>
              </div>
              <div className="col-lg-5 col-md-5 col-xs-12 pb-sm-3 pb-xs-3">
                <TextField
                  name="ciec"
                  format="passwordspace"
                  maxlength={20}
                  formulario={formulario}
                  type="password"
                  size="big"
                  label="**********"
                />
              </div>

              <div className="card-simple">
                <div className="row">
                  <SvgPrivacidad />
                  <p className="col-11">
                    Tus datos estarán protegidos.<br />
                    Cualquier duda te invitamos a conocer más sobre tu CIEC en la página oficial del SAT haciendo{' '}
                    <a className="btn-link-blue" target="_blank" rel="noreferrer">
                      clic aquí
                    </a>.
                  </p>
                </div>
              </div>

              <div className="card-simple-gray">
                <div className="row">
                  <CheckTextBox name="firmaElectronica" formulario={formulario}>
                    <p className="body3 color-gray mb-0">
                      Acepto <a className="btn-link-blue" target="_blank" rel="noreferrer">
                        términos y condiciones
                      </a> de BanCoppel, en específico el uso de mi CIEC para manifestar mi voluntad por medios electrónicos.
                    </p>
                  </CheckTextBox>
                </div>
              </div>
            </div>
            <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
              <button
                type="submit"
                className="cicle-button-blue my-3"
                aria-label="Avanzar"
                disabled={!(formulario.isValid && formulario.dirty)}
              />
>>>>>>> staging
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepEight;
