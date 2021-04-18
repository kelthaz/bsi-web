import ListaNegraRepositorio from '../../services/solicitud/listaNegra.repositorio';

const validationListaNegra = async (personData) => {
  const noEstaEnlistaNegra = '0';
  const validPerson = await ListaNegraRepositorio.postListaNegra(personData)
    .then(({ data: dataReponse }) => dataReponse.resultadoConsulta === noEstaEnlistaNegra)
    .catch(() => false);

  return validPerson;
};

export default validationListaNegra;
