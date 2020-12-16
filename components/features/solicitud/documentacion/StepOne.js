import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { seleccionOpcion } from '../../../../constants/errors';
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
  const capitalTrabajoMobile = {
    value: '1',
    label: 'Persona Física',
    subLabel: 'Debe ser el princial accionista o un ejecutivo de la empresa',
  };
  const adquisicionActivacion = {
    value: '2',
    label: 'Persona Moral',
    subLabel: 'Deberá ser una empresa que responderá con su patrimonio',
  };
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const { documentacion } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    initialValues: {
      usoCredito: documentacion.usoCredito,
    },
    validationSchema: Yup.object({
      usoCredito: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: '2' },
          datosEmpresa: {
            ...documentacion,
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
        <div className={`container px-xs-0 px-md-0 ${styles['modal-container-video']}`}>
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
                <span onClick={() => setOpenConfirmation(true)} className="link" role="button" tabIndex={0}>
                  ¿Porqué te pedimos esto?
                </span>
              </p>
              <p className="color-dark-gray sub position-relative">Antes que nada, ¿Qué tipo de persona es?</p>

              <div className="row my-3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pl-lg-5 pl-md-5  mb-sm-2 mb-xs-2 px-xs-0 px-md-2">
                  <button
                    type="button"
                    className={`d-sm-none d-xs-none	d-md-block d-lg-block card-simple-white-svg card-button ${
                      values.usoCredito && values.usoCredito.value === capitalTrabajo.value && 'card-selected-blue-sky'
                      }`}
                    onClick={() => handleUsoCredito(capitalTrabajo)}
                  >
                    <div className="row">
                      <div className="col-12">
                        <SvgPersonaFisicaActividadFisica />
                      </div>
                      <div className="col-8 offset-2">
                        <p className="mb-1">{capitalTrabajo.label}</p>
                        <span className="color-gray">{capitalTrabajo.subLabel}</span>
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    className={`d-none d-sm-block d-xs-block d-md-none card-simple-white-svg-simple card-button ${
                      values.usoCredito && values.usoCredito.value === capitalTrabajo.value && 'card-selected-blue-sky'
                      }`}
                    onClick={() => handleUsoCredito(capitalTrabajo)}
                  >
                    <div className="row">
                      <div className="col-2 pl-1">
                        <SvgPersonaFisicaActividadFisica />
                      </div>
                      <div className="col-10 px-0 mr-0">
                        <div className="row justify-content-center mx-0 mr-0">
                          <div className="col-12 pl-3 px-0">
                            <p>{capitalTrabajoMobile.label}</p>
                          </div>
                          <div className="col-12 pr-1 text-left">
                            <span className="color-gray">{capitalTrabajoMobile.subLabel}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-5 pr-md-5 mb-sm-2 mb-xs-2 px-xs-0 px-md-2">
                  <button
                    type="button"
                    className={`d-sm-none d-xs-none	d-md-block d-lg-block card-simple-white-svg card-button ${
                      values.usoCredito &&
                      values.usoCredito.value === adquisicionActivacion.value &&
                      'card-selected-blue-sky'
                      }`}
                    onClick={() => handleUsoCredito(adquisicionActivacion)}
                  >
                    <div className="row">
                      <div className="col-12 ml-2">
                        <SvgPersonaMoralBlue />
                      </div>
                      <div className="col-9 offset-2">
                        <p className="">{adquisicionActivacion.label}</p>
                        <span className="color-gray">{adquisicionActivacion.subLabel}</span>
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    className={`d-none d-sm-block d-xs-block d-md-none card-simple-white-svg-simple card-button ${
                      values.usoCredito &&
                      values.usoCredito.value === adquisicionActivacion.value &&
                      'card-selected-blue-sky'
                      }`}
                    onClick={() => handleUsoCredito(adquisicionActivacion)}
                  >
                    <div className="row">
                      <div className="col-2 pl-1">
                        <SvgPersonaMoralBlue />
                      </div>
                      <div className="col-10 px-0 mr-0">
                        <div className="row justify-content-center mx-0 mr-0">
                          <div className="col-12 pl-3 px-0">
                            <p>{adquisicionActivacion.label}</p>
                          </div>
                          <div className="col-12 pr-1 text-left">
                            <span className="color-gray">{adquisicionActivacion.subLabel}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
                <button
                  disabled={!(formulario.isValid && formulario.dirty)}
                  type="submit"
                  className="cicle-button-blue my-3"
                  aria-label="Avanzar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
