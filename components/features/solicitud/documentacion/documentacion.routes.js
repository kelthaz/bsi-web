import StepOne from './step-one/StepOne';
import StepTwo from './step-two/StepTwo';
import StepThree from './step-three/StepThree';
import UltimaEtapa from './ultima-etapa/UltimaEtapa';
import StepFour from './step-four/StepFour';
import StepFive from './step-five/StepFive';
import StepSix from './step-six/StepSix';
import StepSeven from './step-seven/StepSeven';
import StepEight from './step-eight/StepEight';
import RevisarCorreo from './revisar-correo/RevisarCorreo';
import {
  ULTIMA_ETAPA_ROUTE,
  STEP_ONE_ROUTE,
  STEP_TWO_ROUTE,
  STEP_THREE_ROUTE,
  STEP_FOUR_ROUTE,
  STEP_FIVE_ROUTE,
  STEP_SIX_ROUTE,
  STEP_SEVEN_ROUTE,
  STEP_EIGHT_ROUTE,
} from '../../../../constants/routes/solicitud/documentacion';

const documentacionRoutes = [
  {
    tab: 'documentacion',
    step: 'ultima-etapa',
    path: ULTIMA_ETAPA_ROUTE,
    stepNumber: null,
    component: UltimaEtapa,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '1',
    path: STEP_ONE_ROUTE,
    stepNumber: 1,
    component: StepOne,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '2',
    path: STEP_TWO_ROUTE,
    stepNumber: 2,
    component: StepTwo,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '3',
    path: STEP_THREE_ROUTE,
    stepNumber: 3,
    component: StepThree,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '4',
    path: STEP_FOUR_ROUTE,
    stepNumber: 4,
    component: StepFour,
    services: [],
  },
  // {
  //   tab: 'documentacion',
  //   step: 'gracias',
  //   path: '/solicitud/pm/documentacion/gracias',
  //   stepNumber: null,
  //   component: Gracias,
  //   services: [],
  // },
  {
    tab: 'documentacion',
    step: '5',
    path: STEP_FIVE_ROUTE,
    stepNumber: 5,
    component: StepFive,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '6',
    path: STEP_SIX_ROUTE,
    stepNumber: 6,
    component: StepSix,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '7',
    path: STEP_SEVEN_ROUTE,
    stepNumber: 7,
    component: StepSeven,
    services: [],
  },
  {
    tab: 'documentacion',
    step: '8',
    path: STEP_EIGHT_ROUTE,
    stepNumber: 8,
    component: StepEight,
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
  // {
  //   tab: 'documentacion',
  //   step: 'agradecimiento',
  //   path: '/solicitud/pm/documentacion/agradecimiento',
  //   stepNumber: null,
  //   component: Agradecimiento,
  //   services: [],
  // },
];

export default documentacionRoutes;
