import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import Select from '../../../../shared/select/Select';
import { campoRequerido } from '../../../../../constants/errors';
import styles from '../../../../shared/validate-password/validate-password.module.scss';

const StepSix = () => {
  const { currentStep, datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();
  const items = [
    { value: 1, label: '40 a 60' },
    { value: 2, label: '60 a 80' },
  ];

  const { initialValues, validationSchema } = {
    initialValues: {
      amountPeople: datosEmpresa.amountPeople,
    },
    validationSchema: Yup.object({
      amountPeople: Yup.string().required(campoRequerido),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { ...currentStep, step: '6' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/7');
    },
    validateOnMount: true,
  });

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud ">
        <div className="container p-0">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className={`color-dark-gray sub ${styles.info}`}>¿Cuántos empleados tiene la empresa?</p>
            <div className="row no-gutters">
              <div className="col-lg-1 col-md-1 col-sm-12 col-xs-1 ">
                <p className="input color-gray">De</p>
              </div>
              <div className="col-lg-5 col-md-5  col-xs-11 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                <Select name="amountPeople" label="40 a 60" formulario={formulario} size="big" items={items} />
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
export default StepSix;
