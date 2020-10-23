import Bienvenida from './bienvenida/Bienvenida';
import StepOne from './step-one/StepOne';
import StepTwo from './step-two/StepTwo';
import StepThree from './step-three/StepThree';
import StepFour from './step-four/StepFour';
import StepFive from './step-five/StepFive';
import Agradecimiento from './agradecimiento/Agradecimiento';

const datosPersonalesRoutes = [
  {
    tab: 'datos-personales',
    step: 'bienvenida',
    path: '/solicitud/datos-personales/bienvenida',
    data: { step: null },
    component: Bienvenida,
  },
  {
    tab: 'datos-personales',
    step: '1',
    path: '/solicitud/datos-personales/1',
    data: { step: 1 },
    component: StepOne,
  },
  {
    tab: 'datos-personales',
    step: '2',
    path: '/solicitud/datos-personales/2',
    data: { step: 2 },
    component: StepTwo,
  },
  {
    tab: 'datos-personales',
    step: '3',
    path: '/solicitud/datos-personales/3',
    data: { step: 3 },
    component: StepThree,
  },
  {
    tab: 'datos-personales',
    step: '4',
    path: '/solicitud/datos-personales/4',
    data: { step: 4 },
    component: StepFour,
  },
  {
    tab: 'datos-personales',
    step: '5',
    path: '/solicitud/datos-personales/5',
    data: { step: 5 },
    component: StepFive,
  },
  {
    tab: 'datos-personales',
    step: 'agradecimiento',
    path: '/solicitud/datos-personales/agradecimiento',
    data: { step: null },
    component: Agradecimiento,
  },
];

export default datosPersonalesRoutes;
