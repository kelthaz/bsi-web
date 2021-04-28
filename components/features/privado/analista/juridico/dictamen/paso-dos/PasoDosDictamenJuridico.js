import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import TextField from '../../../../../../shared/text-field/TextField';
import TextArea from '../../../../../../shared/text-area/TextArea';
import RadioButton from '../../../../../../shared/radio-button/RadioButton';
import Select from '../../../../../../shared/select/Select';
import SvgInfoBackOffice from '../../../../../../svgs/SvgInfoBackOffice';
import { campoRequerido, longitudMinima, longitudMaxima, seleccionOpcion } from '../../../../../../../constants/errors';

const PasoDosDictamenJuridico = () => {
  const formulario = useFormik({
    initialValues: {
      cuantosAccionistas: null,
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      denominacionSocial: '',
      rfc: '',
      accionesCapitalFijo: '',
      valor: '',
      accionesCapitalVariable: '',
      porcentaje: '',
    },
    validationSchema: Yup.object().shape({
      cuantosAccionistas: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
    }),
    nombre: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
    apellidoPaterno: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
    apellidoMaterno: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
    denominacionSocial: Yup.string().min(2, longitudMinima).max(120, longitudMaxima).required(campoRequerido),
    rfc: Yup.string().min(12, longitudMinima).max(13, longitudMaxima).required(campoRequerido),
    accionesCapitalFijo: Yup.string().min(0, longitudMinima).max(18, longitudMaxima).required(campoRequerido),
    valor: Yup.string().min(0, longitudMinima).max(18, longitudMaxima).required(campoRequerido),
    accionesCapitalVariable: Yup.string().min(0, longitudMinima).max(18, longitudMaxima).required(campoRequerido),
    porcentaje: Yup.string().min(0, longitudMinima).max(13, longitudMaxima).required(campoRequerido),
    onSubmit: () => {},
  });

  const itemsAccionistas = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
  ];

  return (
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col-5">
          <div className="card-simple-blue-light">
            <div className="color-blue-storm sub">Resumen del dictamen</div>
            <div className="color-blue-storm body2 mt-2">Datos de cliente</div>
            <div className="color-blue-storm body2 mt-2">Accionistas / Socios / Asociados</div>
            <div className="row mt-2">
              <div className="col-6 color-gray-light body2 mt-2">Accionistas</div>
              <div className="col-6 color-blue-storm body2 mt-2">1</div>
            </div>
            <div className="row mt-2">
              <div className="col-6 color-gray-light body2 mt-2">Nombre</div>
              <div className="col-6 color-blue-storm body2 mt-2">Dimitri</div>
            </div>
            <div className="row mt-2">
              <div className="col-6 color-gray-light body2 mt-2">Apellidos</div>
              <div className="col-6 color-blue-storm body2 mt-2">Alexandre Blaiddyd</div>
            </div>
            <div className="row mt-2">
              <div className="col-6 color-gray-light body2 mt-2">¿Hay accionista que sea persona morlal?</div>
              <div className="col-6 color-blue-storm body2 mt-2">Si</div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="color-blue-storm sub">
              <SvgInfoBackOffice />
              Accionistas / Socios / Asociados
            </p>
            <p className="body2">La información accionaria presentada la fecha del dictamen es la siguiente:</p>
            <Select
              name="cuantosAccionistas"
              label="¿Cuántos accionistas hay?"
              size="small"
              items={itemsAccionistas}
              {...formulario.getFieldMeta('cuantosAccionistas')}
              {...formulario.getFieldHelpers('cuantosAccionistas')}
            />
            <TextField
              name="nombre"
              type="text"
              size="small"
              label="Nombre"
              {...formulario.getFieldMeta('nombre')}
              {...formulario.getFieldHelpers('nombre')}
            />
            <p className="body2 color-gray-dark">
              La información accionaria presentada la fecha del dictamen es la siguiente:
            </p>
            <div className="row no-gutters">
              <div className="col-2">
                <RadioButton name="pfae" label="PFAE" {...formulario.getFieldProps('pfae')}>
                  <p className="input color-gray m-0">PFAE</p>
                </RadioButton>
              </div>
              <div className="col-2">
                <RadioButton name="moral" label="moral" {...formulario.getFieldProps('moral')}>
                  <p className="input color-gray m-0">Moral</p>
                </RadioButton>
              </div>
            </div>
            <TextField
              name="denominacionSocial"
              type="text"
              size="small"
              label="Denominación Social"
              {...formulario.getFieldMeta('denominacionSocial')}
              {...formulario.getFieldHelpers('denominacionSocial')}
            />
            <TextField
              name="rfc"
              format="rfcformatter"
              type="text"
              size="small"
              label="RFC"
              {...formulario.getFieldMeta('rfc')}
              {...formulario.getFieldHelpers('rfc')}
            />
            <p className="body2 color-gray-dark">Cuadro accionario:</p>
            <TextField
              name="accionesCapitalFijo"
              type="text"
              size="small"
              label="Acciones capital fijo"
              {...formulario.getFieldMeta('accionesCapitalFijo')}
              {...formulario.getFieldHelpers('accionesCapitalFijo')}
            />
            <TextField
              name="valor"
              type="text"
              size="small"
              label="Valor"
              {...formulario.getFieldMeta('valor')}
              {...formulario.getFieldHelpers('valor')}
            />
            <TextField
              name="accionesCapitalVariable"
              type="text"
              size="small"
              label="Acciones capital variable"
              {...formulario.getFieldMeta('accionesCapitalVariable')}
              {...formulario.getFieldHelpers('accionesCapitalVariable')}
            />
            <TextField
              name="porcentaje"
              type="text"
              size="small"
              label="Porcentaje"
              {...formulario.getFieldMeta('porcentaje')}
              {...formulario.getFieldHelpers('porcentaje')}
            />
            <div className="row justify-content-end mb-3">
              <button type="submit" className="btn-medium-secondary mr-3">
                Anterior
              </button>
              <button disabled type="submit" className="btn-medium mr-3">
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasoDosDictamenJuridico;
