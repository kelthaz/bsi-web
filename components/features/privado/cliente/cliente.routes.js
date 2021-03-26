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
    data: {},
  },
  {
    route: PERFIL_CLIENTE_ROUTE,
    component: [ClientePerfil],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Perfil prospecto',
    data: {},
  },
  {
    route: FIRMA_CONTRATO_ROUTE,
    component: [FirmaContrato],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Actividades',
    data: {},
  },
  {
    route: ACTIVACION_TOKEN_ROUTE,
    component: [ActivacionToken],
    services: [],
    roles: [],
    label: 'Analista mesa de Control - Historial',
    data: {},
  },
];

export default clienteRoutes;
