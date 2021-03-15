import clienteRoutes from './cliente/cliente.routes';

const privadoRoutes = [...clienteRoutes].map((route) => ({ ...route, feature: 'privado' }));

export default privadoRoutes;
