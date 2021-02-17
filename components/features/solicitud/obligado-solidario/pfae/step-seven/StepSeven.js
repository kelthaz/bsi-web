import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Tooltip from '../../../../../shared/tooltip/Tooltip';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import RadioButton from '../../../../../shared/radio-button/RadioButton';
import { campoRequerido } from '../../../../../../constants/errors';

const StepSeven = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { pfae } = useSelector((state) => state.obligado);

  const { initialValues, validationSchema } = {
    initialValues: {},
    validationSchema: Yup.object().shape({
      ejerceControlMoral: Yup.string().required(campoRequerido),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'obligado-solidario', step: '8' },
          pfae: { ...pfae, ...values },
        })
      );
      if (formulario.values.ejerceControlMoral === 'no') {
        router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/8');
      } else {
        router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/gracias');
      }
    },
  });
  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="sub color-dark-gray">
              ¿Existe una persona moral que ejerce control sobre ti?
              <Tooltip message="..." />
            </p>
            <div className="d-flex">
              <div className="col-md-2 col-xs-4 pl-0">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="si">
                  <span className="input color-gray">Sí</span>
                </RadioButton>
              </div>
              <div className="col-md-6 col-xs-6">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
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

export default StepSeven;
