import dateFormatter from './dateFormatter';

describe('Pruebas en el helper dateFormatter', () => {
  it('Debe convertir la fecha al formato', () => {
    // arrange
    const original = new Date(2021, 2, 1);
    const expected = '2021-03-01';
    // act
    const actual = dateFormatter(original);
    // assert
    expect(actual).toBe(expected);
  });

  it('Debe convertir la fecha al formato', () => {
    // arrange
    const original = new Date(2021, 10, 10);
    const expected = '2021-11-10';
    // act
    const actual = dateFormatter(original);
    // assert
    expect(actual).toBe(expected);
  });
});
