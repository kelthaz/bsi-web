import SectoresRepositorio from '../../../../services/simulador/sectores.repositorio';
import Bienvenido from './bienvenido/Bienvenido';
import StepOne from './step-one/StepOne';
import StepTwo from './step-two/StepTwo';

const pmRoutes = [
  {
    tab: 'preguntas',
    step: 'bienvenido',
    path: '/obligado-solidario/pm/preguntas/bienvenido',
    stepNumber: null,
    component: Bienvenido,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '1',
    path: '/obligado-solidario/pm/preguntas/1',
    stepNumber: 1,
    component: StepOne,
    services: [{ name: 'sectores', service: SectoresRepositorio.getSectores }],
  },
  {
    tab: 'preguntas',
    step: '2',
    path: '/obligado-solidario/pm/preguntas/2',
    stepNumber: 2,
    component: StepTwo,
    services: [],
  },
  // {
  //   tab: 'preguntas',
  //   step: '3',
  //   path: '/obligado-solidario/pfae/preguntas/3',
  //   stepNumber: 3,
  //   component: StepThree,
  //   services: [],
  // },
  // {
  //   tab: 'preguntas',
  //   step: '4',
  //   path: '/obligado-solidario/pfae/preguntas/4',
  //   stepNumber: 4,
  //   component: StepFour,
  //   services: [],
  // },
  // {
  //   tab: 'preguntas',
  //   step: '5',
  //   path: '/obligado-solidario/pfae/preguntas/5',
  //   stepNumber: 5,
  //   component: StepFive,
  //   services: [],
  // },
  // {
  //   tab: 'preguntas',
  //   step: '6',
  //   path: '/obligado-solidario/pfae/preguntas/6',
  //   stepNumber: 6,
  //   component: StepSix,
  //   services: [],
  // },
  // {
  //   tab: 'preguntas',
  //   step: '7',
  //   path: '/obligado-solidario/pfae/preguntas/7',
  //   stepNumber: 7,
  //   component: StepSeven,
  //   services: [],
  // },
  // {
  //   tab: 'preguntas',
  //   step: '8',
  //   path: '/obligado-solidario/pfae/preguntas/8',
  //   stepNumber: 8,
  //   component: StepEight,
  //   services: [],
  // },
  // {
  //   tab: 'preguntas',
  //   step: '9',
  //   path: '/obligado-solidario/pfae/preguntas/9',
  //   stepNumber: 9,
  //   component: StepNine,
  //   services: [],
  // },
  // {
  //   tab: 'preguntas',
  //   step: '10',
  //   path: '/obligado-solidario/pfae/preguntas/10',
  //   stepNumber: 10,
  //   component: StepTen,
  //   services: [],
  // },
  // {
  //   tab: 'preguntas',
  //   step: '11',
  //   path: '/obligado-solidario/pfae/preguntas/11',
  //   stepNumber: 11,
  //   component: StepEleven,
  //   services: [],
  // },
  // {
  //   tab: 'preguntas',
  //   step: 'Agradecimiento',
  //   path: '/obligado-solidario/pfae/preguntas/agradecimiento',
  //   stepNumber: null,
  //   component: Agradecimiento,
  //   services: [],
  // },
];

export default pmRoutes;
