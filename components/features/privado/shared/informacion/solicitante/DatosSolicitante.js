import React from 'react';
import PropTypes from 'prop-types';
import { MORAL } from '../../../../../../constants/persona';

const DatosSolicitante = ({ informacionProspecto, tipoPersona }) => {
  const labels = {
    nombreCompleto: 'Nombre',
    curp: tipoPersona === MORAL ? 'CURP' : 'CURP del representante legal',
    estadoCivil: 'Estado civil',
    nombreConyuge: 'Nombre de conyugue',
  };

  if (tipoPersona !== MORAL) {
    delete labels.estadoCivil;
    delete labels.nombreConyuge;
  }

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

DatosSolicitante.propTypes = {
  informacionProspecto: PropTypes.object.isRequired,
  tipoPersona: PropTypes.string.isRequired,
};

export default DatosSolicitante;
