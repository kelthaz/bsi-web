import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import { longitudMaxima, campoRequerido } from '../../../../../constants/errors';

const StepOne = () => {
  const { currentStep, datosPersonales } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    initialValues: {
      name: datosPersonales.name,
      secondName: datosPersonales.secondName,
      lastname: datosPersonales.lastname,
      secondLastname: datosPersonales.secondLastname,
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
      secondName: Yup.string().max(60, longitudMaxima),
      lastname: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
      secondLastname: Yup.string().max(60, longitudMaxima),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { ...currentStep, step: '2' },
          datosPersonales: { ...datosPersonales, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-personales/2');
    },
    validateOnMount: true,
  });

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <h2 className="color-blue-storm">Para comenzar</h2>
            <p className="color-dark-gray sub">Cuéntanos, ¿Cómo te llamas?</p>

            <div className="row no-gutters">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                <p className="input color-gray">Mi nombre es</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                <TextField name="name" formulario={formulario} type="text" size="big" label="1º Nombre" />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <TextField
                  name="secondName"
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="2º Nombre"
                  optional
                />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                <TextField name="lastname" formulario={formulario} type="text" size="big" label="Apellido paterno" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <TextField
                  name="secondLastname"
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="Apellido materno"
                  optional
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
    </div>
  );
};
export default StepOne;
