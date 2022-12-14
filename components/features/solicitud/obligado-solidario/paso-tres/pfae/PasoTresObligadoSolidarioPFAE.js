/* eslint-disable complexity */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '../../../../../shared/text-field/TextField';
import RadioButton from '../../../../../shared/radio-button/RadioButton';
import Tooltip from '../../../../../shared/tooltip/Tooltip';
import { campoRequerido } from '../../../../../../constants/errors';
import { PASO_CUATRO_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';

const PasoTresObligadoSolidarioPFAE = ({ validate }) => {
  const { obligadoSolidario, currentStep } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      tieneDepositosEInversiones: obligadoSolidario.tieneDepositosEInversiones,
      sumaDepositosEInversiones: obligadoSolidario.sumaDepositosEInversiones,
    },
    validationSchema: Yup.object().shape({
      tieneDepositosEInversiones: Yup.string().required(campoRequerido),
      sumaDepositosEInversiones: Yup.string().when('tieneDepositosEInversiones', {
        is: 'si',
        then: Yup.string().required(campoRequerido),
        otherwise: Yup.string().notRequired(),
      }),
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

  const [handleSubmit] = useOnChangePage(formulario, PASO_CUATRO_OBLIGADO_SOLIDARIO_ROUTE, validate);

  return (
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud ">
          <div className="container p-0">
            <form onSubmit={handleSubmit} noValidate>
              <p className="color-dark-gray sub">
                ??Tienes cuentas con dep??sitos e inversiones l??quidas? <Tooltip message="..." />
              </p>
              <div className="row">
                <div className="col-md-2 col-xs-4">
                  <RadioButton
                    name="tieneDepositosEInversiones"
                    label="si"
                    {...formulario.getFieldProps('tieneDepositosEInversiones')}
                  >
                    <span className="input color-gray">S??</span>
                  </RadioButton>
                </div>
                <div className="col-md-6 col-xs-4">
                  <RadioButton
                    name="tieneDepositosEInversiones"
                    label="no"
                    {...formulario.getFieldProps('tieneDepositosEInversiones')}
                  >
                    <span className="input color-gray">No</span>
                  </RadioButton>
                </div>
              </div>
              {formulario.values.tieneDepositosEInversiones === 'si' && (
                <div className="row no-gutters mt-3">
                  <p className="color-dark-gray sub">??Cual es la suma total de los dep??sitos e inversiones l??quidas?</p>
                  <div className="col-md-7 col-xs-12">
                    <TextField
                      name="sumaDepositosEInversiones"
                      maxlength={11}
                      type="phone"
                      size="big"
                      label="$.00"
                      format="money"
                      {...formulario.getFieldMeta('sumaDepositosEInversiones')}
                      {...formulario.getFieldHelpers('sumaDepositosEInversiones')}
                    />
                  </div>
                </div>
              )}
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
    </>
  );
};

PasoTresObligadoSolidarioPFAE.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoTresObligadoSolidarioPFAE;
