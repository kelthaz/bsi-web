import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import useFormatter from '../../../hooks/useFormatter';
import TextField from './TextField';

jest.mock('../../../hooks/useFormatter', () => jest.fn());

xdescribe('Pruebas en el componente TextField', () => {
  const setValue = jest.fn();
  const setTouched = jest.fn();
  const changeSelection = jest.fn();

  beforeEach(() => {
    useFormatter.mockReturnValue([jest.fn((value) => value), changeSelection]);
    jest.clearAllMocks();
  });

  test('Debe de mostrarse correctamente el componente', () => {
    // arrange
    const props = {
      name: 'name',
      format: 'uppercase',
      formulario: {},
      size: 'small',
      capitalize: true,
      label: 'Nombre',
      type: 'text',
      maxlength: 60,
      inverted: true,
    };
    // act
    const wrapper = shallow(<TextField {...props} />);
    // assert
    expect(wrapper).toMatchSnapshot();
  });

  it('Debe de llamarse el setValue y el setTouched, con el valor nuevo', async () => {
    // arrange
    const valorEsperado = 'soy una empresa que vende empanadas';
    const props = {
      name: 'tellUs',
      touched: false,
      value: '',
      setValue,
      setTouched,
      label: 'Cuéntanos tus dudas...',
      maxlength: 180,
      format: 'textField',
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    await act(async () => {
      wrapper
        .find('textField')
        .simulate('change', { target: { value: valorEsperado, selectionStart: 0, setSelectionRange: jest.fn() } });
    });

    // assert
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(valorEsperado);
    expect(setTouched).toHaveBeenCalledTimes(1);
    expect(setTouched).toHaveBeenCalledWith(true);
  });

  test('Debe de llamarse el setValue y no el setTouched, con el valor nuevo', async () => {
    // arrange
    const valorEsperado = 'soy una empresa que vende empanadas en cali';
    const props = {
      name: 'tellUs',
      touched: true,
      value: '',
      setValue,
      setTouched,
      label: 'Cuéntanos tus dudas...',
      maxlength: 180,
      format: 'textField',
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    await act(async () => {
      wrapper
        .find('textField')
        .simulate('change', { target: { value: valorEsperado, selectionStart: 0, setSelectionRange: jest.fn() } });
    });
    // assert
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(valorEsperado);
    expect(setTouched).toHaveBeenCalledTimes(0);
  });

  test('Debe de llamarse el setValue y no el setTouched, con el espacio final eliminado', async () => {
    // arrange
    const valorEsperado = 'soy una empresa que vende empanadas en cali ';
    const props = {
      name: 'tellUs',
      touched: true,
      value: valorEsperado,
      setValue,
      setTouched,
      label: 'Cuéntanos tus dudas...',
      maxlength: 180,
      format: 'textField',
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    await act(async () => {
      wrapper.find('textField').simulate('blur');
    });
    // assert
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(valorEsperado.trimEnd());
    expect(setTouched).toHaveBeenCalledTimes(0);
  });

  test('Debe de llamarse el preventDefault porque el valor ingresado no es valido', () => {
    // arrange
    useFormatter.mockReturnValue([jest.fn(() => ''), changeSelection]);
    const preventDefault = jest.fn();
    const props = {
      name: 'tellUs',
      touched: true,
      value: '',
      setValue,
      setTouched,
      label: 'Cuéntanos tus dudas...',
      maxlength: 180,
      format: 'textField',
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    wrapper.find('textField').simulate('beforeInput', { data: '$', preventDefault });
    // assert
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  test('Debe de no llamarse el preventDefault porque el valor ingresado es valido', () => {
    // arrange
    const preventDefault = jest.fn();
    const props = {
      name: 'tellUs',
      touched: true,
      value: '',
      setValue,
      setTouched,
      label: 'Cuéntanos tus dudas...',
      maxlength: 180,
      format: 'textField',
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    wrapper.find('textField').simulate('beforeInput', { data: 'oli', preventDefault });
    // assert
    expect(preventDefault).toHaveBeenCalledTimes(0);
  });

  test('Debe de mostrarse en rojo debido al error', () => {
    // arrange
    const error = 'Campo obligatorio';
    const props = {
      name: 'tellUs',
      touched: true,
      value: '',
      error,
      setValue,
      setTouched,
      label: 'Cuéntanos tus dudas...',
      maxlength: 180,
      format: 'textField',
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    const indicadorError = wrapper.find('.indicador-error').exists();
    const errorMostrado = wrapper.find('span').text().trim();
    // assert
    expect(indicadorError).toBe(true);
    expect(errorMostrado).toBe(error);
  });

  test('Debe de mostrarse como opcional', () => {
    // arrange
    const props = {
      name: 'tellUs',
      touched: true,
      value: '',
      setValue,
      setTouched,
      label: 'Cuéntanos tus dudas...',
      maxlength: 180,
      format: 'textField',
      optional: true,
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    const opcional = wrapper.find('span').text().trim();
    // assert
    expect(opcional).toBe('Opcional');
  });
});
