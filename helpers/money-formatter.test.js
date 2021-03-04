import moneyFormatter from './moneyFormatter';

describe('Pruebas para el helper de moneyFormatter', () => {
  it('Debe de mostrar el money formatter', () => {
    // arrange
    const valor = '17,572';
    const valoresperado = '$17,572';
    // act
    const actual = moneyFormatter(valor);
    // assert
    expect(actual).toBe(valoresperado);
  });
});
