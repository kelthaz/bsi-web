import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { nextStepDatosPersonales } from '../../../../redux/actions/solicitud';
import RadioButton from '../../../shared/radio-button/RadioButton';
import Select from '../../../shared/select/Select';
import TextField from '../../../shared/text-field/TextField';

const StepFour = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formEjerceControlMap, setFormEjerceControlMap] = useState([]);

  const { datosPersonales, datosEmpresa } = useSelector((state) => state.solicitud);

  const { initialValues, validationSchema } = {
    initialValues: {
      // ejerceControlMoral: 'no'
    },
    validationSchema: Yup.object().shape({
      // primerNombreDoc: Yup.string().max(60, 10).required('campoRequerido'),
    }),
  };

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: '4' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/gracias');
    },
    validateOnMount: true,
  });

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container ">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="sub color-blue-storm">
              <img src="/requisitos/PM.svg" alt="Persona moral"/>
              Respondiendo como: {datosPersonales.nombreEmpresa} (Persona Moral)
            </p>
            <p className="sub color-dark-gray">
              ¿Existe una persona moral que ejerce control sobre ti?
            </p>
            <div className="d-flex">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="si">
                  <span className="input color-gray">Sí</span>
                </RadioButton>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            <p className="sub color-blue-storm">
              <img src="/requisitos/PM.svg" alt="Persona moral"/>
              Respondiendo como: {datosPersonales.primerNombre} (Persona Física)
            </p>
            <p className="sub color-dark-gray">
              ¿Existe una persona moral que ejerce control sobre ti?
            </p>
            <div className="d-flex">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <RadioButton name="ejerceControlFisica" formulario={formulario} value="si">
                  <span className="input color-gray">Sí</span>
                </RadioButton>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <RadioButton name="ejerceControlFisica" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>

            <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
              <button
                type="submit"
                className="cicle-button-blue my-3"
                aria-label="Avanzar"
                disabled={!(formulario.isValid)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
