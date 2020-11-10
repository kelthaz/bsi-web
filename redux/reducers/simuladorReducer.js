import * as types from '../types/types';

const initialState = {
  showResult: false,
  dataSimulador: {
    monto: '6200000',
    plazo: '',
    periodicidad: '',
    aniosEmpresa: '',
    ventasAnio: 'Más de $2 MDP',
  },
  resultSimulador: {
    tasaOrdinaria: '',
    tasaMoratoria: '',
    comisionApertura: '',
    cat: '',
  },
  resultSimuladorTabla: [],
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
