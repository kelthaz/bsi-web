import axiosIntance from '../../config/AxiosConfig';
import { apiEndpointGiroPorSector, apiEndpointSectores } from '../../constants/apis';

const SectoresRepositorio = {
  getSectores: () => axiosIntance.get(apiEndpointSectores),
  getGiroPorSector: (id) => axiosIntance.get(apiEndpointGiroPorSector(id)),
};

export default SectoresRepositorio;
