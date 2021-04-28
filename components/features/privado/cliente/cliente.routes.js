import {
  ACTIVACION_TOKEN_ROUTE,
  FIRMA_CONTRATO_ROUTE,
  PERFIL_CLIENTE_ROUTE,
  TABLERO_CLIENTE_ROUTE,
} from '../../../../constants/routes/privado/cliente/cliente';
import ActivacionToken from './activacion-token/ActivacionToken';
import FirmaContrato from './firma-contrato/FirmaContrato';
import ClientePerfil from './perfil/ClientePerfil';
import ClienteTablero from './tablero/ClienteTablero';

const clienteRoutes = [
  {
    route: TABLERO_CLIENTE_ROUTE,
    component: [ClienteTablero],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Tablero',
    data: {
      currentPage: { text: 'Mi tablero', subText: '' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: PERFIL_CLIENTE_ROUTE,
    component: [ClientePerfil],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Perfil prospecto',
    data: {
      currentPage: { text: 'Mi Pefil', subText: '' },
      previus: null,
      rightComponent: null,
    },
  },
  {
    route: FIRMA_CONTRATO_ROUTE,
    component: [FirmaContrato],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Actividades',
    data: {
      currentPage: { text: 'Firmar contrato de Crédito Dital Pyme', subText: '' },
      previus: {
        label: 'Mi tablero',
        route: TABLERO_CLIENTE_ROUTE,
      },
      rightComponent: null,
    },
  },
  {
    route: ACTIVACION_TOKEN_ROUTE,
    component: [ActivacionToken],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Historial',
    data: {
      currentPage: { text: 'Activación de token', subText: '' },
      previus: {
        label: 'Mi tablero',
        route: TABLERO_CLIENTE_ROUTE,
      },
      rightComponent: null,
    },
  },
];

export default clienteRoutes;
