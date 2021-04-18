import CiecRepositorio from '../../services/solicitud/ciec.repositorio';

const validationCiec = async (data) => {
  const valid = await CiecRepositorio.pathValidarCiec(data)
    .then(() => true)
    .catch(() => false);

  return valid;
};

export default validationCiec;
