import {
  ACTIVIDADES_ANALISTA_SEGUIMIENTO_ROUTE,
  HISTORIAL_ANALISTA_SEGUIMIENTO_ROUTE,
  PERFIL_PROSPECTO_ANALISTA_SEGUIMIENTO_ROUTE,
  TABLERO_ANALISTA_SEGUIMIENTO_ROUTE,
} from '../../../../../constants/routes/privado/analista/seguimiento';
import AnalistaSeguimientoActividades from './actividades/AnalistaSeguimientoActividades';
import AnalistaSeguimientoHistorial from './historial/AnalistaSeguimientoHistorial';
import AnalistaSeguimientoPerfilProspecto from './perfil-prospecto/AnalistaSeguimientoPerfilProspecto';
import TableroCliente from './tablero/AnalistaSeguimientoTablero';

const analistaSeguimientoRoutes = [
  {
    route: TABLERO_ANALISTA_SEGUIMIENTO_ROUTE,
    component: [TableroCliente],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Tablero',
    data: {},
  },
  {
    route: ACTIVIDADES_ANALISTA_SEGUIMIENTO_ROUTE,
    component: [AnalistaSeguimientoActividades],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Actividades',
    data: {},
  },
  {
    route: HISTORIAL_ANALISTA_SEGUIMIENTO_ROUTE,
    component: [AnalistaSeguimientoHistorial],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Historial',
    data: {},
  },
  {
    route: PERFIL_PROSPECTO_ANALISTA_SEGUIMIENTO_ROUTE,
    component: [AnalistaSeguimientoPerfilProspecto],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Perfil prospecto',
    data: {},
  },
];

export default analistaSeguimientoRoutes;
