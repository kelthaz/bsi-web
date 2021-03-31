import React from 'react';
import PropTypes from 'prop-types';
import SvgAprobado from '../../../../../svgs/estados/SvgAprobado';

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

  const iconoEstado = (estado) => {
    switch (estado) {
      case 0:
        return (
          <button className="btn-mini-secondary" type="button">
            Subir
          </button>
        );
      case 1:
        return (
          <button className="btn-mini-secondary" type="button">
            Revisar
          </button>
        );
      case 2:
        return <SvgAprobado />;
      default:
        return <></>;
    }
  };

  return (
    <>
      {itemsPerfil.map((item) => (
        <div key={item} className="row pb-3">
          <div className="col-5">
            <span className="body2">{labels[item]}</span>
          </div>
          <div className="col-5 text-overflow">
            <span className="link">{documentosPorRevisar[item].nombreDocumento}</span>
          </div>
          <div className="col-2 text-center">{iconoEstado(documentosPorRevisar[item].estado)}</div>
        </div>
      ))}
    </>
  );
};

DocumentosPorRevisar.propTypes = {
  documentosPorRevisar: PropTypes.object.isRequired,
  esObligado: PropTypes.bool.isRequired,
};

export default DocumentosPorRevisar;
