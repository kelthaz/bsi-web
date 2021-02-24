import Agradecimiento from './agradecimiento/AgradecimientoDatosEmpresa';
import CuentaActivaDatosEmpresa from './cuenta-activada/CuentaActivaDatosEmpresa';
import PasoUnoDatosEmpresa from './paso-uno/PasoUnoDatosEmpresa';
import PasoDosDatosEmpresa from './paso-dos/PasoDosDatosEmpresa';
import PasoTresDatosEmpresa from './paso-tres/PasoTresDatosEmpresa';
import PasoCuatroDatosEmpresa from './paso-cuatro/PasoCuatroDatosEmpresa';
import PasoCincoDatosEmpresa from './paso-cinco/PasoCincoDatosEmpresa';
import PasoSeisDatosEmpresa from './paso-seis/PasoSeisDatosEmpresa';
import PasoSieteDatosEmpresa from './paso-siete/PasoSieteDatosEmpresa';
import PasoOchoDatosEmpresa from './paso-ocho/PasoOchoDatosEmpresa';
import ContratoLegalexDatosEmpresa from './contrato-legalex/ContratoLegalexDatosEmpresa';
import GraciasPorContarnosDatosEmpresa from './gracias-por-contarnos/GraciasPorContarnosDatosEmpresa';
import {
  AGRADECIMIENTO_DATOS_EMPRESA_ROUTE,
  CONTRATO_LEGALEX_DATOS_EMPRESA_ROUTE,
  CUENTA_ACTIVA_DATOS_EMPRESA_ROUTE,
  GRACIAS_POR_CONTARNOS_DATOS_EMPRESA_ROUTE,
  PASO_CINCO_DATOS_EMPRESA_ROUTE,
  PASO_CUATRO_DATOS_EMPRESA_ROUTE,
  PASO_DOS_DATOS_EMPRESA_ROUTE,
  PASO_OCHO_DATOS_EMPRESA_ROUTE,
  PASO_SEIS_DATOS_EMPRESA_ROUTE,
  PASO_SIETE_DATOS_EMPRESA_ROUTE,
  PASO_TRES_DATOS_EMPRESA_ROUTE,
  PASO_UNO_DATOS_EMPRESA_ROUTE,
} from '../../../../constants/routes/solicitud/empresa';
import { DATOS_EMPRESA_LEGALEX, DATO_EMPRESA } from '../../../../constants/formularios';

const datosEmpresaRoutes = [
  {
    route: CUENTA_ACTIVA_DATOS_EMPRESA_ROUTE,
    component: [CuentaActivaDatosEmpresa],
    services: [],
    roles: [],
    label: 'Solicitud: Cuenta activa',
    data: {
      formulario: DATO_EMPRESA,
      paso: 0,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
  {
    route: PASO_UNO_DATOS_EMPRESA_ROUTE,
    component: [PasoUnoDatosEmpresa],
    services: [],
    roles: [],
    label: 'Solicitud: Paso 1 de datos empresa',
    data: {
      formulario: DATO_EMPRESA,
      paso: 1,
      tipoPersona: '',
      step: 1,
      tab: ['datos-empresa'],
    },
  },
  {
    route: PASO_DOS_DATOS_EMPRESA_ROUTE,
    component: [PasoDosDatosEmpresa],
    services: [],
    roles: [],
    label: 'Solicitud: Paso 2 de datos empresa',
    data: {
      formulario: DATO_EMPRESA,
      paso: 2,
      tipoPersona: '',
      step: 2,
      tab: ['datos-empresa'],
    },
  },
  {
    route: PASO_TRES_DATOS_EMPRESA_ROUTE,
    component: [PasoTresDatosEmpresa],
    services: [],
    roles: [],
    label: 'Solicitud: Paso 3 de datos empresa',
    data: {
      formulario: DATO_EMPRESA,
      paso: 3,
      tipoPersona: '',
      step: 3,
      tab: ['datos-empresa'],
    },
  },
  {
    route: PASO_CUATRO_DATOS_EMPRESA_ROUTE,
    component: [PasoCuatroDatosEmpresa],
    services: [],
    roles: [],
    label: 'Solicitud: Paso 4 de datos empresa',
    data: {
      formulario: DATO_EMPRESA,
      paso: 4,
      tipoPersona: '',
      step: 4,
      tab: ['datos-empresa'],
    },
  },
  {
    route: PASO_CINCO_DATOS_EMPRESA_ROUTE,
    component: [PasoCincoDatosEmpresa],
    services: [],
    roles: [],
    label: 'Solicitud: Paso 5 de datos empresa',
    data: {
      formulario: DATO_EMPRESA,
      paso: 5,
      tipoPersona: '',
      step: 5,
      tab: ['datos-empresa'],
    },
  },
  {
    route: PASO_SEIS_DATOS_EMPRESA_ROUTE,
    component: [PasoSeisDatosEmpresa],
    services: [],
    roles: [],
    label: 'Solicitud: Paso 6 de datos empresa',
    data: {
      formulario: DATO_EMPRESA,
      paso: 6,
      tipoPersona: '',
      step: 6,
      tab: ['datos-empresa'],
    },
  },
  {
    route: PASO_SIETE_DATOS_EMPRESA_ROUTE,
    component: [PasoSieteDatosEmpresa],
    services: [],
    roles: [],
    label: 'Solicitud: Paso 7 de datos empresa',
    data: {
      formulario: DATO_EMPRESA,
      paso: 7,
      tipoPersona: '',
      step: 7,
      tab: ['datos-empresa'],
    },
  },
  {
    route: GRACIAS_POR_CONTARNOS_DATOS_EMPRESA_ROUTE,
    component: [GraciasPorContarnosDatosEmpresa],
    services: [],
    roles: [],
    label: 'Solicitud: Gracias por contarnos',
    data: {
      formulario: DATO_EMPRESA,
      paso: 8,
      tipoPersona: '',
      step: null,
      tab: ['datos-empresa'],
    },
  },
  {
    route: PASO_OCHO_DATOS_EMPRESA_ROUTE,
    component: [PasoOchoDatosEmpresa],
    services: [],
    roles: [],
    label: 'Solicitud: Paso 7 de datos empresa',
    data: {
      formulario: DATO_EMPRESA,
      paso: 9,
      tipoPersona: '',
      step: 8,
      tab: ['datos-empresa'],
    },
  },
  {
    route: CONTRATO_LEGALEX_DATOS_EMPRESA_ROUTE,
    component: [ContratoLegalexDatosEmpresa],
    services: [],
    roles: [],
    label: 'Solicitud: Contrato legalex',
    data: {
      formulario: DATOS_EMPRESA_LEGALEX,
      paso: 10,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
  {
    route: AGRADECIMIENTO_DATOS_EMPRESA_ROUTE,
    component: [Agradecimiento],
    services: [],
    roles: [],
    label: 'Solicitud: Gracias',
    data: {
      formulario: DATOS_EMPRESA_LEGALEX,
      paso: 11,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
];

export default datosEmpresaRoutes;
