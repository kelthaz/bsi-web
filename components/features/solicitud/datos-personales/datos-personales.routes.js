import Bienvenida from './bienvenida/Bienvenida';
import StepOne from './step-one/StepOne';
import StepTwo from './step-two/StepTwo';
import StepThree from './step-three/StepThree';
import StepFour from './step-four/StepFour';
import StepFive from './step-five/StepFive';
import Agradecimiento from './agradecimiento/Agradecimiento';
import SectoresRepositorio from '../../../../services/simulador/sectores.repositorio';

const datosPersonalesRoutes = [
  {
    tab: 'datos-personales',
    step: 'bienvenida',
    path: '/solicitud/datos-personales/bienvenida',
    stepNumber: null,
    component: Bienvenida,
    services: [],
  },
  {
    tab: 'datos-personales',
    step: '1',
    path: '/solicitud/datos-personales/1',
    stepNumber: 1,
    component: StepOne,
    services: [],
  },
  {
    tab: 'datos-personales',
    step: '2',
    path: '/solicitud/datos-personales/2',
    stepNumber: 2,
    component: StepTwo,
    services: [],
  },
  {
    tab: 'datos-personales',
    step: '3',
    path: '/solicitud/datos-personales/3',
    stepNumber: 3,
    component: StepThree,
    services: [{ name: 'sectores', service: SectoresRepositorio.getSectores }],
  },
  {
    tab: 'datos-personales',
    step: '4',
    path: '/solicitud/datos-personales/4',
    stepNumber: 4,
    component: StepFour,
    services: [],
  },
  {
    tab: 'datos-personales',
    step: '5',
    path: '/solicitud/datos-personales/5',
    stepNumber: 5,
    component: StepFive,
    services: [],
  },
  {
    tab: 'datos-personales',
    step: 'agradecimiento',
    path: '/solicitud/datos-personales/agradecimiento',
    stepNumber: null,
    component: Agradecimiento,
    services: [],
  },
];

export default datosPersonalesRoutes;
