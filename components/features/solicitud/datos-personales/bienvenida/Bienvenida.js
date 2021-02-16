import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import ResultSimulador from '../../../../core/simulador/ResultSimulador';

const Bienvenida = () => {
  const { dataSimulador, resultSimulador } = useSelector((state) => state.simulador);

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud">
        <div className="container p-0">
          <h2 className="color-blue-storm">¡Te damos la bienvenida!</h2>
          <p className="body2 color-gray-dark">
            Nos da mucho gusto que inicies tu solicitud, no podemos esperar a escuchar qué grandes planes tienes para tu
            crédito.
          </p>
          <p className="body2 color-gray-dark">
            Antes de comenzar te confirmamos que la solicitud que estás por iniciar es por un crédito con las siguientes
            características:
          </p>
          <div className="py-3">
            <div className="card-simple-border-blue-storm">
              <ResultSimulador dataSimulador={dataSimulador} resultSimulador={resultSimulador} />
            </div>
          </div>
          <p className="body2 color-gray-dark">
            Si quieres cambiar el monto o las características de tu crédito da clic en “Cambia tu crédito”. Te
            recordamos que esta será la única ocasión en que podrás modificar el monto.
          </p>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 order-lg-first order-md-first order-sm-last order-xs-last my-3">
              <div className="center-first-button">
                <Link href="/simulador">
                  <button type="button" className="btn-big-inverted-secondary">
                    Cambia tu crédito
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 order-lg-last order-md-last order-sm-first order-xs-first my-3">
              <div className="center-second-button">
                <Link href="/solicitud/[tab]/[step]" as="/solicitud/datos-personales/gran-salto" replace>
                  <button type="submit" className="btn-big">
                    Comienza tu solicitud
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Bienvenida.getContentTypeIdentifier = () => 'bienvenido';
export default Bienvenida;
