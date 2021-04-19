import axiosIntance from '../../config/AxiosConfig';
import { apiEndpointRegistroObliado } from '../../constants/apis';

const ObligadoSolidiarioRepositorio = {
  postObligadoSolidiario: (obliadoSolidarioData) => axiosIntance.post(apiEndpointRegistroObliado, obliadoSolidarioData),
};

export default ObligadoSolidiarioRepositorio;
