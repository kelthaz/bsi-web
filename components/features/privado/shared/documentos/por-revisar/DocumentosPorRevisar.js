import React from 'react';
import PropTypes from 'prop-types';
import EstadoDocumento from '../estado-documento/EstadoDocumento';

const DocumentosPorRevisar = ({ documentosPorRevisar, esObligado }) => {
  const labels = {
    actaConstitutiva: 'Acta constitutiva',
    poderesNotarial: 'Poderes notariales',
    escriturasConReformas: 'Reformas',
    verificacionSociedad: 'Verificación de sociedad',
    reporteBuroCredito: 'Reporte de buró de crédito',
  };

  if (esObligado) {
    delete labels.reporteBuroCredito;
  }

  const itemsPerfil = Object.keys(labels);

  return (
    <>
      {itemsPerfil.map((item) => (
        <EstadoDocumento
          key={item}
          label={labels[item]}
          documento={documentosPorRevisar[item].nombreDocumento}
          estadoDocumento={documentosPorRevisar[item].estado}
        />
      ))}
    </>
  );
};

DocumentosPorRevisar.propTypes = {
  documentosPorRevisar: PropTypes.object.isRequired,
  esObligado: PropTypes.bool.isRequired,
};

export default DocumentosPorRevisar;
