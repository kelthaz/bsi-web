import axiosIntance from '../../config/AxiosConfig';
import { apiEndpointValidarCiec } from '../../constants/apis';

const CiecRepositorio = {
  pathValidarCiec: (data) => axiosIntance.patch(apiEndpointValidarCiec, data),
};

export default CiecRepositorio;
