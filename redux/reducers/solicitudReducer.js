import * as types from '../types/types';

const initialState = {
  currentStep: {
    tab: 'datos-personales',
    step: '1',
  },
  datosPersonales: {
    name: '',
    secondName: '',
    lastname: '',
    secondLastname: '',
    personType: '',
    businessName: '',
    sector: 'Sector',
    giro: 'Giro',
    businessAbout: '',
    contrasena: '',
    rfc: '',
    phone: '',
    email: '',
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
