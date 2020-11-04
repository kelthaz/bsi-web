import * as types from '../types/types';

export const nextStepDatosPersonales = (datosPersonales) => ({
  type: types.NEXT_STEP_DATOS_PERSONALES,
  payload: datosPersonales,
});

export const resetDatosPersonales = () => ({
  type: types.RESET_DATOS_PERSONALES,
});
