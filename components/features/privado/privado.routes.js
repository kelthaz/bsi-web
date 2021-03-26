import clienteRoutes from './cliente/cliente.routes';
import supervisorRoutes from './supervisor/supervisor.routes';
import dashboardClienteRoutes from './portal-privado/dashboard-cliente/DashboardCliente.routes';
import activacionTokenRoutes from './activacion-token/ActivacionToken.routes';
import firmaContrato from './firma-contrato/FirmaContrato.routes';

const privadoRoutes = [
  ...dashboardClienteRoutes,
  ...clienteRoutes,
  ...activacionTokenRoutes,
  ...firmaContrato,
  ...supervisorRoutes,
].map((route) => ({
  ...route,
  feature: 'privado',
}));

export default privadoRoutes;
