import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import CheckBox from './CheckBox';

describe('Pruebas en el componente CheckBox', () => {
  const onChange = jest.fn();
  test('Debe de mostrarse correctamente el componente', () => {
    // arrange
    const props = {
      name: 'meEjercenControlMoralComoMoral',
      checked: false,
      label: 'si',
      onChange,
    };
    // act
    const wrapper = shallow(
      <CheckBox {...props}>
        <p>Sí</p>
      </CheckBox>
    );
    // assert

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de llamarse onChange', () => {
    // arrange
    const valorEsperado = { target: { checked: true } };
    const props = {
      name: 'meEjercenControlMoralComoMoral',
      checked: false,
      label: 'si',
      onChange,
    };
    // act
    const wrapper = shallow(
      <CheckBox {...props}>
        <p>Sí</p>
      </CheckBox>
    );
    wrapper.find('input').simulate('change', valorEsperado);
    // assert
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(valorEsperado);
  });
});
