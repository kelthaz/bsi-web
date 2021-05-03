import { DOCUMENTACION_BIOMETRICOS } from '../../../../../constants/formularios';
import { CLIENTE } from '../../../../../constants/roles';
import {
  BIENVENIDO_BIOMETRICO_DOCUMENTACION_ROUTE,
  CAPTURA_BIOMETRICO_DOCUMENTACION_ROUTE,
  FELICIDADES_BIOMETRICO_DOCUMENTACION_ROUTE,
  LISTO_BIOMETRICO_DOCUMENTACION_ROUTE,
  PASO_DOS_BIOMETRICO_DOCUMENTACION_ROUTE,
  PASO_UNO_BIOMETRICO_DOCUMENTACION_ROUTE,
} from '../../../../../constants/routes/solicitud/documentacion';
import BienvenidaBiometricosDocumentacion from './bienvenida/BienvenidaBiometricosDocumentacion';
import CapturaRostroBiometricosDocumentacion from './captura-rostro/CapturaRostroBiometricosDocumentacion';
import FelicidadesBiometricosDocumentacion from './felicidades/FelicidadesBiometricosDocumentacion';
import ListoBiometricosDocumentacion from './listo/ListoBiometricosDocumentacion';
import PasoDosBiometricosDocumentacion from './paso-dos/PasoDosBiometricosDocumentacion';
import PasoTresBiometricosDocumentacion from './paso-tres/PasoTresBiometricosDocumentacion';

const biometricosDocumentacionRoutes = [
  {
    route: BIENVENIDO_BIOMETRICO_DOCUMENTACION_ROUTE,
    component: [BienvenidaBiometricosDocumentacion],
    services: [],
    roles: [CLIENTE],
    label: 'Documentacion: Ultima etapa',
    data: {
      formulario: DOCUMENTACION_BIOMETRICOS,
      paso: 0,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
  {
    route: PASO_UNO_BIOMETRICO_DOCUMENTACION_ROUTE,
    component: [PasoDosBiometricosDocumentacion],
    services: [],
    roles: [CLIENTE],
    label: 'Documentacion: Ultima etapa',
    data: {
      formulario: DOCUMENTACION_BIOMETRICOS,
      paso: 1,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
  {
    route: CAPTURA_BIOMETRICO_DOCUMENTACION_ROUTE,
    component: [CapturaRostroBiometricosDocumentacion],
    services: [],
    roles: [CLIENTE],
    label: 'Documentacion: Ultima etapa',
    data: {
      formulario: DOCUMENTACION_BIOMETRICOS,
      paso: 2,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
  {
    route: PASO_DOS_BIOMETRICO_DOCUMENTACION_ROUTE,
    component: [PasoTresBiometricosDocumentacion],
    services: [],
    roles: [CLIENTE],
    label: 'Documentacion: Ultima etapa',
    data: {
      formulario: DOCUMENTACION_BIOMETRICOS,
      paso: 3,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
  {
    route: LISTO_BIOMETRICO_DOCUMENTACION_ROUTE,
    component: [ListoBiometricosDocumentacion],
    services: [],
    roles: [CLIENTE],
    label: 'Documentacion: Ultima etapa',
    data: {
      formulario: DOCUMENTACION_BIOMETRICOS,
      paso: 4,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
  {
    route: FELICIDADES_BIOMETRICO_DOCUMENTACION_ROUTE,
    component: [FelicidadesBiometricosDocumentacion],
    services: [],
    roles: [CLIENTE],
    label: 'Documentacion: Ultima etapa',
    data: {
      formulario: DOCUMENTACION_BIOMETRICOS,
      paso: 5,
      tipoPersona: '',
      step: null,
      tab: [''],
    },
  },
];

export default biometricosDocumentacionRoutes;
