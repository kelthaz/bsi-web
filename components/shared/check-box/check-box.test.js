import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import React from 'react';
import CheckBox from './CheckBox';

describe('Pruebas en el componente CheckBox', () => {
  const onChange = jest.fn();
  test('Debe de mostrarse correctamente el componente', () => {
    // arrange
    const props = {
      name: 'meEjercenControlMoralComoMoral',
      value: false,
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
      value: false,
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

  test('Deben estar solo el primer check', () => {
    // arrange
    const propFirstCheck = {
      name: 'animales',
      value: ['Gatos'],
      label: 'Gatos',
      onChange,
    };
    const propSecondCheck = {
      name: 'animales',
      value: ['Gatos'],
      label: 'Perros',
      onChange,
    };
    // act
    const wrapper = mount(
      <div>
        <CheckBox {...propFirstCheck}>
          <p>Gatos</p>
        </CheckBox>
        <CheckBox {...propSecondCheck}>
          <p>Perros</p>
        </CheckBox>
      </div>
    );
    const { checked: firstChecked } = wrapper.find('input').at(0).props();
    const { checked: secondChecked } = wrapper.find('input').at(1).props();
    // assert
    expect(firstChecked).toBe(true);
    expect(secondChecked).toBe(false);
  });
});
