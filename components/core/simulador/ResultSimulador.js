import React from 'react';
import { useSelector } from 'react-redux';
import mexicanWeightFormatter from '../../../helpers/moneyFormatter';

const ResultSimulador = () => {
  const {
    dataSimulador: { monto, plazo, periodicidad },
    resultSimulador: { tasaOrdinaria, comisionApertura, cat, pago },
  } = useSelector((state) => state.simulador);

  return (
    <div className="row card-simple-border-blue-storm no-gutters">
      <div className="text-left order-md-1 col-xs-6 col-sm-6 col-md-3 col-lg-3">
        <h4 className="color-blue-storm">{mexicanWeightFormatter(monto)}</h4>
        <p className="body3 color-gray">Monto solicitado</p>
      </div>

      <div className="text-left order-md-2 col-xs-6 col-sm-6 col-md-3 col-lg-3 ">
        <h4 className="color-blue-storm">{tasaOrdinaria} anual</h4>
        <p className="body3 color-gray">Tasa ordinaria</p>
      </div>

      <div className="text-left order-md-3 col-xs-6 col-sm-6 col-md-3 col-lg-3">
        <h4 className="color-blue-storm">{plazo.label}</h4>
        <p className="body3 color-gray">Plazo del crédito</p>
      </div>

      <div className="text-left order-md-4  order-5 col-xs-6 col-sm-6 col-md-3 col-lg-3">
        <h4 className="color-blue-storm">{cat}</h4>
        <p className="body3 color-gray">CAT</p>
      </div>

      <div className="text-left order-md-5 col-xs-6 col-sm-6 col-md-3 col-lg-3">
        <h4 className="color-blue-storm">{comisionApertura}</h4>
        <p className="body3 color-gray">Comisión por apertura</p>
      </div>

      <div className="text-left order-xs-4 order-md-5 col-xs-6 col-sm-6 col-md-3 col-lg-3">
        <h4 className="color-blue-storm">{periodicidad.label.slice(0, periodicidad.label.length - 2)}</h4>
        <p className="body3 color-gray">Esquema de pago</p>
      </div>

      <div className="text-left order-md-7 col-xs-6 col-sm-6 col-md-3 col-lg-3">
        <h4 className="color-blue-storm">{pago}</h4>
        <p className="body3 color-gray">Pagos {periodicidad.label.toLowerCase()}</p>
      </div>
    </div>
  );
};

export default ResultSimulador;
