import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import TextField from '../../../../../../shared/text-field/TextField';
import TextArea from '../../../../../../shared/text-area/TextArea';
import Select from '../../../../../../shared/select/Select';
import SvgInfoBackOffice from '../../../../../../svgs/SvgInfoBackOffice';
import { campoRequerido, longitudMinima, longitudMaxima, seleccionOpcion } from '../../../../../../../constants/errors';

const PasoUnoDictamenJuridico = () => {
  const formulario = useFormik({
    initialValues: {
      primerNombre: '',
      razonSocial: '',
      rfc: '',
      nacionalidad: '',
      actaConstitutiva: '',
      sector: '',
      presentadosEn: '',
      fechaInscripcionRPPC: '',
      fedatarioPublico: '',
      numeroNotarioPublico: '',
      entidadFederativa: '',
      datosIncripcion: '',
      domicilio: '',
      duracion: '',
      organoAdministracion: '',
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      escritura: '',
      folio: '',
      observaciones: '',
      conclusiones: '',
      nombreAbogado: '',
      resultadoDictamen: null,
    },
    validationSchema: Yup.object().shape({
      primerNombre: Yup.string(),
      razonSocial: Yup.string(),
      rfc: Yup.string(),
      nacionalidad: Yup.string().min(8, longitudMinima).max(8, longitudMaxima),
      actaConstitutiva: Yup.string().min(10, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
      sector: Yup.string().min(5, longitudMinima).max(60, longitudMaxima),
      presentadosEn: Yup.string().min(12, longitudMinima).max(12, longitudMaxima).required(campoRequerido),
      fechaInscripcionRPPC: Yup.string().max(60, longitudMaxima),
      fedatarioPublico: Yup.string().min(1, longitudMinima).max(120, longitudMaxima).required(campoRequerido),
      numeroNotarioPublico: Yup.string().min(1, longitudMinima).max(15, longitudMaxima).required(campoRequerido),
      entidadFederativa: Yup.string().required(campoRequerido),
      datosIncripcion: Yup.string().min(1, longitudMinima).max(300, longitudMaxima).required(campoRequerido),
      domicilio: Yup.string().min(1, longitudMinima).max(30, longitudMaxima).required(campoRequerido),
      duracion: Yup.string().min(1, longitudMinima).max(30, longitudMaxima).required(campoRequerido),
      organoAdministracion: Yup.string().required(campoRequerido),
      nombre: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
      apellidoPaterno: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
      apellidoMaterno: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
      escritura: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
      folio: Yup.string().min(1, longitudMinima).max(60, longitudMaxima).required(campoRequerido),
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

  const itemsResultado = [
    { value: 1, label: 'Resultado 1' },
    { value: 2, label: 'Resultado 2' },
    { value: 3, label: 'Resultado 3' },
    { value: 4, label: 'Resultado 4' },
  ];

  return (
    <div className="container-fluid px-0">
      <div className="row">
        <div className="col-5">
          <div className="card-simple-blue-light">
            <div className="color-blue-storm sub">Datos del cliente</div>
            <div className="color-blue-storm body2 mt-2">Datos de cliente</div>
            <div className="row">
              <div className="col-4 color-gray-light body2 mt-2">Nombre</div>
              <div className="col-6 color-blue-storm body2 mt-2">COMERCIALIZADORA TU ESTILO</div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <form onSubmit={formulario.handleSubmit} noValidate>
            <p className="color-blue-storm sub">
              <SvgInfoBackOffice />
              Datos del cliente
            </p>
            <TextField
              name="primerNombre"
              format="uppercase"
              disabled
              type="text"
              size="small"
              label="Nombre"
              {...formulario.getFieldMeta('primerNombre')}
              {...formulario.getFieldHelpers('primerNombre')}
            />
            <TextField
              name="razonSocial"
              format="uppercase"
              disabled
              type="text"
              size="small"
              label="Razón social"
              optional
              {...formulario.getFieldMeta('razonSocial')}
              {...formulario.getFieldHelpers('razonSocial')}
            />
            <TextField
              name="rfc"
              format="rfcformatter"
              disabled
              type="text"
              size="small"
              label="RFC de la empresa"
              {...formulario.getFieldMeta('rfc')}
              {...formulario.getFieldHelpers('rfc')}
            />
            <TextField
              name="nacionalidad"
              maxlength={8}
              type="text"
              size="small"
              label="Nacionalidad"
              {...formulario.getFieldMeta('nacionalidad')}
              {...formulario.getFieldHelpers('nacionalidad')}
            />
            <TextField
              name="actaConstitutiva"
              maxlength={60}
              type="text"
              size="small"
              label="Acta constitutiva"
              {...formulario.getFieldMeta('actaConstitutiva')}
              {...formulario.getFieldHelpers('actaConstitutiva')}
            />
            <TextField
              name="sector"
              maxlength={60}
              type="text"
              size="small"
              label="Sector"
              {...formulario.getFieldMeta('sector')}
              {...formulario.getFieldHelpers('sector')}
            />
            <TextField
              name="presentadosEn"
              maxlength={12}
              type="text"
              size="small"
              label="Presentados en"
              {...formulario.getFieldMeta('presentadosEn')}
              {...formulario.getFieldHelpers('presentadosEn')}
            />
            <TextField
              name="fechaInscripcionRPPC"
              maxlength={60}
              type="text"
              size="small"
              label="Fecha de inscripción RPPC"
              {...formulario.getFieldMeta('fechaInscripcionRPPC')}
              {...formulario.getFieldHelpers('fechaInscripcionRPPC')}
            />
            <TextArea
              name="fedatarioPublico"
              label="Fedatario público"
              maxlength={120}
              format="textArea"
              {...formulario.getFieldMeta('fedatarioPublico')}
              {...formulario.getFieldHelpers('fedatarioPublico')}
            />
            <TextField
              name="numeroNotarioPublico"
              maxlength={15}
              type="text"
              size="small"
              label="Número de notario público"
              {...formulario.getFieldMeta('numeroNotarioPublico')}
              {...formulario.getFieldHelpers('numeroNotarioPublico')}
            />
            <TextField
              name="entidadFederativa"
              disabled
              type="text"
              size="small"
              label="Entidad federativa / estado"
              {...formulario.getFieldMeta('entidadFederativa')}
              {...formulario.getFieldHelpers('entidadFederativa')}
            />
            <TextArea
              name="datosIncripcion"
              label="Datos de incripción"
              maxlength={300}
              format="textArea"
              {...formulario.getFieldMeta('datosIncripcion')}
              {...formulario.getFieldHelpers('datosIncripcion')}
            />
            <TextField
              name="domicilio"
              maxlength={30}
              type="text"
              size="small"
              label="Domicilio"
              {...formulario.getFieldMeta('domicilio')}
              {...formulario.getFieldHelpers('domicilio')}
            />
            <TextField
              name="duracion"
              maxlength={60}
              type="text"
              size="small"
              label="Duración"
              {...formulario.getFieldMeta('duracion')}
              {...formulario.getFieldHelpers('duracion')}
            />
            <TextField
              name="organoAdministracion"
              disabled
              type="text"
              size="small"
              label="Órgano de administración"
              {...formulario.getFieldMeta('organoAdministracion')}
              {...formulario.getFieldHelpers('organoAdministracion')}
            />
            <TextField
              name="nombre"
              maxlength={60}
              type="text"
              size="small"
              label="Nombre"
              {...formulario.getFieldMeta('nombre')}
              {...formulario.getFieldHelpers('nombre')}
            />
            <TextField
              name="apellidoPaterno"
              maxlength={60}
              type="text"
              size="small"
              label="Apellido paterno"
              {...formulario.getFieldMeta('apellidoPaterno')}
              {...formulario.getFieldHelpers('apellidoPaterno')}
            />
            <TextField
              name="apellidoMaterno"
              maxlength={60}
              type="text"
              size="small"
              label="Apellido Materno"
              {...formulario.getFieldMeta('apellidoMaterno')}
              {...formulario.getFieldHelpers('apellidoMaterno')}
            />
            <TextField
              name="escritura"
              maxlength={60}
              type="text"
              size="small"
              label="Escritura / Poder donde consten sus facultades"
              {...formulario.getFieldMeta('escritura')}
              {...formulario.getFieldHelpers('escritura')}
            />
            <TextField
              name="folio"
              maxlength={60}
              type="text"
              size="small"
              label="Folio / clave"
              {...formulario.getFieldMeta('folio')}
              {...formulario.getFieldHelpers('folio')}
            />
            <TextArea
              name="observaciones"
              label="Observaciones"
              maxlength={1000}
              format="textArea"
              {...formulario.getFieldMeta('observaciones')}
              {...formulario.getFieldHelpers('observaciones')}
            />
            <TextArea
              name="conclusiones"
              label="Conclusiones"
              maxlength={200}
              format="textArea"
              {...formulario.getFieldMeta('conclusiones')}
              {...formulario.getFieldHelpers('conclusiones')}
            />
            <TextField
              name="nombreAbogado"
              maxlength={60}
              type="text"
              size="small"
              label="Nombre del abogado"
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
            <div className="row justify-content-end mb-3 mr-3">
              <button disabled type="submit" className="btn-medium">
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasoUnoDictamenJuridico;
