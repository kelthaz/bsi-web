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
          formulario={formulario}
          type="text"
          size="big"
          label="Calle"
          format="alphanumeric"
        />
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
        <TextField
          name={nameFieldNumExterior}
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
          name={nameFieldNumInterior}
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
          name={nameFieldCodigoPostal}
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
          name={nameFieldColonia}
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
          name={nameFieldMunicipioAlcaldia}
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
          name={nameFieldCiudad}
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
          name={nameFieldEstado}
          maxlength={50}
          formulario={formulario}
          type="text"
          size="big"
          label="Estado"
          readonly
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
