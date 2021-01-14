import axiosIntance from '../../config/AxiosConfig';
import { apiEndpointEmailage } from '../../constants/apis';

const EmailageRepositorio = {
  postEmailScore: (email) => axiosIntance.post(apiEndpointEmailage, null, { params: { user_email_query: email } }),
};

export default EmailageRepositorio;
