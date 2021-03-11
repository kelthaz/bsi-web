import numberFormatter from './numberFormatter';

describe('Pruebas en el helper de numberFormatter', () => {
  test('Debe de mostrar el number formatter', () => {
    // arrange
    const numero = '123abc';
    const numeroEsperado = '123';
    // act
    const actual = numberFormatter(numero);
    // assert
    expect(actual).toBe(numeroEsperado);
  });
});
