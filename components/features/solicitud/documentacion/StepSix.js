import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../redux/actions/solicitud';
import FileInput from '../../../shared/file-input/FileInput';
import RadioButton from '../../../shared/radio-button/RadioButton';
import styles from '../datos-empresa/step-nine/StepNine.module.scss';
import Modal from '../../../shared/modal/Modal';
import { campoRequerido } from '../../../../constants/errors';

const StepSix = () => {
  const { documentacion } = useSelector((state) => state.solicitud);
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues, validationSchema } = {
    initialValues: {
      actaConstitutiva: documentacion.actaConstitutiva,
      poderNotarial: documentacion.poderNotarial,
      escrituraReforma: documentacion.escrituraReforma,
      comprobanteDomicilioComercial: documentacion.comprobanteDomicilioComercial,
      comprobanteDomicilioFiscal: documentacion.comprobanteDomicilioFiscal,
      ine: documentacion.ine,
      ineReverso: documentacion.ineReverso,
    },
    validationSchema: Yup.object({
      // actaConstitutiva: Yup.string().required(campoRequerido),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: '6' },
          documentacion: { ...documentacion, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/7');
    },
    validateOnMount: true,
  });

  return (
    <>
      <Modal openModal={openConfirmation} setOpenModal={setOpenConfirmation}>
        <div className={`container px-xs-0 px-md-0 ${styles['modal-container-video']}`}>
          <div>
            <h4 className="color-blue-storm">Recomendaciones para tus documentos</h4>
            <p className="dark-gray body2">
              Para garantizar que recibamos tus documentos en la mejor calidad posible, te recomendamos lo siguiente:
            </p>
            <p className="color-blue-sky sub offset-md-3">600 dpi | Formato PDF e imagen</p>
            <p className="dark-gray body2">Si no cuentas con tus documentos escaneados te recomendamos dos opciones:</p>
            <p className="dark-gray body2">1. Ir a un establecimiento a escanearlos.</p>
            <p className="dark-gray body2">
              2. Descarga la app “Microsoft Office Lens” en tu smartphone (iOS y Android) y escanea tus documentos.
            </p>
          </div>
          <div className="flex-column-center-config mt-2">
            <button type="submit" className="btn-big">
              Continuar
            </button>
          </div>
        </div>
      </Modal>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud mt-xs-0 mt-md-5">
          <div className="container pl-md-3 pl-xs-0 p-0">
            <form className="mt-xs2 mt-md-0 mt-lg-0" onSubmit={formulario.handleSubmit} noValidate>
              <div className="row pl-3 pb-md-3 pb-xs-1">
                {datosPersonales.tipoPersona === 'Persona Moral' ? (
                  <p className="color-dark-gray sub">Ahora necesitamos que nos compartas los siguientes documentos:</p>
                ) : (
                  <p className="color-dark-gray sub">
                    Para saber qué documentos solicitarte, necesitamos que nos respondas. ¿Eres casada(o)?
                  </p>
                )}
              </div>
              {datosPersonales.tipoPersona === 'Persona Moral' ? (
                <div className="row px-md-3 px-xs-0">
                  <div className="col-md-12 pb-md-4">
                    <FileInput formulario={formulario} name="actaConstitutiva" text="Acta constitutiva" />
                  </div>
                  <div className="col-md-12 pb-md-4">
                    <FileInput
                      formulario={formulario}
                      name="poderNotarial"
                      text="Poderes notariales"
                      subText="Opcional sólo si no vienen en tu acta constitutiva"
                    />
                  </div>
                  <div className="col-md-12 pb-md-4">
                    <FileInput text="Escrituras con reformas" subText="Opcional" />
                  </div>
                  <div className="col-md-12 pb-md-4">
                    <FileInput text="Comprobante de domicilio comercial" />
                  </div>
                  <div className="col-md-12 pb-md-4">
                    <FileInput text="Comprobante de domicilio fiscal" />
                  </div>
                  <div className="col-md-12 pb-md-4">
                    <FileInput text="INE del representante legal" subText="Por el frente" />
                  </div>
                  <div className="col-md-12 pb-md-4 pb-xs-3">
                    <FileInput text="INE del representante legal" subText="Por el reverso" />
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-12">
                    <RadioButton name="bienesSeparados" formulario={formulario} value="siMancomunados">
                      <span className="input color-gray">Sí, por bienes mancomunados</span>
                    </RadioButton>
                  </div>
                  <div className="col-12 mt-3">
                    <RadioButton name="bienesSeparados" formulario={formulario} value="siSeparados">
                      <span className="input color-gray">Sí, por bienes separados</span>
                    </RadioButton>
                  </div>
                  <div className="col-12 mt-3">
                    <RadioButton name="bienesSeparados" formulario={formulario} value="no">
                      <span className="input color-gray">No</span>
                    </RadioButton>
                  </div>
                </div>
              )}
              {datosPersonales.tipoPersona === 'Persona Moral' ? (
                <div className="row ">
                  <p className="color-dark-gray sub">
                    Haz{' '}
                    <a className="link sub" onClick={() => setOpenConfirmation(true)}>
                      clic aquí
                    </a>{' '}
                    si no cuentas con tus documentos escaneados o quieres saber nuestras recomendaciones para tus
                    documentos.
                  </p>
                </div>
              ) : (
                ''
              )}
              <div className="flex-column-center-config">
                <button
                  disabled={!formulario.dirty}
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
export default StepSix;
