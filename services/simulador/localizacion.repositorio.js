import axiosIntance from '../../config/AxiosConfig';
import { apiEndpointCodigoPostal } from '../../constants/apis';

const LocalizacionRepositorio = {
  getLocalizacion: (codigoPostal) =>
    axiosIntance.get(apiEndpointCodigoPostal, { params: { 'codigo-postal': codigoPostal } }),
};

export default LocalizacionRepositorio;
