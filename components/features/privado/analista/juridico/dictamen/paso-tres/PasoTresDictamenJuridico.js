import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import TextField from '../../../../../../shared/text-field/TextField';
import ProgressBar from '../../../../shared/progressbar/ProgressBar';
import RadioButton from '../../../../../../shared/radio-button/RadioButton';
import TextArea from '../../../../../../shared/text-area/TextArea';
import Select from '../../../../../../shared/select/Select';
import SvgDocumentosPequeño from '../../../../../../svgs/iconos/SvgDocumentosPequeño';
import { campoRequerido, longitudMinima, longitudMaxima, seleccionOpcion } from '../../../../../../../constants/errors';

const PasoTresDictamenJuridico = () => {
  const columnaImporteEsperado = ['Mancomunados', 'individual'];
  const itemsResultado = [
    { value: 1, label: 'Resultado 1' },
    { value: 2, label: 'Resultado 2' },
    { value: 3, label: 'Resultado 3' },
    { value: 4, label: 'Resultado 4' },
  ];

  const formulario = useFormik({
    initialValues: {
      cuantosAccionistas: null,
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      documentoIdentificacionOficial: '',
      fechaNacimiento: '',
      pyc: null,
      admonBienes: null,
      actosDominio: null,
      suscripcionTitulos: null,
      otorgarPoderes: null,
      abrirCuentasBancarias: null,
      limitaciones: null,
      redactaLimitaciones: '',
      nombreSegundo: '',
      apellidoPaternoSegundo: '',
      apellidoMaternoSegundo: '',
      documentoIdentificacionOficialSegundo: '',
      fechaNacimientoSegundo: '',
      pycSegundo: null,
      admonBienesSegundo: null,
      actosDominioSegundo: null,
      suscripcionTitulosSegundo: null,
      otorgarPoderesSegundo: null,
      abrirCuentasBancariasSegundo: null,
      limitacionesSegundo: null,
      escrituraFacultades: '',
      redactaLimitacionesSegundo: '',
      folio: '',
      observaciones: '',
      conclusiones: '',
      nombreAbogado: '',
      resultadoDictamen: null,
    },
    validationSchema: Yup.object().shape({
      cuantosAccionistas: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
      nombre: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
      apellidoPaterno: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
      apellidoMaterno: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
      documentoIdentificacionOficial: Yup.string()
        .min(12, longitudMinima)
        .max(13, longitudMaxima)
        .required(campoRequerido),
      fechaNacimiento: Yup.string().min(0, longitudMinima).max(18, longitudMaxima).required(campoRequerido),
      pyc: Yup.boolean().oneOf([true], campoRequerido),
      admonBienes: Yup.boolean().oneOf([true], campoRequerido),
      actosDominio: Yup.boolean().oneOf([true], campoRequerido),
      suscripcionTitulos: Yup.boolean().oneOf([true], campoRequerido),
      otorgarPoderes: Yup.boolean().oneOf([true], campoRequerido),
      abrirCuentasBancarias: Yup.boolean().oneOf([true], campoRequerido),
      limitaciones: Yup.boolean().oneOf([true], campoRequerido),
      redactaLimitaciones: Yup.string().min(1, longitudMinima).max(300, longitudMaxima).required(campoRequerido),
      nombreSegundo: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
      apellidoPaternoSegundo: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
      apellidoMaternoSegundo: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
      documentoIdentificacionOficialSegundo: Yup.string()
        .min(12, longitudMinima)
        .max(13, longitudMaxima)
        .required(campoRequerido),
      fechaNacimientoSegundo: Yup.string().min(0, longitudMinima).max(18, longitudMaxima).required(campoRequerido),
      pycSegundo: Yup.boolean().oneOf([true], campoRequerido),
      admonBienesSegundo: Yup.boolean().oneOf([true], campoRequerido),
      actosDominioSegundo: Yup.boolean().oneOf([true], campoRequerido),
      suscripcionTitulosSegundo: Yup.boolean().oneOf([true], campoRequerido),
      otorgarPoderesSegundo: Yup.boolean().oneOf([true], campoRequerido),
      abrirCuentasBancariasSegundo: Yup.boolean().oneOf([true], campoRequerido),
      limitacionesSegundo: Yup.boolean().oneOf([true], campoRequerido),
      redactaLimitacionesSegundo: Yup.string().min(1, longitudMinima).max(300, longitudMaxima).required(campoRequerido),
      escrituraFacultades: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
      folio: Yup.string().min(1, longitudMinima).max(30, longitudMaxima).required(campoRequerido),
      observaciones: Yup.string().min(1, longitudMinima).max(1000, longitudMaxima).required(campoRequerido),
      conclusiones: Yup.string().min(1, longitudMinima).max(200, longitudMaxima).required(campoRequerido),
      nombreAbogado: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
      resultadoDictamen: Yup.object()
        .shape({
          value: Yup.string(),
          label: Yup.string(),
        })
        .nullable()
        .required(seleccionOpcion),
    }),
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
        <div className="col-12 mb-3">
          <ProgressBar value="60" />
        </div>
        <div className="col-5">
          <div className="card-simple-blue-light">
            <div className="color-blue-storm sub">Resumen del dictamen</div>
            <div className="color-blue-storm body2 mt-2">Datos de cliente</div>
            <div className="color-blue-storm body2 mt-2">Accionistas / Socios / Asociados</div>
            <div className="color-blue-storm body2 mt-2">Estructura de poderes e identificación de apoderados</div>
            <div className="row mt-2">
              <div className="col-6 color-gray-light body2 mt-2">Nombre del representante legal</div>
              <div className="col-6 color-blue-storm body2 mt-2">Dimitri</div>
            </div>
            <div className="row mt-2">
              <div className="col-6 color-gray-light body2 mt-2">Apellidos</div>
              <div className="col-6 color-blue-storm body2 mt-2">Alexandre Blaiddyd</div>
            </div>
            <div className="row mt-2">
              <div className="col-6 color-gray-light body2 mt-2">Escritura / Poderes</div>
              <div className="col-6 color-blue-storm body2 mt-2">Escritura número 7,025</div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="color-blue-storm sub">
              <SvgDocumentosPequeño />
              Estructura de poderes e identificación de apoderados
            </p>
            <Select
              name="cuantosAccionistas"
              label="¿Cuántos accionistas hay?"
              size="small"
              items={itemsAccionistas}
              {...formulario.getFieldMeta('cuantosAccionistas')}
              {...formulario.getFieldHelpers('cuantosAccionistas')}
            />
            <div className="row color-gray-light body2 mt-2">
              <div className="col-5 sub pr-0">Datos del primer representante</div>
              <div className="col-7 pl-0 mt-1">
                <hr />
              </div>
            </div>
            <TextField
              name="nombre"
              type="text"
              size="small"
              label="Nombre"
              {...formulario.getFieldMeta('nombre')}
              {...formulario.getFieldHelpers('nombre')}
            />
            <TextField
              name="apellidoPaterno"
              type="text"
              size="small"
              label="Apellido paterno"
              {...formulario.getFieldMeta('apellidoPaterno')}
              {...formulario.getFieldHelpers('apellidoPaterno')}
            />
            <TextField
              name="apellidoMaterno"
              type="text"
              size="small"
              label="Apellido materno"
              {...formulario.getFieldMeta('apellidoMaterno')}
              {...formulario.getFieldHelpers('apellidoMaterno')}
            />
            <TextField
              name="documentoIdentificacionOficial"
              type="text"
              size="small"
              label="Documento identificación oficial"
              {...formulario.getFieldMeta('documentoIdentificacionOficial')}
              {...formulario.getFieldHelpers('documentoIdentificacionOficial')}
            />
            <TextField
              name="fechaNacimiento"
              type="text"
              size="small"
              label="Fecha nacimiento"
              {...formulario.getFieldMeta('fechaNacimiento')}
              {...formulario.getFieldHelpers('fechaNacimiento')}
            />
            <div>
              <table className="w-100">
                <thead>
                  <tr>
                    <th> </th>
                    {columnaImporteEsperado.map((column) => (
                      <th>
                        <div className="m-2 color-gray-light body3 row justify-content-center">{column}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bot-line">
                    <td>
                      <div className="m-2 body3">PYC</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton name="pyc" label={column} {...formulario.getFieldProps('pyc')} />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="bot-line">
                    <td>
                      <div className="m-2 body3">Admon bienes</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton name="admonBienes" label={column} {...formulario.getFieldProps('admonBienes')} />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="bot-line">
                    <td>
                      <div className="m-2 body3">Actos dominio</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton
                            name="actosDominio"
                            label={column}
                            {...formulario.getFieldProps('actosDominio')}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="bot-line">
                    <td>
                      <div className="m-2 body3">Suscripción títulos de crédito</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton
                            name="suscripcionTitulos"
                            label={column}
                            {...formulario.getFieldProps('suscripcionTitulos')}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="bot-line">
                    <td>
                      <div className="m-2 body3">Otorgar o revocar poderes</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton
                            name="otorgarPoderes"
                            label={column}
                            {...formulario.getFieldProps('otorgarPoderes')}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="bot-line">
                    <td>
                      <div className="m-2 body3">Abrir cancelar cuentas bancarias</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton
                            name="abrirCuentasBancarias"
                            label={column}
                            {...formulario.getFieldProps('abrirCuentasBancarias')}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>
                      <div className="m-2 body3">Limitaciones</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton
                            name="limitaciones"
                            label={column}
                            {...formulario.getFieldProps('limitaciones')}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <TextArea
                name="redactaLimitaciones"
                label="Redacta las limitaciones"
                maxlength={120}
                format="textArea"
                {...formulario.getFieldMeta('redactaLimitaciones')}
                {...formulario.getFieldHelpers('redactaLimitaciones')}
              />
            </div>
            <div className="row color-gray-light body2 mt-2">
              <div className="col-5 sub pr-0">Datos del segundo representante</div>
              <div className="col-7 pl-0 mt-1">
                <hr />
              </div>
            </div>
            <TextField
              name="nombreSegundo"
              type="text"
              size="small"
              label="Nombre"
              {...formulario.getFieldMeta('nombreSegundo')}
              {...formulario.getFieldHelpers('nombreSegundo')}
            />
            <TextField
              name="apellidoPaternoSegundo"
              type="text"
              size="small"
              label="Apellido paterno"
              {...formulario.getFieldMeta('apellidoPaternoSegundo')}
              {...formulario.getFieldHelpers('apellidoPaternoSegundo')}
            />
            <TextField
              name="apellidoMaterno"
              type="text"
              size="small"
              label="Apellido materno"
              {...formulario.getFieldMeta('apellidoMaternoSegundo')}
              {...formulario.getFieldHelpers('apellidoMaternoSegundo')}
            />
            <TextField
              name="documentoIdentificacionOficialSegundo"
              type="text"
              size="small"
              label="Documento identificación oficial"
              {...formulario.getFieldMeta('documentoIdentificacionOficialSegundo')}
              {...formulario.getFieldHelpers('documentoIdentificacionOficialSegundo')}
            />
            <TextField
              name="fechaNacimientoSegundo"
              type="text"
              size="small"
              label="Fecha nacimiento"
              {...formulario.getFieldMeta('fechaNacimientoSegundo')}
              {...formulario.getFieldHelpers('fechaNacimientoSegundo')}
            />
            <div className="card-simple-blue-light">
              <div className="color-blue-storm sub">Falta documento</div>
              <p>
                No existe una identificación oficial ligada a este nombre. Es necesario que se solicite este documento.
              </p>
              <div className="row justify-content-end">
                <button type="submit" className="btn-medium mr-3">
                  Solicitar documento
                </button>
              </div>
            </div>
            <div>
              <table className="w-100">
                <thead>
                  <tr>
                    <th> </th>
                    {columnaImporteEsperado.map((column) => (
                      <th>
                        <div className="m-2 color-gray-light body3 row justify-content-center">{column}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bot-line">
                    <td>
                      <div className="m-2 body3">PYC</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton name="pycSegundo" label={column} {...formulario.getFieldProps('pycSegundo')} />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="bot-line">
                    <td>
                      <div className="m-2 body3">Admon bienes</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton
                            name="admonBienesSegundo"
                            label={column}
                            {...formulario.getFieldProps('admonBienesSegundo')}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="bot-line">
                    <td>
                      <div className="m-2 body3">Actos dominio</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton
                            name="actosDominioSegundo"
                            label={column}
                            {...formulario.getFieldProps('actosDominioSegundo')}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="bot-line">
                    <td>
                      <div className="m-2 body3">Suscripción títulos de crédito</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton
                            name="suscripcionTitulosSegundo"
                            label={column}
                            {...formulario.getFieldProps('suscripcionTitulosSegundo')}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="bot-line">
                    <td>
                      <div className="m-2 body3">Otorgar o revocar poderes</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton
                            name="otorgarPoderesSegundo"
                            label={column}
                            {...formulario.getFieldProps('otorgarPoderesSegundo')}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="bot-line">
                    <td>
                      <div className="m-2 body3">Abrir cancelar cuentas bancarias</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton
                            name="abrirCuentasBancariasSegundo"
                            label={column}
                            {...formulario.getFieldProps('abrirCuentasBancariasSegundo')}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>
                      <div className="m-2 body3">Limitaciones</div>
                    </td>
                    {columnaImporteEsperado.map((column) => (
                      <td key={column}>
                        <div className="text-align-center">
                          <RadioButton
                            name="limitacionesSegundo"
                            label={column}
                            {...formulario.getFieldProps('limitacionesSegundo')}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <TextArea
                name="redactaLimitacionesSegundo"
                label="Redacta las limitaciones"
                maxlength={120}
                format="textArea"
                {...formulario.getFieldMeta('redactaLimitacionesSegundo')}
                {...formulario.getFieldHelpers('redactaLimitacionesSegundo')}
              />
            </div>
            <TextField
              name="escrituraFacultades"
              type="text"
              size="small"
              label="Escritura / Poder donde consten sus facultades"
              {...formulario.getFieldMeta('escrituraFacultades')}
              {...formulario.getFieldHelpers('escrituraFacultades')}
            />
            <TextField
              name="folio"
              type="text"
              size="small"
              label="Folio / clave"
              {...formulario.getFieldMeta('folio')}
              {...formulario.getFieldHelpers('folio')}
            />
            <div className="mt-4">
              <TextArea
                name="observaciones"
                label="Observaciones"
                maxlength={120}
                format="textArea"
                {...formulario.getFieldMeta('observaciones')}
                {...formulario.getFieldHelpers('observaciones')}
              />
            </div>
            <div className="mt-4">
              <TextArea
                name="conclusiones"
                label="Conclusiones"
                maxlength={120}
                format="textArea"
                {...formulario.getFieldMeta('conclusiones')}
                {...formulario.getFieldHelpers('conclusiones')}
              />
            </div>
            <TextField
              name="nombreAbogado"
              type="text"
              size="small"
              label="Nombre del abogado que dictaminó"
              {...formulario.getFieldMeta('nombreAbogado')}
              {...formulario.getFieldHelpers('nombreAbogado')}
            />
            <Select
              name="resultadoDictamen"
              label="Resultado del dictamen"
              size="small"
              items={itemsResultado}
              {...formulario.getFieldMeta('resultadoDictamen')}
              {...formulario.getFieldHelpers('resultadoDictamen')}
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

export default PasoTresDictamenJuridico;
