import {
  ACTIVIDADES_ANALISTA_JURIDICO_ROUTE,
  HISTORIAL_ANALISTA_JURIDICO_ROUTE,
  PERFIL_PROSPECTO_ANALISTA_JURIDICO_ROUTE,
  TABLERO_ANALISTA_JURIDICO_ROUTE,
} from '../../../../../constants/routes/privado/analista/juridico';
import AnalistaJuridicoActividades from './actividades/AnalistaJuridicoActividades';
import AnalistaJuridicoHistorial from './historial/AnalistaJuridicoHistorial';
import AnalistaJuridicoPerfilProspecto from './perfil-prospecto/AnalistaJuridicoPerfilProspecto';
import AnalistaJuridicoTablero from './tablero/AnalistaJuridicoTablero';

const analistaJuridicoRoutes = [
  {
    route: TABLERO_ANALISTA_JURIDICO_ROUTE,
    component: [AnalistaJuridicoTablero],
    services: [],
    roles: [],
    label: 'Analista juridíco - Tablero',
    data: {},
  },
  {
    route: ACTIVIDADES_ANALISTA_JURIDICO_ROUTE,
    component: [AnalistaJuridicoActividades],
    services: [],
    roles: [],
    label: 'Analista juridíco - Actividades',
    data: {},
  },
  {
    route: HISTORIAL_ANALISTA_JURIDICO_ROUTE,
    component: [AnalistaJuridicoHistorial],
    services: [],
    roles: [],
    label: 'Analista juridíco - Historial',
    data: {},
  },
  {
    route: PERFIL_PROSPECTO_ANALISTA_JURIDICO_ROUTE,
    component: [AnalistaJuridicoPerfilProspecto],
    services: [],
    roles: [],
    label: 'Analista juridíco - Perfil prospecto',
    data: {},
  },
];

export default analistaJuridicoRoutes;
