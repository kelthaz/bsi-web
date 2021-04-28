import {
  ACTIVIDADES_SUPERVISOR_SEGUIMIENTO_ROUTE,
  HISTORIAL_SUPERVISOR_SEGUIMIENTO_ROUTE,
  USUARIOS_SUPERVISOR_SEGUIMIENTO_ROUTE,
  TABLERO_SUPERVISOR_SEGUIMIENTO_ROUTE,
} from '../../../../../constants/routes/privado/supervisor/seguimiento';
import SupervisorSeguimientoActividades from './actividades/SupervisorSeguimientoActividades';
import SupervisorSeguimientoHistorial from './historial/SupervisorSeguimientoHistorial';
import SupervisorSeguimientoUsuarios from './usuarios/SupervisorSeguimientoUsuarios';
import SupervisorSeguimientoTablero from './tablero/SupervisorSeguimientoTablero';

const SupervisorSeguimientoRoutes = [
  {
    route: TABLERO_SUPERVISOR_SEGUIMIENTO_ROUTE,
    component: [SupervisorSeguimientoTablero],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Tablero',
    data: {
      currentPage: { text: 'Tablero', subText: 'Supervisor seguimiento' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: ACTIVIDADES_SUPERVISOR_SEGUIMIENTO_ROUTE,
    component: [SupervisorSeguimientoActividades],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Actividades',
    data: {
      currentPage: { text: 'Actividades', subText: 'Supervisor seguimiento' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: HISTORIAL_SUPERVISOR_SEGUIMIENTO_ROUTE,
    component: [SupervisorSeguimientoHistorial],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Historial',
    data: {
      currentPage: { text: 'Historial', subText: 'Supervisor seguimiento' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: USUARIOS_SUPERVISOR_SEGUIMIENTO_ROUTE,
    component: [SupervisorSeguimientoUsuarios],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Usuarios',
    data: {
      currentPage: { text: 'Usuarios', subText: 'Supervisor seguimiento' },
      previus: null,
      rightComponent: null,
    },
  },
];

export default SupervisorSeguimientoRoutes;
