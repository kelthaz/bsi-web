import mexicanStateDateFormatter from './mexicanStateDateFormatter';

describe('Pruebas en el helper mexicanStateDateFormatter', () => {
  const date = new Date('August 19, 1975');
  it('Debe devolver buenas noches', () => {
    // arrange
    date.setHours(2);
    const valorEsperado = 'buenas noches';
    // act
    const actual = mexicanStateDateFormatter(date);
    // assert
    expect(actual).toBe(valorEsperado);
  });
  it('Debe devolver buenos días', () => {
    // arrange
    date.setHours(6);
    const valorEsperado = 'buenos días';
    // act
    const actual = mexicanStateDateFormatter(date);
    // assert
    expect(actual).toBe(valorEsperado);
  });
  it('Debe devolver buenas tardes', () => {
    // arrange
    date.setHours(13);
    const valorEsperado = 'buenas tardes';
    // act
    const actual = mexicanStateDateFormatter(date);
    // assert
    expect(actual).toBe(valorEsperado);
  });
  it('Debe devolver la fecha al formato mexicano', () => {
    // arrange
    date.setHours(19);
    const valorEsperado = 'buenas noches';
    // act
    const actual = mexicanStateDateFormatter(date);
    // assert
    expect(actual).toBe(valorEsperado);
  });
});
