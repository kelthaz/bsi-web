import React from 'react';
import PropTypes from 'prop-types';
import EstadoDocumento from '../estado-documento/EstadoDocumento';

const Reportes = ({ reportes }) => {
  const labels = {
    visitaOcularObligadoSolidario: 'Reporte de visita ocular (Obligado solidario)',
    visitaOcularSolicitante: 'Reporte de visita ocular (Solicitante)',
    contratoFisicoFirmado: 'Contrato Físico Firmado',
  };

  const itemsPerfil = Object.keys(labels);

  return (
    <>
      {itemsPerfil.map((item) => (
        <EstadoDocumento
          key={item}
          label={labels[item]}
          documento={reportes[item].nombreDocumento}
          estadoDocumento={reportes[item].estado}
        />
      ))}
    </>
  );
};

Reportes.propTypes = {
  reportes: PropTypes.object.isRequired,
};

export default Reportes;
