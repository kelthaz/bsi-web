import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import { campoRequerido } from '../../../../../constants/errors';
import styles from '../../../../shared/validate-password/validate-password.module.scss';

const StepSeven = () => {
  const { currentStep, datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues, validationSchema } = {
    initialValues: {
      curp: datosEmpresa.curp,
    },
    validationSchema: Yup.object({
      curp: Yup.string().required(campoRequerido),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'datos-empresa', step: '8' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/8');
    },
    validateOnMount: true,
  });

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud ">
        <div className="container p-0">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className={`color-dark-gray sub ${styles.info}`}>¿Ya tienes una cuenta bancaria en BanCoppel?</p>
            <div className="row no-gutters">
              <div className="col-lg-1 col-md-2  col-xs-2 ">
                <label htmlFor="yes">
                  <input type="radio" name="yes" />
                  &nbsp;Sí
                </label>
              </div>
              <div className="col-lg-1 col-md-2  col-xs-2 ">
                <label htmlFor="no">
                  <input type="radio" id="male" name="no" />
                  &nbsp;No
                </label>
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
    </div>
  );
};
export default StepSeven;
