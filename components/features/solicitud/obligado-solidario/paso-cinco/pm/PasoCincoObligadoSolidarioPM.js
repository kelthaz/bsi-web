import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Tooltip from '../../../../../shared/tooltip/Tooltip';
import RadioButton from '../../../../../shared/radio-button/RadioButton';
import { campoRequerido } from '../../../../../../constants/errors';
import SvgPM from '../../../../../svgs/carga-documentos/SvgPM';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import {
  AGRADECIMIENTO_INCOMPLETO_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_SEIS_OBLIGADO_SOLIDARIO_ROUTE,
} from '../../../../../../constants/routes/solicitud/obligado';

const PasoCincoObligadoSolidarioPM = ({ validate }) => {
  const dispatch = useDispatch();
  const { obligadoSolidario, currentStep, datosPersonales } = useSelector((state) => state.solicitud);

  const formulario = useFormik({
    initialValues: {
      meEjercenControlMoralComoMoral: obligadoSolidario.meEjercenControlMoralComoMoral,
      meEjercenControlMoralComoFisico: obligadoSolidario.meEjercenControlMoralComoFisico,
    },
    validationSchema: Yup.object().shape({
      meEjercenControlMoralComoMoral: Yup.string().required(campoRequerido),
      meEjercenControlMoralComoFisico: Yup.string().required(campoRequerido),
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

  const [handleSubmit] = useOnChangePage(
    formulario,
    formulario.values.meEjercenControlMoralComoMoral === 'no' &&
      formulario.values.meEjercenControlMoralComoFisico === 'no'
      ? PASO_SEIS_OBLIGADO_SOLIDARIO_ROUTE
      : AGRADECIMIENTO_INCOMPLETO_OBLIGADO_SOLIDARIO_ROUTE,
    currentStep
  );

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container">
          <form onSubmit={handleSubmit} noValidate>
            <p className="sub color-blue-storm">
              <SvgPM />
              Respondiendo como: {obligadoSolidario.nombreEmpresa} (Persona Moral)
            </p>
            <p className="sub color-dark-gray position-relative">
              ??Existe una persona moral que ejerce control sobre ti?
              <Tooltip message="..." />
            </p>
            <div className="row">
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                <RadioButton
                  name="meEjercenControlMoralComoMoral"
                  label="si"
                  {...formulario.getFieldProps('meEjercenControlMoralComoMoral')}
                >
                  <span className="input color-gray">S??</span>
                </RadioButton>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                <RadioButton
                  name="meEjercenControlMoralComoMoral"
                  label="no"
                  {...formulario.getFieldProps('meEjercenControlMoralComoMoral')}
                >
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            <p className="sub color-blue-storm">
              <SvgPM />
              Respondiendo como: {datosPersonales.primerNombre} (Persona F??sica)
            </p>
            <p className="sub color-dark-gray">??Existe una persona moral que ejerce control sobre ti?</p>

            <div className="row">
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                <RadioButton
                  name="meEjercenControlMoralComoFisico"
                  label="si"
                  {...formulario.getFieldProps('meEjercenControlMoralComoFisico')}
                >
                  <span className="input color-gray">S??</span>
                </RadioButton>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                <RadioButton
                  name="meEjercenControlMoralComoFisico"
                  label="no"
                  {...formulario.getFieldProps('meEjercenControlMoralComoFisico')}
                >
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

PasoCincoObligadoSolidarioPM.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoCincoObligadoSolidarioPM;
