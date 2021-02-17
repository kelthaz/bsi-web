import Bienvenido from './bienvenido/Bienvenido';
import Gracias from './gracias/Gracias';
import StepOne from './step-one/StepOne';
import StepTwo from './step-two/StepTwo';
import StepThree from './step-three/StepThree';
import StepFour from './step-four/StepFour';
import StepFive from './step-five/StepFive';
import StepSix from './step-six/StepSix';
import StepSeven from './step-seven/StepSeven';
import StepEight from './step-eight/StepEight';
import StepNine from './step-nine/StepNine';
import StepTen from './step-ten/StepTen';
import StepEleven from './step-eleven/StepEleven';
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
    component: StepOne,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '2',
    path: PASO_DOS_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 2,
    component: StepTwo,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '3',
    path: PASO_TRES_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 3,
    component: StepThree,
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
    component: StepFive,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '6',
    path: PASO_SEIS_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 6,
    component: StepSix,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '7',
    path: PASO_SIETE_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 7,
    component: StepSeven,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '8',
    path: PASO_OCHO_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 8,
    component: StepEight,
    services: [],
  },
  {
    tab: 'carga-documentos',
    step: '9',
    path: PASO_NUEVE_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 9,
    component: StepNine,
    services: [],
  },
  {
    tab: 'carga-documentos',
    step: '10',
    path: PASO_DIEZ_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 10,
    component: StepTen,
    services: [],
  },
  {
    tab: 'autorizacion',
    step: '11',
    path: PASO_ONCE_OBLIGADO_SOLIDARIO_ROUTE,
    stepNumber: 11,
    component: StepEleven,
    services: [],
  },
  {
    tab: 'autorizacion',
    step: 'Agradecimiento',
    path: '/obligado-solidario/pfae/autorizacion/agradecimiento',
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
