import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import useFormatter from '../../../hooks/useFormatter';
import TextField from './TextField';

jest.mock('../../../hooks/useFormatter', () => jest.fn());

describe('Pruebas en el componente TextField', () => {
  const setValue = jest.fn();
  const setTouched = jest.fn();
  const changeSelection = jest.fn();

  beforeEach(() => {
    useFormatter.mockReturnValue([jest.fn((value) => value), changeSelection]);
    jest.clearAllMocks();
  });

  it('Debe de mostrarse correctamente el componente', () => {
    // arrange
    const props = {
      name: 'name',
      format: 'uppercase',
      touched: false,
      value: '',
      setValue,
      setTouched,
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
    const valorEsperado = 'JESUS';
    const props = {
      name: 'name',
      format: 'uppercase',
      touched: false,
      value: '',
      setValue,
      setTouched,
      size: 'big',
      capitalize: false,
      label: 'Nombre',
      type: 'text',
      maxlength: 60,
      inverted: false,
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    await act(async () => {
      wrapper
        .find('input')
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
      name: 'name',
      format: 'uppercase',
      touched: true,
      value: '',
      setValue,
      setTouched,
      size: 'big',
      capitalize: false,
      label: 'Nombre',
      type: 'password',
      maxlength: 60,
      inverted: false,
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    await act(async () => {
      wrapper
        .find('input')
        .simulate('change', { target: { value: valorEsperado, selectionStart: 0, setSelectionRange: jest.fn() } });
    });
    // assert
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(valorEsperado);
    expect(setTouched).toHaveBeenCalledTimes(0);
  });

  test('Debe de llamarse el setValue y no el setTouched, con el espacio final eliminado', async () => {
    // arrange
    const valorEsperado = 'JESUS ';
    const props = {
      name: 'name',
      format: 'uppercase',
      touched: true,
      value: valorEsperado,
      setValue,
      setTouched,
      size: 'big',
      capitalize: false,
      label: 'Nombre',
      type: 'password',
      maxlength: 60,
      inverted: false,
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    await act(async () => {
      wrapper.find('input').simulate('blur');
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
      name: 'name',
      format: 'uppercase',
      touched: true,
      value: '',
      setValue,
      setTouched,
      size: 'big',
      capitalize: false,
      label: 'Nombre',
      type: 'password',
      maxlength: 60,
      inverted: false,
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    wrapper.find('input').simulate('beforeInput', { data: '$', preventDefault });
    // assert
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

  test('Debe de no llamarse el preventDefault porque el valor ingresado es valido', () => {
    // arrange
    const preventDefault = jest.fn();
    const props = {
      name: 'name',
      format: 'uppercase',
      touched: true,
      value: '',
      setValue,
      setTouched,
      size: 'big',
      capitalize: false,
      label: 'Nombre',
      type: 'text',
      maxlength: 60,
      inverted: false,
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    wrapper.find('input').simulate('beforeInput', { data: 'oli', preventDefault });
    // assert
    expect(preventDefault).toHaveBeenCalledTimes(0);
  });

  test('Debe de mostrarse en rojo debido al error', () => {
    // arrange
    const error = 'Campo obligatorio';
    const props = {
      name: 'name',
      format: 'uppercase',
      touched: true,
      value: '',
      error,
      setValue,
      setTouched,
      size: 'big',
      capitalize: false,
      label: 'Nombre',
      type: 'text',
      maxlength: 60,
      inverted: false,
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    const indicadorError = wrapper.find('.opacity-error').exists();
    const errorMostrado = wrapper.find('span').text().trim();
    // assert
    expect(indicadorError).toBe(true);
    expect(errorMostrado).toBe(error);
  });

  test('Debe de mostrarse como opcional', () => {
    // arrange
    const props = {
      name: 'name',
      format: 'uppercase',
      touched: true,
      value: '',
      setValue,
      setTouched,
      size: 'big',
      capitalize: false,
      label: 'Nombre',
      type: 'password',
      maxlength: 60,
      inverted: false,
      optional: true,
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    const opcional = wrapper.find('span').text().trim();
    // assert
    expect(opcional).toBe('Opcional');
  });

  test('Debe de presionarse la tecla Delete', async () => {
    // arrange
    const key = 'Delete';
    const target = { value: key, selectionStart: 0, setSelectionRange: jest.fn() };
    const props = {
      name: 'name',
      format: 'uppercase',
      touched: false,
      value: '',
      setValue,
      setTouched,
      size: 'big',
      capitalize: false,
      label: 'Nombre',
      type: 'password',
      maxlength: 60,
      inverted: false,
      optional: true,
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    wrapper.find('input').simulate('keyDown', { key });
    await act(async () => {
      wrapper.find('input').simulate('change', { target });
    });
    // assert
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(key);
    expect(setTouched).toHaveBeenCalledTimes(1);
    expect(setTouched).toHaveBeenCalledWith(true);
    expect(changeSelection).toHaveBeenCalledTimes(1);
    expect(changeSelection).toHaveBeenCalledWith(key, props.value, key, key, 0, target);
  });

  test('Debe de mostrar el texto en el campo tipo password', () => {
    // arrange
    const props = {
      name: 'name',
      format: 'uppercase',
      touched: true,
      value: '',
      setValue,
      setTouched,
      size: 'big',
      capitalize: false,
      label: 'Nombre',
      type: 'password',
      maxlength: 60,
      inverted: false,
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    wrapper.find('button').simulate('click');
    const showPassword = wrapper.find('SvgShowPassword').exists();
    // assert
    expect(showPassword).toBe(true);
  });

  test('Debe de mostrar el texto y luego ocultarlo de nuevo en el campo tipo password', () => {
    // arrange
    const props = {
      name: 'name',
      format: 'uppercase',
      touched: true,
      value: '',
      setValue,
      setTouched,
      size: 'big',
      capitalize: false,
      label: 'Nombre',
      type: 'password',
      maxlength: 60,
      inverted: false,
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    wrapper.find('button').simulate('click');
    const showPassword = wrapper.find('SvgShowPassword').exists();
    wrapper.find('button').simulate('click');
    const hidenPassword = wrapper.find('SvgHidenPassword').exists();
    // assert
    expect(showPassword).toBe(true);
    expect(hidenPassword).toBe(true);
  });

  test('Debe de no llamarse el preventDefault porque permite pegar', () => {
    // arrange
    const preventDefault = jest.fn();
    const props = {
      name: 'name',
      format: 'uppercase',
      touched: true,
      value: '',
      setValue,
      setTouched,
      size: 'big',
      capitalize: false,
      label: 'Nombre',
      type: 'password',
      maxlength: 60,
      inverted: false,
      paste: true,
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    wrapper.find('input').simulate('paste');
    // assert
    expect(preventDefault).toHaveBeenCalledTimes(0);
  });

  test('Debe de llamarse el preventDefault porque permite no pegar', () => {
    // arrange
    const preventDefault = jest.fn();
    const props = {
      name: 'name',
      format: 'uppercase',
      touched: true,
      value: '',
      error: 'No se permite pegar',
      setValue,
      setTouched,
      size: 'big',
      capitalize: false,
      label: 'Nombre',
      type: 'password',
      maxlength: 60,
      inverted: false,
      paste: false,
    };
    const wrapper = shallow(<TextField {...props} />);
    // act
    wrapper.find('input').simulate('paste', { data: 'oli', preventDefault });
    // assert
    expect(preventDefault).toHaveBeenCalledTimes(1);
  });
});
