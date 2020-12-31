import IniciarSesion from './iniciar-sesion/IniciarSesion';
import OlvidoContrasena from './olvido-contrasena/OlvidoContrasena';
import RestablecerContrasena from './restablecer-contrasena/RestablecerContrasena';

const loginRoutes = [
  {
    tab: '',
    step: '',
    path: '/login/iniciar-sesion',
    stepNumber: null,
    option: 'iniciar-sesion',
    component: IniciarSesion,
    services: [],
  },
  {
    tab: '',
    step: '',
    path: '/login/olvidar-contrasena',
    stepNumber: null,
    option: 'olvidar-contrasena',
    component: OlvidoContrasena,
    services: [],
  },
  {
    tab: '',
    step: '',
    path: '/login/restablecer-contrasena',
    stepNumber: null,
    option: 'restablecer-contrasena',
    component: RestablecerContrasena,
    services: [],
  },
];

export default loginRoutes;
