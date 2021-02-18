import Gracias from './gracias/Gracias';
import PasoUnoObligadoSolidarioPFAE from './paso-uno/PasoUnoObligadoSolidarioPFAE';
import PasoDosObligadoSolidarioPFAE from './paso-dos/PasoDosObligadoSolidarioPFAE';
import PasoTresObligadoSolidarioPFAE from './paso-tres/PasoTresObligadoSolidarioPFAE';
import StepFour from './paso-cuatro/PasoCuatroObligadoSolidarioPFAE';
import PasoCincoObligadoSolidarioPFAE from './paso-cinco/PasoCincoObligadoSolidarioPFAE';
import PasoSeisObligadoSolidarioPFAE from './paso-seis/PasoSeisObligadoSolidarioPFAE';
import PasoSieteObligadoSolidario from './paso-siete/PasoSieteObligadoSolidario';
import PasoOchoObligadoSolidarioPFAE from './paso-ocho/PasoOchoObligadoSolidarioPFAE';
import PasoNueveObligadoSolidarioPFAE from './paso-nueve/PasoNueveObligadoSolidarioPFAE';
import PasoDiezObligadoSolidarioPFAE from './paso-diez/PasoDiezObligadoSolidarioPFAE';
import PasoOnceObligadoSolidarioPFAE from './paso-once/PasoOnceObligadoSolidarioPFAE';
import Agradecimiento from './agradecimiento/Agradecimiento';
import pruebasComponentes from './prueba-componentes/pruebaComponentes';
import {
  BIENVENIDA_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_CINCO_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_CUATRO_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_DOS_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_OCHO_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_SEIS_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_SIETE_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_TRES_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_UNO_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_NUEVE_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_DIEZ_OBLIGADO_SOLIDARIO_ROUTE,
  PASO_ONCE_OBLIGADO_SOLIDARIO_ROUTE,
  AGRADECIMIENTO_COMPLETO_OBLIGADO_SOLIDARIO_ROUTE,
} from '../../../../../constants/routes/solicitud/obligado';
import BienvenidoObligadoSolidario from '../pm/bienvenido/BienvenidoObligadoSolidario';

const pfaeRoutes = [
  {
    tab: 'preguntas',
    step: 'bienvenido',
    path: BIENVENIDA_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: null,
    component: BienvenidoObligadoSolidario,
    services: [],
  },
  {
    tab: 'preguntas',
    step: 'gracias',
    path: '/obligado-solidario/pfae/preguntas/gracias',
    stepNumber: null,
    component: Gracias,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '1',
    path: PASO_UNO_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 1,
    component: PasoUnoObligadoSolidarioPFAE,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '2',
    path: PASO_DOS_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 2,
    component: PasoDosObligadoSolidarioPFAE,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '3',
    path: PASO_TRES_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 3,
    component: PasoTresObligadoSolidarioPFAE,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '4',
    path: PASO_CUATRO_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 4,
    component: StepFour,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '5',
    path: PASO_CINCO_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 5,
    component: PasoCincoObligadoSolidarioPFAE,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '6',
    path: PASO_SEIS_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 6,
    component: PasoSeisObligadoSolidarioPFAE,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '7',
    path: PASO_SIETE_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 7,
    component: PasoSieteObligadoSolidario,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '8',
    path: PASO_OCHO_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 8,
    component: PasoOchoObligadoSolidarioPFAE,
    services: [],
  },
  {
    tab: 'carga-documentos',
    step: '9',
    path: PASO_NUEVE_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 9,
    component: PasoNueveObligadoSolidarioPFAE,
    services: [],
  },
  {
    tab: 'carga-documentos',
    step: '10',
    path: PASO_DIEZ_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 10,
    component: PasoDiezObligadoSolidarioPFAE,
    services: [],
  },
  {
    tab: 'autorizacion',
    step: '11',
    path: PASO_ONCE_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 11,
    component: PasoOnceObligadoSolidarioPFAE,
    services: [],
  },
  {
    tab: 'autorizacion',
    step: 'Agradecimiento',
    path: AGRADECIMIENTO_COMPLETO_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: null,
    component: Agradecimiento,
    services: [],
  },
  {
    tab: 'preguntas',
    step: 'pruebasComponentes',
    path: '/obligado-solidario/pfae/preguntas/pruebasComponentes',
    stepNumber: null,
    component: pruebasComponentes,
    services: [],
  },
];

export default pfaeRoutes;
