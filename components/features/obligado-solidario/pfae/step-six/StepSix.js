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
import useCreateFormArray from '../../../../../hooks/useCreateFormArray';
import { regexRFCFisica } from '../../../../../constants/regex';
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

  const { pfae } = useSelector((state) => state.obligado);

  const subformValidationSchema = Yup.object().shape({
    nombreNegocio: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    rfc: Yup.string().trim().matches(regexRFCFisica, rfcInvalido).min(13, longitudMinima).required(campoRequerido),
    porcentajeDirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
    porcentajeIndirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
  });

  const { initialValues, validationSchema } = {
    initialValues: {
      controladosMorales: pfae.controladosMorales,
      ejerceControlMoral: pfae.ejerceControlMoral,
      cantidadEjerceControlMoral: pfae.cantidadEjerceControlMoral,
    },
    validationSchema: Yup.object().shape({
      ejerceControlMoral: Yup.string().required(campoRequerido),
      controladosMorales: Yup.array().of(subformValidationSchema),
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
          pfae: { ...pfae, ...values },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/7');
    },
  });

  useCreateFormArray(
    formulario,
    formulario.values.ejerceControlMoral === 'si',
    [formulario.values.ejerceControlMoral, formulario.values.cantidadEjerceControlMoral],
    {
      nombreNegocio: '',
      rfc: '',
      porcentajeDirecto: '',
      porcentajeIndirecto: '',
    },
    'controladosMorales',
    'cantidadEjerceControlMoral'
  );

  const formControlados = (nameControlador) =>
    formulario.values[nameControlador].map((value, index) => (
      <div key={value}>
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 ">
            <p className="input color-gray">Se llama</p>
          </div>
          <div className="col-lg-9 col-md-7 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
            <TextField
              format="uppercase"
              name={`${nameControlador}[${index}].nombreNegocio`}
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
              name={`${nameControlador}[${index}].rfc`}
              maxlength={13}
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
              name={`${nameControlador}[${index}].porcentajeDirecto`}
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
              name={`${nameControlador}[${index}].porcentajeIndirecto`}
              maxlength={60}
              formulario={formulario}
              type="text"
              size="big"
              label="%"
            />
          </div>
        </div>
      </div>
    ));

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
              <div className="col-md-6 col-xs-8 pl-xs-0 pl-md-1 pr-md-0">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="si">
                  <div className="d-flex">
                    <div className="input mt-xs-4 mt-md-2 color-gray col-5 px-xs-0 pr-md-3">Sí, son</div>
                    <div className="col-md-4 col-xs-6 px-xs-0 px-md-0">
                      <Select
                        name="cantidadEjerceControlMoral"
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
              <div className="col-md-4 col-xs-4 mt-xs-4 mt-md-2 pl-0">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            {formControlados('controladosMorales')}

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
