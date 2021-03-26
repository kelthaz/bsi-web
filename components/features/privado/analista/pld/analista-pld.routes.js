import {
  ACTIVIDADES_ANALISTA_PLD_ROUTE,
  HISTORIAL_ANALISTA_PLD_ROUTE,
  PERFIL_PROSPECTO_PLD_ROUTE as PERFIL_PROSPECTO_ANALISTA_PLD_ROUTE,
  TABLERO_ANALISTA_PLD_ROUTE,
} from '../../../../../constants/routes/privado/analista/pld';
import AnalistaPLDActividades from './actividades/AnalistaPLDActividades';
import AnalistaPLDHistorial from './historial/AnalistaPLDHistorial';
import AnalistaPLDPerfilProspecto from './perfil-prospecto/AnalistaPLDPerfilProspecto';
import AnalistaPLDTablero from './tablero/AnalistaPLDTablero';

const analistaPLDRoutes = [
  {
    route: TABLERO_ANALISTA_PLD_ROUTE,
    component: [AnalistaPLDTablero],
    services: [],
    roles: [],
    label: 'Analista pld - Tablero',
    data: {},
  },
  {
    route: ACTIVIDADES_ANALISTA_PLD_ROUTE,
    component: [AnalistaPLDActividades],
    services: [],
    roles: [],
    label: 'Analista pld - Actividades',
    data: {},
  },
  {
    route: HISTORIAL_ANALISTA_PLD_ROUTE,
    component: [AnalistaPLDHistorial],
    services: [],
    roles: [],
    label: 'Analista pld - Historial',
    data: {},
  },
  {
    route: PERFIL_PROSPECTO_ANALISTA_PLD_ROUTE,
    component: [AnalistaPLDPerfilProspecto],
    services: [],
    roles: [],
    label: 'Analista pld - Perfil prospecto',
    data: {},
  },
];

export default analistaPLDRoutes;
