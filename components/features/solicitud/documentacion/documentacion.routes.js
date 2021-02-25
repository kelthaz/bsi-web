import PasoUnoDocumentacion from './paso-uno/PasoUnoDocumentacion';
import PasoDosDocumentacion from './paso-dos/PasoDosDocumentacion';
import PasoTresDocumentacion from './paso-tres/PasoTresDocumentacion';
import UltimaEtapa from './ultima-etapa/UltimaEtapa';
import PasoCuatroDocumentacion from './paso-cuatro/PasoCuatroDocumentacion';
import PasoCincoDocumentacion from './paso-cinco/PasoCincoDocumentacion';
import PasoSeisDocumentacion from './paso-seis/PasoSeisDocumentacion';
import PasoSieteDocumentacion from './paso-siete/PasoSieteDocumentacion';
import PasoOchoDocumentacion from './paso-ocho/PasoOchoDocumentacion';
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
  PASO_UNO_OBLIGADO_DOCUMENTACION_ROUTE,
  PASO_DOS_OBLIGADO_DOCUMENTACION_ROUTE,
  AGRADECIMIENTO_OBLIGADO_DOCUMENTACION_ROUTE,
  GRACIAS_DOCUMENTACION_ROUTE,
  REVISAR_CORREO_DOCUMENTACION_ROUTE,
  BIENVENIDO_BIOMETRICO_DOCUMENTACION_ROUTE,
  PASO_UNO_BIOMETRICO_DOCUMENTACION_ROUTE,
  CAPTURA_BIOMETRICO_DOCUMENTACION_ROUTE,
  PASO_DOS_BIOMETRICO_DOCUMENTACION_ROUTE,
  LISTO_BIOMETRICO_DOCUMENTACION_ROUTE,
  FELICIDADES_BIOMETRICO_DOCUMENTACION_ROUTE,
} from '../../../../constants/routes/solicitud/documentacion';
import StepOneObligado from './obligado-solidario/step-one-obligado/StepOneObligado';
import StepTwoObligado from './obligado-solidario/step-two-obligado/StepTwoObligado';
import RevisarCorreoObligadoSolidario from './obligado-solidario/revisar-correo/RevisarCorreoObligadoSolidario';
import Gracias from './gracias/Gracias';
import BienvenidaBiometricosDocumentacion from './biometricos/bienvenida/BienvenidaBiometricosDocumentacion';
import PasoDosBiometricosDocumentacion from './biometricos/paso-dos/PasoDosBiometricosDocumentacion';
import CapturaRostroBiometricosDocumentacion from './biometricos/captura-rostro/CapturaRostroBiometricosDocumentacion';
import PasoTresBiometricosDocumentacion from './biometricos/paso-tres/PasoTresBiometricosDocumentacion';
import ListoBiometricosDocumentacion from './biometricos/listo/ListoBiometricosDocumentacion';
import FelicidadesBiometricosDocumentacion from './biometricos/felicidades/FelicidadesBiometricosDocumentacion';

const documentacionRoutes = [
  {
    tab: 'documentacion',
    step: 'gracias',
    path: GRACIAS_DOCUMENTACION_ROUTE,
    stepNumber: null,
    component: Gracias,
    services: [],
  },
  {
    tab: 'documentacion',
    step: 'ultima-etapa',
    path: ULTIMA_ETAPA_DOCUMENTACION_ROUTE,
    stepNumber: null,
    component: UltimaEtapa,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '1',
    path: PASO_UNO_DOCUMENTACION_ROUTE,
    stepNumber: 1,
    component: PasoUnoDocumentacion,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '2',
    path: PASO_DOS_DOCUMENTACION_ROUTE,
    stepNumber: 2,
    component: PasoDosDocumentacion,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '3',
    path: PASO_TRES_DOCUMENTACION_ROUTE,
    stepNumber: 3,
    component: PasoTresDocumentacion,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '4',
    path: PASO_CUATRO_DOCUMENTACION_ROUTE,
    stepNumber: 4,
    component: PasoCuatroDocumentacion,
    services: [],
  },

  {
    tab: 'documentacion',
    step: '5',
    path: PASO_CINCO_DOCUMENTACION_ROUTE,
    stepNumber: 5,
    component: PasoCincoDocumentacion,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '6',
    path: PASO_SEIS_DOCUMENTACION_ROUTE,
    stepNumber: 6,
    component: PasoSeisDocumentacion,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '7',
    path: PASO_SIETE_DOCUMENTACION_ROUTE,
    stepNumber: 7,
    component: PasoSieteDocumentacion,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '8',
    path: PASO_OCHO_DOCUMENTACION_ROUTE,
    stepNumber: 8,
    component: PasoOchoDocumentacion,
    services: [],
  },
  {
    tab: 'documentacion',
    step: 'revisar-correo',
    path: REVISAR_CORREO_DOCUMENTACION_ROUTE,
    stepNumber: null,
    component: RevisarCorreoDocumentacion,
    services: [],
  },

  {
    tab: 'documentacion',
    step: 'obligado-1',
    path: PASO_UNO_OBLIGADO_DOCUMENTACION_ROUTE,
    stepNumber: null,
    component: StepOneObligado,
    services: [],
  },
  {
    tab: 'documentacion',
    step: 'obligado-2',
    path: PASO_DOS_OBLIGADO_DOCUMENTACION_ROUTE,
    stepNumber: null,
    component: StepTwoObligado,
    services: [],
  },
  {
    tab: 'documentacion',
    step: 'agradecimiento-obligado',
    path: AGRADECIMIENTO_OBLIGADO_DOCUMENTACION_ROUTE,
    stepNumber: null,
    component: RevisarCorreoObligadoSolidario,
    services: [],
  },
  // {
  //   tab: 'documentacion',
  //   step: 'agradecimiento',
  //   path: '/solicitud/pm/documentacion/agradecimiento',
  //   stepNumber: null,
  //   component: Agradecimiento,
  //   services: [],
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
