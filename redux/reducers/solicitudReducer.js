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
    nombreEmpresa: '',
    sector: null,
    giro: null,
    descripcionEmpresa: '',
    celular: '',
    correo: '',
    contrasena: '',
    rfc: '',
  },
  datosEmpresa: {
    nombre: '',
    celular: '',
    segundoNombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
  },
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
