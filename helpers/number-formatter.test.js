import numberFormatter from './numberFormatter';

describe('Pruebas para el helper de numberFormatter', () => {
  it('Debe de mostrar el number formatter', () => {
    // arrange
    const numero = '123';
    const numeroEsperado = '123';
    // act
    const actual = numberFormatter(numero);
    // assert
    expect(actual).toBe(numeroEsperado);
  });
});
