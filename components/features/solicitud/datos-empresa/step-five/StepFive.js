/* eslint-disable complexity */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import { longitudMaxima, campoRequerido, longitudMinima } from '../../../../../constants/errors';
import styles from '../../../../shared/validate-password/validate-password.module.scss';

const StepFive = () => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues, validationSchema } = {
    initialValues: {
      nombre: datosPersonales.nombre,
      celular: datosPersonales.celular,
    },
    validationSchema: Yup.object({
      nombre: Yup.string().trim().required(campoRequerido),
      celular: Yup.string().trim().min(12, longitudMinima).max(12, longitudMaxima).required(campoRequerido),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { ...currentStep, step: '4' },
          datosPersonales: { ...datosPersonales, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/5');
    },
    validateOnMount: true,
  });

  return (
    <div className="container mt-md-5 pt-md-5 px-xs-0">
      <div className="contedor-solicitud ">
        <form onSubmit={formulario.handleSubmit} noValidate>
          <p className={`color-dark-gray sub ${styles.info}`}>¿Cuál es el teléfono de tu empresa?</p>
          <div className="row no-gutters">
            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 ">
              <p className="input color-gray">Nos pueden contactar al</p>
            </div>
            <div className="col-lg-5 col-md-6  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
              <TextField
                name="celular"
                formulario={formulario}
                type="tel"
                size="big"
                label="55-9999-9999"
                format="phone"
                maxlength={12}
              />
            </div>
          </div>
          <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
            <button
              type="submit"
              className="cicle-button-blue my-3"
              aria-label="Avanzar"
              disabled={!formulario.isValid}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default StepFive;
