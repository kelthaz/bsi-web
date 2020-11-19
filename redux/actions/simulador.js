import SimuladorRepositorio from '../../services/simulador/simulador.repositorio';
import * as types from '../types/types';

export const updateDataSimulador = (dataSimulador) => ({
  type: types.UPDATE_DATA_SIMULADOR,
  payload: dataSimulador,
});

export const startUpdateDataSimulador = (dataSimulador) => async (dispatch) => {
  const params = {
    monto: dataSimulador.monto,
    plazo: dataSimulador.plazo.value,
    periodicidad: dataSimulador.periodicidad.value,
  };
  const resultSimulador = await SimuladorRepositorio.postSimulador(params).then((res) => res.data);
  const resultSimuladorTabla = await SimuladorRepositorio.postSimuladorTabla(params).then((res) => res.data);

  dispatch(
    updateDataSimulador({
      showResult: true,
      dataSimulador,
      resultSimuladorTabla,
      resultSimulador,
    })
  );
};
