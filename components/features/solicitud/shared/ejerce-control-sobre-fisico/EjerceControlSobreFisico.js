import PropTypes from 'prop-types';
import useCreateFormArray from '../../../../../hooks/useCreateFormArray';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import Select from '../../../../shared/select/Select';
import TextField from '../../../../shared/text-field/TextField';

const EjerceControlSobreFisico = ({
  formulario,
  nameControlados,
  nameTieneControlados,
  nameCantidadControlados,
  numeroMaximo,
}) => {
  const items = [...Array(numeroMaximo).keys()].map((index) => ({ value: index + 1, label: (index + 1).toString() }));

  useCreateFormArray(
    formulario,
    formulario.values[nameTieneControlados] === 'si',
    [formulario.values[nameTieneControlados], formulario.values[nameCantidadControlados]],
    {
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      rfc: '',
      parentesco: null,
    },
    nameControlados,
    nameCantidadControlados
  );

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-8 col-xs-8">
          <RadioButton name={nameTieneControlados} formulario={formulario} value="si">
            <div className="row ">
              <div className="input color-gray col-5">Sí, son</div>
              <div className="col-6 ">
                <Select
                  name={nameCantidadControlados}
                  size="big"
                  items={items}
                  disabled={formulario.values[nameTieneControlados] !== 'si'}
                  label=""
                  showAlwaysErrors={false}
                  {...formulario.getFieldMeta(nameCantidadControlados)}
                  {...formulario.getFieldHelpers(nameCantidadControlados)}
                />
              </div>
            </div>
          </RadioButton>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          <RadioButton name={nameTieneControlados} formulario={formulario} value="no">
            <span className="input color-gray">No</span>
          </RadioButton>
        </div>
      </div>
      {formulario.values[nameControlados].map((value, index) => (
        <div key={value.index}>
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
              <p className="input color-gray">Su nombre es</p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
              <TextField
                format="uppercase"
                name={`${nameControlados}[${index}].primerNombre`}
                maxlength={60}
                type="text"
                size="big"
                label="Nombre"
                {...formulario.getFieldMeta(`${nameControlados}[${index}].primerNombre`)}
                {...formulario.getFieldHelpers(`${nameControlados}[${index}].primerNombre`)}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <TextField
                format="uppercase"
                maxlength={60}
                name={`${nameControlados}[${index}].segundoNombre`}
                type="text"
                size="big"
                label="2º Nombre"
                {...formulario.getFieldMeta(`${nameControlados}[${index}].segundoNombre`)}
                {...formulario.getFieldHelpers(`${nameControlados}[${index}].segundoNombre`)}
              />
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
              <TextField
                format="uppercase"
                name={`${nameControlados}[${index}].primerApellido`}
                maxlength={60}
                type="text"
                size="big"
                label="Apellido paterno"
                {...formulario.getFieldMeta(`${nameControlados}[${index}].primerApellido`)}
                {...formulario.getFieldHelpers(`${nameControlados}[${index}].primerApellido`)}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <TextField
                name={`${nameControlados}[${index}].segundoApellido`}
                format="uppercase"
                maxlength={60}
                type="text"
                size="big"
                label="Apellido materno"
                {...formulario.getFieldMeta(`${nameControlados}[${index}].segundoApellido`)}
                {...formulario.getFieldHelpers(`${nameControlados}[${index}].segundoApellido`)}
              />
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 ">
              <p className="input color-gray">Su RFC es</p>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
              <TextField
                name={`${nameControlados}[${index}].rfc`}
                format="rfcformatter"
                maxlength={60}
                type="text"
                size="big"
                label="Ej. TLF280693H17"
                {...formulario.getFieldMeta(`${nameControlados}[${index}].rfc`)}
                {...formulario.getFieldHelpers(`${nameControlados}[${index}].rfc`)}
              />
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 ">
              <p className="input color-gray">Parentesco</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
              <Select
                name={`${nameControlados}[${index}].parentesco`}
                size="big"
                items={[
                  { label: 'Cónyuges', value: 'Cónyuges' },
                  { label: 'Concubinos', value: 'oncubinos' },
                  { label: 'Hijos', value: 'Hijos' },
                  { label: 'Padres', value: 'Padres' },
                  { label: 'Suegros', value: 'Suegros' },
                  { label: 'Hijos de cónyuge', value: 'Hijos de cónyuge' },
                  { label: 'Hermanos', value: 'Hermanos' },
                  { label: 'Abuelos', value: 'Abuelos' },
                  { label: 'Nietos', value: 'Nietos' },
                  { label: 'Cuñados', value: 'Cuñados' },
                ]}
                label="Parentesco"
                {...formulario.getFieldMeta(`${nameControlados}[${index}].parentesco`)}
                {...formulario.getFieldHelpers(`${nameControlados}[${index}].parentesco`)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

EjerceControlSobreFisico.propTypes = {
  formulario: PropTypes.any.isRequired,
  nameControlados: PropTypes.string.isRequired,
  nameTieneControlados: PropTypes.string.isRequired,
  nameCantidadControlados: PropTypes.string.isRequired,
  numeroMaximo: PropTypes.number.isRequired,
};

export default EjerceControlSobreFisico;
