import * as types from '../types/types';

export const updateDataProspecto = (datosProspecto) => ({
  type: types.UPDATE_DATA_PROSPECTO,
  payload: datosProspecto,
});

export const resetDataProspecto = () => ({
  type: types.RESET_DATOS_PROSPECTO,
});
