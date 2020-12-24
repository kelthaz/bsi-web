import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../redux/actions/solicitud';
import TextField from '../../../shared/text-field/TextField';
import styles from '../datos-empresa/step-nine/StepNine.module.scss';
import Modal from '../../../shared/modal/Modal';

const StepSix = () => {
  const { documentacion } = useSelector((state) => state.solicitud);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues } = {
    initialValues: {
      actaConstitutiva: documentacion.actaConstitutiva,
      poderNotarial: documentacion.poderNotarial,
      escrituraReforma: documentacion.escrituraReforma,
      comprobanteDomicilioComercial: documentacion.comprobanteDomicilioComercial,
      comprobanteDomicilioFiscal: documentacion.comprobanteDomicilioFiscal,
      ine: documentacion.ine,
      ineReverso: documentacion.ineReverso,
    },
  };

  const formulario = useFormik({
    initialValues,
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
        <div className="contedor-solicitud mw-100">
          <div className="container pl-md-3 pl-xs-0 p-0">
            <form className="mt-xs-5 mt-md-0 mt-lg-0" onSubmit={formulario.handleSubmit} noValidate>
              <div className="row ">
                <p className="color-dark-gray sub">Ahora necesitamos que nos compartas los siguientes documentos:</p>
              </div>
              <div className="row ">
                <div className="col-md-6 pl-0">
                  <TextField
                    name="actaConstitutiva"
                    formulario={formulario}
                    type="text"
                    size="small"
                    label="Acta constitutiva"
                  />
                </div>
                <div className="col-md-6 pl-0">
                  <button type="submit" className="btn-small">
                    Examinar
                  </button>
                </div>
                <div className="col-md-6 pl-0">
                  <TextField
                    name="poderNotarial"
                    formulario={formulario}
                    type="text"
                    size="small"
                    label="Poderes notariales"
                  />
                </div>
                <div className="col-md-6 pl-0">
                  <button type="submit" className="btn-small">
                    Examinar
                  </button>
                </div>
                <div className="col-md-6 pl-0">
                  <TextField
                    name="escrituraReforma"
                    formulario={formulario}
                    type="text"
                    size="small"
                    label="Escrituras con reformas"
                  />
                </div>
                <div className="col-md-6 pl-0">
                  <button type="submit" className="btn-small">
                    Examinar
                  </button>
                </div>
                <div className="col-md-6 pl-0">
                  <TextField
                    name="comprobanteDomicilioComercial"
                    formulario={formulario}
                    type="text"
                    size="small"
                    label="Comprobante de domicilio comercial"
                  />
                </div>
                <div className="col-md-6 pl-0">
                  <button type="submit" className="btn-small">
                    Examinar
                  </button>
                </div>
                <div className="col-md-6 pl-0">
                  <TextField
                    name="comprobanteDomicilioFiscal"
                    formulario={formulario}
                    type="text"
                    size="small"
                    label="Comprobante de domicilio fiscal"
                  />
                </div>
                <div className="col-md-6 pl-0">
                  <button type="submit" className="btn-small">
                    Examinar
                  </button>
                </div>
                <div className="col-md-6 pl-0">
                  <TextField
                    name="ine"
                    formulario={formulario}
                    type="text"
                    size="small"
                    label="INE del representante legal"
                  />
                </div>
                <div className="col-md-6 pl-0">
                  <button type="submit" className="btn-small">
                    Examinar
                  </button>
                </div>
                <div className="col-md-6 pl-0">
                  <TextField
                    name="ineReverso"
                    formulario={formulario}
                    type="text"
                    size="small"
                    label="INE del representante legal"
                  />
                </div>
                <div className="col-md-6 pl-0">
                  <button type="submit" className="btn-small">
                    Examinar
                  </button>
                </div>
              </div>
              <div className="row ">
                <p className="color-dark-gray sub">
                  Haz
                  <a className="link sub" onClick={() => setOpenConfirmation(true)}>
                    clic aquí
                  </a>
                  si no cuentas con tus documentos escaneados o quieres saber nuestras recomendaciones para tus
                  documentos.
                </p>
              </div>
              <div className="flex-column-center-config">
                <button type="submit" className="cicle-button-blue my-3" aria-label="Avanzar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepSix;
