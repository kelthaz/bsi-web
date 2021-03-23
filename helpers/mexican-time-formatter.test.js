import mexicanTimeFormatter from './mexicanTimeFormatter';

describe('Pruebas en el helper mexicanTimeFormatter', () => {
  it('Debe convertir la hora al formato mexicano', () => {
    // arrange
    const date = new Date('August 19, 1975');
    date.setHours(22);
    const valorEsperado = '10:00:00 PM';
    // act
    const actual = mexicanTimeFormatter(date);
    // assert
    expect(actual).toBe(valorEsperado);
  });
});
