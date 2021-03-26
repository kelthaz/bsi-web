import {
  ACTIVIDADES_SUPERVISOR_PLD_ROUTE,
  HISTORIAL_SUPERVISOR_PLD_ROUTE,
  USUARIOS_SUPERVISOR_PLD_ROUTE,
  TABLERO_SUPERVISOR_PLD_ROUTE,
} from '../../../../../constants/routes/privado/supervisor/pld';
import SupervisorPLDActividades from './actividades/SupervisorPLDActividades';
import SupervisorPLDHistorial from './historial/SupervisorPLDHistorial';
import SupervisorPLDUsuarios from './usuarios/SupervisorPLDUsuarios';
import SupervisorPLDTablero from './tablero/SupervisorPLDTablero';

const SupervisorPLDRoutes = [
  {
    route: TABLERO_SUPERVISOR_PLD_ROUTE,
    component: [SupervisorPLDTablero],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Tablero',
    data: {},
  },
  {
    route: ACTIVIDADES_SUPERVISOR_PLD_ROUTE,
    component: [SupervisorPLDActividades],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Actividades',
    data: {},
  },
  {
    route: HISTORIAL_SUPERVISOR_PLD_ROUTE,
    component: [SupervisorPLDHistorial],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Historial',
    data: {},
  },
  {
    route: USUARIOS_SUPERVISOR_PLD_ROUTE,
    component: [SupervisorPLDUsuarios],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Usuarios',
    data: {},
  },
];

export default SupervisorPLDRoutes;
