import { TABLERO_ADMIN_ROUTE, CASOS_ADMIN_ROUTE } from '../../../../../constants/routes/privado/admin/admin';
import AdministradorDeNegocioTablero from './tablero/AdministradorDeNegocioTablero';
import AministradorDeNegocioActividades from './actividades/AministradorDeNegocioActividades';

const AdministradorDeNegocioRoutes = [
  {
    route: TABLERO_ADMIN_ROUTE,
    component: [AdministradorDeNegocioTablero],
    services: [],
    roles: [],
    label: 'Administrador de negocio - Tablero',
    data: {},
  },
  {
    route: CASOS_ADMIN_ROUTE,
    component: [AministradorDeNegocioActividades],
    services: [],
    roles: [],
    label: 'Administrador de negocio - casos',
    data: {},
  },
];

export default AdministradorDeNegocioRoutes;
