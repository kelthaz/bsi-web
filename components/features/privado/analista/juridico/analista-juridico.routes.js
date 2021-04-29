import {
  ACTIVIDADES_ANALISTA_JURIDICO_ROUTE,
  HISTORIAL_ANALISTA_JURIDICO_ROUTE,
  PASO_UNO_DICTAMEN_JURIDICO_ROUTE,
  PERFIL_PROSPECTO_ANALISTA_JURIDICO_ROUTE,
  TABLERO_ANALISTA_JURIDICO_ROUTE,
  REVISION_DOCUMENTO_ANALISTA_JURIDICO_ROUTE,
} from '../../../../../constants/routes/privado/analista/juridico';
import AnalistaJuridicoActividades from './actividades/AnalistaJuridicoActividades';
import PasoUnoDictamenJuridico from './dictamen/paso-uno/PasoUnoDictamenJuridico';
import AnalistaJuridicoHistorial from './historial/AnalistaJuridicoHistorial';
import AnalistaJuridicoPerfilProspecto from './perfil-prospecto/AnalistaJuridicoPerfilProspecto';
import AnalistaJuridicoRevisionDocumento from './revision-documento/AnalistaJuridicoRevisionDocumento';
import AnalistaJuridicoTablero from './tablero/AnalistaJuridicoTablero';

const analistaJuridicoRoutes = [
  {
    route: TABLERO_ANALISTA_JURIDICO_ROUTE,
    component: [AnalistaJuridicoTablero],
    services: [],
    roles: [],
    label: 'Analista juridíco - Tablero',
    data: {
      currentPage: { text: 'Mi tablero', subText: 'Jurídico' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: ACTIVIDADES_ANALISTA_JURIDICO_ROUTE,
    component: [AnalistaJuridicoActividades],
    services: [],
    roles: [],
    label: 'Analista juridíco - Actividades',
    data: {
      currentPage: { text: 'Actividades', subText: '' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: HISTORIAL_ANALISTA_JURIDICO_ROUTE,
    component: [AnalistaJuridicoHistorial],
    services: [],
    roles: [],
    label: 'Analista juridíco - Historial',
    data: {
      currentPage: { text: 'Historial', subText: '' },
      previus: null,
      rightComponent: 1,
    },
  },
  {
    route: PERFIL_PROSPECTO_ANALISTA_JURIDICO_ROUTE,
    component: [AnalistaJuridicoPerfilProspecto],
    services: [],
    roles: [],
    label: 'Analista juridíco - Perfil prospecto',
    data: {
      currentPage: { text: 'Perfil de prospecto', subText: '' },
      previus: { label: 'Todos los prospectos', route: ACTIVIDADES_ANALISTA_JURIDICO_ROUTE },
      rightComponent: -1,
    },
  },
  {
    route: REVISION_DOCUMENTO_ANALISTA_JURIDICO_ROUTE,
    component: [AnalistaJuridicoRevisionDocumento],
    services: [],
    roles: [],
    label: 'Analista juridíco - Revisión documento',
    data: {
      currentPage: { text: 'Gestión de documento', subText: '' },
      previus: { label: 'Perfil de prospecto', route: PERFIL_PROSPECTO_ANALISTA_JURIDICO_ROUTE },
      rightComponent: null,
    },
  },
  {
    route: PASO_UNO_DICTAMEN_JURIDICO_ROUTE,
    component: [PasoUnoDictamenJuridico],
    services: [],
    roles: [],
    label: 'Analista juridíco - Dictamen juridico paso 1',
    data: {
      currentPage: null,
      previus: { label: 'Perfil de prospecto', route: PERFIL_PROSPECTO_ANALISTA_JURIDICO_ROUTE },
      rightComponent: null,
    },
  },
];

export default analistaJuridicoRoutes;
