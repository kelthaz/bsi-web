import React from 'react';
import PropTypes from 'prop-types';
import EstadoDocumento from '../estado-documento/EstadoDocumento';

const DocumentosPorGestionar = ({ documentosPorGestionar }) => {
  const labels = {
    anexoCaratula: 'Anexo carátula',
    portadaCuenta: 'Portada de la Cuenta',
  };

  const itemsPerfil = Object.keys(labels);

  return (
    <>
      {itemsPerfil.map((item) => (
        <EstadoDocumento
          key={item}
          label={labels[item]}
          documento={documentosPorGestionar[item].nombreDocumento}
          estadoDocumento={documentosPorGestionar[item].estado}
        />
      ))}
    </>
  );
};

DocumentosPorGestionar.propTypes = {
  documentosPorGestionar: PropTypes.object.isRequired,
};

export default DocumentosPorGestionar;
