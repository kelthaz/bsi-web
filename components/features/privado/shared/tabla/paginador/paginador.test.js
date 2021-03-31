import { shallow } from 'enzyme';
import React from 'react';
import Paginador from './Paginador';

describe('Pruebas en el componente Accordion', () => {

  it('Debe de mostrarse correctamente el componente', () => {
    // arrange
    const onChange = jest.fn();
    const props = { numberOfPages: 5, currentPage: 1, onChange };
    // act
    const wrapper = shallow(<Paginador {...props} />);
    // assert
    expect(wrapper).toMatchSnapshot();
  });

  it('No debe llamar la función onChange', () => {
    // arrange
    const onChange = jest.fn();
    const props = { numberOfPages: 5, currentPage: 1, onChange };
    // act
    const wrapper = shallow(<Paginador {...props} />);
    wrapper.find('span').at(1).simulate('click');
    // assert
    expect(onChange).not.toHaveBeenCalled();
  });

  it('Debe llamar la función onChange', () => {
    // arrange
    const onChange = jest.fn();
    const props = { numberOfPages: 5, currentPage: 1, onChange };
    // act
    const wrapper = shallow(<Paginador {...props} />);
    wrapper.find('span').at(2).simulate('click');
    // assert
    expect(onChange).toHaveBeenCalled();
  });

  it('Debe avanzar una página', () => {
    // arrange
    const onChange = jest.fn();
    const props = { numberOfPages: 5, currentPage: 1, onChange };
    // act
    const wrapper = shallow(<Paginador {...props} />);
    wrapper.find('span').last().simulate('click');
    // assert
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('Debe retroceder una página', () => {
    // arrange
    const onChange = jest.fn();
    const props = { numberOfPages: 5, currentPage: 2, onChange };
    // act
    const wrapper = shallow(<Paginador {...props} />);
    wrapper.find('span').first().simulate('click');
    // assert
    expect(onChange).toHaveBeenCalledWith(1);
  });


  // it('Debe de llamarse el setFieldValue con el valor nuevo y campo a cambiar', () => {
  //   // arrange
  //   const event = { target: { value: 100000 } };
  //   const props = { name: 'monto', value, onChange, onBlur, min: 0, max: 10, step: 1 };
  //   const wrapper = shallow(<Slider {...props} />);
  //   // act
  //   wrapper.find('input').simulate('change', event);
  //   // assert
  //   expect(onChange).toHaveBeenCalledTimes(1);
  //   expect(onChange).toHaveBeenCalledWith(event);
  // });
});
