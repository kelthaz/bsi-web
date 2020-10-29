import * as types from '../types/types';

export const updateDataSimulador = (dataSimulador) => ({
  type: types.UPDATE_DATA_SIMULADOR,
  payload: dataSimulador,
});

export const nextStepDatosEmpresa = (payload) => ({
  type: types.NEXT_STEP_DATOS_EMPRESA,
  payload,
});
