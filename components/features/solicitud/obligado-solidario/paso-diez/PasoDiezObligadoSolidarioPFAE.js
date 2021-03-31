import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import FileInput from '../../../../shared/file-input/FileInput';
import Modal from '../../../../shared/modal/Modal';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import { campoRequerido } from '../../../../../constants/errors';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { PASO_ONCE_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../constants/routes/solicitud/obligado';

const PasoDiezObligadoSolidarioPFAE = ({ validate }) => {
  const { obligadoSolidario, currentStep } = useSelector((state) => state.solicitud);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const dispatch = useDispatch();

  const { initialValues, validationSchema } = {
    initialValues: {
      comprobanteDomicilioFiscal: obligadoSolidario.comprobanteDomicilioFiscal,
      actaMatrimonio: obligadoSolidario.actaMatrimonio,
      ineRepresentanteLegal: obligadoSolidario.ineRepresentanteLegal,
      ineReversoRepresentanteLegal: obligadoSolidario.ineReversoRepresentanteLegal,
    },
    validationSchema: {
      comprobanteDomicilioFiscal: Yup.string().url().required(campoRequerido),
      ineRepresentanteLegal: Yup.string().url().required(campoRequerido),
      ineReversoRepresentanteLegal: Yup.string().url().required(campoRequerido),
    },
  };

  if (obligadoSolidario.estadoCivil !== 'no') {
    initialValues.actaMatrimonio = obligadoSolidario.actaMatrimonio;
    initialValues.inePareja = obligadoSolidario.inePareja;
    initialValues.ineReversoPareja = obligadoSolidario.ineReversoPareja;
    validationSchema.actaMatrimonio = Yup.string().url().required(campoRequerido);
    validationSchema.inePareja = Yup.string().url().required(campoRequerido);
    validationSchema.ineReversoPareja = Yup.string().url().required(campoRequerido);
  }

  const formulario = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          obligadoSolidario: { ...obligadoSolidario, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_ONCE_OBLIGADO_SOLIDARIO_ROUTE, validate);

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
            <button onClick={() => setOpenConfirmation(false)} type="submit" className="btn-big">
              Continuar
            </button>
          </div>
        </div>
      </Modal>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud">
          <div className="container pl-md-3 pl-xs-0">
            <form className="mt-xs-5 mt-md-0 mt-lg-0" onSubmit={handleSubmit} noValidate>
              <div className="row px-md-3 px-xs-0">
                <p className="color-dark-gray sub">
                  Con base en tu respuesta, necesitamos que nos proporciones los siguientes documentos:
                  <Tooltip message="Puedes cargar documentos en formato PNG, JPG o PDF, con un peso máximo de 5 MB" />
                </p>
              </div>
              <div className="row px-md-3 px-xs-0">
                {obligadoSolidario.estadoCivil !== 'no' ? (
                  <div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput
                        formulario={formulario}
                        name="comprobanteDomicilio"
                        text="Comprobante de domicilio"
                        grayText="(No mayor a tres meses)"
                      />
                    </div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="Acta de matrimonio" />
                    </div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="Tu INE" subText="Por el frente" />
                    </div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="Tu INE" subText="Por el reverso" />
                    </div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="INE de tu pareja" subText="Por el frente" />
                    </div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="INE de tu pareja" subText="Por el reverso" />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput
                        formulario={formulario}
                        name="comprobanteDomicilio"
                        text="Comprobante de domicilio"
                        grayText="(No mayor a tres meses)"
                      />
                    </div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="Tu INE" subText="Por el frente" />
                    </div>
                    <div className="col-md-12 pb-md-4">
                      <FileInput text="Tu INE" subText="Por el reverso" />
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

PasoDiezObligadoSolidarioPFAE.propTypes = {
  validate: PropTypes.bool.isRequired,
};
export default PasoDiezObligadoSolidarioPFAE;
