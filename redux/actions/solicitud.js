import * as types from '../types/types';

export const nextStepDatosPersonales = (datosPersonales) => ({
  type: types.NEXT_STEP_DATOS_PERSONALES,
  payload: datosPersonales,
});

export const nextStepDatosEmpresa = (payload) => ({
  type: types.NEXT_STEP_DATOS_EMPRESA,
  payload,
});
