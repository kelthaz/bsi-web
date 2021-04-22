import analistaRoutes from './analista/analista.routes';
import clienteRoutes from './cliente/cliente.routes';
import supervisorRoutes from './supervisor/supervisor.routes';
import adminRoutes from './administrador/administrador.routes';

const privadoRoutes = [...clienteRoutes, ...analistaRoutes, ...supervisorRoutes, ...adminRoutes].map((route) => ({
  ...route,
  feature: 'privado',
}));

export default privadoRoutes;
