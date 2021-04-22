import { correoNoExiste } from '../../constants/errors';
import EmailageRepositorio from '../../services/solicitud/emailage.repositorio';

const validateEmail = async (correo) => {
  const maxScoreValid = 800;
  const exists = 'No';

  const emailExist = await EmailageRepositorio.postEmailScore(correo)
    .then((resp) => {
      const { fraudRisk, emailExists, domainExists } = resp.data;
      const score = fraudRisk.split(' ')[0];

      if (score > maxScoreValid || emailExists === exists || domainExists === exists) {
        return [false, correoNoExiste()];
      }

      return [true];
    })
    .catch(({ response }) => {
      const [error] = response.data.message;
      return [false, error];
    });

  return emailExist;
};

export default validateEmail;
