import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import TextField from '../../../../shared/text-field/TextField';
import CheckTextBox from '../../../../shared/check-text-box/CheckTextBox';

const StepEleven = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { datosPersonales, datosEmpresa } = useSelector((state) => state.solicitud);

  const { initialValues } = {
    initialValues: {},
  };

  const formulario = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'preguntas', step: 'agradecimiento' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/agradecimiento');
    },
  });
  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container px-md-3 px-xs-0">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="sub color-dark-gray pb-md-3">
              Finalmente, requerimos conocer un poco de tu Buró de Crédito por lo que necesitamos tu autorización para
              consultarlo con tres preguntas:
            </p>
            <p className="sub color-dark-gray">¿Tienes un préstamo hipotecario?</p>
            <div className="d-flex">
              <div className="col-md-3 col-xs-4">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="si">
                  <span className="input color-gray">Sí</span>
                </RadioButton>
              </div>
              <div className="col-md-6 col-xs-4">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            <p className="mt-md-4 mt-xs-4 sub color-dark-gray">¿Tienes un crédito automotriz?</p>
            <div className="d-flex">
              <div className="col-md-3 col-xs-4">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="si">
                  <span className="input color-gray">Sí</span>
                </RadioButton>
              </div>
              <div className="col-md-6 col-xs-4">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            <p className="mt-md-4 mt-xs-4 sub color-dark-gray">¿Eres titular de una tarjeta de crédito?</p>
            <div className="d-flex">
              <div className="col-md-8 col-xs-6">
                <div className="row">
                  <div className="col-md-8 pr-0">
                    <RadioButton name="ejerceControlMoral" formulario={formulario} value="si">
                      <span className="input color-gray">Sí, terminación</span>
                    </RadioButton>
                  </div>
                  <div className="col-md-3 col-xs-12 px-md-0">
                    <TextField name="terminacion" formulario={formulario} type="text" size="big" label="1234" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-6 mt-xs-2">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            <div className="card-simple-blue-light list-onboarding">
              <CheckTextBox isGrayColor notBackground={false} name="aceptar" formulario={formulario}>
                <p className="body3 ml-1 ">
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
                disabled={!formulario.dirty}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepEleven;
