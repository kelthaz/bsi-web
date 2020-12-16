import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { campoRequerido, codigoPostalInvalido, longitudMaxima, seleccionOpcion } from '../../../../../constants/errors';
import { createSelectModel } from '../../../../../helpers/changeSelectModel';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import LocalizacionRepositorio from '../../../../../services/simulador/localizacion.repositorio';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import Select from '../../../../shared/select/Select';
import TextField from '../../../../shared/text-field/TextField';
import Tooltip from '../../../../shared/tooltip/Tooltip';

const StepTwo = () => {
  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const router = useRouter();
  const [itemsGiro, setItemsGiro] = useState([]);

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

  const formulario = useFormik({
    initialValues: {
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
      esDomilicioComercial: Yup.string().required(campoRequerido),
    }),
    onSubmit: (values) => {
      const valuesForm = {
        esDomilicioComercial: values.esDomilicioComercial,
        domicilioFiscal: { ...values },
      };

      if (values.esDomilicioComercial === 'no') {
        valuesForm.domicilioComercial = {
          ...formularioAuxiliar.values,
        };
        valuesForm.domicilioEntrega = formularioAuxiliar.values.esDomilicioComercial;
      }

      dispatch(
        nextStepDatosPersonales({
          currentStep: { tab: 'datos-empresa', step: '3' },
          datosEmpresa: {
            ...datosEmpresa,
            ...valuesForm,
          },
        })
      );
      router.push('/solicitud/[tab]/[step]', '/solicitud/datos-empresa/3');
    },
  });

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
        <div className="container p-0">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="color-dark-gray sub position-relative">
              Por favor compártenos tu domicilio fiscal.
              <Tooltip message="Es el domicilio con el que tu negocio está registrado ante el SAT." />
            </p>

            <div className="row no-gutters">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
                <TextField
                  name="calle"
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
                  name="numExterior"
                  maxlength={6}
                  formulario={formulario}
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
                  formulario={formulario}
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
                  items={itemsGiro}
                  label="Colonia"
                  disabled={itemsGiro.length === 0}
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
            </div>

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
                <div className="row no-gutters">
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
                </div>
                <div className="row no-gutters card-simple-blue-light">
                  <div className="col-lg-12 pb-2">
                    <RadioButton name="domicilioEntrega" formulario={formularioAuxiliar} value="domicilioComercial">
                      <p className="input color-gray m-0 position-relative">
                        Utilizar mi domicilio comercial para recibir mi Token BanCoppel.
                        <Tooltip message="Necesitamos que nos confirmes tu dirección para recibír tu token físico." />
                      </p>
                    </RadioButton>
                  </div>
                  <div className="col-lg-12">
                    <RadioButton name="domicilioEntrega" formulario={formularioAuxiliar} value="domicilioFiscal">
                      <p className="input color-gray m-0">
                        Utilizar mi domicilio fiscal para recibir mi Token BanCoppel.
                      </p>
                    </RadioButton>
                  </div>
                </div>
              </>
            )}

            <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
              <button
                type="submit"
                className="cicle-button-blue my-3"
                aria-label="Avanzar"
                disabled={
                  formulario.values.esDomilicioComercial === 'no'
                    ? !(
                        formulario.isValid &&
                        formulario.dirty &&
                        formularioAuxiliar.isValid &&
                        formularioAuxiliar.dirty
                      )
                    : !(formulario.isValid && formulario.dirty)
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
