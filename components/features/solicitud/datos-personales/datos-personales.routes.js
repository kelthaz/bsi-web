import Bienvenida from './bienvenida/Bienvenida';
import GranSalto from './gran-salto/GranSalto';
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
    label: 'Solicitud: Bienvenida',
    stepNumber: null,
    component: Bienvenida,
    services: [],
  },
  {
    tab: 'datos-personales',
    step: 'gran-salto',
    path: '/solicitud/datos-personales/gran-salto',
    label: 'Solicitud: Gran salto',
    stepNumber: null,
    component: GranSalto,
    services: [],
  },
  {
    tab: 'datos-personales',
    step: '1',
    path: '/solicitud/datos-personales/1',
    label: 'Solicitud: Paso 1 de datos personales',
    stepNumber: 1,
    component: StepOne,
    services: [],
  },
  {
    tab: 'datos-personales',
    step: '2',
    path: '/solicitud/datos-personales/2',
    label: 'Solicitud: Paso 2 de datos personales',
    stepNumber: 2,
    component: StepTwo,
    services: [],
  },
  {
    tab: 'datos-personales',
    step: '3',
    path: '/solicitud/datos-personales/3',
    label: 'Solicitud: Paso 3 de datos personales',
    stepNumber: 3,
    component: StepThree,
    services: [{ name: 'sectores', service: SectoresRepositorio.getSectores }],
  },
  {
    tab: 'datos-personales',
    step: '4',
    path: '/solicitud/datos-personales/4',
    label: 'Solicitud: Paso 4 de datos personales',
    stepNumber: 4,
    component: StepFour,
    services: [],
  },
  {
    tab: 'datos-personales',
    step: '5',
    path: '/solicitud/datos-personales/5',
    label: 'Solicitud: Paso 5 de datos personales',
    stepNumber: 5,
    component: StepFive,
    services: [],
  },
  {
    tab: 'datos-personales',
    step: 'agradecimiento',
    path: '/solicitud/datos-personales/agradecimiento',
    label: 'Solicitud: agradecimiento',
    stepNumber: null,
    component: Agradecimiento,
    services: [],
  },
];

export default datosPersonalesRoutes;
