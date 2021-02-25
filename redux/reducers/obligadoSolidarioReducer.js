import * as types from '../types/types';

const initialState = {
  datosPersonales: {
    primerNombre: 'José',
    segundoNombre: '',
    primerApellido: 'Álvarez',
    segundoApellido: 'Ruiz',
    aceptar: false,
    tipoPersona: '',
  },
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
    razonSocial: 'paletas',
    tipoSociedad: 'S.A.',
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
    controladosMoralesComoMoral: [],
    tieneControladosMoralesComoMoral: null,
    cantidadControladosMoralesComoMoral: null,

    controladosMoralesComoFisico: [],
    tieneControladosMoralesComoFisico: null,
    cantidadControladosMoralesComoFisico: null,

    controladosFisicosComoMoral: [],
    tieneControladosFisicosComoMoral: null,
    cantidadControladosFisicosComoMoral: null,

    controladosFisicosComoFisico: [],
    tieneControladosFisicosComoFisico: null,
    cantidadControladosFisicosComoFisico: null,

    meEjercenControlMoralComoMoral: '',
    meEjercenControlMoralComoFisico: '',

    actaConstitutiva: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    poderesNotarial: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    escriturasConReformas: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    comprobanteDomicilioComercial:
      'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    comprobanteDomicilioFiscal:
      'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    ineRepresentanteLegal: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    ineReversoRepresentanteLegal:
      'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    ciec: '',
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
    },
    rfc: '',
    curp: '',
    tieneDepositosEInversiones: '',
    sumaDepositosEInversiones: '',

    empresas: [],
    tieneAccionesEnOtrasEmpresas: '',
    cantidadEmpresas: null,

    inmueblesPropiosSinGravamen: [],
    tieneInmueblesPropiosSinGravamen: '',
    cantidadInmueblesPropiosSinGravamen: null,

    controladosMoralesComoFisico: [],
    tieneControladosMoralesComoFisico: null,
    cantidadControladosMoralesComoFisico: null,

    meEjercenControlMoralComoFisico: '',

    controladosFisicosComoFisico: [],
    tieneControladosFisicosComoFisico: null,
    cantidadControladosFisicosComoFisico: null,

    bienesSeparados: '',

    comprobanteDomicilioFiscal:
      'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    ineRepresentanteLegal: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    ineReversoRepresentanteLegal:
      'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',

    actaMatrimonio: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    inePareja: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    ineReversoPareja: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',

    tienePrestamoHipotecario: '',
    tieneCreditoAutomotriz: '',
    eresTitularTarjetaCredito: '',
    tarjetaCreditoTerminacion: '',
    autorizacionConsultar: false,
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
