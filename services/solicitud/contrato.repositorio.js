import axiosIntance from '../../config/AxiosConfig';
import { apiEndpointBuroCredito, apiEndpointContrato, apiEndpointContratoDigital } from '../../constants/apis';

const ContratoRepositorio = {
  postContrato: (dataContrato) => axiosIntance.post(apiEndpointContrato, dataContrato),
  postContratoDigital: () => axiosIntance.post(apiEndpointContratoDigital),
  postBuroCredito: () => axiosIntance.post(apiEndpointBuroCredito),
};

export default ContratoRepositorio;
