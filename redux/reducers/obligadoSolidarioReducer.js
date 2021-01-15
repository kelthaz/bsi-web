import * as types from '../types/types';

const initialState = {
  currentStep: {
    tab: 'preguntas',
    step: 'bienvenida',
    lastStep: false,
  },
  pm: {},
  pfae: {},
};

const obligadoSolidarioReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.NEXT_STEP_OBLIGADO_SOLIDARIO:
      return {
        ...state,
        ...payload,
      };
    case types.RESET_OBLIGADO_SOLIDARIO:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default obligadoSolidarioReducer;
