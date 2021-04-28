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
    data: {
      currentPage: { text: 'Tablero', subText: 'Supervisor PLD' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: ACTIVIDADES_SUPERVISOR_PLD_ROUTE,
    component: [SupervisorPLDActividades],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Actividades',
    data: {
      currentPage: { text: 'Actividades', subText: 'Supervisor PLD' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: HISTORIAL_SUPERVISOR_PLD_ROUTE,
    component: [SupervisorPLDHistorial],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Historial',
    data: {
      currentPage: { text: 'Historial', subText: 'Supervisor PLD' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: USUARIOS_SUPERVISOR_PLD_ROUTE,
    component: [SupervisorPLDUsuarios],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Usuarios',
    data: {
      currentPage: { text: 'Usuarios', subText: 'Supervisor PLD' },
      previus: null,
      rightComponent: null,
    },
  },
];

export default SupervisorPLDRoutes;
