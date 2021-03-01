import { INICIAR_SESION, OLVIDO_CONTRASENA, RESTABLECER_CONTRASENA } from '../../../constants/routes/login/login';
import IniciarSesion from './iniciar-sesion/IniciarSesion';
import OlvidoContrasena from './olvido-contrasena/OlvidoContrasena';
import RestablecerContrasena from './restablecer-contrasena/RestablecerContrasena';

const loginRoutes = [
  {
    tab: '',
    step: '',
    path: INICIAR_SESION,
    stepNumber: null,
    option: 'iniciar-sesion',
    component: IniciarSesion,
    services: [],
  },
  {
    tab: '',
    step: '',
    path: OLVIDO_CONTRASENA,
    stepNumber: null,
    option: 'olvide-contrasena',
    component: OlvidoContrasena,
    services: [],
  },
  {
    tab: '',
    step: '',
    path: RESTABLECER_CONTRASENA,
    stepNumber: null,
    option: 'restablecer-contrasena',
    component: RestablecerContrasena,
    services: [],
  },
];

export default loginRoutes;
