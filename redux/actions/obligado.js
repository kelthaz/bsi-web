import * as types from '../types/types';

export const nextStepDatosPersonales = (datosObligadoSolidario) => ({
  type: types.NEXT_STEP_OBLIGADO_SOLIDARIO,
  payload: datosObligadoSolidario,
});

export const resetDatosPersonales = () => ({
  type: types.RESET_OBLIGADO_SOLIDARIO,
});
