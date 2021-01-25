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
import {
  campoRequerido,
  longitudMaxima,
  longitudMinima,
  rfcInvalido,
  seleccionOpcion,
} from '../../../../../constants/errors';
import { regexRFCFisica } from '../../../../../constants/regex';

const StepFour = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const itemsTipoEmpresa = [
    { value: 10, label: 'S.A.' },
    { value: 20, label: 'S.A. DE C.V.' },
    { value: 30, label: 'S. DE R.L.' },
    { value: 40, label: 'S. DE R.L. DE C.V.' },
    { value: 60, label: 'S. EN C.' },
    { value: 70, label: 'S. EN C. POR A.' },
    { value: 110, label: 'S.N.C.' },
  ];

  const subformValidationSchema = Yup.object().shape({
    razonSocial: Yup.string().trim().max(120, longitudMaxima).required(campoRequerido),
    tipoSociedad: Yup.object()
      .shape({
        value: Yup.string(),
        label: Yup.string(),
      })
      .nullable()
      .required(seleccionOpcion),
    rfc: Yup.string().matches(regexRFCFisica, rfcInvalido).min(13, longitudMinima).required(campoRequerido),
    invierto: Yup.string().required(campoRequerido),
  });

  const { initialValues, validationSchema } = {
    initialValues: {
      empresaInversion: [],
      tieneAcciones: null,
      cantAcciones: null,
    },
    validationSchema: Yup.object().shape({
      tieneAcciones: Yup.string().required(campoRequerido),
      empresaInversion: Yup.array().of(subformValidationSchema),
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
          currentStep: { tab: 'preguntas', step: '5' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/5');
    },
    validateOnMount: true,
  });

  useEffect(() => {
    if (formulario.values.tieneAcciones === 'si') {
      formulario.setFieldValue(
        'empresaInversion',
        [...Array(formulario.values.cantAcciones.value).keys()].map(() => ({
          razonSocial: '',
          tipoSociedad: '',
          rfc: '',
          invierto: '',
        }))
      );
    } else {
      formulario.setFieldValue('empresaInversion', []);
    }
  }, [formulario.values.tieneAcciones, formulario.values.cantAcciones]);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container px-xs-0 px-md-3">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="sub color-dark-gray">
              ¿Tienes acciones en otras empresas? <Tooltip message="..." />
            </p>
            <div className="d-flex">
              <div className="col-md-6 col-xs-8 pl-xs-0 pl-md-1 pr-md-0">
                <RadioButton name="tieneAcciones" formulario={formulario} value="si">
                  <div className="d-flex">
                    <div className="input mt-xs-4 mt-md-2 color-gray col-5 px-xs-0 pr-md-3">Sí, son</div>
                    <div className="col-md-4 col-xs-6 px-xs-0 px-md-0">
                      <Select
                        name="cantAcciones"
                        formulario={formulario}
                        size="big"
                        items={items}
                        defaultValue={0}
                        disabled={formulario.values.tieneAcciones !== 'si'}
                        label=""
                      />
                    </div>
                  </div>
                </RadioButton>
              </div>
              <div className="col-md-4 col-xs-4 mt-xs-4 mt-md-2 pl-0">
                <RadioButton name="tieneAcciones" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            {formulario.values.empresaInversion.map((value, index) => (
              <section key={value}>
                <p className="sub color-gray">¿Cómo se llama la empresa y de cuánto es tu inversión?</p>
                <div className="row ">
                  <div className="col-md-5 col-xs-12 pr-md-0">
                    <p className="input color-gray">La razón social es</p>
                  </div>
                  <div className="col-md-4 col-xs-12 px-md-0 px-xs-3">
                    <TextField
                      format="uppercase"
                      name={`empresaInversion[${index}].razonSocial`}
                      maxlength={120}
                      formulario={formulario}
                      type="text"
                      size="big"
                      label="Razón social"
                    />
                  </div>
                  <div className="col-md-3 col-xs-12 ">
                    <Select
                      name={`empresaInversion[${index}].tipoSociedad`}
                      formulario={formulario}
                      size="big"
                      items={itemsTipoEmpresa}
                      label="S.A"
                    />
                  </div>
                  <div className="col-md-3 col-xs-12 ">
                    <p className="input color-gray">El RFC es </p>
                  </div>
                  <div className="col-md-8 col-xs-12 pr-lg-2 pr-md-2">
                    <TextField
                      name={`empresaInversion[${index}].rfc`}
                      format="rfcformatter"
                      maxlength={13}
                      formulario={formulario}
                      type="text"
                      size="big"
                      label="Ej. TLF280693HVZJNR03"
                    />
                  </div>
                  <div className="col-md-3 col-xs-12 pr-md-0">
                    <p className="input color-gray">Invierto </p>
                  </div>
                  <div className="col-md-5 col-xs-12 pl-md-0">
                    <TextField
                      maxlength={60}
                      name={`empresaInversion[${index}].invierto`}
                      formulario={formulario}
                      type="text"
                      size="big"
                      label="$0.00"
                      format="money"
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

export default StepFour;
