import {
  ACTIVIDADES_ANALISTA_MESA_DE_CONTROL_ROUTE,
  HISTORIAL_ANALISTA_MESA_DE_CONTROL_ROUTE,
  PERFIL_PROSPECTO_ANALISTA_MESA_DE_CONTROL_ROUTE,
  REVISION_DOCUMENTO_ANALISTA_MESA_DE_CONTROL_ROUTE,
  TABLERO_ANALISTA_MESA_DE_CONTROL_ROUTE,
} from '../../../../../constants/routes/privado/analista/mesa';
import AnalistaMesaDeControlActividades from './actividades/AnalistaMesaDeControlActividades';
import AnalistaMesaDeControlHistorial from './historial/AnalistaMesaDeControlHistorial';
import AnalistaMesaDeControlPerfilProspecto from './perfil-prospecto/AnalistaMesaDeControlPerfilProspecto';
import AnalistaMesaDeControlRevisionDocumento from './revision-documento/AnalistaMesaDeControlRevisionDocumento';
import AnalistaMesaDeControlTablero from './tablero/AnalistaMesaDeControlTablero';

const analistaMesaDeControlRoutes = [
  {
    route: TABLERO_ANALISTA_MESA_DE_CONTROL_ROUTE,
    component: [AnalistaMesaDeControlTablero],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Tablero',
    data: {
      currentPage: { text: 'Mi tablero', subText: 'Mesa de control' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: ACTIVIDADES_ANALISTA_MESA_DE_CONTROL_ROUTE,
    component: [AnalistaMesaDeControlActividades],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Actividades',
    data: {
      currentPage: { text: 'Actividades', subText: '' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: HISTORIAL_ANALISTA_MESA_DE_CONTROL_ROUTE,
    component: [AnalistaMesaDeControlHistorial],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Historial',
    data: {
      currentPage: { text: 'Historial', subText: '' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: PERFIL_PROSPECTO_ANALISTA_MESA_DE_CONTROL_ROUTE,
    component: [AnalistaMesaDeControlPerfilProspecto],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Perfil prospecto',
    data: {
      currentPage: { text: 'Perfil de prospecto', subText: '' },
      previus: { label: 'Todos los prospectos', route: ACTIVIDADES_ANALISTA_MESA_DE_CONTROL_ROUTE },
      rightComponent: 4,
    },
  },
  {
    route: REVISION_DOCUMENTO_ANALISTA_MESA_DE_CONTROL_ROUTE,
    component: [AnalistaMesaDeControlRevisionDocumento],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Revisión documento',
    data: {
      currentPage: { text: 'Gestión de documento', subText: '' },
      previus: { label: 'Perfil de prospecto', route: PERFIL_PROSPECTO_ANALISTA_MESA_DE_CONTROL_ROUTE },
      rightComponent: null,
    },
  },
];

export default analistaMesaDeControlRoutes;
