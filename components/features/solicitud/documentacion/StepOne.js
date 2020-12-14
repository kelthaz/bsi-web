import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStepDatosPersonales } from '../../../../redux/actions/solicitud';
import SvgPersonaFisicaActividadFisica from '../../../svgs/SvgPersonaFisica';
import SvgPersonaMoralBlue from '../../../svgs/SvgPersonaMoralBlue';
import styles from '../datos-empresa/step-nine/StepNine.module.scss';
import Modal from '../../../shared/modal/Modal';

const StepOne = () => {
  const capitalTrabajo = {
    value: '1',
    label: 'Persona Física',
    subLabel: 'Sugerimos que sea un familiar con relación con la empresa',
  };
  const adquisicionActivacion = {
    value: '2',
    label: 'Persona Moral',
    subLabel: 'Deberá ser una empresa que responderá con su patrimonio',
  };
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    initialValues: {
      usoCredito: datosEmpresa.usoCredito,
      descripcionCredito: datosEmpresa.descripcionCredito,
    },
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: '2' },
          datosEmpresa: {
            ...datosEmpresa,
            ...values,
          },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/2');
    },
  });

  const { values, setFieldTouched, setFieldValue, touched } = formulario;

  const handleUsoCredito = (usoCredito) => {
    if (!touched.usoCredito) {
      setFieldTouched('usoCredito', true);
    }
    setFieldValue('usoCredito', usoCredito);
  };

  return (
    <>
      <Modal openModal={openConfirmation} setOpenModal={setOpenConfirmation}>
        <div className={`px-0 ${styles['modal-container-video']}`}>
          <div>
            <h4 className="color-blue-storm">¿Quién es un Obligado Solidario y por qué solicitamos uno?</h4>
            <p className="dark-gray body2">
              Un obligado solidario es una persona que se compromete a liquidar el crédito que estás solicitando si por
              algún motivo tú no pudieras.
            </p>
          </div>
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
      </Modal>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud">
          <div className="container p-0">
            <form onSubmit={formulario.handleSubmit} noValidate>
              <p className="color-dark-gray sub position-relative">
                Vamos a platicar un poco sobre la persona que te gustaría designar como tu Obligado Solidario.{' '}
                <a onClick={() => setOpenConfirmation(true)} className="link">
                  ¿Porqué te pedimos esto?
                </a>
              </p>
              <p className="color-dark-gray sub position-relative">Antes que nada, ¿Qué tipo de persona es?</p>

              <div className="row my-3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pl-lg-5 pl-md-5  mb-sm-2 mb-xs-2">
                  <button
                    type="button"
                    className={`card-simple-white-svg card-button ${
                      values.usoCredito && values.usoCredito.value === capitalTrabajo.value && 'card-selected-blue-sky'
                    }`}
                    onClick={() => handleUsoCredito(capitalTrabajo)}
                  >
                    <div>
                      <SvgPersonaFisicaActividadFisica />
                    </div>

                    <p className="px-md-5 px-lg-5">{capitalTrabajo.label}</p>
                    <span className="px-md-5 px-lg-5 color-gray">{capitalTrabajo.subLabel}</span>
                  </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-5 pr-md-5 mb-sm-2 mb-xs-2">
                  <button
                    type="button"
                    className={`card-simple-white-svg card-button ${
                      values.usoCredito &&
                      values.usoCredito.value === adquisicionActivacion.value &&
                      'card-selected-blue-sky'
                    }`}
                    onClick={() => handleUsoCredito(adquisicionActivacion)}
                  >
                    <div>
                      <SvgPersonaMoralBlue />
                    </div>
                    <p className="px-md-5 px-lg-5">{adquisicionActivacion.label}</p>
                    <span className="px-md-5 px-lg-5 color-gray">{adquisicionActivacion.subLabel}</span>
                  </button>
                </div>
              </div>
              <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
                <button type="submit" className="cicle-button-blue my-3" aria-label="Avanzar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
