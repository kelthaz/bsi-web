import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ResultSimulador from '../../../../core/simulador/ResultSimulador';
import { nextStepDatosPersonales } from '../../../../../redux/actions/solicitud';
import { GRAN_SALTO_DATOS_PERSONA_ROUTE } from '../../../../../constants/routes/solicitud/persona';
import { SIMULADOR_ROUTE } from '../../../../../constants/routes/publico/publico';

const BienvenidaDatosPersonales = () => {
  const { dataSimulador, resultSimulador } = useSelector((state) => state.simulador);
  const { currentStep } = useSelector((state) => state.solicitud);
  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleComienza = async () => {
    dispatch(
      nextStepDatosPersonales({
        currentStep: { ...currentStep, paso: 1 },
      })
    );
    await push(GRAN_SALTO_DATOS_PERSONA_ROUTE);
  };

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
                <button type="button" className="btn-big-inverted-secondary" onClick={() => push(SIMULADOR_ROUTE)}>
                  Cambia tu crédito
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 order-lg-last order-md-last order-sm-first order-xs-first my-3">
              <div className="center-second-button">
                <button type="submit" className="btn-big" onClick={handleComienza}>
                  Comienza tu solicitud
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BienvenidaDatosPersonales;
