import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import TextField from '../../../../../../shared/text-field/TextField';
import { campoRequerido, longitudMaxima } from '../../../../../../../constants/errors';

const PasoUnoDictamenJuridico = () => {
  const formulario = useFormik({
    initialValues: {
      primerNombre: 'nombre',
      segundoNombre: 'david',
    },
    validationSchema: Yup.object().shape({
      primerNombre: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
      segundoNombre: Yup.string().max(60, longitudMaxima),
    }),
    onSubmit: () => {},
  });

  return (
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col-5">
          <div className="card-simple-blue-light">card en proceso</div>
        </div>
        <div className="col-7">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="color-dark-gray sub">Datos clientes</p>

            <TextField
              name="primerNombre"
              format="uppercase"
              maxlength={60}
              type="text"
              size="small"
              label="Nombre"
              {...formulario.getFieldMeta('primerNombre')}
              {...formulario.getFieldHelpers('primerNombre')}
            />
            <TextField
              name="segundoNombre"
              format="uppercase"
              maxlength={60}
              type="text"
              size="small"
              label="Nombre"
              optional
              {...formulario.getFieldMeta('segundoNombre')}
              {...formulario.getFieldHelpers('segundoNombre')}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasoUnoDictamenJuridico;
