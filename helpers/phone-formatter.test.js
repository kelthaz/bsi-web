import phoneFormatter from './phoneFormatter';

describe('Pruebas para el helper de phoneFormatter', () => {
  it('Debe de mostrar el phone formatter', () => {
    // arrange
    const telefono = '23-2323-2323';
    const telefonoEsperado = '23-2323-2323';
    // act
    const actual = phoneFormatter(telefono);
    // assert
    expect(actual).toBe(telefonoEsperado);
  });
});
