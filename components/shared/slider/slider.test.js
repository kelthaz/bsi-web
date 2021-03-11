import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import Slider from './Slider';

describe('Pruebas en el componente Accordion', () => {
  const value = 650000;
  const onChange = jest.fn();
  const onBlur = jest.fn();

  test('Debe de mostrarse correctamente el componente', () => {
    // arrange
    const props = { name: 'monto', value, onChange, onBlur, min: 0, max: 10, step: 1 };
    // act
    const wrapper = shallow(<Slider {...props} />);
    // assert
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de llamarse el setFieldValue con el valor nuevo y campo a cambiar', () => {
    // arrange
    const event = { target: { value: 100000 } };
    const props = { name: 'monto', value, onChange, onBlur, min: 0, max: 10, step: 1 };
    const wrapper = shallow(<Slider {...props} />);
    // act
    wrapper.find('input').simulate('change', event);
    // assert
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(event);
  });
});
