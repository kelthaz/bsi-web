import axiosIntance from '../../config/AxiosConfig';
import {
  apiEndpointSimulador,
  apiEndpointSimuladorCatalogo,
  apiEndpointSimuladorTabla,
  apiEndpointSimuladorTablaPdf,
} from '../../constants/apis';

const SimuladorRepositorio = {
  getSimuladorCatalogo: () => axiosIntance.get(apiEndpointSimuladorCatalogo),
  postSimuladorTabla: (data) => axiosIntance.post(apiEndpointSimuladorTabla, data),
  postSimuladorTablaPdf: (data) => axiosIntance.post(apiEndpointSimuladorTablaPdf, data, { responseType: 'blob' }),
  postSimulador: (data) => axiosIntance.post(apiEndpointSimulador, data),
};

export default SimuladorRepositorio;
