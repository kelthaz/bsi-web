import {
  ACTIVIDADES_SUPERVISOR_JURIDICO_ROUTE,
  HISTORIAL_SUPERVISOR_JURIDICO_ROUTE,
  USUARIOS_SUPERVISOR_JURIDICO_ROUTE,
  TABLERO_SUPERVISOR_JURIDICO_ROUTE,
} from '../../../../../constants/routes/privado/supervisor/juridico';
import SupervisorJuridicoActividades from './actividades/SupervisorJuridicoActividades';
import SupervisorJuridicoHistorial from './historial/SupervisorJuridicoHistorial';
import SupervisorJuridicoUsuarios from './usuarios/SupervisorJuridicoUsuarios';
import SupervisorJuridicoTablero from './tablero/SupervisorJuridicoTablero';

const SupervisorJuridicoRoutes = [
  {
    route: TABLERO_SUPERVISOR_JURIDICO_ROUTE,
    component: [SupervisorJuridicoTablero],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Tablero',
    data: {
      currentPage: { text: 'Mi tablero', subText: 'Supervisor jurídico' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: ACTIVIDADES_SUPERVISOR_JURIDICO_ROUTE,
    component: [SupervisorJuridicoActividades],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Actividades',
    data: {
      currentPage: { text: 'Actividades', subText: 'Supervisor jurídico' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: HISTORIAL_SUPERVISOR_JURIDICO_ROUTE,
    component: [SupervisorJuridicoHistorial],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Historial',
    data: {
      currentPage: { text: 'Historial', subText: 'Supervisor jurídico' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: USUARIOS_SUPERVISOR_JURIDICO_ROUTE,
    component: [SupervisorJuridicoUsuarios],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Usuarios',
    data: {
      currentPage: { text: 'Usuarios', subText: 'Supervisor jurídico' },
      previus: null,
      rightComponent: null,
    },
  },
];

export default SupervisorJuridicoRoutes;
