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
    confirmarContrasena: '',
    rfc: '',
    aceptoTerminos: null,
  },
  datosEmpresa: {
    aceptoTerminosMultas: null,
    usoCredito: null,
    descripcionCredito: '',
    domicilioFiscal: {
      calle: '',
      numExterior: '',
      numInterior: '',
      codigoPostal: '',
      colonia: null,
      municipioAlcaldia: '',
      ciudad: '',
      estado: '',
      esDomilicioComercial: null,
    },

    domicilioComercial: {
      calle: '',
      numExterior: '',
      numInterior: '',
      codigoPostal: '',
      colonia: null,
      municipioAlcaldia: '',
      ciudad: '',
      estado: '',
      domicilioEntrega: null,
    },

    primerNombreRecibe: '',
    segundoNombreRecibe: '',
    primerApellidoRecibe: '',
    segundoApellidoRecibe: '',
    celularRecibe: '',
    telefonoEmpresa: '',
    noTengoTelefonoEmpresa: null,
    numeroEmpleados: null,
    curp: '',
    tieneCuentaBancoppel: '',
    ciec: '',
    terminosCiec: null,
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
