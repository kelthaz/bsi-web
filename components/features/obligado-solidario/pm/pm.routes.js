import SectoresRepositorio from '../../../../services/simulador/sectores.repositorio';
import AgredecimientoFinal from './agradecimiento-final/AgredecimientoFinal';
import AgradecimientoIncompleto from './agradecimiento-incompleto/AgradecimientoIncompleto';
import Bienvenido from './bienvenido/Bienvenido';
import StepEight from './step-eight/StepEight';
import StepFive from './step-five/StepFive';
import StepFour from './step-four/StepFour';
import StepNine from './step-nine/StepNine';
import StepOne from './step-one/StepOne';
import StepSeven from './step-seven/StepSeven';
import StepSix from './step-six/StepSix';
import StepThree from './step-three/StepThree';
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
  {
    tab: 'preguntas',
    step: '3',
    path: '/obligado-solidario/pm/preguntas/3',
    stepNumber: 3,
    component: StepThree,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '4',
    path: '/obligado-solidario/pm/preguntas/4',
    stepNumber: 4,
    component: StepFour,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '5',
    path: '/obligado-solidario/pm/preguntas/5',
    stepNumber: 5,
    component: StepFive,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '6',
    path: '/obligado-solidario/pm/preguntas/6',
    stepNumber: 6,
    component: StepSix,
    services: [],
  },
  {
    tab: 'carga-documentos',
    step: '7',
    path: '/obligado-solidario/pm/carga-documentos/7',
    stepNumber: 7,
    component: StepSeven,
    services: [],
  },
  {
    tab: 'autorizacion',
    step: '8',
    path: '/obligado-solidario/pm/autorizacion/8',
    stepNumber: 8,
    component: StepEight,
    services: [],
  },
  {
    tab: 'autorizacion',
    step: '9',
    path: '/obligado-solidario/pm/autorizacion/9',
    stepNumber: null,
    component: StepNine,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '10',
    path: '/obligado-solidario/pm/preguntas/agradecimiento',
    stepNumber: null,
    component: AgradecimientoIncompleto,
    services: [],
  },
  {
    tab: 'autorizacion',
    step: 'agradecimiento-final',
    path: '/obligado-solidario/pm/autorizacion/agradecimiento-final',
    stepNumber: null,
    component: AgredecimientoFinal,
    services: [],
  },
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
