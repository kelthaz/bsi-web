import React from 'react';
import PropTypes from 'prop-types';

const OtrosDatos = ({ otraInformacion }) => {
  const labels = {
    navegador: 'Navegador',
    ubicacion: 'Ubicacion',
    ip: 'IP',
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
            <div className="color-blue-storm body2">{otraInformacion[item]}</div>
          </div>
        </div>
      ))}
    </>
  );
};

OtrosDatos.propTypes = {
  otraInformacion: PropTypes.object.isRequired,
};

export default OtrosDatos;
