import cargaDocumentosRoutes from './carga-documentos/carga-documentos.routes';
import datosEmpresaRoutes from './datos-empresa/datos-empresa.routes';
import datosPersonalesRoutes from './datos-personales/datos-personales.routes';
import documentacionRoutes from './documentacion/documentacion.routes';

const solicitudRoutes = [
  ...datosPersonalesRoutes,
  ...datosEmpresaRoutes,
  ...documentacionRoutes,
  ...cargaDocumentosRoutes
];

export default solicitudRoutes;
