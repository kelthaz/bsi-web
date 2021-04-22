import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import RadioButton from './RadioButton';

describe('Pruebas en el componente RadioButton', () => {
  const onChange = jest.fn();
  test('Debe de mostrarse correctamente el componente', () => {
    // arrange
    const props = {
      name: 'meEjercenControlMoralComoMoral',
      label: 'si',
      onChange,
      value: 'si',
    };
    // act
    const wrapper = shallow(
      <RadioButton {...props}>
        <p>Sí</p>
      </RadioButton>
    );
    // assert

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de llamarse onChange', () => {
    // arrange
    const valorEsperado = { target: { checked: true } };
    const props = {
      name: 'meEjercenControlMoralComoMoral',
      label: 'si',
      onChange,
      value: 'no',
    };
    // act
    const wrapper = shallow(
      <RadioButton {...props}>
        <p>Sí</p>
      </RadioButton>
    );
    wrapper.find('input').simulate('change', valorEsperado);
    // assert
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(valorEsperado);
  });
});
