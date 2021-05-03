import axiosIntance from '../../config/AxiosConfig';
import { apiEndpointBuroCredito, apiEndpointContrato, apiEndpointContratoDigital } from '../../constants/apis';

const ContratoRepositorio = {
  getContrato: (idContrato = null) => axiosIntance.get(apiEndpointContrato, idContrato),
  postContrato: (dataContrato) => axiosIntance.post(apiEndpointContrato, dataContrato),
  postContratoDigital: () => axiosIntance.post(apiEndpointContratoDigital),
  postBuroCredito: () => axiosIntance.post(apiEndpointBuroCredito),
};

export default ContratoRepositorio;
