import publicoRoutes from './publico/publico.routes';
import solicitudRoutes from './solicitud/solicitud.routes';

const featureRoute = [...publicoRoutes, ...solicitudRoutes];

export default featureRoute;
