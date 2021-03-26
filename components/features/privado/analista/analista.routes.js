import analistaJuridicoRoutes from './juridico/analista-juridico.routes';
import analistaMediosDePagoRoutes from './medios-de-pago/analista-medios-de-pago.routes';
import analistaMesaDeControlRoutes from './mesa-de-control/analista-mesa-de-control.routes';
import analistaPLDRoutes from './pld/analista-pld.routes';
import analistaSeguimientoRoutes from './seguimiento/analista-seguimiento.routes';

const analistaRoutes = [
  ...analistaJuridicoRoutes,
  ...analistaMediosDePagoRoutes,
  ...analistaMesaDeControlRoutes,
  ...analistaPLDRoutes,
  ...analistaSeguimientoRoutes,
];

export default analistaRoutes;
