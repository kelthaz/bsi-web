import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
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
import { regexMultipleSpaces, regexRFCFisica } from '../../../../../../constants/regex';
import SvgPersonaMoral from '../../../../../svgs/SvgPersonaMoral';
import { nextStepObligadoSolidario } from '../../../../../../redux/actions/obligado';
import useCreateFormArray from '../../../../../../hooks/useCreateFormArray';

const StepThreePM = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { documentacion, datosPersonales, datosEmpresa } = useSelector((state) => state.solicitud);
  const nombrePersonaFisica = `${datosPersonales.primerNombre} ${datosPersonales.segundoNombre} ${datosPersonales.primerApellido} ${datosPersonales.segundoApellido}`.replace(
    regexMultipleSpaces,
    ' '
  );
  const nombrePersonaMoral = `${datosPersonales.razonSocial} ${datosPersonales.tipoSociedad.label}`;

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

  const items = [...Array(5).keys()].map((index) => ({ value: index + 1, label: (index + 1).toString() }));

  const formulario = useFormik({
    initialValues: {
      controladosFisicosComoMoral: documentacion.controladosFisicosComoMoral,
      tieneControladosFisicosComoMoral: documentacion.tieneControladosFisicosComoMoral,
      cantidadControladosFisicosComoMoral: documentacion.cantidadControladosFisicosComoMoral,
      controladosFisicosComoFisico: documentacion.controladosFisicosComoFisico,
      tieneControladosFisicosComoFisico: documentacion.tieneControladosFisicosComoFisico,
      cantidadControladosFisicosComoFisico: documentacion.cantidadControladosFisicosComoFisico,
    },
    validationSchema: Yup.object().shape({
      controladosFisicosComoMoral: Yup.array().of(subformValidationSchema),
      tieneControladosFisicosComoMoral: Yup.string().required(campoRequerido),
      controladosFisicosComoFisico: Yup.array().of(subformValidationSchema),
      tieneControladosFisicosComoFisico: Yup.string().required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepObligadoSolidario({
          currentStep: { tab: 'carga-documentos', step: '7' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/obligado-solidario/[person]/[tab]/[step]', '/obligado-solidario/pm/carga-documentos/7');
    },
  });

  useCreateFormArray(
    formulario,
    formulario.values.tieneControladosFisicosComoMoral === 'si',
    [formulario.values.tieneControladosFisicosComoMoral, formulario.values.cantidadControladosFisicosComoMoral],
    {
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      rfc: '',
      parentesco: null,
    },
    'controladosFisicosComoMoral',
    'cantidadControladosFisicosComoMoral'
  );

  useCreateFormArray(
    formulario,
    formulario.values.tieneControladosFisicosComoFisico === 'si',
    [formulario.values.tieneControladosFisicosComoFisico, formulario.values.cantidadControladosFisicosComoFisico],
    {
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      rfc: '',
      parentesco: null,
    },
    'controladosFisicosComoFisico',
    'cantidadControladosFisicosComoFisico'
  );

  const formControlados = (nameControlador) =>
    formulario.values[nameControlador].map((value, index) => (
      <div key={value.index}>
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
              label="2º Nombre"
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
              name={`${nameControlador}[${index}].parentesco`}
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
      </div>
    ));

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container ">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="sub color-blue-storm">
              <SvgPersonaMoral />
              Respondiendo como: {nombrePersonaMoral} (Persona Moral)
            </p>
            <p className="sub color-dark-gray">
              ¿Existe una persona física relacionada? <Tooltip message="..." />
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-8 col-xs-8">
                <RadioButton name="tieneControladosFisicosComoMoral" formulario={formulario} value="si">
                  <div className="row">
                    <div className="input color-gray col-5">Sí, son</div>
                    <div className="col-6 ">
                      <Select
                        name="cantidadControladosFisicosComoMoral"
                        formulario={formulario}
                        size="big"
                        items={items}
                        defaultValue={0}
                        disabled={formulario.values.tieneControladosFisicosComoMoral !== 'si'}
                        label=""
                      />
                    </div>
                  </div>
                </RadioButton>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <RadioButton name="tieneControladosFisicosComoMoral" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>

            {formControlados('controladosFisicosComoMoral')}

            <p className="sub color-blue-storm">
              <img src="/requisitos/PM.svg" alt="Persona moral" />
              Respondiendo como: {nombrePersonaFisica} (Persona Física)
            </p>
            <p className="sub color-dark-gray">¿Existe una persona física relacionada?</p>

            <div className="row">
              <div className="col-lg-6 col-md-8 col-sm-8 col-xs-8">
                <RadioButton name="tieneControladosFisicosComoFisico" formulario={formulario} value="si">
                  <div className="row">
                    <div className="input color-gray col-5">Sí, son</div>
                    <div className="col-6 ">
                      <Select
                        name="cantidadControladosFisicosComoFisico"
                        formulario={formulario}
                        size="big"
                        items={items}
                        defaultValue={0}
                        disabled={formulario.values.tieneControladosFisicosComoFisico !== 'si'}
                        label=""
                      />
                    </div>
                  </div>
                </RadioButton>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <RadioButton name="tieneControladosFisicosComoFisico" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>

            {formControlados('controladosFisicosComoFisico')}

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

export default StepThreePM;
