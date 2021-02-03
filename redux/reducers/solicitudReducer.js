import * as types from '../types/types';

const initialState = {
  currentStep: {
    tab: 'datos-personales',
    step: '1',
    lastStep: false,
  },
  datosPersonales: {
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    tipoPersona: null,
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
    },
    esDomilicioComercial: null,
    domicilioComercial: {
      calle: '',
      numExterior: '',
      numInterior: '',
      codigoPostal: '',
      colonia: null,
      municipioAlcaldia: '',
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
    tipoPersona: 'Persona Moral',
    clabe: null,
  },
  documentacion: {
    concentracion: null,
    compraDivisas: null,
    administracionGastos: null,
    pagoNomina: null,
    cuentaEje: null,
    pagoCredito: null,
    pagoRelacionado: null,
    pagoComisiones: null,
    giros: null,
    pagoProveedores: null,
    otros: null,
    usoCuenta: '',
    retiros: null,
    depositos: null,
    transacciones: null,
    retiros2: null,
    depositos2: null,
    transacciones2: null,
    ahorro: null,
    negocioPropio: null,
    ventaNegocioPropiedad: null,
    credito: null,
    recursoTerceros: null,
    actaConstitutiva: null,
    poderNotarial: null,
    escrituraReforma: null,
    comprobanteDomicilioComercial: null,
    comprobanteDomicilioFiscal: null,
    ine: null,
    ineReverso: null,
    comprobanteComercial: null,
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
