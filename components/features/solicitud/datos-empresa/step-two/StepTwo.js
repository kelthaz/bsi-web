import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { campoRequerido, codigoPostalInvalido, longitudMaxima, seleccionOpcion } from '../../../../../constants/errors';
import { PASO_TRES_DATOS_EMPRESA_ROUTE } from '../../../../../constants/routes/solicitud/empresa';
import useFindCodigoPostal from '../../../../../hooks/useFindCodigoPostal';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import Select from '../../../../shared/select/Select';
import TextField from '../../../../shared/text-field/TextField';
import Tooltip from '../../../../shared/tooltip/Tooltip';

const StepTwo = () => {
  const { currentStep, datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const validate = currentStep.step === query.step;

  const formulario = useFormik({
    initialValues: {
      domicilioFiscal: { ...datosEmpresa.domicilioFiscal },
      domicilioComercial: { ...datosEmpresa.domicilioComercial },
      esDomilicioComercial: datosEmpresa.esDomilicioComercial,
      domicilioEntrega: datosEmpresa.domicilioEntrega,
    },
    validationSchema: Yup.object().shape({
      domicilioFiscal: Yup.object().shape({
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
      domicilioComercial: Yup.object().when('esDomilicioComercial', {
        is: 'no',
        then: Yup.object().shape({
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
        otherwise: Yup.object().notRequired(),
      }),
      esDomilicioComercial: Yup.string().required(campoRequerido),
      domicilioEntrega: Yup.string().when('esDomilicioComercial', {
        is: 'no',
        then: Yup.string().required(campoRequerido).nullable(),
        otherwise: Yup.string().notRequired().nullable(),
      }),
    }),
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: validate ? { tab: 'datos-empresa', step: '3' } : { ...currentStep },
          datosEmpresa: {
            ...datosEmpresa,
            ...values,
          },
        })
      );
    },
  });

  const [coloniasDomicilioFiscal] = useFindCodigoPostal(
    formulario,
    'domicilioFiscal.codigoPostal',
    'domicilioFiscal.colonia',
    'domicilioFiscal.municipioAlcaldia',
    'domicilioFiscal.ciudad',
    'domicilioFiscal.estado'
  );

  const [coloniasDomicilioComercial] = useFindCodigoPostal(
    formulario,
    'domicilioComercial.codigoPostal',
    'domicilioComercial.colonia',
    'domicilioComercial.municipioAlcaldia',
    'domicilioComercial.ciudad',
    'domicilioComercial.estado'
  );

  const [handleSubmit] = useOnChangePage(formulario, PASO_TRES_DATOS_EMPRESA_ROUTE, currentStep);

  const formDomicilio = (domicilio, colonias) => (
    <div className="row no-gutters">
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
        <TextField
          name={`${domicilio}.calle`}
          maxlength={60}
          formulario={formulario}
          type="text"
          size="big"
          label="Calle"
          format="alphanumeric"
        />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
        <TextField
          name={`${domicilio}.numExterior`}
          maxlength={6}
          formulario={formulario}
          type="text"
          size="big"
          label="No. Exterior"
          format="alphanumeric"
        />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
        <TextField
          name={`${domicilio}.numInterior`}
          maxlength={6}
          formulario={formulario}
          type="text"
          size="big"
          label="No. Interior"
          format="alphanumeric"
        />
      </div>

      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
        <TextField
          name={`${domicilio}.codigoPostal`}
          maxlength={5}
          formulario={formulario}
          type="text"
          size="big"
          label="C.P"
          format="number"
        />
      </div>
      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <Select
          name={`${domicilio}.colonia`}
          maxlength={120}
          formulario={formulario}
          type="text"
          size="big"
          items={colonias}
          label="Colonia"
          disabled={colonias.length === 0}
        />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
        <TextField
          name={`${domicilio}.municipioAlcaldia`}
          maxlength={50}
          formulario={formulario}
          type="text"
          size="big"
          label="Municipio/Alcaldía"
          readonly
        />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <TextField
          name={`${domicilio}.ciudad`}
          maxlength={50}
          formulario={formulario}
          type="text"
          size="big"
          label="Ciudad"
          readonly
        />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <TextField
          name={`${domicilio}.estado`}
          maxlength={50}
          formulario={formulario}
          type="text"
          size="big"
          label="Estado"
          readonly
        />
      </div>
    </div>
  );

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
            <p className="color-dark-gray sub position-relative">
              Por favor compártenos tu domicilio fiscal.
              <Tooltip message="Es el domicilio con el que tu negocio está registrado ante el SAT." />
            </p>
            {formDomicilio('domicilioFiscal', coloniasDomicilioFiscal)}
            <p className="color-gray-dark body2">¿Éste es también tu domicilio comercial?</p>
            <div className="row no-gutters py-3">
              <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
                <RadioButton name="esDomilicioComercial" formulario={formulario} value="si">
                  <p className="input color-gray m-0">Sí</p>
                </RadioButton>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                <RadioButton name="esDomilicioComercial" formulario={formulario} value="no">
                  <p className="input color-gray m-0">No</p>
                </RadioButton>
              </div>
            </div>

            {formulario.values.esDomilicioComercial === 'no' && (
              <>
                <p className="color-dark-gray sub position-relative">
                  Compártenos tu domicilio comercial..
                  <Tooltip message="Es el domicilio en el que realizas la operación día a día de tu negocio." />
                </p>
                {formDomicilio('domicilioComercial', coloniasDomicilioComercial)}

                <div className="row no-gutters card-simple-blue-light">
                  <div className="col-lg-12 pb-2">
                    <RadioButton name="domicilioEntrega" formulario={formulario} value="domicilioComercial">
                      <p className="input color-gray m-0 position-relative">
                        Utilizar mi domicilio comercial para recibir mi Token BanCoppel.
                        <Tooltip message="Necesitamos que nos confirmes tu dirección para recibír tu token físico." />
                      </p>
                    </RadioButton>
                  </div>
                  <div className="col-lg-12">
                    <RadioButton name="domicilioEntrega" formulario={formulario} value="domicilioFiscal">
                      <p className="input color-gray m-0">
                        Utilizar mi domicilio fiscal para recibir mi Token BanCoppel.
                      </p>
                    </RadioButton>
                  </div>
                </div>
              </>
            )}
            <div className="flex-column-center-config">
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

export default StepTwo;
