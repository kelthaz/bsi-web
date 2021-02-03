import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import RadioButton from '../../../../../shared/radio-button/RadioButton';
import Select from '../../../../../shared/select/Select';
import Tooltip from '../../../../../shared/tooltip/Tooltip';
import TextField from '../../../../../shared/text-field/TextField';
import {
  campoRequerido,
  longitudMaxima,
  longitudMinima,
  rfcInvalido,
  seleccionOpcion,
} from '../../../../../../constants/errors';
import { regexRFCFisica } from '../../../../../../constants/regex';
import SvgPersonaMoral from '../../../../../svgs/SvgPersonaMoral';

const StepFive = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { datosPersonales, datosEmpresa } = useSelector((state) => state.solicitud);

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
      ejerceControlMoral: null,
      ejerceControlFisica: null,
      cantidadEjerceControl: null,
    },
    validationSchema: Yup.object().shape({
      ejerceControlMoral: Yup.string().required(campoRequerido),
      ejerceControlFisica: `${
        datosPersonales.tipoPersona.value === 'MORAL' ? Yup.string().required(campoRequerido) : ''
      }`,
      controladosFisica: Yup.array().of(subformValidationSchema),
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
          currentStep: { tab: 'documentacion', step: '5' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/documentacion/6');
    },
    validateOnMount: true,
  });

  useEffect(() => {
    if (formulario.values.ejerceControlMoral === 'si') {
      formulario.setFieldValue(
        'controladosFisica',
        [...Array(formulario.values.cantidadEjerceControl.value).keys()].map(() => ({
          primerNombre: '',
          segundoNombre: '',
          primerApellido: '',
          segundoApellido: '',
          rfc: '',
          parentesco: null,
        }))
      );
    } else {
      formulario.setFieldValue('controladosFisica', []);
    }
  }, [formulario.values.ejerceControlMoral, formulario.values.cantidadEjerceControl]);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container ">
          <form onSubmit={formulario.handleSubmit} noValidate>
            {datosPersonales.tipoPersona.value === 'MORAL' ? (
              <p className="sub color-blue-storm">
                <SvgPersonaMoral />
                Respondiendo como: {datosPersonales.nombreEmpresa} (Persona Moral)
              </p>
            ) : (
              ''
            )}
            <p className="sub color-dark-gray">
              ¿Existe una persona física relacionada? <Tooltip message="..." />
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
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            {formulario.values.controladosFisica.map((value, index) => (
              <section key={value}>
                <div className="row no-gutters">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                    <p className="input color-gray">Su nombre es</p>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                    <TextField
                      format="uppercase"
                      name={`controladosFisica[${index}].primerNombre`}
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
                      name={`controladosFisica[${index}].segundoNombre`}
                      formulario={formulario}
                      type="text"
                      size="big"
                      label="2º Nombre"
                    />
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                    <TextField
                      format="uppercase"
                      name={`controladosFisica[${index}].primerApellido`}
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
                      name={`controladosFisica[${index}].segundoApellido`}
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
                      name={`controladosFisica[${index}].rfc`}
                      maxlength={60}
                      formulario={formulario}
                      type="text"
                      size="big"
                      label="Ej. TLF280693H17"
                    />
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 ">
                    <p className="input color-gray">Parentesco</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
                    <Select
                      name={`controladosFisica[${index}].parentesco`}
                      formulario={formulario}
                      size="big"
                      items={[
                        { label: 'Cónyuges', value: 'Cónyuges' },
                        { label: 'Concubinos', value: 'oncubinos' },
                        { label: 'Hijos', value: 'Hijos' },
                        { label: 'Padres', value: 'Padres' },
                        { label: 'Suegros', value: 'Suegros' },
                        { label: 'Hijos de cónyuge', value: 'Hijos de cónyuge' },
                        { label: 'Hermanos', value: 'Hermanos' },
                        { label: 'Abuelos', value: 'Abuelos' },
                        { label: 'Nietos', value: 'Nietos' },
                        { label: 'Cuñados', value: 'Cuñados' },
                      ]}
                      label="Parentesco"
                    />
                  </div>
                </div>
              </section>
            ))}
            {datosPersonales.tipoPersona.value === 'MORAL' ? (
              <p className="sub color-blue-storm">
                <img src="/requisitos/PM.svg" alt="Persona moral" />
                Respondiendo como: {datosPersonales.primerNombre} (Persona Física)
              </p>
            ) : (
              ''
            )}{' '}
            {datosPersonales.tipoPersona.value === 'MORAL' ? (
              <p className="sub color-dark-gray">¿Existe una persona física relacionada?</p>
            ) : (
              ''
            )}
            {datosPersonales.tipoPersona.value === 'MORAL' ? (
              <div className="d-flex">
                <RadioButton name="ejerceControlFisica" formulario={formulario} value="si">
                  <span className="input color-gray">Sí</span>
                </RadioButton>
                <RadioButton name="ejerceControlFisica" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            ) : (
              ''
            )}
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

export default StepFive;
