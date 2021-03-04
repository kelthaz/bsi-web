import passwordSpace from './passwordSpace';

describe('Pruebas para el helper de passwordSpace', () => {
  it('Debe de mostrar el password space', () => {
    // arrange
    const contrasena = 'Prueba123';
    const contrasenaEsperada = 'Prueba123';
    // act
    const actual = passwordSpace(contrasena);
    // assert
    expect(actual).toBe(contrasenaEsperada);
  });
});
