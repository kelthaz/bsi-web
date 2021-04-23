import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { campoRequerido, codigoPostalInvalido, longitudMaxima, seleccionOpcion } from '../../../../../constants/errors';
import { PASO_TRES_DATOS_EMPRESA_ROUTE } from '../../../../../constants/routes/solicitud/empresa';
import useOnChangePage from '../../../../../hooks/useOnChangePage';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import Domicilio from '../../shared/domicilio/Domicilio';

const PasoDosDatosEmpresa = ({ validate }) => {
  const { currentStep, datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();

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
        municipioId: Yup.string(),
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
          municipioId: Yup.string(),
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
          currentStep: validate
            ? { ...currentStep, paso: currentStep.paso + 1, valipStep: currentStep.valipStep + 1 }
            : { ...currentStep },
          datosEmpresa: {
            ...datosEmpresa,
            ...values,
          },
        })
      );
    },
  });

  const [handleSubmit] = useOnChangePage(formulario, PASO_TRES_DATOS_EMPRESA_ROUTE, validate);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <form onSubmit={handleSubmit} noValidate>
            <p className="color-dark-gray sub position-relative">
              Por favor compártenos tu domicilio fiscal.
              <Tooltip message="Es el domicilio con el que tu negocio está registrado ante el SAT." />
            </p>
            <Domicilio
              formulario={formulario}
              nameFieldCalle="domicilioFiscal.calle"
              nameFieldNumExterior="domicilioFiscal.numExterior"
              nameFieldNumInterior="domicilioFiscal.numInterior"
              nameFieldCodigoPostal="domicilioFiscal.codigoPostal"
              nameFieldColonia="domicilioFiscal.colonia"
              nameFieldMunicipioAlcaldia="domicilioFiscal.municipioAlcaldia"
              nameFieldCiudad="domicilioFiscal.ciudad"
              nameFieldEstado="domicilioFiscal.estado"
              nameFieldMunicipioId="domicilioFiscal.municipioId"
            />
            <p className="color-gray-dark body2">¿Éste es también tu domicilio comercial?</p>
            <div className="row no-gutters">
              <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
                <RadioButton
                  name="esDomilicioComercial"
                  label="si"
                  {...formulario.getFieldProps('esDomilicioComercial')}
                >
                  <p className="input color-gray m-0">Sí</p>
                </RadioButton>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                <RadioButton
                  name="esDomilicioComercial"
                  label="no"
                  {...formulario.getFieldProps('esDomilicioComercial')}
                >
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

                <Domicilio
                  formulario={formulario}
                  nameFieldCalle="domicilioComercial.calle"
                  nameFieldNumExterior="domicilioComercial.numExterior"
                  nameFieldNumInterior="domicilioComercial.numInterior"
                  nameFieldCodigoPostal="domicilioComercial.codigoPostal"
                  nameFieldColonia="domicilioComercial.colonia"
                  nameFieldMunicipioAlcaldia="domicilioComercial.municipioAlcaldia"
                  nameFieldCiudad="domicilioComercial.ciudad"
                  nameFieldEstado="domicilioComercial.estado"
                  nameFieldMunicipioId="domicilioComercial.municipioId"
                />

                <div className="row no-gutters card-simple-blue-light">
                  <div className="col-lg-12 pb-2">
                    <RadioButton
                      name="domicilioEntrega"
                      label="domicilioComercial"
                      {...formulario.getFieldProps('domicilioEntrega')}
                    >
                      <p className="input color-gray m-0 position-relative">
                        Utilizar mi domicilio comercial para recibir mi Token BanCoppel.
                        <Tooltip message="Necesitamos que nos confirmes tu dirección para recibír tu token físico." />
                      </p>
                    </RadioButton>
                  </div>
                  <div className="col-lg-12">
                    <RadioButton
                      name="domicilioEntrega"
                      label="domicilioFiscal"
                      {...formulario.getFieldProps('domicilioEntrega')}
                    >
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

PasoDosDatosEmpresa.propTypes = {
  validate: PropTypes.bool.isRequired,
};

export default PasoDosDatosEmpresa;
