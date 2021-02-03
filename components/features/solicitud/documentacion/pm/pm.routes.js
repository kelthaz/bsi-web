import StepEight from './step-eight/StepEight';
import StepNine from './step-nine/StepNine';
import Gracias from './gracias/Gracias';
import RevisarCorreo from './revisar-correo/RevisarCorreo';
import StepFive from './step-five/StepFive';
import StepFour from './step-four/StepFour';
import Agradecimiento from './agradecimiento/Agradecimiento';
import StepOne from './step-one/StepOne';
import StepSeven from './step-seven/StepSeven';
import StepSix from './step-six/StepSix';
import StepTen from './step-ten/StepTen';
import StepThree from './step-three/StepThree';
import StepTwo from './step-two/StepTwo';
import UltimaEtapa from './ultima-etapa/UltimaEtapa';

const pmRoutes = [
  {
    tab: 'documentacion',
    step: 'ultima-etapa',
    path: '/solicitud/pm/documentacion/ultima-etapa',
    stepNumber: null,
    component: UltimaEtapa,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '1',
    path: '/solicitud/pm/documentacion/1',
    stepNumber: 1,
    component: StepOne,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '2',
    path: '/solicitud/pm/documentacion/2',
    stepNumber: 2,
    component: StepTwo,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '3',
    path: '/solicitud/pm/documentacion/3',
    stepNumber: 3,
    component: StepThree,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '4',
    path: '/solicitud/pm/documentacion/4',
    stepNumber: 4,
    component: StepFour,
    services: [],
  },
  {
    tab: 'documentacion',
    step: 'gracias',
    path: '/solicitud/pm/documentacion/gracias',
    stepNumber: null,
    component: Gracias,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '5',
    path: '/solicitud/pm/documentacion/5',
    stepNumber: 5,
    component: StepFive,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '6',
    path: '/solicitud/pm/documentacion/6',
    stepNumber: 6,
    component: StepSix,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '7',
    path: '/solicitud/pm/documentacion/7',
    stepNumber: 7,
    component: StepSeven,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '8',
    path: '/solicitud/pm/documentacion/8',
    stepNumber: 8,
    component: StepEight,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '9',
    path: '/solicitud/pm/documentacion/9',
    stepNumber: 9,
    component: StepNine,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '10',
    path: '/solicitud/pm/documentacion/10',
    stepNumber: 10,
    component: StepTen,
    services: [],
  },
  {
    tab: 'documentacion',
    step: 'revisar-correo',
    path: '/solicitud/pm/documentacion/revisar-correo',
    stepNumber: null,
    component: RevisarCorreo,
    services: [],
  },
  {
    tab: 'documentacion',
    step: 'agradecimiento',
    path: '/solicitud/pm/documentacion/agradecimiento',
    stepNumber: null,
    component: Agradecimiento,
    services: [],
  },
];

export default pmRoutes;
