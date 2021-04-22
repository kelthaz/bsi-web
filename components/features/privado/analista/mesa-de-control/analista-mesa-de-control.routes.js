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
    data: {},
  },
  {
    route: ACTIVIDADES_ANALISTA_MESA_DE_CONTROL_ROUTE,
    component: [AnalistaMesaDeControlActividades],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Actividades',
    data: {},
  },
  {
    route: HISTORIAL_ANALISTA_MESA_DE_CONTROL_ROUTE,
    component: [AnalistaMesaDeControlHistorial],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Historial',
    data: {},
  },
  {
    route: PERFIL_PROSPECTO_ANALISTA_MESA_DE_CONTROL_ROUTE,
    component: [AnalistaMesaDeControlPerfilProspecto],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Perfil prospecto',
    data: {},
  },
  {
    route: REVISION_DOCUMENTO_ANALISTA_MESA_DE_CONTROL_ROUTE,
    component: [AnalistaMesaDeControlRevisionDocumento],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Revisión documento',
    data: {},
  },
];

export default analistaMesaDeControlRoutes;
