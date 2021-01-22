import FormalizaCuentaPersonal from './formaliza-cuenta-personal/FormalizaCuentaPersonal';
import SelectView from './provisional/SelectView';
import Validacion from './validacion/Validacion';

const ofertaRoutes = [
  {
    tab: 'oferta',
    step: 'resultado',
    path: '/solicitud/oferta/resultado',
    stepNumber: null,
    component: SelectView,
    services: [],
  },
  {
    tab: 'oferta',
    step: 'formaliza',
    path: '/solicitud/oferta/formaliza',
    stepNumber: null,
    component: FormalizaCuentaPersonal,
    services: [],
  },
  {
    tab: 'oferta',
    step: 'validacion',
    path: '/solicitud/oferta/validacion',
    stepNumber: null,
    component: Validacion,
    services: [],
  }
];

export default ofertaRoutes;
