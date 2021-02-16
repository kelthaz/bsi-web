import useFindCodigoPostal from '../../../../../hooks/useFindCodigoPostal';
import Select from '../../../../shared/select/Select';
import TextField from '../../../../shared/text-field/TextField';

const Domicilio = ({ domicilio, colonias, formulario }) => {
  const [coloniasDomicilioFiscal] = useFindCodigoPostal(
    formulario,
    'domicilioFiscal.codigoPostal',
    'domicilioFiscal.colonia',
    'domicilioFiscal.municipioAlcaldia',
    'domicilioFiscal.ciudad',
    'domicilioFiscal.estado'
  );

  return (
    <div className="row no-gutters">
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
        <TextField
          name={`${domicilio}.calle`}
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
          name={`${domicilio}.numExterior`}
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
          name={`${domicilio}.numInterior`}
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
          name={`${domicilio}.codigoPostal`}
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
          name={`${domicilio}.colonia`}
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
          name={`${domicilio}.municipioAlcaldia`}
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
          name={`${domicilio}.ciudad`}
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
          name={`${domicilio}.estado`}
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

export default Domicilio;
