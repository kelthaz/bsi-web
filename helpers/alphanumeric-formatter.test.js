import alphanumericFormatter from './alphanumericFormatter';

describe('Pruebas en el helper alphanumericFormatter', () => {
  it('Debe corregir el texto al formato alfanumérico', () => {
    // arrange
    const text = 'texto de prueba 123!@#$';
    const expected = 'texto de prueba 123';
    // act
    const actual = alphanumericFormatter(text);
    // assert
    expect(actual).toBe(expected);
  });
});
