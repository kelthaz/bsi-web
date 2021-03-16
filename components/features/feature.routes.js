import loginRoutes from './login/login.routes';
import privadoRoutes from './privado/privado.routes';
import publicoRoutes from './publico/publico.routes';
import solicitudRoutes from './solicitud/solicitud.routes';

const featureRoute = [...publicoRoutes, ...solicitudRoutes, ...loginRoutes, ...privadoRoutes];

export default featureRoute;
