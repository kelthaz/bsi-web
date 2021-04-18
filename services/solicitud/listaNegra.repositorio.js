import axiosIntance from '../../config/AxiosConfig';
import { apiEndpointListaNegra } from '../../constants/apis';

const ListaNegraRepositorio = {
  postListaNegra: (personData) => axiosIntance.post(apiEndpointListaNegra, personData),
};

export default ListaNegraRepositorio;
