import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { seleccionOpcion } from '../../../../../../constants/errors';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import SvgPersonaFisicaActividadFisica from '../../../../../svgs/SvgPersonaFisica';
import SvgPersonaMoralBlue from '../../../../../svgs/SvgPersonaMoralBlue';
import Modal from '../../../../../shared/modal/Modal';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { PASO_DOS_OBLIGADO_DOCUMENTACION_ROUTE } from '../../../../../../constants/routes/solicitud/documentacion';
import { FISICA, MORAL } from '../../../../../../constants/persona';

const PasoUnoDocumentacionObligadoSolidario = ({ validate }) => {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const { documentacion, currentStep } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      tipoPersona: documentacion.obligadoSolidario.tipoPersona,
    },
    validationSchema: Yup.object({
      tipoPersona: Yup.string().required(seleccionOpcion),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          documentacion: { ...documentacion, obligadoSolidario: { ...documentacion.obligadoSolidario, ...values } },
        })
      );
    },
  });

  const { values, setFieldTouched, setFieldValue, touched } = formulario;

  const handletipoPersona = async (tipoPersona) => {
    if (!touched.tipoPersona) {
      await setFieldTouched('tipoPersona', true);
    }
    await setFieldValue('tipoPersona', tipoPersona);
  };

  const [handleSubmit] = useOnChangePage(formulario, PASO_DOS_OBLIGADO_DOCUMENTACION_ROUTE, validate);

  return (
    <>
      <Modal openModal={openConfirmation} setOpenModal={setOpenConfirmation}>
        <div className="modal-container-video">
          <div>
            <h4 className="color-blue-storm">¿Quién es un Obligado Solidario y por qué solicitamos uno?</h4>
            <p className="dark-gray body2">
              Un obligado solidario es una persona que se compromete a liquidar el crédito que estás solicitando si por
              algún motivo tú no pudieras.
            </p>
          </div>
          <iframe
            className="modal-video"
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
            <form onSubmit={handleSubmit} noValidate>
              <p className="color-dark-gray sub position-relative">
                Vamos a platicar un poco sobre la persona que te gustaría designar como tu Obligado Solidario.{' '}
                <button type="button" onClick={() => setOpenConfirmation(true)} className="btn-link">
                  ¿Porqué te pedimos esto?
                </button>
              </p>
              <p className="color-dark-gray sub position-relative">Antes que nada, ¿Qué tipo de persona es?</p>

              <div className="row my-3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pl-lg-5 pl-md-5  mb-sm-2 mb-xs-2 px-xs-0 px-md-2">
                  <button
                    type="button"
                    className={`card-simple-white-svg card-button ${
                      values.tipoPersona === FISICA && 'card-selected-blue-sky'
                    }`}
                    onClick={() => handletipoPersona(FISICA)}
                  >
                    <div>
                      <SvgPersonaFisicaActividadFisica />
                    </div>

                    <div className="w-100">
                      <p className="px-md-5 px-lg-5">Persona Física</p>
                      <div className="text-md-center text-xs-left color-gray w-100">
                        Sugerimos que sea un familiar con relación con la empresa
                      </div>
                    </div>
                  </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-5 pr-md-5 mb-sm-2 mb-xs-2 px-xs-0 px-md-2">
                  <button
                    type="button"
                    className={`card-simple-white-svg card-button ${
                      values.tipoPersona === MORAL && 'card-selected-blue-sky'
                    }`}
                    onClick={() => handletipoPersona(MORAL)}
                  >
                    <div>
                      <SvgPersonaMoralBlue />
                    </div>

                    <div className="w-100">
                      <p className="px-md-5 px-lg-5">Persona Moral</p>
                      <div className="text-md-center text-xs-left color-gray w-100">
                        Deberá ser una empresa que responderá con su patrimonio
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="row no-gutters card-simple-blue-light text-md-center">
                <p className="m-0">
                  En caso de que tu obligado solidario sea una persona Moral, deberá ser representante legal y
                  accionista mayoritario de la empresa.
                </p>
              </div>
              <div className="flex-column-center-config">
                <button
                  disabled={validate && !(formulario.isValid && formulario.dirty)}
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

PasoUnoDocumentacionObligadoSolidario.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoUnoDocumentacionObligadoSolidario;
