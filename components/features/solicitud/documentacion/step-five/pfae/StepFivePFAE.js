import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import FileInput from '../../../../../shared/file-input/FileInput';
import Modal from '../../../../../shared/modal/Modal';

const StepFivePFAE = () => {
  const { documentacion } = useSelector((state) => state.solicitud);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues } = {
    initialValues: {
      comprobanteDomicilioComercial: documentacion.comprobanteDomicilioComercial,
      comprobanteDomicilioFiscal: documentacion.comprobanteDomicilioFiscal,
      actaMatrimonio: documentacion.actaMatrimonio,
      ine: documentacion.ine,
      ineReverso: documentacion.ineReverso,
      inePareja: documentacion.inePareja,
      ineReversoPareja: documentacion.ineReversoPareja,
    },
  };

  const formulario = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: '7' },
          documentacion: { ...documentacion, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/8');
    },
  });

  return (
    <>
      <Modal openModal={openConfirmation} setOpenModal={setOpenConfirmation}>
        <div className="container px-xs-0 px-md-0 modal-container-video">
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
        <div className="contedor-solicitud">
          <div className="container pl-md-3 pl-xs-0">
            <form className="mt-xs-5 mt-md-0 mt-lg-0" onSubmit={formulario.handleSubmit} noValidate>
              <div className="row px-md-3 px-xs-0">
                <p className="color-dark-gray sub">
                  Con base en tu respuesta, necesitamos que nos proporciones los siguientes documentos:
                </p>
              </div>

              <div className="row px-md-3 px-xs-0">
                <div className="col-md-12 pb-md-4">
                  <FileInput
                    formulario={formulario}
                    name="comprobanteComercial"
                    text="Comprobante de domicilio comercial"
                  />
                </div>
                <div className="col-md-12 pb-md-4">
                  <FileInput text="Comprobante de domicilio fiscal" />
                </div>
                <div className="col-md-12 pb-md-4">
                  <FileInput text="Acta de matrimonio" />
                </div>
                <div className="col-md-12 pb-md-4">
                  <FileInput text="Tu INE" grayText="(por el frente)" />
                </div>
                <div className="col-md-12 pb-md-4">
                  <FileInput text="Tu INE" grayText="(por el reverso)" />
                </div>
                {documentacion.bienesSeparados !== 'no' && (
                  <div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="INE de tu pareja" grayText="(por el frente)" />
                    </div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="INE de tu pareja" grayText="(por el reverso)" />
                    </div>
                  </div>
                )}
              </div>
              <div className="row ">
                <p className="color-dark-gray sub">
                  Haz{' '}
                  <button type="button" className="btn-link" onClick={() => setOpenConfirmation(true)}>
                    clic aquí
                  </button>{' '}
                  si no cuentas con tus documentos escaneados o quieres saber nuestras recomendaciones para tus
                  documentos.
                </p>
              </div>
              <div className="flex-column-center-config">
                <button
                  type="submit"
                  // disabled={!(formulario.dirty && formulario.isValid)}
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
export default StepFivePFAE;
