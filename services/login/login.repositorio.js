import axiosIntance from '../../config/AxiosConfig';
import {
  apiEndpointCambiarPassword,
  apiEndpointLogin,
  apiEndpointOlvidoPassword,
  apiEndpointRegistro,
} from '../../constants/apis';

const LoginRepositorio = {
  postLogin: (data) => axiosIntance.post(apiEndpointLogin, data),
  postRegistro: (data) => axiosIntance.post(apiEndpointRegistro, data),
  pathCambiarPassword: (password) => axiosIntance.patch(apiEndpointCambiarPassword, null, { params: { password } }),
  pathOlvidoPassword: (correo) => axiosIntance.patch(apiEndpointOlvidoPassword, null, { params: { correo } }),
};

export default LoginRepositorio;
