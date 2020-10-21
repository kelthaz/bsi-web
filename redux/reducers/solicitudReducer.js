import * as types from '../types/types';

const initialState = {
  datosPersonales: {
    currentStep: 1,
    validSteps: [],
    name: '',
    secondName: '',
    lastname: '',
    secondLastname: '',
    personType: '',
    businessName: '',
    sector: 'Sector',
    giro: 'Giro',
    businessAbout: '',
  },
  datosEmpresa: { validSteps: [] },
  oferta: { validSteps: [] },
  documentacion: { validSteps: [] },
};

const solicitudReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.NEXT_STEP_DATOS_PERSONALES:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default solicitudReducer;
