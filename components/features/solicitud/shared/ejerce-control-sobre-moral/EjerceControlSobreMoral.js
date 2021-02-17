import PropTypes from 'prop-types';
import useCreateFormArray from '../../../../../hooks/useCreateFormArray';
import RadioButton from '../../../../shared/radio-button/RadioButton';
import Select from '../../../../shared/select/Select';
import TextField from '../../../../shared/text-field/TextField';

const EjerceControlSobreMoral = ({
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
      nombreNegocio: '',
      rfc: '',
      porcentajeDirecto: '',
      porcentajeIndirecto: '',
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
                  formulario={formulario}
                  size="big"
                  items={items}
                  defaultValue={0}
                  disabled={formulario.values[nameTieneControlados] !== 'si'}
                  label=""
                  showAlwaysErrors={false}
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
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 ">
              <p className="input color-gray">Se llama</p>
            </div>
            <div className="col-lg-9 col-md-7 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
              <TextField
                format="uppercase"
                name={`${nameControlados}[${index}].nombreNegocio`}
                maxlength={60}
                formulario={formulario}
                type="text"
                size="big"
                label="Nombre del negocio"
              />
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-2 col-md-4 col-sm-12 col-xs-12 ">
              <p className="input color-gray">RFC</p>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 pr-lg-2 pr-md-2">
              <TextField
                format="rfcformatter"
                name={`${nameControlados}[${index}].rfc`}
                maxlength={12}
                formulario={formulario}
                type="text"
                size="big"
                label="Ej. TLF280693H17"
              />
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p className="input color-gray">Porcentaje de control</p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 ">
              <p className="input color-gray">Directo</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
              <TextField
                format="number"
                name={`${nameControlados}[${index}].porcentajeDirecto`}
                maxlength={3}
                formulario={formulario}
                type="tel"
                size="big"
                label="%"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
              <p className="input color-gray">Indirecto</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 pr-lg-2 pr-md-2">
              <TextField
                format="number"
                name={`${nameControlados}[${index}].porcentajeIndirecto`}
                maxlength={3}
                formulario={formulario}
                type="tel"
                size="big"
                label="%"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

EjerceControlSobreMoral.propTypes = {
  formulario: PropTypes.any.isRequired,
  nameControlados: PropTypes.string.isRequired,
  nameTieneControlados: PropTypes.string.isRequired,
  nameCantidadControlados: PropTypes.string.isRequired,
  numeroMaximo: PropTypes.number.isRequired,
};

export default EjerceControlSobreMoral;
