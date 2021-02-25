import PasoUnoDocumentacion from './paso-uno/PasoUnoDocumentacion';
import PasoDosDocumentacion from './paso-dos/PasoDosDocumentacion';
import PasoTresDocumentacion from './paso-tres/PasoTresDocumentacion';
import UltimaEtapaDocumentacion from './ultima-etapa/UltimaEtapaDocumentacion';
import PasoCuatroPfaeDocumentacion from './paso-cuatro/pfae/PasoCuatroDocumentacionPFAE';
import PasoCuatroPmDocumentacion from './paso-cuatro/pm/PasoCuatroDocumentacionPM';
import PasoCincoPfaeDocumentacion from './paso-cinco/pfae/PasoCincoDocumentacionPFAE';
import PasoCincoPmDocumentacion from './paso-cinco/pm/PasoCincoDocumentacionPM';
import PasoSeisPmDocumentacion from './paso-seis/PasoSeisDocumentacionPM';
import PasoSieteDocumentacionPM from './paso-siete/PasoSieteDocumentacionPM';
import RevisarCorreoDocumentacion from './revisar-correo/RevisarCorreoDocumentacion';
import {
  ULTIMA_ETAPA_DOCUMENTACION_ROUTE,
  PASO_UNO_DOCUMENTACION_ROUTE,
  PASO_DOS_DOCUMENTACION_ROUTE,
  PASO_TRES_DOCUMENTACION_ROUTE,
  PASO_CUATRO_DOCUMENTACION_ROUTE,
  PASO_CINCO_DOCUMENTACION_ROUTE,
  PASO_SEIS_DOCUMENTACION_ROUTE,
  PASO_SIETE_DOCUMENTACION_ROUTE,
  PASO_OCHO_DOCUMENTACION_ROUTE,
  GRACIAS_DOCUMENTACION_ROUTE,
  REVISAR_CORREO_DOCUMENTACION_ROUTE,
  BIENVENIDO_BIOMETRICO_DOCUMENTACION_ROUTE,
  PASO_UNO_BIOMETRICO_DOCUMENTACION_ROUTE,
  CAPTURA_BIOMETRICO_DOCUMENTACION_ROUTE,
  PASO_DOS_BIOMETRICO_DOCUMENTACION_ROUTE,
  LISTO_BIOMETRICO_DOCUMENTACION_ROUTE,
  FELICIDADES_BIOMETRICO_DOCUMENTACION_ROUTE,
} from '../../../../constants/routes/solicitud/documentacion';
// Biometricos
import BienvenidaBiometricosDocumentacion from './biometricos/bienvenida/BienvenidaBiometricosDocumentacion';
import PasoDosBiometricosDocumentacion from './biometricos/paso-dos/PasoDosBiometricosDocumentacion';
import CapturaRostroBiometricosDocumentacion from './biometricos/captura-rostro/CapturaRostroBiometricosDocumentacion';
import PasoTresBiometricosDocumentacion from './biometricos/paso-tres/PasoTresBiometricosDocumentacion';
import ListoBiometricosDocumentacion from './biometricos/listo/ListoBiometricosDocumentacion';
import FelicidadesBiometricosDocumentacion from './biometricos/felicidades/FelicidadesBiometricosDocumentacion';

import GraciasIncompletaDocumentacion from './gracias/GraciasIncompletaDocumentacion';
import { DOCUMENTACION, DOCUMENTACION_INCOMPLETO } from '../../../../constants/formularios';
import UltimoPasoDocumentacion from './ultimo-paso/UltimoPasoDocumentacion';

