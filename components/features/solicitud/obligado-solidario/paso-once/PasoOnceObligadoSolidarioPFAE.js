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
              Finalmente, requerimos conocer un poco de tu Bur?? de Cr??dito por lo que necesitamos tu autorizaci??n para
              consultarlo con tres preguntas:
            </p>
            <p className="sub color-dark-gray">??Tienes un pr??stamo hipotecario?</p>
            <div className="row no-gutters">
              <div className="col-md-2 col-xs-4">
                <RadioButton
                  name="tienePrestamoHipotecario"
                  label="si"
                  {...formulario.getFieldProps('tienePrestamoHipotecario')}
                >
                  <span className="input color-gray">S??</span>
                </RadioButton>
              </div>
              <div className="col-md-6 col-xs-4">
                <RadioButton
                  name="tienePrestamoHipotecario"
                  label="no"
                  {...formulario.getFieldProps('tienePrestamoHipotecario')}
                >
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            <p className="mt-md-4 mt-xs-4 sub color-dark-gray">??Tienes un cr??dito automotriz?</p>
            <div className="row no-gutters">
              <div className="col-md-2 col-xs-4">
                <RadioButton
                  name="tieneCreditoAutomotriz"
                  label="si"
                  {...formulario.getFieldProps('tieneCreditoAutomotriz')}
                >
                  <span className="input color-gray">S??</span>
                </RadioButton>
              </div>
              <div className="col-md-6 col-xs-4">
                <RadioButton
                  name="tieneCreditoAutomotriz"
                  label="no"
                  {...formulario.getFieldProps('tieneCreditoAutomotriz')}
                >
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            <p className="mt-md-4 mt-xs-4 sub color-dark-gray">??Eres titular de una tarjeta de cr??dito?</p>

            <div className="row no-gutters">
              <div className="col-md-5 pr-0">
                <RadioButton
                  name="eresTitularTarjetaCredito"
                  label="si"
                  {...formulario.getFieldProps('eresTitularTarjetaCredito')}
                >
                  <span className="input color-gray">S??, terminaci??n</span>
                </RadioButton>
              </div>
              <div className="d-none d-sm-block col-md-3 col-xs-12 px-md-0">
                <TextField
                  name="tarjetaCreditoTerminacion"
                  maxlength={4}
                  type="text"
                  size="big"
                  label="1234"
                  {...formulario.getFieldMeta('tarjetaCreditoTerminacion')}
                  {...formulario.getFieldHelpers('tarjetaCreditoTerminacion')}
                />
              </div>
              <div className="col-md-2 col-xs-4 pl-3">
                <RadioButton
                  name="eresTitularTarjetaCredito"
                  label="no"
                  {...formulario.getFieldProps('eresTitularTarjetaCredito')}
                >
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            <div className="row">
              <div className="d-block d-sm-none col-xs-12 px-md-0 mt-3">
                <TextField
                  name="tarjetaCreditoTerminacion"
                  maxlength={4}
                  type="text"
                  size="small"
                  label="Terminaci??n"
                  {...formulario.getFieldMeta('tarjetaCreditoTerminacion')}
                  {...formulario.getFieldHelpers('tarjetaCreditoTerminacion')}
                />
              </div>
            </div>
            <div className="row no-gutters">
              <CheckTextBox name="autorizacionConsultar" formulario={formulario}>
                <p className="body3 ml-1">
                  Autorizo a partir de este momento a BanCoppel, S.A., Instituci??n de Banca M??ltiple a consultar por
                  ??nica ocasi??n mis antecedentes crediticios ante las Sociedades de Informaci??n Crediticia que estime
                  conveniente, declarando que conoce la naturaleza, alcance y uso que BanCoppel, S.A., Instituci??n de
                  Banca M??ltiple har?? de tal informaci??n.
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
