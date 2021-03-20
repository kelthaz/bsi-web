import mexicanDateFormatter from './mexicanDateFormatter';

describe('Pruebas en el helper mexicanDateFormatter', () => {
  it('Debe convertir la fecha al formato mexicano', () => {
    // arrange
    const date = new Date('August 19, 1975');
    const valorEsperado = 'martes, 19 de agosto';
    // act
    const actual = mexicanDateFormatter(date);
    // assert
    expect(actual).toBe(valorEsperado);
  });
});
