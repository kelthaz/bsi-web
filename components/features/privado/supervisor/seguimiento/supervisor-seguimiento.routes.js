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
    data: {},
  },
  {
    route: ACTIVIDADES_SUPERVISOR_SEGUIMIENTO_ROUTE,
    component: [SupervisorSeguimientoActividades],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Actividades',
    data: {},
  },
  {
    route: HISTORIAL_SUPERVISOR_SEGUIMIENTO_ROUTE,
    component: [SupervisorSeguimientoHistorial],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Historial',
    data: {},
  },
  {
    route: USUARIOS_SUPERVISOR_SEGUIMIENTO_ROUTE,
    component: [SupervisorSeguimientoUsuarios],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Usuarios',
    data: {},
  },
];

export default SupervisorSeguimientoRoutes;
