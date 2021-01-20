import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import Select from '../../../../shared/select/Select';
import TextField from '../../../../shared/text-field/TextField';

import { regexRFCMoral } from '../../../../../constants/regex';
import {
  longitudMaxima,
  campoRequerido,
  longitudMinima,
  rfcInvalido,
  numeroMaximo,
  numeroMinimo,
} from '../../../../../constants/errors';

const StepSix = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { datosEmpresa } = useSelector((state) => state.solicitud);

  const subformValidationSchema = Yup.object().shape({
    nombreNegocio: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    rfc: Yup.string().trim().matches(regexRFCMoral, rfcInvalido).min(12, longitudMinima).required(campoRequerido),
    porcentajeDirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
    porcentajeIndirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
  });

  const { initialValues, validationSchema } = {
    initialValues: {
      controladosMoral: [],
      ejerceControlMoral: null,
      cantidadEjerceControl: null,
    },
    validationSchema: Yup.object().shape({
      ejerceControlMoral: Yup.string().required(campoRequerido),
      controladosMoral: Yup.array().of(subformValidationSchema),
    }),
  };

  const items = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
  ];

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'preguntas', step: '7' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/7');
    },
  });

  useEffect(() => {
    if (formulario.values.ejerceControlMoral === 'si') {
      formulario.setFieldValue(
        'controladosMoral',
        [...Array(formulario.values.cantidadEjerceControl.value).keys()].map(() => ({
          nombreNegocio: '',
          rfc: '',
          porcentajeDirecto: '',
          porcentajeIndirecto: '',
        }))
      );
    } else {
      formulario.setFieldValue('controladosMoral', []);
    }
  }, [formulario.values.ejerceControlMoral, formulario.values.cantidadEjerceControl]);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container px-xs-0 px-md-3">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="sub color-dark-gray">
              Cuéntanos, ¿Existe una persona moral sobre la que tú ejerces control?
              <Tooltip message="..." />
            </p>
            <div className="d-flex">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8  pl-xs-0 pl-md-3">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="si">
                  <div className="d-flex">
                    <div className="input  mt-xs-4 mt-md-2 pr-xs-0 pr-md-3 color-gray col-8">Sí, son</div>
                    <div className="col-lg-7 col-md-7 col-sm-8 col-xs-8  pl-xs-0 pl-md-3">
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
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mt-xs-4 mt-md-2">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            {formulario.values.controladosMoral.map((value, index) => (
              <div key={value}>
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
                      format="rfcformatter"
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
                  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-3 ">
                    <p className="input color-gray">Directo</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-3  pr-lg-2 pr-md-2">
                    <TextField
                      format="number"
                      name={`controladosMoral[${index}].porcentajeDirecto`}
                      maxlength={60}
                      formulario={formulario}
                      type="text"
                      size="big"
                      label="%"
                    />
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-3">
                    <p className="input color-gray">Indirecto</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-3 pr-lg-2 pr-md-2">
                    <TextField
                      format="number"
                      name={`controladosMoral[${index}].porcentajeIndirecto`}
                      maxlength={60}
                      formulario={formulario}
                      type="text"
                      size="big"
                      label="%"
                    />
                  </div>
                </div>
              </div>
            ))}
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
