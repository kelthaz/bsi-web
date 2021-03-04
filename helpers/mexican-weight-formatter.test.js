import mexicanWeightFormatter from './mexicanWeightFormatter';

describe('Pruebas en el helper mexicanWeightFormatter', () => {
  it('Debe convertir el valor al formato mexicano', () => {
    // arrange
    const original = 12000000;
    const expected = '$12,000,000.00';
    // act
    const actual = mexicanWeightFormatter(original);
    // assert
    expect(actual).toBe(expected);
  });
});
