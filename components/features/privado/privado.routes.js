import analistaRoutes from './analista/analista.routes';
import clienteRoutes from './cliente/cliente.routes';
import supervisorRoutes from './supervisor/supervisor.routes';

const privadoRoutes = [...clienteRoutes, ...analistaRoutes, ...supervisorRoutes].map((route) => ({
  ...route,
  feature: 'privado',
}));

export default privadoRoutes;
