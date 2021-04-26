import {
  ACTIVIDADES_ANALISTA_SEGUIMIENTO_ROUTE,
  HISTORIAL_ANALISTA_SEGUIMIENTO_ROUTE,
  PERFIL_PROSPECTO_ANALISTA_SEGUIMIENTO_ROUTE,
  REVISION_DOCUMENTO_ANALISTA_SEGUIMIENTOL_ROUTE,
  TABLERO_ANALISTA_SEGUIMIENTO_ROUTE,
} from '../../../../../constants/routes/privado/analista/seguimiento';
import AnalistaSeguimientoActividades from './actividades/AnalistaSeguimientoActividades';
import AnalistaSeguimientoHistorial from './historial/AnalistaSeguimientoHistorial';
import AnalistaSeguimientoPerfilProspecto from './perfil-prospecto/AnalistaSeguimientoPerfilProspecto';
import AnalistaSeguimientoRevisionDocumento from './revision-documento/AnalistaSeguimientoRevisionDocumento';
import TableroCliente from './tablero/AnalistaSeguimientoTablero';

const analistaSeguimientoRoutes = [
  {
    route: TABLERO_ANALISTA_SEGUIMIENTO_ROUTE,
    component: [TableroCliente],
    services: [],
    roles: [],
    label: 'Analista seguimiento - Tablero',
    data: {},
  },
  {
    route: ACTIVIDADES_ANALISTA_SEGUIMIENTO_ROUTE,
    component: [AnalistaSeguimientoActividades],
    services: [],
    roles: [],
    label: 'Analista seguimiento - Actividades',
    data: {},
  },
  {
    route: HISTORIAL_ANALISTA_SEGUIMIENTO_ROUTE,
    component: [AnalistaSeguimientoHistorial],
    services: [],
    roles: [],
    label: 'Analista seguimiento - Historial',
    data: {},
  },
  {
    route: PERFIL_PROSPECTO_ANALISTA_SEGUIMIENTO_ROUTE,
    component: [AnalistaSeguimientoPerfilProspecto],
    services: [],
    roles: [],
    label: 'Analista seguimiento - Perfil prospecto',
    data: {},
  },
  {
    route: REVISION_DOCUMENTO_ANALISTA_SEGUIMIENTOL_ROUTE,
    component: [AnalistaSeguimientoRevisionDocumento],
    services: [],
    roles: [],
    label: 'Analista seguimiento - Revisión documento',
    data: {},
  },
];

export default analistaSeguimientoRoutes;
