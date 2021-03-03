import emailFormatter from './emailFormatter';

describe('Pruebas para el helper de emailFormatter', () => {
  it('Debe de mostrar el Email formatter', () => {
    // arrange
    const correo = 'prueba@gmail.com';
    const correoEsperado = 'prueba@gmail.com';
    // act
    const actual = emailFormatter(correo);
    // assert
    expect(actual).toBe(correoEsperado);
  });
});
