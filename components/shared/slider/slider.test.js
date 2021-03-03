import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import Slider from './Slider';

describe('Pruebas en el componente Accordion', () => {
  const formularioMock = {
    values: {
      monto: 3,
    },
    setFieldValue: jest.fn(),
  };

  test('Debe de mostrarse correctamente el componente', () => {
    // arrange
    const props = { name: 'monto', formulario: formularioMock, min: 0, max: 10, step: 1 };
    // act
    const wrapper = shallow(<Slider {...props} />);
    // assert
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de llamarse el setFieldValue con el valor nuevo y campo a cambiar', () => {
    // arrange
    const props = { name: 'monto', formulario: formularioMock, min: 0, max: 10, step: 1 };
    const wrapper = shallow(<Slider {...props} />);
    // act
    wrapper.find('input').simulate('change', { target: { value: 6 } });
    // assert
    expect(formularioMock.setFieldValue).toHaveBeenCalledTimes(1);
    expect(formularioMock.setFieldValue).toHaveBeenCalledWith('monto', 6);
  });
});
