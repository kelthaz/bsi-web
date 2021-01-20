import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import FileInput from '../../../../shared/file-input/FileInput';
import Modal from '../../../../shared/modal/Modal';
import styles from './StepTen.module.scss';
import Tooltip from '../../../../shared/tooltip/Tooltip';

const StepTen = () => {
  const { documentacion, datosPersonales } = useSelector((state) => state.solicitud);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues } = {
    initialValues: {
      concentracion: documentacion.concentracion,
      compraDivisas: documentacion.compraDivisas,
      administracionGastos: documentacion.administracionGastos,
      pagoNomina: documentacion.pagoNomina,
      cuentaEje: documentacion.cuentaEje,
      pagoCredito: documentacion.pagoCredito,
      pagoRelacionado: documentacion.pagoRelacionado,
      pagoComisiones: documentacion.pagoComisiones,
      giros: documentacion.giros,
      pagoProveedores: documentacion.pagoProveedores,
      otros: documentacion.otros,
      usoCuenta: documentacion.usoCuenta,
      comprobanteDomicilio: documentacion.comprobanteDomicilio,
    },
  };

  const formulario = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'preguntas', step: '11' },
          documentacion: { ...documentacion, ...values },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/11');
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
        <div className="contedor-solicitud mw-100">
          <div className="container pl-md-3 pl-xs-0">
            <form className="mt-xs-5 mt-md-0 mt-lg-0" onSubmit={formulario.handleSubmit} noValidate>
              <div className="row px-md-3 px-xs-0">
                <p className="color-dark-gray sub">
                  Con base en tu respuesta, necesitamos que nos proporciones los siguientes documentos:
                  <Tooltip message="Puedes cargar documentos en formato PNG, JPG o PDF, con un peso máximo de 5 MB" />
                </p>
              </div>
              <div className="row px-md-3 px-xs-0">
                {documentacion.bienesSeparados !== 'no' ? (
                  <div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput formulario={formulario} name="comprobanteDomicilio" text="Comprobante de domicilio" />
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
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="INE de tu pareja" grayText="(por el frente)" />
                    </div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="INE de tu pareja" grayText="(por el reverso)" />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput formulario={formulario} name="comprobanteDomicilio" text="Comprobante de domicilio" />
                    </div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="Comprobante de domicilio fiscal" />
                    </div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="Tu INE" grayText="(por el frente)" />
                    </div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="Tu INE" grayText="(por el reverso)" />
                    </div>
                  </div>
                )}
              </div>
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
              <div className="flex-column-center-config">
                <button
                  type="submit"
                  //   disabled={!(formulario.dirty && formulario.isValid)}
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
export default StepTen;
