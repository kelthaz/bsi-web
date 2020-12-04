import datosEmpresaRoutes from './datos-empresa/datos-empresa.routes';
import datosPersonalesRoutes from './datos-personales/datos-personales.routes';
import documentacionRoutes from './documentacion/documentacion.routes';

const solicitudRoutes = [...datosPersonalesRoutes, ...datosEmpresaRoutes, ...documentacionRoutes];

export default solicitudRoutes;
