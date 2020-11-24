/* eslint-disable complexity */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import { longitudMaxima, campoRequerido, longitudMinima } from '../../../../../constants/errors';

const StepFour = () => {
  const { currentStep, datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const { initialValues, validationSchema } = {
    initialValues: {
      primerNombreRecibe: datosEmpresa.primerNombreRecibe,
      segundoNombreRecibe: datosEmpresa.segundoNombreRecibe,
      primerApellidoRecibe: datosEmpresa.primerApellidoRecibe,
      segundoApellidoRecibe: datosEmpresa.segundoApellidoRecibe,
      celularRecibe: datosEmpresa.celularRecibe,
    },
    validationSchema: Yup.object({
      primerNombreRecibe: Yup.string().required(campoRequerido),
      primerApellidoRecibe: Yup.string().required(campoRequerido),
      segundoApellidoRecibe: Yup.string().required(campoRequerido),
      celularRecibe: Yup.string().min(12, longitudMinima).max(12, longitudMaxima).required(campoRequerido),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { ...currentStep, step: '4' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/5');
    },
    validateOnMount: true,
  });

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud ">
        <div className="container p-0 ">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="color-dark-gray sub">
              Por favor compártenos el nombre de una persona que pudiera recibir tu Token BanCoppel en caso de que tú no
              estuvieras en el domicilio que nos diste.
            </p>

            <div className="row no-gutters">
              <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                <TextField
                  name="primerNombreRecibe"
                  format="uppercase"
                  maxlength={12}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="Nombre"
                />
              </div>
              <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                <TextField
                  name="segundoNombreRecibe"
                  format="uppercase"
                  maxlength={60}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="Nombre"
                  optional
                />
              </div>
              <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                <TextField
                  name="primerApellidoRecibe"
                  format="uppercase"
                  maxlength={20}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="Apellido paterno"
                />
              </div>
              <div className="col-lg-6 col-md-6  col-xs-12 pr-lg-2 pr-md-2 pb-sm-3 pb-xs-3">
                <TextField
                  name="segundoApellidoRecibe"
                  format="uppercase"
                  formulario={formulario}
                  maxlength={20}
                  type="text"
                  size="big"
                  label="Apellido materno"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                <p className="d-none d-md-block  input color-gray">Su número es</p>
                <p className="d-block d-sm-none  input color-gray">Mi número es</p>
              </div>
              <div className="col-lg-5 col-md-5 col-xs-12 pb-sm-3 pb-xs-3">
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
    </div>
  );
};
export default StepFour;
