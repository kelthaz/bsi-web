import {
  ACTIVIDADES_SUPERVISOR_MEDIOS_DE_PAGO_ROUTE,
  HISTORIAL_SUPERVISOR_MEDIOS_DE_PAGO_ROUTE,
  USUARIOS_SUPERVISOR_MEDIOS_DE_PAGO_ROUTE,
  TABLERO_SUPERVISOR_MEDIOS_DE_PAGO_ROUTE,
} from '../../../../../constants/routes/privado/supervisor/medios';
import SupervisorMediosDePagoActividades from './actividades/SupervisorMediosDePagoActividades';
import SupervisorMediosDePagoHistorial from './historial/SupervisorMediosDePagoHistorial';
import SupervisorMediosDePagoUsuarios from './usuarios/SupervisorMediosDePagoUsuarios';
import SupervisorMediosDePagoTablero from './tablero/SupervisorMediosDePagoTablero';

const SupervisorMediosDePagoRoutes = [
  {
    route: TABLERO_SUPERVISOR_MEDIOS_DE_PAGO_ROUTE,
    component: [SupervisorMediosDePagoTablero],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Tablero',
    data: {},
  },
  {
    route: ACTIVIDADES_SUPERVISOR_MEDIOS_DE_PAGO_ROUTE,
    component: [SupervisorMediosDePagoActividades],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Actividades',
    data: {},
  },
  {
    route: HISTORIAL_SUPERVISOR_MEDIOS_DE_PAGO_ROUTE,
    component: [SupervisorMediosDePagoHistorial],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Historial',
    data: {},
  },
  {
    route: USUARIOS_SUPERVISOR_MEDIOS_DE_PAGO_ROUTE,
    component: [SupervisorMediosDePagoUsuarios],
    services: [],
    roles: [],
    label: 'Supervisor juridíco - Usuarios',
    data: {},
  },
];

export default SupervisorMediosDePagoRoutes;
