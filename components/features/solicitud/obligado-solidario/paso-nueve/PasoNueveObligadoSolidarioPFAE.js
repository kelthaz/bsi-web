import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { PASO_DIEZ_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../constants/routes/solicitud/obligado';
import { campoRequerido } from '../../../../../constants/errors';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';

const PasoNueveObligadoSolidarioPFAE = ({ validate }) => {
  const { obligadoSolidario, currentStep } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      bienesSeparados: obligadoSolidario.bienesSeparados,
    },
    validationSchema: Yup.object({
      bienesSeparados: Yup.string().required(campoRequerido),
    }),
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

  const [handleSubmit] = useOnChangePage(formulario, PASO_DIEZ_OBLIGADO_SOLIDARIO_ROUTE, validate);

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud mt-xs-0 mt-md-5">
          <div className="container pl-md-3 pl-xs-0">
            <form onSubmit={handleSubmit} noValidate>
              <div className="row pl-3 pb-xs-1">
                <p className="color-dark-gray sub">
                  Ahora, para saber qué documentos solicitarte, necesitamos que nos respondas. ¿Eres casada (o)?
                </p>
              </div>
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

PasoNueveObligadoSolidarioPFAE.propTypes = {
  validate: PropTypes.bool.isRequired,
};
export default PasoNueveObligadoSolidarioPFAE;
