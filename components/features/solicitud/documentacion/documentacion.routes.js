import PasoUnoDocumentacion from './paso-uno/PasoUnoDocumentacion';
import PasoDosDocumentacion from './paso-dos/PasoDosDocumentacion';
import PasoTresDocumentacion from './paso-tres/PasoTresDocumentacion';
import UltimaEtapa from './ultima-etapa/UltimaEtapa';
import PasoCuatroPfaeDocumentacion from './paso-cuatro/pfae/PasoCuatroDocumentacionPFAE';
import PasoCuatroPmDocumentacion from './paso-cuatro/pm/PasoCuatroDocumentacionPM';
import PasoCincoPfaeDocumentacion from './paso-cinco/pfae/PasoCincoDocumentacionPFAE';
import PasoCincoPmDocumentacion from './paso-cinco/pm/PasoCincoDocumentacionPM';
import PasoSeisDocumentacion from './paso-seis/PasoSeisDocumentacion';
import PasoSeisPmDocumentacion from './paso-seis/pm/PasoSeisDocumentacionPM';
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
  GRACIAS_DOCUMENTACION_ROUTE,
  REVISAR_CORREO_DOCUMENTACION_ROUTE,
} from '../../../../constants/routes/solicitud/documentacion';
import StepOneObligado from './obligado-solidario/step-one-obligado/StepOneObligado';
import StepTwoObligado from './obligado-solidario/step-two-obligado/StepTwoObligado';
import RevisarCorreoObligadoSolidario from './obligado-solidario/revisar-correo/RevisarCorreoObligadoSolidario';
import Gracias from './gracias/Gracias';

import { DOCUMENTACION } from '../../../../constants/formularios';

const documentacionRoutes = [
  {
    route: GRACIAS_DOCUMENTACION_ROUTE,
    component: [Gracias],
    services: [],
    roles: [],
    label: 'Documentacion: Agradecimiento',
    data: {
      formulario: DOCUMENTACION,
      paso: 0,
      tipoPersona: '',
      step: null,
      tab: ['documentacion'],
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
      paso: 2,
      tipoPersona: 'FISICO',
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
      paso: 3,
      tipoPersona: 'FISICO',
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
      paso: 4,
      tipoPersona: 'FISICO',
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
      paso: 5,
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
      paso: 6,
      tipoPersona: '',
      step: 5,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_SEIS_DOCUMENTACION_ROUTE,
    component: [PasoSeisDocumentacion, PasoSeisPmDocumentacion],
    services: [],
    roles: [],
    label: 'Documentacion: Paso 6 de documentacion',
    data: {
      formulario: DOCUMENTACION,
      paso: 7,
      tipoPersona: '',
      step: 6,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_SIETE_DOCUMENTACION_ROUTE,
    component: [PasoSieteDocumentacion],
    services: [],
    roles: [],
    label: 'Documentacion: Paso 7 de documentacion',
    data: {
      formulario: DOCUMENTACION,
      paso: 8,
      tipoPersona: 'FISICO',
      step: 7,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_OCHO_DOCUMENTACION_ROUTE,
    component: [PasoOchoDocumentacion],
    services: [],
    roles: [],
    label: 'Documentacion: Paso 8 de documentacion',
    data: {
      formulario: DOCUMENTACION,
      paso: 9,
      tipoPersona: 'FISICO',
      step: 8,
      tab: ['documentacion'],
    },
  },
  {
    route: ULTIMA_ETAPA_DOCUMENTACION_ROUTE,
    component: [UltimaEtapa],
    services: [],
    roles: [],
    label: 'Documentacion: Ultima etapa',
    data: {
      formulario: DOCUMENTACION,
      paso: 10,
      tipoPersona: '',
      step: null,
      tab: ['documentacion'],
    },
  },
  {
    route: REVISAR_CORREO_DOCUMENTACION_ROUTE,
    component: [RevisarCorreoDocumentacion],
    services: [],
    roles: [],
    label: 'Documentacion: Revisar correo',
    data: {
      formulario: DOCUMENTACION,
      paso: 11,
      tipoPersona: '',
      step: null,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_UNO_OBLIGADO_DOCUMENTACION_ROUTE,
    component: [StepOneObligado],
    services: [],
    roles: [],
    label: 'Documentacion: obligado solidario paso 1',
    data: {
      formulario: DOCUMENTACION,
      paso: 12,
      tipoPersona: '',
      step: null,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_DOS_OBLIGADO_DOCUMENTACION_ROUTE,
    component: [StepTwoObligado],
    services: [],
    roles: [],
    label: 'Documentacion: obligado solidario paso 2',
    data: {
      formulario: DOCUMENTACION,
      paso: 13,
      tipoPersona: '',
      step: null,
      tab: ['documentacion'],
    },
  },
  {
    route: PASO_DOS_OBLIGADO_DOCUMENTACION_ROUTE,
    component: [RevisarCorreoObligadoSolidario],
    services: [],
    roles: [],
    label: 'Documentacion: Revisar correo obligado solidario',
    data: {
      formulario: DOCUMENTACION,
      paso: 14,
      tipoPersona: '',
      step: null,
      tab: ['documentacion'],
    },
  },
];

export default documentacionRoutes;
