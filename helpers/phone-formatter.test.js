import phoneFormatter, { changeSelectionPhoneFormatter } from './phoneFormatter';

describe('Pruebas para el helper de phoneFormatter', () => {
  test('Debe de mostrar el phone formatter', () => {
    // arrange
    const telefono = '2323232323';
    const telefonoEsperado = '23-2323-2323';
    // act
    const actual = phoneFormatter(telefono);
    // assert
    expect(actual).toBe(telefonoEsperado);
  });

  test('Debe de permanecer la barra en el mismo lugar', () => {
    // arrange
    const setSelectionRange = jest.fn();
    const keyPress = '5';
    const value = '11-1111';
    const valueTarget = '11-51111';
    const formattedValue = '11-5111-1';
    const selectionStart = 4;
    const target = { setSelectionRange };
    // act
    changeSelectionPhoneFormatter(keyPress, value, valueTarget, formattedValue, selectionStart, target);
    // assert
    expect(setSelectionRange).toHaveBeenCalledTimes(1);
    expect(setSelectionRange).toHaveBeenCalledWith(selectionStart, selectionStart);
  });

  test('Debe de permanecer la barra en el mismo lugar debido a que se encuentra despues de guion', () => {
    // arrange
    const setSelectionRange = jest.fn();
    const keyPress = 'Backspace';
    const value = '11-5111-1';
    const valueTarget = '11-111-1';
    const formattedValue = '11-1111';
    const selectionStart = 3;
    const target = { setSelectionRange };
    // act
    changeSelectionPhoneFormatter(keyPress, value, valueTarget, formattedValue, selectionStart, target);
    // assert
    expect(setSelectionRange).toHaveBeenCalledTimes(1);
    expect(setSelectionRange).toHaveBeenCalledWith(selectionStart, selectionStart);
  });

  test('Debe de aumentar 1 la posicion de la barra debido a que se agregoun numero y por lo tanto 1 guion', () => {
    // arrange
    const setSelectionRange = jest.fn();
    const keyPress = '6';
    const value = '11-1111';
    const valueTarget = '116-1111';
    const formattedValue = '11-6111-1';
    const selectionStart = 3;
    const target = { setSelectionRange };
    // act
    changeSelectionPhoneFormatter(keyPress, value, valueTarget, formattedValue, selectionStart, target);
    // assert
    expect(setSelectionRange).toHaveBeenCalledTimes(1);
    expect(setSelectionRange).toHaveBeenCalledWith(selectionStart + 1, selectionStart + 1);
  });

  test('Debe de permanecer la barra en el mismo lugar debido a que se apreto la tecla DELETE', () => {
    // arrange
    const setSelectionRange = jest.fn();
    const keyPress = 'Delete';
    const value = '11-1111-1';
    const valueTarget = '116-1111-';
    const formattedValue = '11-6111';
    const selectionStart = 9;
    const target = { setSelectionRange };
    // act
    changeSelectionPhoneFormatter(keyPress, value, valueTarget, formattedValue, selectionStart, target);
    // assert
    expect(setSelectionRange).toHaveBeenCalledTimes(1);
    expect(setSelectionRange).toHaveBeenCalledWith(selectionStart, selectionStart);
  });
});
