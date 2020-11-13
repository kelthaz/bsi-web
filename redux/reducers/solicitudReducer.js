import * as types from '../types/types';

const initialState = {
  currentStep: {
    tab: 'datos-personales',
    step: '1',
  },
  datosPersonales: {
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    tipoPersona: '',
    razonSocial: '',
    tipoSociedad: null,
    businessName: '',
    sector: null,
    giro: null,
    businessAbout: '',
    celular: '',
    correo: '',
    contrasena: '',
    rfc: '',
  },
  datosEmpresa: {},
  oferta: {},
  documentacion: {},
};

const solicitudReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.NEXT_STEP_DATOS_PERSONALES:
      return {
        ...state,
        ...payload,
      };
    case types.RESET_DATOS_PERSONALES:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default solicitudReducer;
