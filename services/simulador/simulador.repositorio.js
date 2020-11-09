import axiosIntance from '../../config/AxiosConfig';
import { apiEndpointSimulador, apiEndpointSimuladorCatalogo, apiEndpointSimuladorTabla } from '../../constants/apis';

const SimuladorRepositorio = {
  getSimuladorCatalogo: () => axiosIntance.get(apiEndpointSimuladorCatalogo),
  postSimuladorTabla: (data) => axiosIntance.post(apiEndpointSimuladorTabla, data),
  postSimulador: (data) => axiosIntance.post(apiEndpointSimulador, data),
};

export default SimuladorRepositorio;
