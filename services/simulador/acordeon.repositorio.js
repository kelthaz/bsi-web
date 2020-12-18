import axiosIntance from '../../config/AxiosConfig';
import { apiEndpointAcordion } from '../../constants/apis';

const AccordionRepositorio = {
  getAccordionPorSector: (id) => axiosIntance.get(apiEndpointAcordion(id)),
};

export default AccordionRepositorio;
