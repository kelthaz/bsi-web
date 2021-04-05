import React from 'react';
import PropTypes from 'prop-types';
import SvgAprobado from '../../../../../svgs/estados/SvgAprobado';

const EstadoDocumento = ({ label, documento, estadoDocumento }) => {
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
    <div className="row pb-3">
      <div className="col-5">
        <span className="body2">{label}</span>
      </div>
      <div className="col-5 text-overflow">
        <span className="link">{documento}</span>
      </div>
      <div className="col-2 text-center">{iconoEstado(estadoDocumento)}</div>
    </div>
  );
};

EstadoDocumento.propTypes = {
  label: PropTypes.string.isRequired,
  documento: PropTypes.string.isRequired,
  estadoDocumento: PropTypes.number.isRequired,
};

export default EstadoDocumento;
