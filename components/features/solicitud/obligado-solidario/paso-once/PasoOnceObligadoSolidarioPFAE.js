import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import TextField from '../../../../shared/text-field/TextField';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';
import { campoRequerido, declararTerminos } from '../../../../../constants/errors';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { AGRADECIMIENTO_COMPLETO_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../constants/routes/solicitud/obligado';

const PasoOnceObligadoSolidarioPFAE = ({ validate }) => {
  const { obligadoSolidario, currentStep } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

  const formulario = useFormik({
    initialValues: {
      tienePrestamoHipotecario: obligadoSolidario.tienePrestamoHipotecario,
      tieneCreditoAutomotriz: obligadoSolidario.tieneCreditoAutomotriz,
      eresTitularTarjetaCredito: obligadoSolidario.eresTitularTarjetaCredito,
      tarjetaCreditoTerminacion: obligadoSolidario.tarjetaCreditoTerminacion,
      autorizacionConsultar: obligadoSolidario.autorizacionConsultar,
    },
    validationSchema: Yup.object().shape({
      tienePrestamoHipotecario: Yup.string().nullable().required(campoRequerido),
      tieneCreditoAutomotriz: Yup.string().required(campoRequerido),
      eresTitularTarjetaCredito: Yup.string().required(campoRequerido),
      tarjetaCreditoTerminacion: Yup.string().when('eresTitularTarjetaCredito', {
        is: 'si',
        then: Yup.string().required(campoRequerido),
        otherwise: Yup.string().notRequired(),
      }),
      autorizacionConsultar: Yup.boolean().oneOf([true], declararTerminos),
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

  const [handleSubmit] = useOnChangePage(formulario, AGRADECIMIENTO_COMPLETO_OBLIGADO_SOLIDARIO_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container px-md-3 px-xs-0">
          <form onSubmit={handleSubmit} noValidate>
            <p className="sub color-dark-gray pb-md-3">
              Finalmente, requerimos conocer un poco de tu Buró de Crédito por lo que necesitamos tu autorización para
              consultarlo con tres preguntas:
            </p>
            <p className="sub color-dark-gray">¿Tienes un préstamo hipotecario?</p>
            <div className="row no-gutters">
              <div className="col-md-2 col-xs-4">
                <RadioButton name="tienePrestamoHipotecario" formulario={formulario} value="si">
                  <span className="input color-gray">Sí</span>
                </RadioButton>
              </div>
              <div className="col-md-6 col-xs-4">
                <RadioButton name="tienePrestamoHipotecario" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            <p className="mt-md-4 mt-xs-4 sub color-dark-gray">¿Tienes un crédito automotriz?</p>
            <div className="row no-gutters">
              <div className="col-md-2 col-xs-4">
                <RadioButton name="tieneCreditoAutomotriz" formulario={formulario} value="si">
                  <span className="input color-gray">Sí</span>
                </RadioButton>
              </div>
              <div className="col-md-6 col-xs-4">
                <RadioButton name="tieneCreditoAutomotriz" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            <p className="mt-md-4 mt-xs-4 sub color-dark-gray">¿Eres titular de una tarjeta de crédito?</p>

            <div className="row no-gutters">
              <div className="col-md-5 pr-0">
                <RadioButton name="eresTitularTarjetaCredito" formulario={formulario} value="si">
                  <span className="input color-gray">Sí, terminación</span>
                </RadioButton>
              </div>
              <div className="d-none d-sm-block col-md-3 col-xs-12 px-md-0">
                <TextField
                  maxlength={4}
                  name="tarjetaCreditoTerminacion"
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="1234"
                />
              </div>
              <div className="col-md-2 col-xs-4 pl-3">
                <RadioButton name="eresTitularTarjetaCredito" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            <div className="row">
              <div className="d-block d-sm-none col-xs-12 px-md-0 mt-3">
                <TextField
                  maxlength={4}
                  name="tarjetaCreditoTerminacion"
                  formulario={formulario}
                  type="text"
                  size="small"
                  label="Terminación"
                />
              </div>
            </div>
            <div className="row no-gutters">
              <CheckTextBox isGrayColor notBackground={false} name="autorizacionConsultar" formulario={formulario}>
                <p className="body3 ml-1">
                  Autorizo a partir de este momento a BanCoppel, S.A., Institución de Banca Múltiple a consultar por
                  única ocasión mis antecedentes crediticios ante las Sociedades de Información Crediticia que estime
                  conveniente, declarando que conoce la naturaleza, alcance y uso que BanCoppel, S.A., Institución de
                  Banca Múltiple hará de tal información.
                </p>
              </CheckTextBox>
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

PasoOnceObligadoSolidarioPFAE.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoOnceObligadoSolidarioPFAE;
