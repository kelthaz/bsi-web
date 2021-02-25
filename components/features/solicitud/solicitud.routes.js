import datosEmpresaRoutes from './datos-empresa/datos-empresa.routes';
import datosPersonalesRoutes from './datos-personales/datos-personales.routes';
import documentacionRoutes from './documentacion/documentacion.routes';
import ofertaRoutes from './oferta/oferta.routes';

const solicitudRoutes = [
  ...datosPersonalesRoutes,
  ...datosEmpresaRoutes,
  ...documentacionRoutes,
  // ...ofertaRoutes
].map((route) => ({ ...route, feature: 'solicitud' }));

export default solicitudRoutes;
