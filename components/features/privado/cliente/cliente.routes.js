import { INICIO_CLIENTE_ROUTE } from '../../../../constants/routes/privado/cliente';
import InicioCliente from './InicioCliente';

const clienteRoutes = [
  {
    route: INICIO_CLIENTE_ROUTE,
    component: InicioCliente,
    services: [],
    roles: [],
    data: {
      tab: 'inicio',
    },
  },
];

export default clienteRoutes;
