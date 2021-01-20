import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import Select from '../../../../shared/select/Select';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import TextField from '../../../../shared/text-field/TextField';
import { campoRequerido, longitudMaxima, longitudMinima, seleccionOpcion } from '../../../../../constants/errors';

const StepEight = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { datosEmpresa } = useSelector((state) => state.solicitud);

  const subformValidationSchema = Yup.object().shape({
    primerNombre: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    segundoNombre: Yup.string().trim().max(60, longitudMaxima),
    primerApellido: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    segundoApellido: Yup.string().trim().max(60, longitudMaxima),
    rfc: Yup.string().trim().min(13, longitudMinima).required(campoRequerido),
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
    },
    validationSchema: Yup.object().shape({
      existePersonaFIsica: Yup.string().required(campoRequerido),
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
          currentStep: { tab: 'preguntas', step: '' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/9');
    },
    validateOnMount: true,
  });

  useEffect(() => {
    if (formulario.values.existePersonaFIsica === 'si') {
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
  }, [formulario.values.existePersonaFIsica, formulario.values.cantidadEjerceControl]);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container px-xs-0 px-md-3">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="sub color-dark-gray">
              ¿Existe una persona física relacionada? <Tooltip message="..." />
            </p>
            <div className="d-flex">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8  pl-xs-0 pl-md-3">
                <RadioButton name="existePersonaFIsica" formulario={formulario} value="si">
                  <div className="d-flex">
                    <div className="input mt-xs-4 mt-md-2 pr-xs-0 pr-md-3 color-gray col-8">Sí, son</div>
                    <div className="col-lg-7 col-md-7 col-sm-8 col-xs-8 pl-xs-0 pl-md-3">
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
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mt-xs-4 mt-md-2">
                <RadioButton name="existePersonaFIsica" formulario={formulario} value="no">
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
