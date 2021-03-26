import {
  ACTIVIDADES_SUPERVISOR_MESA_DE_CONTROL_ROUTE,
  HISTORIAL_SUPERVISOR_MESA_DE_CONTROL_ROUTE,
  USUARIOS_SUPERVISOR_MESA_DE_CONTROL_ROUTE,
  TABLERO_SUPERVISOR_MESA_DE_CONTROL_ROUTE,
} from '../../../../../constants/routes/privado/supervisor/mesa';
import SupervisorMesaDeControlActividades from './actividades/SupervisorMesaDeControlActividades';
import SupervisorMesaDeControlHistorial from './historial/SupervisorMesaDeControlHistorial';
import SupervisorMesaDeControlUsuarios from './usuarios/SupervisorMesaDeControlUsuarios';
import SupervisorMesaDeControlTablero from './tablero/SupervisorMesaDeControlTablero';

const SupervisorMesaDeControlRoutes = [
  {
    route: TABLERO_SUPERVISOR_MESA_DE_CONTROL_ROUTE,
    component: [SupervisorMesaDeControlTablero],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Tablero',
    data: {},
  },
  {
    route: ACTIVIDADES_SUPERVISOR_MESA_DE_CONTROL_ROUTE,
    component: [SupervisorMesaDeControlActividades],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Actividades',
    data: {},
  },
  {
    route: HISTORIAL_SUPERVISOR_MESA_DE_CONTROL_ROUTE,
    component: [SupervisorMesaDeControlHistorial],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Historial',
    data: {},
  },
  {
    route: USUARIOS_SUPERVISOR_MESA_DE_CONTROL_ROUTE,
    component: [SupervisorMesaDeControlUsuarios],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Usuarios',
    data: {},
  },
];

export default SupervisorMesaDeControlRoutes;
