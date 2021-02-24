import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Tooltip from '../../../../../shared/tooltip/Tooltip';
import RadioButton from '../../../../../shared/radio-button/RadioButton';
import { campoRequerido } from '../../../../../../constants/errors';
import {
  AGRADECIMIENTO_INCOMPLETO_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_OCHO_OBLIGADO_SOLIDARIO_ROUTE,
} from '../../../../../../constants/routes/solicitud/obligado';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { nextStepObligadoSolidario } from '../../../../../../redux/actions/obligado';

const PasoSieteObligadoSolidario = ({ validate }) => {
  const dispatch = useDispatch();
  const { obligadoSolidario, currentStep } = useSelector((state) => state.solicitud);

  const formulario = useFormik({
    initialValues: {
      meEjercenControlMoralComoFisico: obligadoSolidario.meEjercenControlMoralComoFisico,
    },
    validationSchema: Yup.object().shape({
      meEjercenControlMoralComoFisico: Yup.string().required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepObligadoSolidario({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          obligadoSolidario: { ...obligadoSolidario, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(
    formulario,
    formulario.values.meEjercenControlMoralComoFisico === 'no'
      ? PASO_OCHO_OBLIGADO_SOLIDARIO_ROUTE
      : AGRADECIMIENTO_INCOMPLETO_OBLIGADO_SOLIDARIO_ROUTE,
    currentStep
  );

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
            <p className="sub color-dark-gray position-relative">
              ¿Existe una persona moral que ejerce control sobre ti?
              <Tooltip message="..." />
            </p>

            <div className="row">
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                <RadioButton name="meEjercenControlMoralComoFisico" formulario={formulario} value="si">
                  <span className="input color-gray">Sí</span>
                </RadioButton>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                <RadioButton name="meEjercenControlMoralComoFisico" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>

            <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
              <button
                type="submit"
                className="cicle-button-blue my-3"
                aria-label="Avanzar"
                disabled={validate && !(formulario.isValid && formulario.dirty)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

PasoSieteObligadoSolidario.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoSieteObligadoSolidario;
