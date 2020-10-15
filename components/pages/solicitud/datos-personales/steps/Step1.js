import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '../../../../shared/text-field/TextField';

const Step1 = () => {
  const formulario = useFormik({
    initialValues: {
      name: '',
      secondName: '',
      lastname: '',
      secondLastname: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, 'Must be 15 characters or less').required('Campo requerido'),
      secondName: Yup.string().max(15, 'Must be 15 characters or less'),
      lastname: Yup.string().max(15, 'Must be 15 characters or less').required('Campo requerido'),
      secondLastname: Yup.string().max(15, 'Must be 15 characters or less').required('Campo requerido'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form>
      <h2 className="color-blue-storm">Para comenzar</h2>
      <p className="color-dark-gray sub">Cuéntanos, ¿Cómo te llamas?</p>

      <div className="row no-gutters">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <p className="input color-gray">Mi nombre es</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
          <TextField name="name" formulario={formulario} type="text" size="big" label="Nombre" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <TextField name="secondName" formulario={formulario} type="text" size="big" label="Nombre" optional />
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
          <TextField name="lastname" formulario={formulario} type="text" size="big" label="Apellido paterno" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <TextField name="secondLastname" formulario={formulario} type="text" size="big" label="Apellido materno" />
        </div>
      </div>
      <div className="flex-column-center-config">
        <button type="button" className="cicle-button-blue my-3" aria-label="Avanzar" />
      </div>
    </form>
  );
};
export default Step1;
