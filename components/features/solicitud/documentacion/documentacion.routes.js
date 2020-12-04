import StepEight from '../datos-empresa/step-eight/StepEight';
import StepNine from '../datos-empresa/step-nine/StepNine';
import RevisarCorreo from './RevisarCorreo';
import StepFive from './StepFive';
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepSeven from './StepSeven';
import StepSix from './StepSix';
import StepTen from './StepTen';
import StepThree from './StepThree';
import StepTwo from './StepTwo';
import UltimaEtapa from './UltimaEtapa';

const documentacionRoutes = [
  {
    tab: 'documentacion',
    step: 'ultima-etapa',
    path: '/solicitud/documentacion/ultima-etapa',
    stepNumber: null,
    component: UltimaEtapa,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '1',
    path: '/solicitud/documentacion/1',
    stepNumber: 1,
    component: StepOne,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '2',
    path: '/solicitud/documentacion/2',
    stepNumber: 2,
    component: StepTwo,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '3',
    path: '/solicitud/documentacion/3',
    stepNumber: 3,
    component: StepThree,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '4',
    path: '/solicitud/documentacion/4',
    stepNumber: 4,
    component: StepFour,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '5',
    path: '/solicitud/documentacion/5',
    stepNumber: 5,
    component: StepFive,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '6',
    path: '/solicitud/documentacion/6',
    stepNumber: 6,
    component: StepSix,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '7',
    path: '/solicitud/documentacion/7',
    stepNumber: 7,
    component: StepSeven,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '8',
    path: '/solicitud/documentacion/8',
    stepNumber: 8,
    component: StepEight,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '9',
    path: '/solicitud/documentacion/9',
    stepNumber: 9,
    component: StepNine,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '10',
    path: '/solicitud/documentacion/10',
    stepNumber: 9,
    component: StepTen,
    services: [],
  },
  {
    tab: 'documentacion',
    step: 'revisar-correo',
    path: '/solicitud/documentacion/revisar-correo',
    stepNumber: null,
    component: RevisarCorreo,
    services: [],
  },
];

export default documentacionRoutes;
