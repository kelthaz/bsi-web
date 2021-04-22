import '@testing-library/jest-dom';
import { correoNoExiste } from '../../constants/errors';
import CiecRepositorio from '../../services/solicitud/ciec.repositorio';
import EmailageRepositorio from '../../services/solicitud/emailage.repositorio';
import ListaNegraRepositorio from '../../services/solicitud/listaNegra.repositorio';
import validationCiec from './validationCiec';
import validateEmail from './validationEmail';
import validationListaNegra from './validationListaNegra';

jest.mock('../../services/solicitud/ciec.repositorio');
jest.mock('../../services/solicitud/emailage.repositorio');
jest.mock('../../services/solicitud/listaNegra.repositorio');
describe('Prueba en los helpers de validacion', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de validar ciec correctamente', async () => {
    // arrange
    await CiecRepositorio.pathValidarCiec.mockResolvedValue();
    // act
    const isValid = await validationCiec({});
    // assert
    expect(isValid).toBe(true);
  });

  test('Debe de validar ciec y fallar', async () => {
    // arrange
    await CiecRepositorio.pathValidarCiec.mockRejectedValue();
    // act
    const isValid = await validationCiec({});
    // assert
    expect(isValid).toBe(false);
  });

  test('Debe de validar emailage coreectamente', async () => {
    // arrange
    await EmailageRepositorio.postEmailScore.mockResolvedValue({
      data: {
        fraudRisk: '500 not sure',
        emailExists: 'Yes',
        domainExists: 'Yes',
      },
    });
    // act
    const isValid = await validateEmail('chuchodavid024@gmail.com');
    // assert
    expect(isValid).toEqual([true]);
  });
  test('Debe de validar emailage y fallar', async () => {
    // arrange
    await EmailageRepositorio.postEmailScore.mockResolvedValue({
      data: {
        fraudRisk: '500 not sure',
        emailExists: 'No',
        domainExists: 'Yes',
      },
    });
    // act
    const isValid = await validateEmail('chuchodavid024@gmail.com');
    // assert
    expect(isValid).toEqual([false, correoNoExiste()]);
  });
  test('Debe de validar emailage coreectamente y fallar', async () => {
    // arrange
    const error = 'Error al consultado el correo';
    await EmailageRepositorio.postEmailScore.mockRejectedValue({
      response: { data: { message: [error] } },
    });
    // act
    const isValid = await validateEmail('chuchodavid024@gmail.com');
    // assert
    expect(isValid).toEqual([false, error]);
  });
  test('Debe de validar lista negra correctamente', async () => {
    // arrange
    await ListaNegraRepositorio.postListaNegra.mockResolvedValue({
      data: {
        resultadoConsulta: '0',
      },
    });
    // act
    const isValid = await validationListaNegra({});
    // assert
    expect(isValid).toBe(true);
  });
  test('Debe de validar lista negra correctamente y fallar', async () => {
    // arrange
    await ListaNegraRepositorio.postListaNegra.mockRejectedValue();
    // act
    const isValid = await validationListaNegra({});
    // assert
    expect(isValid).toBe(false);
  });
});
