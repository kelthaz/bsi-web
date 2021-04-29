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
    data: {
      currentPage: { text: 'Mi tablero', subText: 'Seguimiento' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: ACTIVIDADES_ANALISTA_SEGUIMIENTO_ROUTE,
    component: [AnalistaSeguimientoActividades],
    services: [],
    roles: [],
    label: 'Analista seguimiento - Actividades',
    data: {
      currentPage: { text: 'Actividades', subText: '' },
      previus: null,
      rightComponent: 1,
    },
  },
  {
    route: HISTORIAL_ANALISTA_SEGUIMIENTO_ROUTE,
    component: [AnalistaSeguimientoHistorial],
    services: [],
    roles: [],
    label: 'Analista seguimiento - Historial',
    data: {
      currentPage: { text: 'Historial', subText: '' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: PERFIL_PROSPECTO_ANALISTA_SEGUIMIENTO_ROUTE,
    component: [AnalistaSeguimientoPerfilProspecto],
    services: [],
    roles: [],
    label: 'Analista seguimiento - Perfil prospecto',
    data: {
      currentPage: { text: 'Perfil de prospecto', subText: '' },
      previus: { label: 'Todos los prospectos', route: ACTIVIDADES_ANALISTA_SEGUIMIENTO_ROUTE },
      rightComponent: 2,
    },
  },
  {
    route: REVISION_DOCUMENTO_ANALISTA_SEGUIMIENTOL_ROUTE,
    component: [AnalistaSeguimientoRevisionDocumento],
    services: [],
    roles: [],
    label: 'Analista seguimiento - Revisión documento',
    data: {
      currentPage: { text: 'Gestión de documento', subText: '' },
      previus: { label: 'Perfil de prospecto', route: PERFIL_PROSPECTO_ANALISTA_SEGUIMIENTO_ROUTE },
      rightComponent: null,
    },
  },
];

export default analistaSeguimientoRoutes;
