import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import RadioButton from '../../../../../shared/radio-button/RadioButton';
import Select from '../../../../../shared/select/Select';
import TextArea from '../../../../../shared/text-area/TextArea';
import Tooltip from '../../../../../shared/tooltip/Tooltip';
import TextField from '../../../../../shared/text-field/TextField';
import useCreateFormArray from '../../../../../../hooks/useCreateFormArray';
import {
  campoRequerido,
  codigoPostalInvalido,
  longitudMaxima,
  seleccionOpcion,
} from '../../../../../../constants/errors';
import Domicilio from '../../../shared/domicilio/Domicilio';
import { nextStepDatosPersonales } from '../../../../../../redux/actions/solicitud';
import useOnChangePage from '../../../../../../hooks/useOnChangePage';
import { PASO_SEIS_OBLIGADO_SOLIDARIO_ROUTE } from '../../../../../../constants/routes/solicitud/obligado';

const PasoCincoObligadoSolidarioPFAE = ({ validate }) => {
  const dispatch = useDispatch();
  const { obligadoSolidario, currentStep } = useSelector((state) => state.solicitud);

  const itemsTipoTerreno = [
    { value: 1, label: 'Casa' },
    { value: 2, label: 'Departamento' },
    { value: 3, label: 'Edificio' },
    { value: 4, label: 'Terreno' },
    { value: 5, label: 'Lote Comercial' },
  ];

  const subformValidationSchema = Yup.object().shape({
    tipoInmueble: Yup.object()
      .shape({
        value: Yup.string(),
        label: Yup.string(),
      })
      .nullable()
      .required(seleccionOpcion),
    domicilio: Yup.object().shape({
      calle: Yup.string().max(60, longitudMaxima).required(campoRequerido),
      numExterior: Yup.string().max(6, longitudMaxima).required(campoRequerido),
      numInterior: Yup.string().max(6, longitudMaxima),
      codigoPostal: Yup.string().min(5, codigoPostalInvalido).max(5, longitudMaxima).required(campoRequerido),
      colonia: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
      municipioAlcaldia: Yup.string(),
      ciudad: Yup.string(),
      estado: Yup.string(),
    }),
    datosEscritura: Yup.string().max(300, longitudMaxima).required(campoRequerido),
    numeroFolioMercantil: Yup.string().max(50, longitudMaxima).required(campoRequerido),
    valorAproximado: Yup.string().required(campoRequerido),
  });

  const items = [...Array(10).keys()].map((index) => ({ value: index + 1, label: (index + 1).toString() }));

  const formulario = useFormik({
    initialValues: {
      inmueblesPropiosSinGravamen: obligadoSolidario.inmueblesPropiosSinGravamen,
      tieneInmueblesPropiosSinGravamen: obligadoSolidario.tieneInmueblesPropiosSinGravamen,
      cantidadInmueblesPropiosSinGravamen: obligadoSolidario.cantidadInmueblesPropiosSinGravamen,
    },
    validationSchema: Yup.object().shape({
      inmueblesPropiosSinGravamen: Yup.array().of(subformValidationSchema),
      tieneInmueblesPropiosSinGravamen: Yup.string().required(campoRequerido),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          obligadoSolidario: { ...obligadoSolidario, ...values },
        })
      );
    },
  });

  useCreateFormArray(
    formulario,
    formulario.values.tieneInmueblesPropiosSinGravamen === 'si',
    [formulario.values.tieneInmueblesPropiosSinGravamen, formulario.values.cantidadInmueblesPropiosSinGravamen],
    {
      tipoInmueble: null,
      domicilio: {
        calle: '',
        numExterior: '',
        numInterior: '',
        codigoPostal: '',
        colonia: null,
        municipioAlcaldia: '',
        ciudad: '',
        estado: '',
      },
      datosEscritura: '',
      numeroFolioMercantil: '',
      valorAproximado: '',
    },
    'inmueblesPropiosSinGravamen',
    'cantidadInmueblesPropiosSinGravamen'
  );

  const [handleSubmit] = useOnChangePage(formulario, PASO_SEIS_OBLIGADO_SOLIDARIO_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container px-xs-0 px-md-3">
          <form onSubmit={handleSubmit} noValidate>
            <p className="sub color-dark-gray">
              ¿Cuentas con inmuebles propios libres de gravamen? <Tooltip message="..." />
            </p>
            <div className="row no-gutters">
              <div className="col-lg-6 col-md-8 col-sm-8 col-xs-8">
                <RadioButton name="tieneInmueblesPropiosSinGravamen" formulario={formulario} value="si">
                  <div className="row">
                    <div className="input color-gray col-5">Sí, son</div>
                    <div className="col-6 ">
                      <Select
                        name="cantidadInmueblesPropiosSinGravamen"
                        formulario={formulario}
                        size="big"
                        items={items}
                        disabled={formulario.values.tieneInmueblesPropiosSinGravamen !== 'si'}
                        label=""
                        showAlwaysErrors={false}
                      />
                    </div>
                  </div>
                </RadioButton>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                <RadioButton name="tieneInmueblesPropiosSinGravamen" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            {formulario.values.inmueblesPropiosSinGravamen.map((value, index) => (
              <div key={value.index}>
                <p className="color-dark-gray sub pt-3">¿Qué tipo de inmueble es?</p>

                <div className="row no-gutters">
                  <div className="col-md-6 col-xs-12">
                    <Select
                      name={`inmueblesPropiosSinGravamen[${index}].tipoInmueble`}
                      formulario={formulario}
                      size="big"
                      label="Seleccione"
                      items={itemsTipoTerreno}
                    />
                  </div>
                </div>

                <p className="input color-dark-gray sub">¿Dónde se encuentra ubicado?</p>
                <Domicilio
                  formulario={formulario}
                  nameFieldCalle={`inmueblesPropiosSinGravamen[${index}].domicilio.calle`}
                  nameFieldNumExterior={`inmueblesPropiosSinGravamen[${index}].domicilio.numExterior`}
                  nameFieldNumInterior={`inmueblesPropiosSinGravamen[${index}].domicilio.numInterior`}
                  nameFieldCodigoPostal={`inmueblesPropiosSinGravamen[${index}].domicilio.codigoPostal`}
                  nameFieldColonia={`inmueblesPropiosSinGravamen[${index}].domicilio.colonia`}
                  nameFieldMunicipioAlcaldia={`inmueblesPropiosSinGravamen[${index}].domicilio.municipioAlcaldia`}
                  nameFieldCiudad={`inmueblesPropiosSinGravamen[${index}].domicilio.ciudad`}
                  nameFieldEstado={`inmueblesPropiosSinGravamen[${index}].domicilio.estado`}
                />

                <p className="color-dark-gray sub">Escribe los datos de la escritura</p>
                <div className="row no-gutters">
                  <TextArea
                    name={`inmueblesPropiosSinGravamen[${index}].datosEscritura`}
                    formulario={formulario}
                    label="Utiliza este espacio para platicarnos sobre el número de escritura pública, el nombre
                            y número del Notario Público que lo registró, la fecha de registro y el nombre del vendedor."
                    maxlength={300}
                    format="textArea"
                  />
                </div>
                <p className="color-dark-gray sub">Escribe el número de folio mercantil</p>
                <div className="row no-gutters">
                  <TextArea
                    name={`inmueblesPropiosSinGravamen[${index}].numeroFolioMercantil`}
                    formulario={formulario}
                    label="Utiliza este espacio para escribir el número de folio mercantil (libro, secciones y fojas)."
                    maxlength={50}
                    format="textArea"
                  />
                </div>
                <p className="color-dark-gray sub">Escribe el valor aproximado </p>
                <div className="row no-gutters">
                  <div className="col-md-5 col-xs-12">
                    <TextField
                      maxlength={11}
                      name={`inmueblesPropiosSinGravamen[${index}].valorAproximado`}
                      formulario={formulario}
                      type="phone"
                      size="big"
                      label="$0.00"
                      format="money"
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
                disabled={validate && !(formulario.isValid && formulario.dirty)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

PasoCincoObligadoSolidarioPFAE.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoCincoObligadoSolidarioPFAE;
