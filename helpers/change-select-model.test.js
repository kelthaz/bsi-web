import changeSelectModel, { createSelectModel } from './changeSelectModel';

describe('Pruebas en el helper changeSelectModel', () => {
  it('Debe ajustar un objeto para el select', () => {
    // arrange
    const original = [
      { id: 1, value: 'Test' },
      { id: 2, value: 'Test' },
      { id: 3, value: 'Test' },
      { id: 4, value: 'Test' },
      { id: 5, value: 'Test' },
    ];
    const expected = [
      { value: 1, label: 'Test' },
      { value: 2, label: 'Test' },
      { value: 3, label: 'Test' },
      { value: 4, label: 'Test' },
      { value: 5, label: 'Test' },
    ];
    // act
    const actual = changeSelectModel('id', 'value', original);
    // assert
    expect(actual).toStrictEqual(expected);
  });

  it('Debe crear un objeto para el select', () => {
    // arrange
    const original = ['Test', 'Test', 'Test', 'Test', 'Test'];
    const expected = [
      { value: 0, label: 'Test' },
      { value: 1, label: 'Test' },
      { value: 2, label: 'Test' },
      { value: 3, label: 'Test' },
      { value: 4, label: 'Test' },
    ];
    // act
    const actual = createSelectModel(original);
    // assert
    expect(actual).toStrictEqual(expected);
  });
});
