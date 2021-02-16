import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import Select from '../../../../shared/select/Select';
import TextArea from '../../../../shared/text-area/TextArea';
import Tooltip from '../../../../shared/tooltip/Tooltip';
import TextField from '../../../../shared/text-field/TextField';
import useFindCodigoPostal from '../../../../../hooks/useFindCodigoPostal';
import styles from './StepFive.module.scss';
import useCreateFormArray from '../../../../../hooks/useCreateFormArray';
import {
  campoRequerido,
  longitudMaxima,
  longitudMinima,
  rfcInvalido,
  seleccionOpcion,
} from '../../../../../constants/errors';
import { regexRFCFisica } from '../../../../../constants/regex';

const StepFive = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);

  const { pfae } = useSelector((state) => state.obligado);

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

  const { initialValues, validationSchema } = {
    initialValues: {
      inmuebleInfo: [],
      colonia: pfae.domicilioFiscal.colonia,
      codigoPostal: pfae.domicilioFiscal.codigoPostal,
      inmueblesPropios: '',
      cantInmuebles: null,
      numFolio: pfae.numFolio,
      numEscritura: pfae.numEscritura,
      datosGravamen: pfae.datosGravamen,
      invierto: pfae.invierto,
    },
    validationSchema: Yup.object().shape({
      inmueblesPropios: Yup.string().required(campoRequerido),
      numFolio: Yup.string().max(50, longitudMaxima).required(campoRequerido),
      numEscritura: Yup.string().max(300, longitudMaxima).required(campoRequerido),
      datosGravamen: Yup.string().max(180, longitudMaxima).required(campoRequerido),
      invierto: Yup.string().required(campoRequerido),
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

  const formulario = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'preguntas', step: '6' },
          pfae: { ...pfae, ...values },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/6');
    },
  });

  const [colonias] = useFindCodigoPostal(
    formulario,
    'codigoPostal',
    'colonia',
    'municipioAlcaldia',
    'ciudad',
    'estado'
  );

  useCreateFormArray(
    formulario,
    formulario.values.inmueblesPropios === 'si',
    [formulario.values.inmueblesPropios, formulario.values.cantInmuebles],
    {
      tipoInmueble: null,
      calle: pfae.domicilioFiscal.calle,
      numExterior: pfae.domicilioFiscal.numExterior,
      numInterior: pfae.domicilioFiscal.numInterior,
      codigoPostal: pfae.domicilioFiscal.codigoPostal,
      colonia: pfae.domicilioFiscal.colonia,
      municipioAlcaldia: pfae.domicilioFiscal.municipioAlcaldia,
      ciudad: pfae.domicilioFiscal.ciudad,
      estado: pfae.domicilioFiscal.estado,
      numEscritura: pfae.numEscritura,
      numFolio: pfae.numFolio,
      invierto: pfae.invierto,
      datosGravamen: pfae.datosGravamen,
    },
    'inmuebleInfo',
    'cantInmuebles'
  );

  useEffect(() => {
    if (formulario.values.inmueblesPropios === 'no') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  });

  const formControlados = (nameControlador) =>
    formulario.values[nameControlador].map((value, index) => (
      <div key={value}>
        <div className="row ">
          <p className="col-12 color-dark-gray sub">¿Qué tipo de inmueble es?</p>
          <div className="col-md-6 col-xs-12">
            <Select
              name={`${nameControlador}[${index}].tipoInmueble`}
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
                  name={`${nameControlador}[${index}].calle`}
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
                  name={`${nameControlador}[${index}].numExterior`}
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
                  name={`${nameControlador}[${index}].numInterior`}
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
                  name="codigoPostal"
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
                  name="colonia"
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
                  name="municipioAlcaldia"
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
                  name="ciudad"
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
                  name="estado"
                  maxlength={50}
                  formulario={formulario}
                  type="text"
                  size="big"
                  label="Estado"
                  readonly
                />
              </div>
              <p className="col-12 color-dark-gray sub">Escribe los datos de la escritura</p>
              <div className="col-12">
                <TextArea
                  name="numEscritura"
                  formulario={formulario}
                  label="Utiliza este espacio para platicarnos sobre el número de escritura pública, el nombre
                            y número del Notario Público que lo registró, la fecha de registro y el nombre del vendedor."
                  maxlength={300}
                  format="textArea"
                />
              </div>
              <p className="col-12 color-dark-gray sub">Escribe el número de folio mercantil</p>
              <div className="col-12">
                <TextArea
                  name="numFolio"
                  formulario={formulario}
                  label="Utiliza este espacio para escribir el número de folio mercantil (libro, secciones y fojas)."
                  maxlength={50}
                  format="textArea"
                />
              </div>
              <p className="col-12 color-dark-gray sub">Escribe el valor aproximado </p>
              <div className="col-md-5 col-xs-12">
                <TextField
                  maxlength={11}
                  name="invierto"
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
                  name="datosGravamen"
                  formulario={formulario}
                  label="Utiliza este espacio si aplica para escribir el banco y el monto del gravamen"
                  maxlength={180}
                  format="textArea"
                />
              </div>
            </div>
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
              ¿Cuentas con inmuebles propios libres de gravamen? <Tooltip message="..." />
            </p>
            <div className="d-flex">
              <div className="col-md-6 col-xs-8 pl-xs-0 pl-md-1 pr-md-0">
                <RadioButton name="inmueblesPropios" formulario={formulario} value="si">
                  <div className="d-flex">
                    <div className="input mt-xs-4 mt-md-2 color-gray col-5 px-xs-0 pr-xs-0 pr-md-3">Sí, son</div>
                    <div className="col-md-4 col-xs-6 px-xs-0 px-md-0">
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
              <div className="col-md-4 col-xs-4 mt-xs-4 mt-md-2 pl-0">
                <RadioButton name="inmueblesPropios" formulario={formulario} value="no">
                  <span className="input color-gray">No</span>
                </RadioButton>
              </div>
            </div>
            {formControlados('inmuebleInfo')}
            {formulario.values.inmueblesPropios !== 'no' ? (
              <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
                <button
                  type="submit"
                  className="cicle-button-blue my-3"
                  aria-label="Avanzar"
                  disabled={!formulario.isValid}
                />
              </div>
            ) : (
              <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
                <Link href="/obligado-solidario/pfae/[tab]/[step]" as="/obligado-solidario/pfae/preguntas/6" replace>
                  <button type="submit" className="cicle-button-blue my-3" aria-label="Avanzar2" disabled={disabled} />
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
