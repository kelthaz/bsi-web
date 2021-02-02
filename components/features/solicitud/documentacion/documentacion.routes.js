import pfaeRoutes from './pfae/pfae.routes';
import pmRoutes from './pm/pm.routes';

const documentacionRoutes = [...pmRoutes, ...pfaeRoutes];

export default documentacionRoutes;
