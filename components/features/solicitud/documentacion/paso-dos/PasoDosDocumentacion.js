import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import { campoRequerido } from '../../../../../constants/errors';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { regexMultipleSpaces } from '../../../../../constants/regex';
import {
  PASO_TRES_DOCUMENTACION_ROUTE,
  GRACIAS_DOCUMENTACION_ROUTE,
} from '../../../../../constants/routes/solicitud/documentacion';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import { MORAL } from '../../../../../constants/persona';
import SvgPersonaMoral from '../../../../svgs/SvgPersonaMoral';
import SvgPersona from '../../../../svgs/SvgPersona';

const PasoDosDocumentacionPM = ({ validate }) => {
  const dispatch = useDispatch();
  const { documentacion, currentStep, datosPersonales } = useSelector((state) => state.solicitud);

  const nombrePersonaFisica = `${datosPersonales.primerNombre} ${datosPersonales.segundoNombre} ${datosPersonales.primerApellido} ${datosPersonales.segundoApellido}`.replace(
    regexMultipleSpaces,
    ' '
  );
  const nombrePersonaMoral = `${datosPersonales.razonSocial} ${datosPersonales.tipoSociedad?.label}`;

  const { initialValues, validationSchema } = {
    initialValues: {
      meEjercenControlMoralComoFisico: documentacion.meEjercenControlMoralComoFisico,
    },
    validationSchema: {
      meEjercenControlMoralComoFisico: Yup.string().required(campoRequerido),
    },
  };

  if (datosPersonales.tipoPersona === MORAL) {
    initialValues.meEjercenControlMoralComoMoral = documentacion.meEjercenControlMoralComoMoral;
    validationSchema.meEjercenControlMoralComoMoral = Yup.string().required(campoRequerido);
  }

  const formulario = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema: Yup.object().shape({
      ...validationSchema,
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

  const [handleSubmit] = useOnChangePage(
    formulario,
    formulario.values.meEjercenControlMoralComoMoral === 'si' ||
      formulario.values.meEjercenControlMoralComoFisico === 'si'
      ? GRACIAS_DOCUMENTACION_ROUTE
      : PASO_TRES_DOCUMENTACION_ROUTE,
    currentStep
  );

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container">
          <form onSubmit={handleSubmit} noValidate>
            {datosPersonales.tipoPersona === MORAL ? (
              <>
                <div className="row d-flex flex-row align-items-center pb-2">
                  <div className="col-xs-2 col-md-1">
                    <SvgPersonaMoral />
                  </div>
                  <div className="col-xs-10 col-md-11">
                    <p className="sub color-blue-storm m-0">Respondiendo como: {nombrePersonaMoral} (Persona Moral)</p>
                  </div>
                </div>

                <p className="sub color-dark-gray position-relative">
                  ¿Existe una persona moral que ejerce control sobre ti?
                  <Tooltip message="..." />
                </p>
                <div className="row">
                  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                    <RadioButton
                      name="meEjercenControlMoralComoMoral"
                      label="si"
                      {...formulario.getFieldProps('meEjercenControlMoralComoMoral')}
                    >
                      <span className="input color-gray">Sí</span>
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

                <div className="row d-flex flex-row align-items-center pb-2">
                  <div className="col-xs-2 col-md-1">
                    <SvgPersona />
                  </div>
                  <div className="col-xs-10 col-md-11">
                    <p className="sub color-blue-storm m-0">
                      Respondiendo como: {nombrePersonaFisica} (Representante legal)
                    </p>
                  </div>
                </div>

                <p className="sub color-dark-gray">¿Existe una persona moral que ejerce control sobre ti?</p>
              </>
            ) : (
              <p className="sub color-dark-gray position-relative">
                ¿Existe una persona moral que ejerce control sobre ti?
                <Tooltip message="..." />
              </p>
            )}

            <div className="row">
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                <RadioButton
                  name="meEjercenControlMoralComoFisico"
                  label="si"
                  {...formulario.getFieldProps('meEjercenControlMoralComoFisico')}
                >
                  <span className="input color-gray">Sí</span>
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

PasoDosDocumentacionPM.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoDosDocumentacionPM;
