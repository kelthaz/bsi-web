import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Tooltip from '../../../../shared/tooltip/Tooltip';
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
import { nextStepObligadoSolidario } from '../../../../../redux/actions/obligado';
import useCreateFormArray from '../../../../../hooks/useCreateFormArray';

const StepFour = () => {
  const { pm } = useSelector((state) => state.obligado);
  const dispatch = useDispatch();
  const router = useRouter();

  const subformValidationSchema = Yup.object().shape({
    nombreNegocio: Yup.string().trim().max(60, longitudMaxima).required(campoRequerido),
    rfc: Yup.string().trim().matches(regexRFCMoral, rfcInvalido).min(12, longitudMinima).required(campoRequerido),
    porcentajeDirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
    porcentajeIndirecto: Yup.number().max(100, numeroMaximo).min(0, numeroMinimo).required(campoRequerido),
  });

  const items = [...Array(5).keys()].map((index) => ({ value: index + 1, label: (index + 1).toString() }));

  const formulario = useFormik({
    initialValues: {
      controladosMorales: pm.controladosMorales,
      ejerceControlMoral: pm.ejerceControlMoral,
      cantidadEjerceControlMoral: pm.cantidadEjerceControlMoral,
      controladosFisicos: pm.controladosFisicos,
      ejerceControlFisico: pm.ejerceControlFisico,
      cantidadEjerceControlFisico: pm.cantidadEjerceControlFisico,
    },
    validationSchema: Yup.object().shape({
      ejerceControlMoral: Yup.string().required(campoRequerido),
      controladosMorales: Yup.array().of(subformValidationSchema),
      ejerceControlFisico: Yup.string().required(campoRequerido),
      controladosFisicos: Yup.array().of(subformValidationSchema),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepObligadoSolidario({
          currentStep: { tab: 'preguntas', step: '5' },
          pm: { ...pm, ...values },
        })
      );
      router.push('/obligado-solidario/[person]/[tab]/[step]', '/obligado-solidario/pm/preguntas/5');
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

  useCreateFormArray(
    formulario,
    formulario.values.ejerceControlFisico === 'si',
    [formulario.values.ejerceControlFisico, formulario.values.cantidadEjerceControlFisico],
    {
      nombreNegocio: '',
      rfc: '',
      porcentajeDirecto: '',
      porcentajeIndirecto: '',
    },
    'controladosFisicos',
    'cantidadEjerceControlFisico'
  );

  const formControlados = (nameControlador) =>
    formulario.values[nameControlador].map((value, index) => (
      <div key={value.index}>
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
              maxlength={12}
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
              format="number"
              name={`${nameControlador}[${index}].porcentajeDirecto`}
              maxlength={3}
              formulario={formulario}
              type="tel"
              size="big"
              label="%"
            />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
            <p className="input color-gray">Indirecto</p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
            <TextField
              format="number"
              name={`${nameControlador}[${index}].porcentajeIndirecto`}
              maxlength={3}
              formulario={formulario}
              type="tel"
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
        <div className="container ">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="body2">
              Ahora vamos a realizarte unas preguntas que nos deberás contestar como Persona Moral ({pm.nombreEmpresa})
              y como Persona Física ({pm.primerNombre})
            </p>

            <p className="sub color-blue-storm">
              <img src="/requisitos/PM.svg" alt="Persona moral" />
              Respondiendo como: {pm.nombreEmpresa} (Persona Moral)
            </p>

            <p className="sub color-dark-gray">
              ¿Existe una persona moral sobre la que tú ejerces control?
              <Tooltip message="..." />
            </p>

            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-8 col-xs-8">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="si">
                  <div className="row ">
                    <div className="input color-gray col-5">Sí, son</div>
                    <div className="col-6 ">
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
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <RadioButton name="ejerceControlMoral" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            {formControlados('controladosMorales')}

            <p className="sub color-blue-storm">
              <img src="/requisitos/PM.svg" alt="Persona moral" />
              Respondiendo como: {pm.primerNombre} (Persona Física)
            </p>

            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-8 col-xs-8">
                <RadioButton name="ejerceControlFisico" formulario={formulario} value="si">
                  <div className="row">
                    <div className="input color-gray col-5">Sí, son</div>
                    <div className="col-6 ">
                      <Select
                        name="cantidadEjerceControlFisico"
                        formulario={formulario}
                        size="big"
                        items={items}
                        defaultValue={0}
                        disabled={formulario.values.ejerceControlFisico !== 'si'}
                        label=""
                      />
                    </div>
                  </div>
                </RadioButton>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <RadioButton name="ejerceControlFisico" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>

            {formControlados('controladosFisicos')}

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
