import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import Tooltip from './Tooltip';

describe('Pruebas en el componente Tooltip', () => {
  test('Debe de mostrarse correctamente el componente', () => {
    // arrange
    const msg = 'Esta es tu edad';
    // act
    const wrapper = shallow(<Tooltip message={msg} />);
    // assert
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe de mostrarse el mensaje', () => {
    // arrange
    const msg = 'Esta es tu edad';
    const wrapper = shallow(<Tooltip message={msg} />);
    // act
    const span = wrapper.find('span').at(1).text().trim();
    // assert
    expect(span).toBe(msg);
  });
  test('Debe de mostrarse el mensaje en la parte inferior', () => {
    // arrange
    const msg = 'Esta es tu edad';
    const wrapper = shallow(<Tooltip message={msg} position="bottom" />);
    // act
    const span = wrapper.find('span').at(1).text().trim();
    // assert
    expect(span).toBe(msg);
  });
});
