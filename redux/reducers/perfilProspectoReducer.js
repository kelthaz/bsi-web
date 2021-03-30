import { MORAL } from '../../constants/persona';
import * as types from '../types/types';

const initialState = {
  sincronizado: false,

  perfilProspecto: {
    primerNombre: 'ALESSANDRA',
    segundoNombre: '',
    primerApellido: 'BOLIVAR',
    segundoApellido: '',

    tipoPersona: MORAL,
    tipoPersonaObligado: MORAL,
    tiempoEnEspera: '10 minutos',
    idSolicitud: '12345',
    numeroCliente: '-',
    numeroLinea: '',
    numeroCuenta: '-',
    totalDesembolsado: '',

    relacion: '',
    coincidenciaLista: '',
    fechaNacimiento: '',
    nombreCoincidencia: '',

    fechaAprobacionCredito: '04/05/2020',
    fechaAltaUsuario: '-',
  },
  informacionProspecto: {
    razonSocial: 'Paletas S.A.',
    nombreEmpresa: 'Paletitas',
    sector: 'Agricolas',
    giro: 'Alimentos',
    descripcionEmpresa: 'Mi negocio se dedica a exportar gallinas',
    celular: '55 1234 5678',
    correo: 'paletas_sa@mail.com',
    rfc: 'ASD123456HVZJNR03',

    nombreCompleto: 'Gabriel Hernández Melindo',
    curp: 'ASD123456HVZJNR03',
    estadoCivil: 'Casado por bienes mancomunados',
    nombreConyuge: 'Fernanda Lira Lagos',

    usoCredito: 'Equipos de cocina',
    domicilioFiscal: 'Avenida Santa Fe 510, Interior 101 05000, Santa Fe. Cuajimalpa, CDMX',
    domicilioComercial: 'Avenida Santa Fe 510, Interior 101 05000, Santa Fe. Cuajimalpa, CDMX',
    telefonoEmpresa: '55-1234-5678',
    numeroEmpleados: '51 a 100',
  },
  informacionSolicitud: {
    usoCredito: 'Capital de Trabajo',
    descripcionCredito: 'Utilizaré el crédito para comprar maquinaria agrícola',
    domicilioFiscal: 'Avenida Santa Fe 510, Interior 101 05000, Santa Fe. Cuajimalpa, CDMX',
    domicilioComercial: 'Avenida Santa Fe 510, Interior 101 05000, Santa Fe. Cuajimalpa, CDMX',
    nombreCompletoRecibe: 'Mariano López Díaz',
    celularRecibe: '55-1234-5678',
    telefonoEmpresa: '55-1234-5678',
    curp: 'ASD123456HVZJNR03',
    estadoCivil: 'Casado por bienes mancomunados',
    nombreConyuge: 'Fernanda Lira Lagos',
    numeroEmpleados: '51 a 100',

    montoSolicitado: '$3,000,000.00',
    montoAprobado: '$2,000,000.00',

    tasaOrdinaria: '25% Anual',
    tasaMoratoria: '25% Anual',
    comisionApertura: '5%',
    plazo: '24 meses',
    periodicidad: 'Bimestral',
    pago: '$31,250.00',
    cat: '3%',
    tieneCuentaBancoppel: 'si',
    clabe: '1234-5678-123',
  },
  informacionObligadoSolidario: {
    nombreCompleto: 'Gabriel Hernández Melindo',
    tipoPersona: MORAL,
    razonSocial: 'Paletas S.A.',
    nombreEmpresa: 'Paletitas',
    correo: 'mail@email.com',
    celular: '55 1234 5678',
    curp: 'ASD123456HVZJNR03',
    rfc: 'ASD123456HVZ',
    domicilioFiscal: 'Avenida Santa Fe 510, Interior 101 05000, Santa Fe. Cuajimalpa, CDMX',
    domicilioComercial: 'Avenida Santa Fe 510, Interior 101 05000, Santa Fe. Cuajimalpa, CDMX',
    estadoCivil: 'Casado por bienes mancomunados',
  },
  otraInformacion: {
    navegador: 'Safari',
    ubicacion: 'sinaloa',
    ip: '123.456.789.123',
  },
  documentos: {},

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

const perfilProspectoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_DATA_PROSPECTO:
      return {
        ...state,
        ...payload,
      };
    case types.RESET_DATOS_PROSPECTO:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default perfilProspectoReducer;
