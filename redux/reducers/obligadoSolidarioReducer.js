import * as types from '../types/types';

const initialState = {
  currentStep: {
    tab: 'preguntas',
    step: '1',
    lastStep: false,
  },
  pm: {
    primerNombre: 'José',
    segundoNombre: '',
    primerApellido: 'Álvarez',
    segundoApellido: 'Ruiz',
    aceptar: false,
    razonSocial: '',
    tipoSociedad: null,
    nombreEmpresa: '',
    sector: null,
    giro: null,
    descripcionEmpresa: '',
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
    controladosMorales: [],
    ejerceControlMoral: null,
    cantidadEjerceControlMoral: null,
    controladosFisicos: [],
    ejerceControlFisico: null,
    cantidadEjerceControlFisico: null,
    controladosFisicosComoMoral: [],
    tieneControladosFisicosComoMoral: null,
    cantidadControladosFisicosComoMoral: null,
    controladosFisicosComoFisico: [],
    tieneControladosFisicosComoFisico: null,
    cantidadControladosFisicosComoFisico: null,
  },
  pfae: {
    primerNombre: 'José',
    segundoNombre: '',
    primerApellido: 'Álvarez',
    segundoApellido: 'Ruiz',
    aceptar: false,
    razonSocial: '',
    tipoSociedad: null,
    nombreEmpresa: '',
    sector: null,
    giro: null,
    descripcionEmpresa: '',
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
    controladosMorales: [],
    ejerceControlMoral: null,
    cantidadEjerceControlMoral: null,
    controladosFisicos: [],
    ejerceControlFisico: null,
    cantidadEjerceControlFisico: null,
    invierto: '',
    numEscritura: '',
    numFolio: '',
    datosGravamen: '',
    rfc: null,
    curp: null,
    cuentasLiquidas: null,
    cuentas: null,
    parentesco: null,
    bienesSeparados: '',
    tienePrestamo: '',
    tieneCredito: null,
    eresTitular: null,
  },
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
