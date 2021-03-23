import { FIRMA_CONTRATO } from '../../../../constants/routes/privado/cliente';
import FirmaContrato from './firma-contrato/FirmaContrato';

const firmaContratoRoutes = [
  {
    route: FIRMA_CONTRATO,
    component: FirmaContrato,
    services: [],
    roles: [],
    data: {
      tab: 'firmacontrato',
    },
  },
];

export default firmaContratoRoutes;
