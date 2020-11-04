import * as types from '../types/types';

const initialState = {
  showResult: false,
  monto: '6200000',
  plazo: '',
  periodicidad: '',
  aniosEmpresa: '',
  ventasAnio: 'Más de $2 MDP',
};

const simuladorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_DATA_SIMULADOR:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default simuladorReducer;
