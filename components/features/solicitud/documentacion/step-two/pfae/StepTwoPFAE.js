import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Tooltip from '../../../../../shared/tooltip/Tooltip';
import RadioButton from '../../../../../shared/radio-button/RadioButton';
import { campoRequerido } from '../../../../../../constants/errors';
import { nextStepObligadoSolidario } from '../../../../../../redux/actions/obligado';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';

const StepTwoPFAE = () => {
  const dispatch = useDispatch();
  const { documentacion, currentStep } = useSelector((state) => state.obligado);
  const { query } = useRouter();
  const validate = currentStep.step === query.step;

  const formulario = useFormik({
    initialValues: {
      ejercenControlMoral: documentacion.ejercenControlMoral,
    },
    validationSchema: Yup.object().shape({
      ejercenControlMoral: Yup.string().required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepObligadoSolidario({
          currentStep: { tab: 'preguntas', step: '6' },
          documentacion: { ...documentacion, ...values },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(
    formulario,
    '/obligado-solidario/[person]/[tab]/[step]',
    formulario.values.ejercenControlMoral === 'no' && formulario.values.ejercenControlFisico === 'no'
      ? '/obligado-solidario/pm/preguntas/6'
      : '/obligado-solidario/pm/preguntas/agradecimiento',
    currentStep
  );

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container">
          <form onSubmit={handleSubmit} noValidate>
            <p className="sub color-dark-gray position-relative">
              ¿Existe una persona moral que ejerce control sobre ti?
              <Tooltip message="..." />
            </p>
            <div className="row">
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                <RadioButton name="ejercenControlMoral" formulario={formulario} value="si">
                  <span className="input color-gray">Sí</span>
                </RadioButton>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-xs-6">
                <RadioButton name="ejercenControlMoral" formulario={formulario} value="no">
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

export default StepTwoPFAE;
