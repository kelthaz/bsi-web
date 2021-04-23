import { MORAL } from '../../constants/persona';
import * as types from '../types/types';

const initialState = {
  sincronizado: false,
  currentStep: {
    formulario: 'datos-personales',
    paso: 0,
    valipStep: 1,
    lastStep: false,
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
    rfcRepresentante: '',
    aceptoTerminos: null,
    enListaNegra: false,
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
      municipioId: '',
      ciudad: '',
      estado: '',
    },
    esDomilicioComercial: null,
    domicilioComercial: {
      calle: '',
      numExterior: '',
      numInterior: '',
      codigoPostal: '',
      colonia: null,
      municipioAlcaldia: '',
      municipioId: '',
      ciudad: '',
      estado: '',
    },
    domicilioEntrega: null,
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
    autorizoTerminosCiec: null,
    autorizacionFirmaElectronica: null,
    autorizacionConsultaBancoppel: null,
  },
  oferta: {
    conCuenta: false,
    tipoPersona: MORAL,
    clabe: null,
  },
  documentacion: {
    controladosMoralesComoMoral: [],
    tieneControladosMoralesComoMoral: '',
    cantidadControladosMoralesComoMoral: { value: 1, label: '1' },
    controladosMoralesComoFisico: [],
    tieneControladosMoralesComoFisico: '',
    cantidadControladosMoralesComoFisico: { value: 1, label: '1' },
    controladosFisicosComoMoral: [],
    tieneControladosFisicosComoMoral: '',
    cantidadControladosFisicosComoMoral: { value: 1, label: '1' },
    controladosFisicosComoFisico: [],
    tieneControladosFisicosComoFisico: '',
    cantidadControladosFisicosComoFisico: { value: 1, label: '1' },

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
    estadoCivil: '',

    usosCuentaSeleccionados: [],
    actaMatrimonio: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    inePareja: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    ineReversoPareja: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',

    retirosNumeroTransacciones: '',
    depositosNumeroTransacciones: '',
    transaccionesNumeroTransacciones: '',
    retirosImporteEsperado: '',
    depositosImporteEsperado: '',
    transaccionesImporteEsperado: '',

    procedenciaPagoCreditoSeleccionados: [],

    obligadoSolidario: {
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      tipoPersona: null,
      correo: '',
      celular: '',
    },
  },
  obligadoSolidario: {
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
    cantidadEmpresas: { value: 1, label: '1' },

    inmueblesPropiosSinGravamen: [],
    tieneInmueblesPropiosSinGravamen: '',
    cantidadInmueblesPropiosSinGravamen: { value: 1, label: '1' },

    controladosMoralesComoFisico: [],
    tieneControladosMoralesComoFisico: null,
    cantidadControladosMoralesComoFisico: { value: 1, label: '1' },

    meEjercenControlMoralComoFisico: '',

    controladosFisicosComoFisico: [],
    tieneControladosFisicosComoFisico: null,
    cantidadControladosFisicosComoFisico: { value: 1, label: '1' },

    estadoCivil: '',

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
    obligadoSolidario: {
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      tipoPersona: null,
      correo: '',
      celular: '',
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
    cantidadControladosMoralesComoMoral: { value: 1, label: '1' },

    controladosFisicosComoMoral: [],
    tieneControladosFisicosComoMoral: null,
    cantidadControladosFisicosComoMoral: { value: 1, label: '1' },

    meEjercenControlMoralComoMoral: '',

    actaConstitutiva: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    poderesNotarial: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    escriturasConReformas: 'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',
    comprobanteDomicilioComercial:
      'https://binaries.templates.cdn.office.net/support/templates/es-es/lt02810155_quantized.png',

    ciec: '',
  },
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
