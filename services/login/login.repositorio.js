import axiosIntance from '../../config/AxiosConfig';
import { apiEndpointLogin, apiEndpointRegistro } from '../../constants/apis';

const LoginRepositorio = {
  postLogin: (data) => axiosIntance.post(apiEndpointLogin, data),
  postRegistro: (data) => axiosIntance.post(apiEndpointRegistro, data),
};

export default LoginRepositorio;
