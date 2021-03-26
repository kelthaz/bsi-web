import supervisorJuridicoRoutes from './juridico/supervisor-juridico.routes';
import supervisorMediosDePagoRoutes from './medios-de-pago/supervisor-medios-de-pago.routes';
import supervisorMesaDeControlRoutes from './mesa-de-control/supervisor-mesa-de-control.routes';
import supervisorPLDRoutes from './pld/supervisor-pld.routes';
import supervisorSeguimientoRoutes from './seguimiento/supervisor-seguimiento.routes';

const supervisorRoutes = [
  ...supervisorJuridicoRoutes,
  ...supervisorMediosDePagoRoutes,
  ...supervisorMesaDeControlRoutes,
  ...supervisorPLDRoutes,
  ...supervisorSeguimientoRoutes,
];

export default supervisorRoutes;