const documentacionRoutes = [
  {
    route: ULTIMA_ETAPA_DOCUMENTACION_ROUTE,
    component: [UltimaEtapaDocumentacion],
    services: [],
    roles: [],
    label: 'Documentacion: Ultima etapa',
    data: {
      formulario: DOCUMENTACION,
      paso: 0,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
  {
    route: PASO_UNO_DOCUMENTACION_ROUTE,
    component: [PasoUnoDocumentacion],
    services: [],
    roles: [],
    label: 'Documentacion: Paso 1 de documentacion',
    data: {
      formulario: DOCUMENTACION,
      paso: 1,
      tipoPersona: '',
      step: 1,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_DOS_DOCUMENTACION_ROUTE,
    component: [PasoDosDocumentacion],
    services: [],
    roles: [],
    label: 'Documentacion: Paso 2 de documentacion',
    data: {
      formulario: DOCUMENTACION,
      paso: 2,
      tipoPersona: '',
      step: 2,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_TRES_DOCUMENTACION_ROUTE,
    component: [PasoTresDocumentacion],
    services: [],
    roles: [],
    label: 'Documentacion: Paso 3 de documentacion',
    data: {
      formulario: DOCUMENTACION,
      paso: 3,
      tipoPersona: '',
      step: 3,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_CUATRO_DOCUMENTACION_ROUTE,
    component: [PasoCuatroPfaeDocumentacion, PasoCuatroPmDocumentacion],
    services: [],
    roles: [],
    label: 'Documentacion: Paso 4 de documentacion',
    data: {
      formulario: DOCUMENTACION,
      paso: 4,
      tipoPersona: '',
      step: 4,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_CINCO_DOCUMENTACION_ROUTE,
    component: [PasoCincoPfaeDocumentacion, PasoCincoPmDocumentacion],
    services: [],
    roles: [],
    label: 'Documentacion: Paso 5 de documentacion',
    data: {
      formulario: DOCUMENTACION,
      paso: 5,
      tipoPersona: '',
      step: 5,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_SEIS_DOCUMENTACION_ROUTE,
    component: [UltimoPasoDocumentacion, PasoSeisPmDocumentacion],
    services: [],
    roles: [],
    label: 'Documentacion: Paso 6 de documentacion',
    data: {
      formulario: DOCUMENTACION,
      paso: 6,
      tipoPersona: '',
      step: 6,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_SIETE_DOCUMENTACION_ROUTE,
    component: [PasoSieteDocumentacionPM],
    services: [],
    roles: [],
    label: 'Documentacion: Paso 7 de documentacion',
    data: {
      formulario: DOCUMENTACION,
      paso: 7,
      tipoPersona: 'MORAL',
      step: 7,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_OCHO_DOCUMENTACION_ROUTE,
    component: [UltimoPasoDocumentacion],
    services: [],
    roles: [],
    label: 'Documentacion: Paso 8 de documentacion',
    data: {
      formulario: DOCUMENTACION,
      paso: 8,
      tipoPersona: 'MORAL',
      step: 8,
      tab: ['documentacion'],
    },
  },
  {
    route: GRACIAS_DOCUMENTACION_ROUTE,
    component: [GraciasIncompletaDocumentacion],
    services: [],
    roles: [],
    label: 'Documentacion: Agradecimiento',
    data: {
      formulario: DOCUMENTACION_INCOMPLETO,
      paso: 0,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },

  // {
  //   route: REVISAR_CORREO_DOCUMENTACION_ROUTE,
  //   component: [RevisarCorreoDocumentacion],
  //   services: [],
  //   roles: [],
  //   label: 'Documentacion: Revisar correo',
  //   data: {
  //     formulario: DOCUMENTACION_BIOMETRICOS,
  //     paso: 0,
  //     tipoPersona: '',
  //     step: null,
  //     tab: ['documentacion'],
  //   },
  // },

  // {
  //   route: PASO_UNO_OBLIGADO_DOCUMENTACION_ROUTE,
  //   component: [StepOneObligado],
  //   services: [],
  //   roles: [],
  //   label: 'Documentacion: obligado solidario paso 1',
  //   data: {
  //     formulario: DOCUMENTACION,
  //     paso: 12,
  //     tipoPersona: '',
  //     step: null,
  //     tab: ['documentacion'],
  //   },
  // },
  // {
  //   route: PASO_DOS_OBLIGADO_DOCUMENTACION_ROUTE,
  //   component: [StepTwoObligado],
  //   services: [],
  //   roles: [],
  //   label: 'Documentacion: obligado solidario paso 2',
  //   data: {
  //     formulario: DOCUMENTACION,
  //     paso: 13,
  //     tipoPersona: '',
  //     step: null,
  //     tab: ['documentacion'],
  //   },
  // },
  // {
  //   route: PASO_DOS_OBLIGADO_DOCUMENTACION_ROUTE,
  //   component: [RevisarCorreoObligadoSolidario],
  //   services: [],
  //   roles: [],
  //   label: 'Documentacion: Revisar correo obligado solidario',
  //   data: {
  //     formulario: DOCUMENTACION,
  //     paso: 14,
  //     tipoPersona: '',
  //     step: null,
  //     tab: ['documentacion'],
  //   },
  // },

  // BIOMETRICOS
  {
    tab: 'documentacion',
    step: 'biometrico-bienvenido',
    path: BIENVENIDO_BIOMETRICO_DOCUMENTACION_ROUTE,
    stepNumber: null,
    component: BienvenidaBiometricosDocumentacion,
    services: [],
  },
  {
    tab: 'documentacion',
    step: 'biometrico-1',
    path: PASO_UNO_BIOMETRICO_DOCUMENTACION_ROUTE,
    stepNumber: 1,
    component: PasoDosBiometricosDocumentacion,
    services: [],
  },
  {
    tab: 'documentacion',
    step: 'biometrico-captura',
    path: CAPTURA_BIOMETRICO_DOCUMENTACION_ROUTE,
    stepNumber: null,
    component: CapturaRostroBiometricosDocumentacion,
    services: [],
  },
  {
    tab: 'documentacion',
    step: 'biometrico-2',
    path: PASO_DOS_BIOMETRICO_DOCUMENTACION_ROUTE,
    stepNumber: 2,
    component: PasoTresBiometricosDocumentacion,
    services: [],
  },
  {
    tab: 'documentacion',
    step: 'biometrico-listo',
    path: LISTO_BIOMETRICO_DOCUMENTACION_ROUTE,
    stepNumber: null,
    component: ListoBiometricosDocumentacion,
    services: [],
  },
  {
    tab: 'documentacion',
    step: 'biometrico-felicidades',
    path: FELICIDADES_BIOMETRICO_DOCUMENTACION_ROUTE,
    stepNumber: null,
    component: FelicidadesBiometricosDocumentacion,
    services: [],
  },
];

export default documentacionRoutes;
