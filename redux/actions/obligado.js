import * as types from '../types/types';

export const nextStepObligadoSolidario = (datosObligadoSolidario) => ({
  type: types.NEXT_STEP_OBLIGADO_SOLIDARIO,
  payload: datosObligadoSolidario,
});

export const resetObligadoSolidario = () => ({
  type: types.RESET_OBLIGADO_SOLIDARIO,
});
