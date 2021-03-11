import moneyFormatter, { changeSelectionMoneyFormatter } from './moneyFormatter';

describe('Pruebas para el helper de moneyFormatter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrar el money formatter', () => {
    // arrange
    const valor = '17572';
    const valoresperado = '$17,572';
    // act
    const actual = moneyFormatter(valor);
    // assert
    expect(actual).toBe(valoresperado);
  });

  test('Debe de mostrar el money formatter', () => {
    // arrange
    const valor = '$171572';
    const valoresperado = '$171,572';
    // act
    const actual = moneyFormatter(valor);
    // assert
    expect(actual).toBe(valoresperado);
  });

  test('Debe de mostrar el number formatter', () => {
    // arrange
    const numero = '$';
    const numeroEsperado = '';
    // act
    const actual = moneyFormatter(numero);
    // assert
    expect(actual).toBe(numeroEsperado);
  });

  test('Debe de permanecer la barra en el mismo lugar', () => {
    // arrange
    const setSelectionRange = jest.fn();
    const keyPress = '1';
    const value = '$5555';
    const valueTarget = '$51555';
    const formattedValue = '$51,555';
    const selectionStart = 3;
    const target = { setSelectionRange };
    // act
    changeSelectionMoneyFormatter(keyPress, value, valueTarget, formattedValue, selectionStart, target);
    // assert
    expect(setSelectionRange).toHaveBeenCalledTimes(1);
    expect(setSelectionRange).toHaveBeenCalledWith(3, 3);
  });

  test('Debe de aumentar 1 la posicion de la barra debido a que se agregoun numero y por lo tanto 1 coma', () => {
    // arrange
    const setSelectionRange = jest.fn();
    const keyPress = '1';
    const value = '$555,555';
    const valueTarget = '$5515,555';
    const formattedValue = '$5,515,555';
    const selectionStart = 4;
    const target = { setSelectionRange };
    // act
    changeSelectionMoneyFormatter(keyPress, value, valueTarget, formattedValue, selectionStart, target);
    // assert
    expect(setSelectionRange).toHaveBeenCalledTimes(1);
    expect(setSelectionRange).toHaveBeenCalledWith(selectionStart + 1, selectionStart + 1);
  });

  test('Debe de disminuir 1 la posicion de la barra debido a que se elimino 1 numero ', () => {
    // arrange
    const setSelectionRange = jest.fn();
    const keyPress = 'Backspace';
    const value = '$5,553,655';
    const valueTarget = '$5,553,55';
    const formattedValue = '$555,355';
    const selectionStart = 7;
    const target = { setSelectionRange };
    // act
    changeSelectionMoneyFormatter(keyPress, value, valueTarget, formattedValue, selectionStart, target);
    // assert
    expect(setSelectionRange).toHaveBeenCalledTimes(1);
    expect(setSelectionRange).toHaveBeenCalledWith(selectionStart - 1, selectionStart - 1);
  });

  test('Debe de permanecer la barra en el mismo lugar debido a que se encuentra al comienzo antes de la primera coma', () => {
    // arrange
    const setSelectionRange = jest.fn();
    const keyPress = 'Backspace';
    const value = '$1,555,355';
    const valueTarget = '$,555,355';
    const formattedValue = '$555,355';
    const selectionStart = 1;
    const target = { setSelectionRange };
    // act
    changeSelectionMoneyFormatter(keyPress, value, valueTarget, formattedValue, selectionStart, target);
    // assert
    expect(setSelectionRange).toHaveBeenCalledTimes(1);
    expect(setSelectionRange).toHaveBeenCalledWith(selectionStart, selectionStart);
  });

  test('Debe de permanecer la barra en el mismo lugar debido a que se apreto la tecla DELETE', () => {
    // arrange
    const setSelectionRange = jest.fn();
    const keyPress = 'Delete';
    const value = '$555,355';
    const valueTarget = '$555355';
    const formattedValue = '$555,355';
    const selectionStart = 4;
    const target = { setSelectionRange };
    // act
    changeSelectionMoneyFormatter(keyPress, value, valueTarget, formattedValue, selectionStart, target);
    // assert
    expect(setSelectionRange).toHaveBeenCalledTimes(1);
    expect(setSelectionRange).toHaveBeenCalledWith(selectionStart, selectionStart);
  });
});
