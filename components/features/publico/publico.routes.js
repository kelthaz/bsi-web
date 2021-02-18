import { INICIO_ROUTE } from '../../../constants/routes/publico/publico';
import Credito from './credito/Credito';
import Inicio from './inicio/Inicio';

const publicoRoutes = [
  {
    route: INICIO_ROUTE,
    component: Inicio,
    services: [],
    roles: [],
    feature: 'publico',
    data: {},
  },
  {
    route: INICIO_ROUTE,
    component: Credito,
    services: [],
    roles: [],
    feature: 'publico',
    data: {},
  },
];

export default publicoRoutes;
