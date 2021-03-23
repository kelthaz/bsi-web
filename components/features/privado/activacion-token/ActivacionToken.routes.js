import { ACTIVACION_TOKEN } from '../../../../constants/routes/privado/cliente';
import ActivacionToken from './ActivacionToken';

const ActivacionTokenRoutes = [
  {
    route: ACTIVACION_TOKEN,
    component: ActivacionToken,
    services: [],
    roles: [],
    data: {
      tab: 'activaciontoken',
    },
  },
];

export default ActivacionTokenRoutes;
