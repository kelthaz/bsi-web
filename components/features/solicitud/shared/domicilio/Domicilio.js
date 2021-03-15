import PropTypes from 'prop-types';
import useFindCodigoPostal from '../../../../../hooks/useFindCodigoPostal';
import Select from '../../../../shared/select/Select';
import TextField from '../../../../shared/text-field/TextField';

const Domicilio = ({
  formulario,
  nameFieldCalle,
  nameFieldNumExterior,
  nameFieldNumInterior,
  nameFieldCodigoPostal,
  nameFieldColonia,
  nameFieldMunicipioAlcaldia,
  nameFieldCiudad,
  nameFieldEstado,
}) => {
  const [colonias] = useFindCodigoPostal(
    formulario,
    nameFieldCodigoPostal,
    nameFieldColonia,
    nameFieldMunicipioAlcaldia,
    nameFieldCiudad,
    nameFieldEstado
  );

  return (
    <div className="row no-gutters">
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
        <TextField
          name={nameFieldCalle}
          maxlength={60}
          type="text"
          size="big"
          label="Calle"
          format="alphanumeric"
          {...formulario.getFieldMeta(nameFieldCalle)}
          {...formulario.getFieldHelpers(nameFieldCalle)}
        />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
        <TextField
          name={nameFieldNumExterior}
          maxlength={6}
          type="text"
          size="big"
          label="No. Exterior"
          format="alphanumeric"
          {...formulario.getFieldMeta(nameFieldNumExterior)}
          {...formulario.getFieldHelpers(nameFieldNumExterior)}
        />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
        <TextField
          name={nameFieldNumInterior}
          maxlength={6}
          type="text"
          size="big"
          label="No. Interior"
          format="alphanumeric"
          {...formulario.getFieldMeta(nameFieldNumInterior)}
          {...formulario.getFieldHelpers(nameFieldNumInterior)}
        />
      </div>

      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
        <TextField
          name={nameFieldCodigoPostal}
          maxlength={5}
          type="text"
          size="big"
          label="C.P"
          format="number"
          {...formulario.getFieldMeta(nameFieldCodigoPostal)}
          {...formulario.getFieldHelpers(nameFieldCodigoPostal)}
        />
      </div>
      <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
        <Select
          name={nameFieldColonia}
          maxlength={120}
          type="text"
          size="big"
          items={colonias}
          label="Colonia"
          disabled={colonias.length === 0}
          {...formulario.getFieldMeta(nameFieldColonia)}
          {...formulario.getFieldHelpers(nameFieldColonia)}
        />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
        <TextField
          name={nameFieldMunicipioAlcaldia}
          maxlength={50}
          type="text"
          size="big"
          label="Municipio/Alcaldía"
          readonly
          {...formulario.getFieldMeta(nameFieldMunicipioAlcaldia)}
          {...formulario.getFieldHelpers(nameFieldMunicipioAlcaldia)}
        />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <TextField
          name={nameFieldCiudad}
          maxlength={50}
          type="text"
          size="big"
          label="Ciudad"
          readonly
          {...formulario.getFieldMeta(nameFieldCiudad)}
          {...formulario.getFieldHelpers(nameFieldCiudad)}
        />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <TextField
          name={nameFieldEstado}
          maxlength={50}
          type="text"
          size="big"
          label="Estado"
          readonly
          {...formulario.getFieldMeta(nameFieldEstado)}
          {...formulario.getFieldHelpers(nameFieldEstado)}
        />
      </div>
    </div>
  );
};

Domicilio.propTypes = {
  formulario: PropTypes.any.isRequired,
  nameFieldCalle: PropTypes.string.isRequired,
  nameFieldNumExterior: PropTypes.string.isRequired,
  nameFieldNumInterior: PropTypes.string.isRequired,
  nameFieldCodigoPostal: PropTypes.string.isRequired,
  nameFieldColonia: PropTypes.string.isRequired,
  nameFieldMunicipioAlcaldia: PropTypes.string.isRequired,
  nameFieldCiudad: PropTypes.string.isRequired,
  nameFieldEstado: PropTypes.string.isRequired,
};

export default Domicilio;
