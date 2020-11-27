export const apiEndpointSimuladorCatalogo = '/interna/publico/v1/simulador/catalogos';
export const apiEndpointSimuladorTabla = '/interna/publico/v1/simulador/tabla';
export const apiEndpointSimuladorTablaPdf = '/interna/publico/v1/simulador/tabla_pdf';
export const apiEndpointSimulador = '/interna/publico/v1/simulador';

export const apiEndpointSectores = '/interna/publico/v1/solicitud/catalogo/sectores/';
export const apiEndpointGiroPorSector = (idSector) =>
  `/interna/publico/v1/solicitud/catalogo/sectores/${idSector}/giros`;

export const apiEndpointCodigoPostal = '/interna/publico/v1/solicitud/catalogo/localizaciones';
