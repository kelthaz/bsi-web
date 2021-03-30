import React from 'react';
import PropTypes from 'prop-types';
import { MORAL } from '../../../../../../constants/persona';

const DatosEmpresa = ({ informacionProspecto, tipoPersona }) => {
  const labels = {
    usoCredito: 'Destino del crédito',
    domicilioFiscal: 'Domicilio comercial',
    domicilioComercial: 'Domicilio comercial',
    telefonoEmpresa: 'Teléfono de la empresa',
    curp: tipoPersona === MORAL ? 'CURP' : 'CURP del representante legal',
    numeroEmpleados: 'Número de empleados',
  };

  const itemsPerfil = Object.keys(labels);

  return (
    <>
      {itemsPerfil.map((item) => (
        <div key={item} className="row pb-3">
          <div className="col-6">
            <div className="body2">{labels[item]}</div>
          </div>
          <div className="col-6">
            <div className="color-blue-storm body2">{informacionProspecto[item]}</div>
          </div>
        </div>
      ))}
    </>
  );
};

DatosEmpresa.propTypes = {
  informacionProspecto: PropTypes.object.isRequired,
  tipoPersona: PropTypes.string.isRequired,
};

export default DatosEmpresa;
