import '@testing-library/jest-dom';
import rfcFormatter from './rfcFormatter';

describe('Pruebas en el helper rfcFormatter', () => {
  test('Debe de formatear correctamente el rfc', () => {
    // arrange
    const valorEsperado = 'CBOA234';
    // act
    const resultado = rfcFormatter('CbOa234óóó');
    // assert
    expect(resultado).toBe(valorEsperado);
  });
});
