import PropTypes from 'prop-types';
import TextField from '../../../../shared/text-field/TextField';
import SvgNoGuardamosNada from '../../../../svgs/icons-cards/SvgNoGuardamosNada';
import SvgLegalex from '../../../../svgs/SvgLegalex';

const ContratoLegalex = ({
  formulario,
  nameFieldNombreSolicitante,
  nameFieldRFC,
  nameFieldFechaNacimiento,
  nameFieldDomicilio,
  nameFieldNumeroExterior,
  nameFieldNumeroInterior,
  nameFieldColonia,
  nameFieldAlcaldia,
  nameFieldCodigoPostal,
  nameFieldEstado,
  nameFieldTelefono,
  nameFieldRepresentanteLegal,
  nameFieldFechaAutorizacion,
}) => (
  <>
    <h4 className="color-blue-storm">Autorización para la consulta de Buró de Crédito</h4>
    <div className="row justify-content-between">
      <div className=" d-none d-md-block card-white text-md-center icon-card">
        <div className="container-svg-card">
          <img src="/buro.png" alt="Buro de crédito" />
        </div>
        <div>
          <h4 className="color-blue-storm sub">Consultamos con Buró de crédito</h4>
          <p className="color-gray body3">Esto para conocer un poco más sobre ti</p>
        </div>
      </div>
      <div className="d-none d-md-block  card-white text-md-center icon-card">
        <div className="container-svg-card">
          <SvgLegalex />
        </div>
        <div className="px-0">
          <h4 className="color-blue-storm sub">Firma segura con Legalex GS</h4>
          <p className="color-gray body3">
            Puedes firmar de forma segura con tu e.firma
            <br />
            <a className="link">¿Por qué te pedimos esto?</a>
          </p>
        </div>
      </div>
      <div className="d-none d-md-block card-white text-md-center icon-card">
        <div className="container-svg-card">
          <SvgNoGuardamosNada />
        </div>
        <div>
          <h4 className="color-blue-storm sub pb-auto">No guardamos nada</h4>
          <p className="color-gray body3">Después de la consulta no guardaremos tus archivos</p>
        </div>
      </div>
    </div>

    <div className="card-simple-white-shadow">
      <p className="d-none d-md-block sub color-blue-storm">Contrato de Revisión de Buró de Crédito</p>

      <div className="body2">
        <p className="mb-4">
          Por este conducto autorizo expresamente a{' '}
          <span className="sub">BanCoppel, S.A., Institución de Banca Múltiple</span>, para que por conducto de sus
          funcionarios facultados lleve a cabo investigaciones sobre mi comportamiento crediticio o el de la empresa que
          represento en las sociedades de información crediticia que estime conveniente.
        </p>
        <p className="mb-3">
          Asimismo declaro que conozco la naturaleza de las sociedades de información crediticia y de la información
          contenida en los reportes de crédito y reporte de crédito especial; declaro que conozco la naturaleza alcance
          de la información que se solicitará, del uso que{' '}
          <span className="sub">BanCoppel, S.A., Institución de banca Múltiple</span>, hará de tal información y de que
          esta podrá realizar consultas periódicas de mi historial crediticio o el de la empresa que represento,
          consintiendo que esta autorización se encuentre vigente por un periodo de 3 años contando a partir de la fecha
          de sus expedición y en todo caso durante el tiempo que mantengamos relación jurídica.
        </p>
        <p className="mb-3">
          En caso de que la solicitante sea una persona, declaro bajo protesta de decir verdad ser Representante Legal
          de la empresa mencionada en esta autorización; manifestando que a la fecha de firma de la presente
          autorización los poderes no me han sido revocados, limitados, ni modificados en forma alguna.
        </p>
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <TextField
              name={nameFieldNombreSolicitante}
              maxlength={18}
              type="text"
              size="small"
              label="Nombre del Solicitante (Persona Física o Razón Social de la persona Moral)"
              disabled
              {...formulario.getFieldMeta(nameFieldNombreSolicitante)}
              {...formulario.getFieldHelpers(nameFieldNombreSolicitante)}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <TextField
              name={nameFieldRFC}
              maxlength={12}
              type="text"
              size="small"
              label="RFC"
              disabled
              {...formulario.getFieldMeta(nameFieldRFC)}
              {...formulario.getFieldHelpers(nameFieldRFC)}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <TextField
              name={nameFieldFechaNacimiento}
              maxlength={12}
              type="text"
              size="small"
              label="Fecha de Nacimiento/Constitución:"
              disabled
              {...formulario.getFieldMeta(nameFieldFechaNacimiento)}
              {...formulario.getFieldHelpers(nameFieldFechaNacimiento)}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <TextField
              name={nameFieldDomicilio}
              maxlength={12}
              type="text"
              size="small"
              label="Domicilio"
              disabled
              {...formulario.getFieldMeta(nameFieldDomicilio)}
              {...formulario.getFieldHelpers(nameFieldDomicilio)}
            />
          </div>
          <div className="col-md-3 col-xs-12">
            <TextField
              name={nameFieldNumeroExterior}
              maxlength={12}
              type="text"
              size="small"
              label="No. Exterior"
              disabled
              {...formulario.getFieldMeta(nameFieldNumeroExterior)}
              {...formulario.getFieldHelpers(nameFieldNumeroExterior)}
            />
          </div>
          <div className="col-md-3 col-xs-12">
            <TextField
              name={nameFieldNumeroInterior}
              maxlength={12}
              type="text"
              size="small"
              label="No. Interior"
              disabled
              {...formulario.getFieldMeta(nameFieldNumeroInterior)}
              {...formulario.getFieldHelpers(nameFieldNumeroInterior)}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <TextField
              name={nameFieldColonia}
              maxlength={12}
              type="text"
              size="small"
              label="Colonia"
              disabled
              {...formulario.getFieldMeta(nameFieldColonia)}
              {...formulario.getFieldHelpers(nameFieldColonia)}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <TextField
              name={nameFieldAlcaldia}
              maxlength={12}
              type="text"
              size="small"
              label="Alcaldía/Municipio"
              disabled
              {...formulario.getFieldMeta(nameFieldAlcaldia)}
              {...formulario.getFieldHelpers(nameFieldAlcaldia)}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <TextField
              name={nameFieldCodigoPostal}
              maxlength={12}
              type="text"
              size="small"
              label="Código Postal"
              disabled
              {...formulario.getFieldMeta(nameFieldCodigoPostal)}
              {...formulario.getFieldHelpers(nameFieldCodigoPostal)}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <TextField
              name={nameFieldEstado}
              maxlength={12}
              type="text"
              size="small"
              label="Estado"
              disabled
              {...formulario.getFieldMeta(nameFieldEstado)}
              {...formulario.getFieldHelpers(nameFieldEstado)}
            />
          </div>
          <div className="col-md-12 col-xs-12">
            <TextField
              name={nameFieldTelefono}
              type="tel"
              size="small"
              label="Teléfono"
              format="phone"
              maxlength={12}
              disabled
              {...formulario.getFieldMeta(nameFieldTelefono)}
              {...formulario.getFieldHelpers(nameFieldTelefono)}
            />
          </div>
          <div className="col-md-12 col-xs-12">
            <TextField
              name={nameFieldRepresentanteLegal}
              maxlength={12}
              type="text"
              size="small"
              label="Representante legal (solo Persona Moral):"
              disabled
              {...formulario.getFieldMeta(nameFieldRepresentanteLegal)}
              {...formulario.getFieldHelpers(nameFieldRepresentanteLegal)}
            />
          </div>
          <div className="col-md-12 col-xs-12">
            <TextField
              name={nameFieldFechaAutorizacion}
              maxlength={12}
              type="text"
              size="small"
              label="Fecha en que se autoriza la consulta:"
              disabled
              {...formulario.getFieldMeta(nameFieldFechaAutorizacion)}
              {...formulario.getFieldHelpers(nameFieldFechaAutorizacion)}
            />
          </div>
        </div>
        <p>
          Estoy consciente y acepto que este documento quede bajo propiedad de BanCoppel, S.A., Institución de banca
          Múltiple, para efectos de control y cumplimiento del artículo 28 de la Ley para Regular a las Sociedades de
          Información Crediticia.
        </p>
      </div>
    </div>
  </>
);

ContratoLegalex.propTypes = {
  formulario: PropTypes.any.isRequired,
  nameFieldNombreSolicitante: PropTypes.string.isRequired,
  nameFieldRFC: PropTypes.string.isRequired,
  nameFieldFechaNacimiento: PropTypes.string.isRequired,
  nameFieldDomicilio: PropTypes.string.isRequired,
  nameFieldNumeroExterior: PropTypes.string.isRequired,
  nameFieldNumeroInterior: PropTypes.string.isRequired,
  nameFieldColonia: PropTypes.string.isRequired,
  nameFieldAlcaldia: PropTypes.string.isRequired,
  nameFieldCodigoPostal: PropTypes.string.isRequired,
  nameFieldEstado: PropTypes.string.isRequired,
  nameFieldTelefono: PropTypes.string.isRequired,
  nameFieldRepresentanteLegal: PropTypes.string.isRequired,
  nameFieldFechaAutorizacion: PropTypes.string.isRequired,
};

export default ContratoLegalex;
