import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { nextStepDatosPersonales } from '../../../../redux/actions/solicitud';
import RadioButton from '../../../shared/radio-button/RadioButton';
import Select from '../../../shared/select/Select';
import TextField from '../../../shared/text-field/TextField';

import {
  regexUpperAndLowerCase,
  regexNoConsecutives,
  regexMinOneNumber,
  regexRFCFisica,
  regexRFCMoral,
} from '../../../../constants/regex';
import {
  longitudMaxima,
  campoRequerido,
  longitudMinima,
  lowerUpperCase,
  noConsecutives,
  minOneNumber,
  aceptarTerminos,
  rfcInvalido,
} from '../../../../constants/errors';
import { array } from 'yup/lib/locale';

const StepThree = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formEjerceControlMap, setFormEjerceControlMap] = useState([]);

  const { datosPersonales, datosEmpresa } = useSelector((state) => state.solicitud);

  const subformValidationSchema = Yup.object().shape({
    nombreNegocio: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    rfc: Yup.string()
            .trim()
            .matches(datosPersonales.tipoPersona === 'Persona Moral' ? regexRFCMoral : regexRFCFisica, rfcInvalido)
            .min(datosPersonales.tipoPersona === 'Persona Moral' ? 12 : 13, longitudMinima)
            .required(campoRequerido),
    porcentajeDirecto: Yup.number().max(100).min(0),
    porcentajeIndirecto: Yup.number().max(100).min(0)
  });

  const { initialValues, validationSchema } = {
    initialValues: {
      controladosMoral: [
        {
          nombreNegocio: '',
          rfc: '',
          porcentajeDirecto: '',
          porcentajeIndirecto: ''
        },
        {
          nombreNegocio: '',
          rfc: '',
          porcentajeDirecto: '',
          porcentajeIndirecto: ''
        },
        {
          nombreNegocio: '',
          rfc: '',
          porcentajeDirecto: '',
          porcentajeIndirecto: ''
        },
        {
          nombreNegocio: '',
          rfc: '',
          porcentajeDirecto: '',
          porcentajeIndirecto: ''
        },
        {
          nombreNegocio: '',
          rfc: '',
          porcentajeDirecto: '',
          porcentajeIndirecto: ''
        }
      ]
      // ejerceControlMoral: 'no'
    },
    validationSchema: Yup.object().shape({
      controladosMoral: array().of(subformValidationSchema)
    }),
  };

  const items = [
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
    {label: '5', value: 5}
  ];

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'documentacion', step: '3' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/4');
    },
    validateOnMount: true,
  });

  const formEjerceControl = (amount) => {
    const arr = [];
    for (let index = 0; index < amount; index++) {
      // formulario.values.controladosMoral.push({
      //   nombreNegocio: '',
      //   rfc: '',
      //   porcentajeDirecto: '',
      //   porcentajeIndirecto: ''
      // });
      arr.push(
        <section key={index}>
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 ">
              <p className="input color-gray">Se llama</p>
            </div>
            <div className="col-lg-9 col-md-7 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
              <TextField
                format="uppercase"
                name={`controladosMoral[${index}].nombreNegocio`}
                maxlength={60}
                formulario={formulario}
                type="text"
                size="big"
                label="Nombre del negocio"
              />
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-2 col-md-4 col-sm-12 col-xs-12 ">
              <p className="input color-gray">RFC</p>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
              <TextField
                format="uppercase"
                name={`controladosMoral[${index}].rfc`}
                maxlength={60}
                formulario={formulario}
                type="text"
                size="big"
                label="Ej. TLF280693H17"
              />
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p className="input color-gray">Porcentaje de control</p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 ">
              <p className="input color-gray">Directo</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
              <TextField
                format="uppercase"
                name={`controladosMoral[${index}].porcentajeDirecto`}
                maxlength={60}
                formulario={formulario}
                type="text"
                size="big"
                label="%"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
              <p className="input color-gray">Indirecto</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
              <TextField
                format="uppercase"
                name={`controladosMoral[${index}].porcentajeIndirecto`}
                maxlength={60}
                formulario={formulario}
                type="text"
                size="big"
                label="%"
              />
            </div>
          </div>
        </section>
      );
    }
    return arr;
  };

  useEffect(() => {
    if (formulario.values.ejerceControlMoral === 'si') {
      setFormEjerceControlMap(formEjerceControl(formulario.values.cantidadEjerceControl.value));
    } else {
      setFormEjerceControlMap([]);
    }
  }, [formulario.values.ejerceControlMoral, formulario.values.cantidadEjerceControl]);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container ">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="body2">
              Ahora vamos a realizarte unas preguntas que nos deberás contestar como Persona
              Moral ({datosPersonales.nombreEmpresa}) y como Persona Física ({datosPersonales.primerNombre})
            </p>
            <p className="sub color-blue-storm">
              <img src="/requisitos/PM.svg" alt="Persona moral"/>
              Respondiendo como: {datosPersonales.nombreEmpresa} (Persona Moral)
            </p>
            <p className="sub color-dark-gray">
              ¿Existe una persona moral sobre la que tú ejerces control?
            </p>
            <div className="d-flex">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="si">
                  <div className="d-flex">
                    <div className="input color-gray col-8">Sí, son</div>
                    <div className="col-lg-7 col-md-7 col-sm-8 col-xs-8">
                      <Select
                        name="cantidadEjerceControl"
                        formulario={formulario}
                        size="big"
                        items={items}
                        defaultValue={0}
                        disabled={formulario.values.ejerceControlMoral !== 'si'}
                        label=""
                      />
                    </div>
                  </div>
                </RadioButton>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <RadioButton
                  name="ejerceControlMoral"
                  formulario={formulario}
                  value="no"
                >
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            {
              formEjerceControlMap.map((form) => <>{form}</>)
                                  .reduce((acc, x) => acc === null ? x : <>{acc} <hr /> {x}</>, null)
            }
            <p className="sub color-blue-storm">
              <img src="/requisitos/PM.svg" alt="Persona moral"/>
              Respondiendo como: {datosPersonales.primerNombre} (Persona Física)
            </p>
            <p className="sub color-dark-gray">
              ¿Existe una persona moral sobre la que tú ejerces control?
            </p>
            <div className="d-flex">
              <RadioButton name="ejerceControlFisica" formulario={formulario} value="si"><span className="input color-gray">Sí</span></RadioButton>
              <RadioButton name="ejerceControlFisica" formulario={formulario} value="no"><span className="input color-gray">No</span></RadioButton>
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

export default StepThree;
