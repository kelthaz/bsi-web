import {
  ACTIVIDADES_ANALISTA_MEDIOS_DE_PAGO_ROUTE,
  HISTORIAL_ANALISTA_MEDIOS_DE_PAGO_ROUTE,
  PERFIL_PROSPECTO_ANALISTA_MEDIOS_DE_PAGO_ROUTE,
  TABLERO_ANALISTA_MEDIOS_DE_PAGO_ROUTE,
} from '../../../../../constants/routes/privado/analista/medios';
import AnalistaMediosDePagoActividades from './actividades/AnalistaMediosDePagoActividades';
import AnalistaMediosDePagoHistorial from './historial/AnalistaMediosDePagoHistorial';
import AnalistaMediosDePagoPerfilProspecto from './perfil-prospecto/AnalistaMediosDePagoPerfilProspecto';
import AnalistaMediosDePagoTablero from './tablero/AnalistaMediosDePagoTablero';

const analistaMediosDePagoRoutes = [
  {
    route: TABLERO_ANALISTA_MEDIOS_DE_PAGO_ROUTE,
    component: [AnalistaMediosDePagoTablero],
    services: [],
    roles: [],
    label: 'Analista medios de pago - Tablero',
    data: {
      currentPage: { text: 'Mi tablero', subText: 'Medios' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: ACTIVIDADES_ANALISTA_MEDIOS_DE_PAGO_ROUTE,
    component: [AnalistaMediosDePagoActividades],
    services: [],
    roles: [],
    label: 'Analista medios de pago - Actividades',
    data: {
      currentPage: { text: 'Actividades', subText: '' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: HISTORIAL_ANALISTA_MEDIOS_DE_PAGO_ROUTE,
    component: [AnalistaMediosDePagoHistorial],
    services: [],
    roles: [],
    label: 'Analista medios de pago - Historial',
    data: {
      currentPage: { text: 'Historial', subText: '' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: PERFIL_PROSPECTO_ANALISTA_MEDIOS_DE_PAGO_ROUTE,
    component: [AnalistaMediosDePagoPerfilProspecto],
    services: [],
    roles: [],
    label: 'Analista medios de pago - Perfil prospecto',
    data: {
      currentPage: { text: 'Perfil de prospecto', subText: '' },
      previus: { label: 'Todos los prospectos', route: ACTIVIDADES_ANALISTA_MEDIOS_DE_PAGO_ROUTE },
      rightComponent: 3,
    },
  },
];

export default analistaMediosDePagoRoutes;
