import '@testing-library/jest-dom';
import textAreaFormatter from './textAreaFormatter';

describe('Pruebas en el helper textAreaFormatter', () => {
  test('Debe de formatear correctamente el text area', () => {
    // arrange
    const valorEsperado = 'Jesus david gomez ';
    // act
    const resultado = textAreaFormatter('Jesus david gomez $$');
    // assert
    expect(resultado).toBe(valorEsperado);
  });
});
