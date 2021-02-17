import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import RadioButton from '../../../../../shared/radio-button/RadioButton';
import Select from '../../../../../shared/select/Select';
import Tooltip from '../../../../../shared/tooltip/Tooltip';
import TextField from '../../../../../shared/text-field/TextField';
import { regexRFCFisica } from '../../../../../../constants/regex';
import useCreateFormArray from '../../../../../../hooks/useCreateFormArray';
import {
  campoRequerido,
  longitudMaxima,
  longitudMinima,
  seleccionOpcion,
  rfcInvalido,
} from '../../../../../../constants/errors';

const StepEight = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { pfae } = useSelector((state) => state.obligado);

  const subformValidationSchema = Yup.object().shape({
    primerNombre: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    segundoNombre: Yup.string().trim().max(60, longitudMaxima),
    primerApellido: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    segundoApellido: Yup.string().trim().max(60, longitudMaxima),
    rfc: Yup.string().trim().matches(regexRFCFisica, rfcInvalido).min(13, longitudMinima).required(campoRequerido),
    parentesco: Yup.object()
      .shape({
        value: Yup.string(),
        label: Yup.string(),
      })
      .nullable()
      .required(seleccionOpcion),
  });

  const { initialValues, validationSchema } = {
    initialValues: {
      controladosFisica: [],
      existePersonaFIsica: null,
      cantidadEjerceControl: null,
      parentesco: null,
    },
    validationSchema: Yup.object().shape({
      existePersonaFIsica: Yup.string().required(campoRequerido),
      controladosFisica: Yup.array().of(subformValidationSchema),
      parentesco: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
    }),
  };

  const items = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
  ];

  const parentescoItems = [
    { label: 'Cónyuges', value: 1 },
    { label: 'Concubinos', value: 2 },
    { label: 'Hijos', value: 3 },
    { label: 'Padres', value: 4 },
    { label: 'Suegros', value: 5 },
    { label: 'Hijos de cónyuge', value: 6 },
    { label: 'Hermanos', value: 7 },
    { label: 'Abuelos', value: 8 },
    { label: 'Nietos', value: 9 },
    { label: 'Cuñados', value: 10 },
  ];

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'carga-documentos', step: '9' },
          pfae: { ...pfae, ...values },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/carga-documentos/9');
    },
  });

  useCreateFormArray(
    formulario,
    formulario.values.existePersonaFIsica === 'si',
    [formulario.values.existePersonaFIsica, formulario.values.cantidadEjerceControl],
    {
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      rfc: '',
      parentesco: '',
    },
    'controladosFisica',
    'cantidadEjerceControl'
  );

  const formControlados = (nameControlador) =>
    formulario.values[nameControlador].map((value, index) => (
      <div key={value}>
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
            <p className="input color-gray">Su nombre es</p>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
            <TextField
              format="uppercase"
              name={`${nameControlador}[${index}].primerNombre`}
              maxlength={60}
              formulario={formulario}
              type="text"
              size="big"
              label="Nombre"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <TextField
              format="uppercase"
              maxlength={60}
              name={`${nameControlador}[${index}].segundoNombre`}
              formulario={formulario}
              type="text"
              size="big"
              label="Nombre"
              optional
            />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
            <TextField
              format="uppercase"
              name={`${nameControlador}[${index}].primerApellido`}
              maxlength={60}
              formulario={formulario}
              type="text"
              size="big"
              label="Apellido paterno"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <TextField
              format="uppercase"
              maxlength={60}
              name={`${nameControlador}[${index}].segundoApellido`}
              formulario={formulario}
              type="text"
              size="big"
              label="Apellido materno"
            />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 ">
            <p className="input color-gray">Su RFC es</p>
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
          <div className="col-md-4 col-xs-6">
            <p className="input color-gray">Parentesco</p>
          </div>
          <div className="col-md-6 col-xs-12 pr-lg-2 pr-md-2">
            <Select name="parentesco" formulario={formulario} size="big" items={parentescoItems} label="Parentesco" />
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
              ¿Existe una persona física relacionada? <Tooltip message="..." />
            </p>
            <div className="d-flex">
              <div className="col-md-6 col-xs-8 pl-xs-0 pl-md-1 pr-md-0">
                <RadioButton name="existePersonaFIsica" formulario={formulario} value="si">
                  <div className="d-flex">
                    <div className="input mt-xs-4 mt-md-2 color-gray col-5 px-xs-0 pr-md-3">Sí, son</div>
                    <div className="col-md-4 col-xs-6 px-xs-0 px-md-0">
                      <Select
                        name="cantidadEjerceControl"
                        formulario={formulario}
                        size="big"
                        items={items}
                        defaultValue={0}
                        disabled={formulario.values.existePersonaFIsica !== 'si'}
                        label=""
                      />
                    </div>
                  </div>
                </RadioButton>
              </div>
              <div className="col-md-4 col-xs-4 mt-xs-4 mt-md-2 pl-0">
                <RadioButton name="existePersonaFIsica" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            {formControlados('controladosFisica')}
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

export default StepEight;
