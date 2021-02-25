import axiosIntance from '../../config/AxiosConfig';
import { apiEndpointAviso } from '../../constants/apis';

const AvisoRepositorio = {
  getAviso: () => axiosIntance.get(apiEndpointAviso),
};

export default AvisoRepositorio;
