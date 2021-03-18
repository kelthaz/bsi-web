import { INICIO_CLIENTE_DASHBOARD } from '../../../../../constants/routes/privado/cliente';
import DashboardCliente from './DashboardCliente';

const dashboardClienteRoutes = [
  {
    route: INICIO_CLIENTE_DASHBOARD,
    component: DashboardCliente,
    services: [],
    roles: [],
    data: {
      tab: 'dashboardcliente',
    },
  },
];

export default dashboardClienteRoutes;
