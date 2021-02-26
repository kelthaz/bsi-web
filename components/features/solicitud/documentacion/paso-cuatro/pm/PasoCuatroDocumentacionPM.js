import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import FileInput from '../../../../../shared/file-input/FileInput';
import Modal from '../../../../../shared/modal/Modal';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { PASO_CINCO_DOCUMENTACION_ROUTE } from '../../../../../../constants/routes/solicitud/documentacion';
import { campoRequerido } from '../../../../../../constants/errors';

const PasoCuatroDocumentacionPM = ({ validate }) => {
  const { currentStep, documentacion } = useSelector((state) => state.solicitud);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      actaConstitutiva: documentacion.actaConstitutiva,
      poderesNotarial: documentacion.poderesNotarial,
      escriturasConReformas: documentacion.escriturasConReformas,
      comprobanteDomicilioComercial: documentacion.comprobanteDomicilioComercial,
      comprobanteDomicilioFiscal: documentacion.comprobanteDomicilioFiscal,
      ineRepresentanteLegal: documentacion.ineRepresentanteLegal,
      ineReversoRepresentanteLegal: documentacion.ineReversoRepresentanteLegal,
    },
    validationSchema: Yup.object({
      actaConstitutiva: Yup.string().url().required(campoRequerido),
      poderesNotarial: Yup.string().url().required(campoRequerido),
      escriturasConReformas: Yup.string().url().required(campoRequerido),
      comprobanteDomicilioComercial: Yup.string().url().required(campoRequerido),
      comprobanteDomicilioFiscal: Yup.string().url().required(campoRequerido),
      ineRepresentanteLegal: Yup.string().url().required(campoRequerido),
      ineReversoRepresentanteLegal: Yup.string().url().required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          documentacion: { ...documentacion, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_CINCO_DOCUMENTACION_ROUTE, validate);

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
        <div className="contedor-solicitud mt-xs-0 mt-md-5">
          <div className="container pl-md-3 pl-xs-0">
            <form onSubmit={handleSubmit} noValidate>
              <p className="color-dark-gray sub">Ahora necesitamos que nos compartas los siguientes documentos:</p>

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
                  <button type="button" className="btn-link" onClick={() => setOpenConfirmation(true)}>
                    clic aquí
                  </button>{' '}
                  si no cuentas con tus documentos escaneados o quieres saber nuestras recomendaciones para tus
                  documentos.
                </p>
              </div>

              <div className="flex-column-center-config">
                <button
                  disabled={validate && !formulario.isValid}
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

PasoCuatroDocumentacionPM.propTypes = {
  validate: PropTypes.bool.isRequired,
};
export default PasoCuatroDocumentacionPM;
