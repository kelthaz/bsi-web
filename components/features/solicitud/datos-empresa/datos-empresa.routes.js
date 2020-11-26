import Agradecimiento from './agradecimiento/Agradecimiento';
import CuentaActiva from './cuenta-activada/CuentaActiva';
import StepOne from './step-one/StepOne';
import StepTwo from './step-two/StepTwo';
import StepThree from './step-three/StepThree';
import StepFour from './step-four/StepFour';
import StepFive from './step-five/StepFive';
import StepSix from './step-six/StepSix';
import StepSeven from './step-seven/StepSeven';
import StepEight from './step-eight/StepEight';
import StepNine from './step-nine/StepNine';

const datosEmpresaRoutes = [
  {
    tab: 'datos-empresa',
    step: 'cuenta-activa',
    path: '/solicitud/datos-empresa/cuenta-activa',
    stepNumber: null,
    component: CuentaActiva,
    services: [],
  },
  {
    tab: 'datos-empresa',
    step: '1',
    path: '/solicitud/datos-empresa/1',
    stepNumber: 1,
    component: StepOne,
    services: [],
  },
  {
    tab: 'datos-empresa',
    step: '2',
    path: '/solicitud/datos-empresa/2',
    stepNumber: 2,
    component: StepTwo,
    services: [],
  },
  {
    tab: 'datos-empresa',
    step: '3',
    path: '/solicitud/datos-empresa/3',
    stepNumber: 3,
    component: StepThree,
    services: [],
  },
  {
    tab: 'datos-empresa',
    step: '4',
    path: '/solicitud/datos-empresa/4',
    stepNumber: 4,
    component: StepFour,
    services: [],
  },
  {
    tab: 'datos-empresa',
    step: '5',
    path: '/solicitud/datos-empresa/5',
    stepNumber: 5,
    component: StepFive,
    services: [],
  },
  {
    tab: 'datos-empresa',
    step: '6',
    path: '/solicitud/datos-empresa/6',
    stepNumber: 6,
    component: StepSix,
    services: [],
  },
  {
    tab: 'datos-empresa',
    step: '7',
    path: '/solicitud/datos-empresa/7',
    stepNumber: 7,
    component: StepSeven,
    services: [],
  },
  {
    tab: 'datos-empresa',
    step: '8',
    path: '/solicitud/datos-empresa/8',
    stepNumber: 8,
    component: StepEight,
    services: [],
  },
  {
    tab: 'datos-empresa',
    step: '9',
    path: '/solicitud/datos-empresa/9',
    stepNumber: 9,
    component: StepNine,
    services: [],
  },
  {
    tab: 'datos-empresa',
    step: 'agradecimiento',
    path: '/solicitud/datos-empresa/agradecimiento',
    stepNumber: null,
    component: Agradecimiento,
    services: [],
  },
];

export default datosEmpresaRoutes;
