import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { campoRequerido, longitudMaxima, seleccionOpcion } from '../../../../../constants/errors';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import Select from '../../../../shared/select/Select';
import TextArea from '../../../../shared/text-area/TextArea';
import TextField from '../../../../shared/text-field/TextField';
import Tooltip from '../../../../shared/tooltip/Tooltip';

const StepTwo = () => {
  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();

  const formulario = useFormik({
    initialValues: {
      usoCredito: datosEmpresa.usoCredito,
      descripcionCredito: datosEmpresa.descripcionCredito,
    },
    validationSchema: Yup.object({
      usoCredito: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
      descripcionCredito: Yup.string().trim().max(180, longitudMaxima).required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'datos-empresa', step: '2' },
          datosEmpresa: {
            ...datosEmpresa,
            ...values,
          },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/2');
    },
  });

  const { values, setFieldTouched, setFieldValue, touched } = formulario;

  const handleUsoCredito = (usoCredito) => {
    if (!touched.usoCredito) {
      setFieldTouched('usoCredito', true);
    }
    setFieldValue('usoCredito', usoCredito);
  };

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="color-dark-gray sub">
              Por favor compártenos tu domicilio fiscal.&nbsp;
              <Tooltip message="Es el domicilio con el que tu negocio está registrado ante el SAT." />
            </p>

            <div className="row no-gutters">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <TextField
                  name="razonSocial"
                  maxlength={120}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="Razón social"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <TextField
                  name="razonSocial"
                  maxlength={120}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="Razón social"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <TextField
                  name="razonSocial"
                  maxlength={120}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="Razón social"
                />
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                <TextField
                  name="razonSocial"
                  maxlength={120}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="Razón social"
                />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <Select
                  name="razonSocial"
                  maxlength={120}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="Razón social"
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <TextField
                  name="razonSocial"
                  maxlength={120}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="Razón social"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <Select
                  name="razonSocial"
                  maxlength={120}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="Razón social"
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <TextField
                  name="razonSocial"
                  maxlength={120}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="Razón social"
                />
              </div>
            </div>

            <p className="color-gray-dark body2">¿Éste es también tu domicilio comercial?</p>

            <div className="row">
              <TextArea
                name="descripcionCredito"
                maxlength={180}
                formulario={formulario}
                label="Platícanos un poco más sobre qué harás con este crédito..."
              />
            </div>
            <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
              <button
                type="submit"
                className="cicle-button-blue my-3"
                aria-label="Avanzar"
                disabled={!(formulario.isValid && formulario.dirty)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
