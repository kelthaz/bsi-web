import { SUPERVISOR_ROUTE } from '../../../../constants/routes/privado/cliente';
import InicioSupervisor from './inicio-supervisor/inicioSupervisor';

const clienteRoutes = [
  {
    route: SUPERVISOR_ROUTE,
    component: InicioSupervisor,
    services: [],
    roles: [],
    data: {
      tab: 'inicio',
    },
  },
];

export default clienteRoutes;
