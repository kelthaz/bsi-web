import datosEmpresaRoutes from './datos-empresa/datos-empresa.routes';
import datosPersonalesRoutes from './datos-personales/datos-personales.routes';

const solicitudRoutes = [...datosPersonalesRoutes, ...datosEmpresaRoutes];

export default solicitudRoutes;
