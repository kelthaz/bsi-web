import {
  ACTIVIDADES_ANALISTA_JURIDICO_ROUTE,
  HISTORIAL_ANALISTA_JURIDICO_ROUTE,
  PASO_UNO_DICTAMEN_JURIDICO_ROUTE,
  PASO_DOS_DICTAMEN_JURIDICO_ROUTE,
  PASO_TRES_DICTAMEN_JURIDICO_ROUTE,
  PERFIL_PROSPECTO_ANALISTA_JURIDICO_ROUTE,
  TABLERO_ANALISTA_JURIDICO_ROUTE,
} from '../../../../../constants/routes/privado/analista/juridico';
import AnalistaJuridicoActividades from './actividades/AnalistaJuridicoActividades';
import PasoUnoDictamenJuridico from './dictamen/paso-uno/PasoUnoDictamenJuridico';
import PasoDosDictamenJuridico from './dictamen/paso-dos/PasoDosDictamenJuridico';
import PasoTresDictamenJuridico from './dictamen/paso-tres/PasoTresDictamenJuridico';
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
  {
    route: PASO_UNO_DICTAMEN_JURIDICO_ROUTE,
    component: [PasoUnoDictamenJuridico],
    services: [],
    roles: [],
    label: 'Analista juridíco - Dictamen juridico paso 1',
    data: {},
  },
  {
    route: PASO_DOS_DICTAMEN_JURIDICO_ROUTE,
    component: [PasoDosDictamenJuridico],
    services: [],
    roles: [],
    label: 'Analista juridíco - Dictamen juridico paso 2',
    data: {},
  },
  {
    route: PASO_TRES_DICTAMEN_JURIDICO_ROUTE,
    component: [PasoTresDictamenJuridico],
    services: [],
    roles: [],
    label: 'Analista juridíco - Dictamen juridico paso 3',
    data: {},
  },
];

export default analistaJuridicoRoutes;
