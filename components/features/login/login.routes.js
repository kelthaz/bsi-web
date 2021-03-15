import { INICIAR_SESION, OLVIDO_CONTRASENA, RESTABLECER_CONTRASENA } from '../../../constants/routes/login/login';
import IniciarSesion from './iniciar-sesion/IniciarSesion';
import OlvidoContrasena from './olvido-contrasena/OlvidoContrasena';
import RestablecerContrasena from './restablecer-contrasena/RestablecerContrasena';

const loginRoutes = [
  {
    route: INICIAR_SESION,
    component: IniciarSesion,
    services: [],
    roles: [],
    label: 'Iniciar sesion',
    data: {
      option: 'iniciar-sesion',
    },
  },
  {
    route: OLVIDO_CONTRASENA,
    component: OlvidoContrasena,
    services: [],
    roles: [],
    label: 'Olvide contraseña',
    data: {
      option: 'olvide-contrasena',
    },
  },
  {
    route: RESTABLECER_CONTRASENA,
    component: RestablecerContrasena,
    services: [],
    roles: [],
    label: 'Restablecer contraseña',
    data: {
      option: 'restablecer-contrasena',
    },
  },
].map((route) => ({ ...route, feature: 'login' }));

export default loginRoutes;
