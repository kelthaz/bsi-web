import StepOne from './step-one/StepOne';
import StepTwo from './step-two/StepTwo';

const pmRoutes = [
  {
    tab: 'preguntas',
    step: '1',
    path: '/obligado-solidario/pm/preguntas/1',
    stepNumber: 1,
    component: StepOne,
    services: [],
  },
  {
    tab: 'preguntas',
    step: '2',
    path: '/obligado-solidario/pm/preguntas/2',
    stepNumber: 2,
    component: StepTwo,
    services: [],
  },
];

export default pmRoutes;
