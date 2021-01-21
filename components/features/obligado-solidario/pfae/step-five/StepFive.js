import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import Select from '../../../../shared/select/Select';
import TextArea from '../../../../shared/text-area/TextArea';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import LocalizacionRepositorio from '../../../../../services/simulador/localizacion.repositorio';
import { createSelectModel } from '../../../../../helpers/changeSelectModel';
import TextField from '../../../../shared/text-field/TextField';
import styles from './StepFive.module.scss';
import {
  campoRequerido,
  longitudMaxima,
  longitudMinima,
  rfcInvalido,
  seleccionOpcion,
  codigoPostalInvalido,
} from '../../../../../constants/errors';
import { regexRFCFisica } from '../../../../../constants/regex';

const StepFive = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [itemsGiro, setItemsGiro] = useState([]);

  const { datosEmpresa } = useSelector((state) => state.solicitud);

  const itemsTipoTerreno = [
    {
      value: 1,
      label: 'Casa',
    },
    { value: 2, label: 'Departamento' },
    { value: 3, label: 'Edificio' },
    { value: 4, label: 'Terreno' },
    { value: 5, label: 'Lote Comercial' },
  ];

  const formularioAuxiliar = useFormik({
    initialValues: {
      calle: datosEmpresa.domicilioComercial.calle,
      numExterior: datosEmpresa.domicilioComercial.numExterior,
      numInterior: datosEmpresa.domicilioComercial.numInterior,
      codigoPostal: datosEmpresa.domicilioComercial.codigoPostal,
      colonia: datosEmpresa.domicilioComercial.colonia,
      municipioAlcaldia: datosEmpresa.domicilioComercial.municipioAlcaldia,
      ciudad: datosEmpresa.domicilioComercial.ciudad,
      estado: datosEmpresa.domicilioComercial.estado,
      domicilioEntrega: datosEmpresa.domicilioComercial.domicilioEntrega,
    },
    validationSchema: Yup.object({
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
      domicilioEntrega: Yup.string().required(campoRequerido),
    }),
  });

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
      inmueblesPropios: null,
      cantInmuebles: null,
      calle: datosEmpresa.domicilioFiscal.calle,
      numExterior: datosEmpresa.domicilioFiscal.numExterior,
      numInterior: datosEmpresa.domicilioFiscal.numInterior,
      codigoPostal: datosEmpresa.domicilioFiscal.codigoPostal,
      colonia: datosEmpresa.domicilioFiscal.colonia,
      municipioAlcaldia: datosEmpresa.domicilioFiscal.municipioAlcaldia,
      ciudad: datosEmpresa.domicilioFiscal.ciudad,
      estado: datosEmpresa.domicilioFiscal.estado,
      esDomilicioComercial: datosEmpresa.domicilioFiscal.esDomilicioComercial,
    },
    validationSchema: Yup.object().shape({
      inmueblesPropios: Yup.string().required(campoRequerido),
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
          currentStep: { tab: 'preguntas', step: '6' },
          datosEmpresa: { ...datosEmpresa, ...values },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/6');
    },
    validateOnMount: true,
  });

  useEffect(() => {
    if (formulario.values.inmueblesPropios === 'si') {
      formulario.setFieldValue(
        'empresaInversion',
        [...Array(formulario.values.cantInmuebles.value).keys()].map(() => ({
          razonSocial: '',
          tipoSociedad: '',
          rfc: '',
          invierto: '',
        }))
      );
    } else {
      formulario.setFieldValue('empresaInversion', []);
    }
  }, [formulario.values.inmueblesPropios, formulario.values.cantInmuebles]);

  useEffect(() => {
    if (formulario.values.codigoPostal.length === 5) {
      const fetchData = async () => {
        const { municipio, asentamientos, ciudad } = await LocalizacionRepositorio.getLocalizacion(
          formulario.values.codigoPostal
        )
          .then((resp) => resp.data)
          .catch(() => {
            formulario.setFieldValue('colonia', null);
            return {
              municipio: { nombre: '', estado: { nombre: '' } },
              ciudad: '',
              asentamientos: [],
            };
          });
        formulario.setFieldValue('municipioAlcaldia', municipio.nombre);
        formulario.setFieldValue('ciudad', ciudad);
        formulario.setFieldValue('estado', municipio.estado.nombre);
        setItemsGiro(createSelectModel(asentamientos));
      };
      fetchData();
    }
  }, [formulario.values.codigoPostal]);

  useEffect(() => {
    if (formularioAuxiliar.values.codigoPostal.length === 5) {
      const fetchData = async () => {
        const { municipio, asentamientos, ciudad } = await LocalizacionRepositorio.getLocalizacion(
          formularioAuxiliar.values.codigoPostal
        )
          .then((resp) => resp.data)
          .catch(() => {
            formulario.setFieldValue('colonia', null);
            return {
              municipio: { nombre: '', estado: { nombre: '' } },
              ciudad: '',
              asentamientos: [],
            };
          });
        formularioAuxiliar.setFieldValue('municipioAlcaldia', municipio.nombre);
        formularioAuxiliar.setFieldValue('ciudad', ciudad);
        formularioAuxiliar.setFieldValue('estado', municipio.estado.nombre);
        setItemsGiro(createSelectModel(asentamientos));
      };
      fetchData();
    }
  }, [formularioAuxiliar.values.codigoPostal]);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container px-xs-0 px-md-3">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="sub color-dark-gray">
              ¿Cuentas con inmuebles propios? <Tooltip message="..." />
            </p>
            <div className="d-flex">
              <div className="col-md-6 col-xs-8 pl-xs-0 pl-md-1">
                <RadioButton name="inmueblesPropios" formulario={formulario} value="si">
                  <div className="d-flex">
                    <div className="input mt-xs-4 mt-md-2 color-gray col-8 pr-xs-0 pr-md-3">Sí, son</div>
                    <div className="col-md-7 col-xs-8 pl-xs-0 px-md-0">
                      <Select
                        name="cantInmuebles"
                        formulario={formulario}
                        size="big"
                        items={items}
                        defaultValue={0}
                        disabled={formulario.values.inmueblesPropios !== 'si'}
                        label=""
                      />
                    </div>
                  </div>
                </RadioButton>
              </div>
              <div className="col-md-4 col-xs-4 mt-xs-4 mt-md-2 pl-md-0">
                <RadioButton name="inmueblesPropios" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            {formulario.values.empresaInversion.map((value, index) => (
              <section key={value}>
                <div className="row ">
                  <p className="col-12 color-gray-light sub">
                    Datos inmueble <hr className={`col-8 ${styles.line}`} />
                  </p>
                  <p className="col-12 color-dark-gray sub">¿Qué tipo de inmueble es?</p>
                  <div className="col-md-6 col-xs-12">
                    <Select
                      name={`empresaInversion[${index}].tipoInmueble`}
                      formulario={formulario}
                      size="big"
                      label="Seleccione"
                      items={itemsTipoTerreno}
                      defaultValue={0}
                    />
                  </div>
                  <p className="col-7 input color-dark-gray sub">¿Dónde se encuentra ubicado?</p>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
                        <TextField
                          name="calle"
                          maxlength={60}
                          formulario={formularioAuxiliar}
                          type="text"
                          size="big"
                          label="Calle"
                          format="alphanumeric"
                        />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
                        <TextField
                          name="numExterior"
                          maxlength={6}
                          formulario={formularioAuxiliar}
                          type="text"
                          size="big"
                          label="#"
                          format="alphanumeric"
                        />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
                        <TextField
                          name="numInterior"
                          maxlength={6}
                          formulario={formularioAuxiliar}
                          type="text"
                          size="big"
                          label="Int."
                          format="alphanumeric"
                        />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
                        <TextField
                          name="codigoPostal"
                          maxlength={5}
                          formulario={formularioAuxiliar}
                          type="text"
                          size="big"
                          label="C.P"
                          format="number"
                        />
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <Select
                          name="colonia"
                          maxlength={120}
                          formulario={formularioAuxiliar}
                          type="text"
                          size="big"
                          items={itemsGiro}
                          label="Colonia"
                          disabled={itemsGiro.length === 0}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
                        <TextField
                          name="municipioAlcaldia"
                          maxlength={50}
                          formulario={formularioAuxiliar}
                          type="text"
                          size="big"
                          label="Municipio/Alcaldía"
                          readonly
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <TextField
                          name="ciudad"
                          maxlength={50}
                          formulario={formularioAuxiliar}
                          type="text"
                          size="big"
                          label="Ciudad"
                          readonly
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <TextField
                          name="estado"
                          maxlength={50}
                          formulario={formularioAuxiliar}
                          type="text"
                          size="big"
                          label="Estado"
                          readonly
                        />
                      </div>
                      <p className="col-12 color-dark-gray sub">Escribe los datos de la escritura</p>
                      <div className="col-12">
                        <TextArea
                          name="tellUs"
                          formulario={formulario}
                          label="Utiliza este espacio para platicarnos sobre el número de escritura pública, el nombre
                            y número del Notario Público que lo registró, la fecha de registro y el nombre del vendedor."
                          maxlength={180}
                          format="textArea"
                        />
                      </div>
                      <p className="col-12 color-dark-gray sub">Escribe el número de folio mercantil</p>
                      <div className="col-12">
                        <TextArea
                          name="tellUs"
                          formulario={formulario}
                          label="Utiliza este espacio para escribir el número de folio mercantil (libro, secciones y fojas)."
                          maxlength={180}
                          format="textArea"
                        />
                      </div>
                      <p className="col-12 color-dark-gray sub">Escribe el valor aproximado </p>
                      <div className="col-md-5 col-xs-12">
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
                      <p className="col-12 color-dark-gray sub">Escribe los datos del gravamen (si aplica)</p>
                      <div className="col-12">
                        <TextArea
                          name="tellUs"
                          formulario={formulario}
                          label="Utiliza este espacio si aplica para escribir el banco y el monto del gravamen"
                          maxlength={180}
                          format="textArea"
                        />
                      </div>
                    </div>
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

export default StepFive;
