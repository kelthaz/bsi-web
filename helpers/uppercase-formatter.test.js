import uppercaseFormatter from './uppercaseFormatter';

describe('Pruebas para el helper de uppercaseFormatter', () => {
  it('Debe de mostrar el uppercase formatter', () => {
    // arrange
    const upperCase = 'PRUEBA UPPERCASE';
    const upperCaseEsperado = 'PRUEBA UPPERCASE';
    // act
    const actual = uppercaseFormatter(upperCase);
    // assert
    expect(actual).toBe(upperCaseEsperado);
  });
});
