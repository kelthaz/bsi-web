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
    data: {
      currentPage: { text: 'Mi tablero', subText: 'PLD' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: ACTIVIDADES_ANALISTA_PLD_ROUTE,
    component: [AnalistaPLDActividades],
    services: [],
    roles: [],
    label: 'Analista pld - Actividades',
    data: {
      currentPage: { text: 'Actividades', subText: '' },
      previus: null,
      rightComponent: 1,
    },
  },
  {
    route: HISTORIAL_ANALISTA_PLD_ROUTE,
    component: [AnalistaPLDHistorial],
    services: [],
    roles: [],
    label: 'Analista pld - Historial',
    data: {
      currentPage: { text: 'Historial', subText: '' },
      previus: null,
      rightComponent: null,
    },
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
