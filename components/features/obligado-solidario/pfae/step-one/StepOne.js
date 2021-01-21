/* eslint-disable complexity */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import TextField from '../../../../shared/text-field/TextField';
import { createSelectModel } from '../../../../../helpers/changeSelectModel';
import LocalizacionRepositorio from '../../../../../services/simulador/localizacion.repositorio';
import Select from '../../../../shared/select/Select';
import { campoRequerido, longitudMaxima, codigoPostalInvalido, seleccionOpcion } from '../../../../../constants/errors';

const StepOne = () => {
  const { datosEmpresa } = useSelector((state) => state.solicitud);
  const [itemsGiro, setItemsGiro] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

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
          currentStep: { tab: 'preguntas', step: '2' },
          datosEmpresa: {
            ...datosEmpresa,
            ...valuesForm,
          },
        })
      );
      router.push('/obligado-solidario/pfae/[tab]/[step]', '/obligado-solidario/pfae/preguntas/2');
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
    <>
      <div className="contedor-fixed-tab">
        <div className="contedor-solicitud ">
          <div className="container p-0">
            <form onSubmit={formulario.handleSubmit} noValidate>
              <p className="color-dark-gray sub">
                Alejandra ya nos ha platicado un poco sobre ti, por lo que te pediremos solo poco más de información
                para completar tu expediente y habremos terminado.
              </p>
              <p className="color-dark-gray sub">Para comenzar, por favor compártenos tu domicilio.</p>
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
              <div className="flex-column-center-config">
                <button
                  type="submit"
                  className="cicle-button-blue my-3"
                  aria-label="Avanzar"
                  disabled={!(formulario.isValid && formulario.dirty)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepOne;
