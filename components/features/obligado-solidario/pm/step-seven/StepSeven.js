import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import FileInput from '../../../../shared/file-input/FileInput';
import Modal from '../../../../shared/modal/Modal';

const StepSeven = () => {
  const { pm } = useSelector((state) => state.obligado);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues, validationSchema } = {
    initialValues: {
      actaConstitutiva: pm.actaConstitutiva,
      poderNotarial: pm.poderNotarial,
      escrituraReforma: pm.escrituraReforma,
      comprobanteDomicilioComercial: pm.comprobanteDomicilioComercial,
      comprobanteDomicilioFiscal: pm.comprobanteDomicilioFiscal,
      ine: pm.ine,
      ineReverso: pm.ineReverso,
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
          currentStep: { tab: 'autorizacion', step: '8' },
          pm: { ...pm, ...values },
        })
      );
      router.push('/obligado-solidario/[person]/[tab]/[step]', '/obligado-solidario/pm/autorizacion/8');
    },
    validateOnMount: true,
  });

  return (
    <>
      <Modal openModal={openConfirmation} setOpenModal={setOpenConfirmation}>
        <div className="container px-xs-0 px-md-0 modal-alerta-container">
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
          <div className="container pl-md-3 pl-xs-0">
            <form onSubmit={formulario.handleSubmit} noValidate>
              <div className="row pl-3 pb-md-3 pb-xs-1">
                <p className="color-dark-gray sub">Ahora necesitamos que nos compartas los siguientes documentos:</p>
              </div>
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
              <div className="row ">
                <p className="color-dark-gray sub">
                  Haz{' '}
                  <button type="button" className="btn-link sub" onClick={() => setOpenConfirmation(true)}>
                    clic aquí
                  </button>{' '}
                  si no cuentas con tus documentos escaneados o quieres saber nuestras recomendaciones para tus
                  documentos.
                </p>
              </div>

              <div className="flex-column-center-config">
                <button
                  // disabled={!formulario.dirty}
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

export default StepSeven;
