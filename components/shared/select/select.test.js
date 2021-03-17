import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Select from './Select';

describe('Pruebas en el componente Select', () => {
  const setValue = jest.fn();
  const setTouched = jest.fn();

  const items = [
    { label: 'Cónyuges', value: 'Cónyuges' },
    { label: 'Concubinos', value: 'oncubinos' },
    { label: 'Hijos', value: 'Hijos' },
    { label: 'Padres', value: 'Padres' },
    { label: 'Suegros', value: 'Suegros' },
    { label: 'Hijos de cónyuge', value: 'Hijos de cónyuge' },
    { label: 'Hermanos', value: 'Hermanos' },
    { label: 'Abuelos', value: 'Abuelos' },
    { label: 'Nietos', value: 'Nietos' },
    { label: 'Cuñados', value: 'Cuñados' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrarse correctamente el componente', () => {
    // arrange

    const props = {
      name: 'plazo',
      label: 'Seleccione...',
      size: 'small',
      items,
      blue: true,
      format: 'uppercase',
      touched: false,
      value: items[0],
      setValue,
      setTouched,
      inverted: true,
      showAlwaysErrors: false,
    };
    // act
    const wrapper = shallow(<Select {...props} />);
    // assert
    expect(wrapper).toMatchSnapshot();
  });

  it('Debe de llamarse el setValue y el setTouched, con el valor nuevo', async () => {
    // arrange
    const itemEsperado = items[0];
    const props = {
      name: 'plazo',
      label: 'Seleccione...',
      size: 'small',
      items,
      blue: true,
      format: 'uppercase',
      touched: false,
      value: null,
      setValue,
      setTouched,
      inverted: false,
    };
    const wrapper = shallow(<Select {...props} />);
    // act
    await act(async () => {
      wrapper.find('button').at(0).simulate('click');
    });
    await act(async () => {
      wrapper
        .find('ul')
        .find('button')
        .at(0)
        .simulate('click', { ...itemEsperado });
    });

    // assert
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(itemEsperado);
    expect(setTouched).toHaveBeenCalledTimes(1);
    expect(setTouched).toHaveBeenCalledWith(true);
  });
  it('Debe de llamarse el setValue y el setTouched 1 vez, y por último cerrar el select ', async () => {
    // arrange
    const segundoItem = items[1];
    const props = {
      name: 'plazo',
      label: 'Seleccione...',
      size: 'big',
      items,
      format: 'uppercase',
      touched: false,
      value: null,
      setValue,
      setTouched,
      inverted: false,
    };
    const wrapper = shallow(<Select {...props} />);
    // act
    await act(async () => {
      wrapper.find('button').at(0).simulate('click');
    });

    await act(async () => {
      wrapper.find('button').at(0).simulate('click');
    });
    await act(async () => {
      wrapper
        .find('ul')
        .find('button')
        .at(1)
        .simulate('click', { ...segundoItem });
    });
    await act(async () => {
      wrapper.find('button').at(1).simulate('click');
    });

    // assert
    expect(setValue).toHaveBeenCalledTimes(1);
    expect(setValue).toHaveBeenCalledWith(segundoItem);
    expect(setTouched).toHaveBeenCalledTimes(2);
  });
  it('Debe de no mostrarse el error debido a que no tiene items ', async () => {
    // arrange
    const error = 'Seleccione una opción';
    const props = {
      name: 'plazo',
      label: 'Seleccione...',
      size: 'big',
      error,
      items: [],
      format: 'uppercase',
      touched: false,
      value: null,
      setValue,
      setTouched,
      inverted: true,
    };
    const wrapper = shallow(<Select {...props} />);
    // act
    await act(async () => {
      wrapper.find('button').at(1).simulate('click');
    });
    const span = wrapper.find('span').at(0).text().trim();
    // assert
    expect(setValue).toHaveBeenCalledTimes(0);
    expect(setTouched).toHaveBeenCalledTimes(0);
    expect(span).toBe('');
  });

  it('Debe de no mostrarse el error debido a que esta deshabilitado', async () => {
    // arrange
    const props = {
      name: 'plazo',
      label: 'Seleccione...',
      size: 'big',
      items: [],
      format: 'uppercase',
      touched: false,
      value: null,
      setValue,
      setTouched,
      inverted: true,
      disabled: true,
    };
    const wrapper = shallow(<Select {...props} />);
    // act
    const span = wrapper.find('span').at(0).text().trim();
    // assert
    expect(setValue).toHaveBeenCalledTimes(0);
    expect(setTouched).toHaveBeenCalledTimes(0);
    expect(span).toBe('');
  });
  it('Debe de mostrarse el error, debido a que esta habilitado para eso', async () => {
    // arrange
    const errorEsperado = 'Seleccione una opción';
    const props = {
      name: 'plazo',
      label: 'Seleccione...',
      size: 'big',
      items,
      error: errorEsperado,
      format: 'uppercase',
      touched: true,
      value: null,
      setValue,
      setTouched,
      inverted: true,
      disabled: false,
    };
    const wrapper = shallow(<Select {...props} />);
    // act
    const span = wrapper.find('span').at(0).text().trim();
    // assert
    expect(span).toBe(errorEsperado);
  });
});
