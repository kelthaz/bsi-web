import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';

const StepSeven = () => {
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
      name: Yup.string().max(15, 'Must be 15 characters or less').required('Campo requerido'),
      secondName: Yup.string().max(15, 'Must be 15 characters or less'),
      lastname: Yup.string().max(15, 'Must be 15 characters or less').required('Campo requerido'),
      secondLastname: Yup.string().max(15, 'Must be 15 characters or less'),
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
  });

  return (
    <div className="container">
      <div className="contedor-solicitud">
        <h2 className="color-blue-storm">¡Gracias, Alejandra!</h2>
        <div className="row">
          <div className="col-10">
            <p className="color-dark-gray sub">
              Por favor revisa tu correo electrónico, te hemos enviado un enlace para verificar y activar tu cuenta.
            </p>
          </div>
          <div className="col-2 mb-5">
            <img className="mb-5" src="/ok.svg" alt="Imagen del banner" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StepSeven;
