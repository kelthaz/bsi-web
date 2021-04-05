export const apiEndpointSimuladorCatalogo = '/interna/publico/v1/simulador/catalogos';
export const apiEndpointSimuladorTabla = '/interna/publico/v1/simulador/tabla';
export const apiEndpointSimuladorTablaPdf = '/interna/publico/v1/simulador/tabla_pdf';
export const apiEndpointSimulador = '/interna/publico/v1/simulador';

export const apiEndpointAviso = '/interna/publico/v1/administrador/contenido/landing/aviso/privacidad';
export const apiEndpointSectores = '/interna/publico/v1/solicitud/catalogo/sectores/';
export const apiEndpointGiroPorSector = (idSector) =>
  `/interna/publico/v1/solicitud/catalogo/sectores/${idSector}/giros`;
export const apiEndpointAcordion = (landing) => `/interna/publico/v1/administrador/contenido/landing/${landing}`;

export const apiEndpointCodigoPostal = '/interna/publico/v1/solicitud/catalogo/localizaciones';

export const apiEndpointEmailage = '/externas/admin/v1/emailage/querying-email';
export const apiEndpointValidarCiec = '/interna/publico/v1/empresas/validar/ciec';

export const apiEndpointRegistro = '/interna/publico/v1/registro';
export const apiEndpointLogin = '/login';

export const apiEndpointContratoDigital = '/externas/admin/v1/contrato-digital';
