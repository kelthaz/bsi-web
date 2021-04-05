import axiosIntance from '../../config/AxiosConfig';
import { apiEndpointContratoDigital } from '../../constants/apis';

const LegalexRepositorio = {
  postContratoDigital: () => axiosIntance.post(apiEndpointContratoDigital),
};

export default LegalexRepositorio;
