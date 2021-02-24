import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import { campoRequerido } from '../../../../../constants/errors';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { GRACIAS_POR_CONTARNOS_DATOS_EMPRESA_ROUTE } from '../../../../../constants/routes/solicitud/empresa';

const PasoSieteDatosEmpresa = ({ validate }) => {
  const { datosPersonales, datosEmpresa, currentStep } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const { initialValues, validationSchema } = {
    initialValues: {
      tieneCuentaBancoppel: datosEmpresa.tieneCuentaBancoppel,
    },
    validationSchema: Yup.object({
      tieneCuentaBancoppel: Yup.string().required(campoRequerido),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate ? { tab: 'datos-empresa', step: '8' } : { ...currentStep },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, GRACIAS_POR_CONTARNOS_DATOS_EMPRESA_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud ">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
            {datosPersonales.tipoPersona.value === 'MORAL' ? (
              <p className="color-dark-gray sub position-relative">
                ¿La empresa ya tiene una cuenta bancaria en BanCoppel?
                <Tooltip message="De ser así, necesitamos validar tu número de cuenta bancaria BanCoppel (11 dígitos) o tu CLABE (18 dígitos) en la que se te depositaría el crédito en caso de ser aprobado, de lo contrario se te creará una nueva cuenta bancaria." />
              </p>
            ) : (
              <p className="color-dark-gray sub position-relative">
                ¿Ya tienes una cuenta bancaria en BanCoppel?
                <Tooltip message="Necesitamos validar tu número de cuenta bancaria BanCoppel (11 dígitos) o tu CLABE (18 dígitos) en la que se te depositaría el crédito en caso de ser aprobado." />
              </p>
            )}
            <div className="row no-gutters py-3">
              <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
                <RadioButton name="tieneCuentaBancoppel" formulario={formulario} value="si">
                  <p className="input color-gray m-0">Sí</p>
                </RadioButton>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                <RadioButton name="tieneCuentaBancoppel" formulario={formulario} value="no">
                  <p className="input color-gray m-0">No</p>
                </RadioButton>
              </div>
            </div>
            <div className="flex-column-center-config">
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

PasoSieteDatosEmpresa.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoSieteDatosEmpresa;
