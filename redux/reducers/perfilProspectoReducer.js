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
    nombreConyuge: 'Fernanda Lira Lagos',
  },
  otraInformacion: {
    navegador: 'Safari',
    ubicacion: 'sinaloa',
    ip: '123.456.789.123',
  },
  documentosProspecto: {
    ine: { nombreDocumento: 'INE_alejandra.jpg', url: '', estado: 2 },
    ineReverso: { nombreDocumento: 'INE_alejandra.jpg', url: '', estado: 2 },
    comprobanteDomicilioComercial: { nombreDocumento: 'Comprobante_luz.jpg', url: '', estado: 1 },
    comprobanteDomicilioFiscal: { nombreDocumento: 'Comprobante_luz.jpg', url: '', estado: 1 },
    actaMatrimonio: { nombreDocumento: 'Acta_matrimonio.pdf', url: '', estado: 1 },
    pruebaDeVida: { nombreDocumento: 'prueba.mv', url: '', estado: 1 },
    selfie: { nombreDocumento: 'selfie_prueba.jpg', url: '', estado: 1 },
    autorizacionCredito: { nombreDocumento: 'Autorizacion_cre...', url: '', estado: 1 },
    reporteBuroCredito: { nombreDocumento: 'reporte_buro_cre...', url: '', estado: 1 },
    inePareja: { nombreDocumento: 'INE_Carlos.jpg', url: '', estado: 2 },
    ineReversoPareja: { nombreDocumento: 'INE_Carlos.jpg', url: '', estado: 2 },

    poderesNotarial: { nombreDocumento: '', url: '', estado: 1 },
    actaConstitutiva: { nombreDocumento: '', url: '', estado: 1 },
    escriturasConReformas: { nombreDocumento: '', url: '', estado: 1 },
    integracionRiesgoComun: { nombreDocumento: '', url: '', estado: 1 },

    verificacionSociedad: { nombreDocumento: '', url: '', estado: 0 },
    buroLegal: { nombreDocumento: '', url: '', estado: 0 },

    anexoCaratula: { nombreDocumento: '', url: '', estado: 0 },
    portadaCuenta: { nombreDocumento: '', url: '', estado: 0 },
  },
  documentosObligadoSolidario: {
    ine: { nombreDocumento: 'INE_alejandra.jpg', url: '', estado: 2 },
    ineReverso: { nombreDocumento: 'INE_alejandra.jpg', url: '', estado: 2 },
    relacionPatrimonial: { nombreDocumento: 'relacion_patrimoni...', url: '', estado: 1 },
    comprobanteDomicilioFiscal: { nombreDocumento: 'Comprobante_luz.jpg', url: '', estado: 1 },
    comprobanteDomicilioComercial: { nombreDocumento: 'Comprobante_luz.jpg', url: '', estado: 1 },

    actaMatrimonio: { nombreDocumento: 'Acta_matrimonio.pdf', url: '', estado: 1 },
    inePareja: { nombreDocumento: 'INE_Carlos.jpg', url: '', estado: 2 },
    ineReversoPareja: { nombreDocumento: 'INE_Carlos.jpg', url: '', estado: 2 },

    poderesNotarial: { nombreDocumento: 'poderes_not.pdf', url: '', estado: 1 },
    actaConstitutiva: { nombreDocumento: 'derecha_huella.jpg', url: '', estado: 1 },
    escriturasConReformas: { nombreDocumento: 'reformas.pdf', url: '', estado: 1 },
    reporteBuroCredito: { nombreDocumento: '', url: '', estado: 0 },
    verificacionSociedad: { nombreDocumento: '', url: '', estado: 0 },
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
