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
} from '../../../../constants/routes/solicitud/documentacion';

import AgradecimientoIncompletoDocumentacion from './agradecimiento-incompleto/AgradecimientoIncompletoDocumentacion';
import { DOCUMENTACION, DOCUMENTACION_INCOMPLETO } from '../../../../constants/formularios';
import UltimoPasoDocumentacion from './ultimo-paso/UltimoPasoDocumentacion';
import obligadoSolidarioDocumentacionRoutes from './obligado-solidario/obligado-solidario-documentacion.routes';
import biometricosDocumentacionRoutes from './biometricos/biometricos-documentacion.routes';
import { MORAL } from '../../../../constants/persona';
import { CLIENTE } from '../../../../constants/roles';

const documentacionRoutes = [
  ...obligadoSolidarioDocumentacionRoutes,
  ...biometricosDocumentacionRoutes,
  {
    route: ULTIMA_ETAPA_DOCUMENTACION_ROUTE,
    component: [UltimaEtapaDocumentacion],
    services: [],
    roles: [CLIENTE],
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
    roles: [CLIENTE],
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
    roles: [CLIENTE],
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
    roles: [CLIENTE],
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
    roles: [CLIENTE],
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
    roles: [CLIENTE],
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
    roles: [CLIENTE],
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
    roles: [CLIENTE],
    label: 'Documentacion: Paso 7 de documentacion',
    data: {
      formulario: DOCUMENTACION,
      paso: 7,
      tipoPersona: MORAL,
      step: 7,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_OCHO_DOCUMENTACION_ROUTE,
    component: [UltimoPasoDocumentacion],
    services: [],
    roles: [CLIENTE],
    label: 'Documentacion: Paso 8 de documentacion',
    data: {
      formulario: DOCUMENTACION,
      paso: 8,
      tipoPersona: MORAL,
      step: 8,
      tab: ['documentacion'],
    },
  },
  {
    route: GRACIAS_DOCUMENTACION_ROUTE,
    component: [AgradecimientoIncompletoDocumentacion],
    services: [],
    roles: [CLIENTE],
    label: 'Documentacion: Agradecimiento',
    data: {
      formulario: DOCUMENTACION_INCOMPLETO,
      paso: 0,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
];

export default documentacionRoutes;
