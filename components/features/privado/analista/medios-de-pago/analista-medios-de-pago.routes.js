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
    data: {},
  },
  {
    route: ACTIVIDADES_ANALISTA_MEDIOS_DE_PAGO_ROUTE,
    component: [AnalistaMediosDePagoActividades],
    services: [],
    roles: [],
    label: 'Analista medios de pago - Actividades',
    data: {},
  },
  {
    route: HISTORIAL_ANALISTA_MEDIOS_DE_PAGO_ROUTE,
    component: [AnalistaMediosDePagoHistorial],
    services: [],
    roles: [],
    label: 'Analista medios de pago - Historial',
    data: {},
  },
  {
    route: PERFIL_PROSPECTO_ANALISTA_MEDIOS_DE_PAGO_ROUTE,
    component: [AnalistaMediosDePagoPerfilProspecto],
    services: [],
    roles: [],
    label: 'Analista medios de pago - Perfil prospecto',
    data: {},
  },
];

export default analistaMediosDePagoRoutes;
