import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import { longitudMaxima, campoRequerido, longitudMinima } from '../../../../../constants/errors';
import styles from '../../../../shared/validate-password/validate-password.module.scss';

const StepFive = () => {
  const { currentStep, datosEmpresa } = useSelector((state) => state.solicitud);
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues, validationSchema } = {
    initialValues: {
      celular: datosEmpresa.celular,
    },
    validationSchema: Yup.object({
      celular: Yup.string().trim().min(12, longitudMinima).max(12, longitudMaxima).required(campoRequerido),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { ...currentStep, step: '5' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/6');
    },
    validateOnMount: true,
  });

  const checkedButton = () => {
    if (checked === false) {
      setChecked(true);
      setDisabled(true);
    } else {
      setDisabled(false);
      setChecked(false);
    }
  };

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud ">
        <div className="container mt-md-5 pt-md-5 px-xs-0">
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
              <div className="col-lg-12 col-md-6  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                <div className=" py-1 card-simple-gray">
                  <div className="row">
                    <span className={`ml-1 mt-2 ${styles['content-check']}`}>
                      <input
                        id="my-check"
                        className={`${styles['my-check']}`}
                        type="checkbox"
                        onClick={checkedButton}
                      />
                      <label htmlFor="my-check" className={`${styles.label}`}>
                        {' '}
                      </label>
                    </span>
                    <p className="mt-2 col-11">No tengo número de empresa, solo el personal.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
              <button
                type="submit"
                className="cicle-button-blue my-3"
                aria-label="Avanzar"
                disabled={!formulario.isValid || disabled === false}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default StepFive;
