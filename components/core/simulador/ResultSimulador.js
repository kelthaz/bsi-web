import React from 'react';
import PropTypes from 'prop-types';

import mexicanWeightFormatter from '../../../helpers/mexicanWeightFormatter';

const ResultSimulador = ({ dataSimulador, resultSimulador, color }) => {
  const { monto, plazo, periodicidad } = dataSimulador;
  const { tasaOrdinaria, comisionApertura, cat, pago } = resultSimulador;

  return (
    <div className="row">
      { monto &&
        <div className="text-left order-md-1 col-xs-6 col-sm-6 col-md-4 col-lg-3">
          <h4 className={`color-blue-${color}`}>{mexicanWeightFormatter(monto)}</h4>
          <p className="body3 color-gray">Monto solicitado</p>
        </div>
      }

      <div className="text-left order-md-2 col-xs-6 col-sm-6 col-md-4 col-lg-3 ">
        <h4 className={`color-blue-${color}`}>{tasaOrdinaria} anual</h4>
        <p className="body3 color-gray">Tasa ordinaria</p>
      </div>

      <div className="text-left order-md-4 col-xs-6 col-sm-6 col-md-4 col-lg-3">
        <h4 className={`color-blue-${color}`}>{plazo.label}</h4>
        <p className="body3 color-gray">Plazo del crédito</p>
      </div>

      <div className="text-left order-md-5  order-5 col-xs-6 col-sm-6 col-md-4 col-lg-3">
        <h4 className={`color-blue-${color}`}>{cat}</h4>
        <p className="body3 color-gray">CAT</p>
      </div>

      <div className="text-left order-md-6 col-xs-6 col-sm-6 col-md-4 col-lg-3">
        <h4 className={`color-blue-${color}`}>{comisionApertura}</h4>
        <p className="body3 color-gray">Comisión por apertura</p>
      </div>

      <div className="text-left order-xs-4 order-md-7 col-xs-6 col-sm-6 col-md-4 col-lg-3">
        <h4 className={`color-blue-${color}`}>{periodicidad.label.slice(0, periodicidad.label.length - 2)}</h4>
        <p className="body3 color-gray">Esquema de pago</p>
      </div>

      <div className="text-left order-md-8 col-xs-6 col-sm-6 col-md-4 col-lg-3">
        <h4 className={`color-blue-${color}`}>{pago}</h4>
        <p className="body3 color-gray">Pagos {periodicidad.label.toLowerCase()}</p>
      </div>
    </div>
  );
};

ResultSimulador.propTypes = {
  dataSimulador: PropTypes.object.isRequired,
  resultSimulador: PropTypes.object.isRequired,
  color: PropTypes.string
};

ResultSimulador.defaultProps = {
  color: 'storm'
};

export default ResultSimulador;
