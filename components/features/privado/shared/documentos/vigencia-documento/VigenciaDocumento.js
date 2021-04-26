import React from 'react';
import RadioButton from '../../../../../shared/radio-button/RadioButton';

const VigenciaDocumento = ({ formulario, nameFieldVigencia }) => {
  return (
    <div className="">
      <p className="body3 color-gray-dark">¿El documento tiene vigencia?</p>
      <div className="pb-3">
        <RadioButton name={nameFieldVigencia} label="si" {...formulario.getFieldProps(nameFieldVigencia)}>
          <p className="body3 color-gray m-0">Si</p>
        </RadioButton>
      </div>

      <div className="pb-3">
        <RadioButton name={nameFieldVigencia} label="no" {...formulario.getFieldProps(nameFieldVigencia)}>
          <p className="body3 color-gray m-0">No</p>
        </RadioButton>
      </div>
    </div>
  );
};

export default VigenciaDocumento;
