import React from 'react';
import { mount } from 'enzyme';
import DatePickerInput from './DatePickerInput';

describe('Pruebas en el componente DatePickerInput', () => {
  it('Debe mostrar el datepicker cuando se da clic en el input', () => {
    // arrange
    const wrap = mount(<DatePickerInput />);
    // act
    wrap.find('button.svg-button-input-small').simulate('click');
    // assert
    expect(wrap.find('.DayPicker').exists()).toBeTruthy();
  });

  it('Debe cambiar la fecha seleccionada a la de hoy', () => {
    // arrange
    const today = new Date(new Date().setHours(12, 0, 0, 0));
    const onChange = jest.fn();
    const wrap = mount(<DatePickerInput onChange={onChange} />);
    // act
    wrap.find('button.svg-button-input-small').simulate('click');
    wrap.find('.DayPicker-Day--today').simulate('click');
    // assert
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(today);
  });

  it('Debe desactivar los fines de semana', () => {
    // arrange
    const wrap = mount(<DatePickerInput disableWeekends />);
    // act
    wrap.find('button.svg-button-input-small').simulate('click');
    // assert
    expect(wrap.find('.DayPicker-Day--disabled').exists()).toBeTruthy();
  });

  it('Debe desactivar los días previos', () => {
    // arrange
    const wrap = mount(<DatePickerInput disablePreviousDays />);
    // act
    wrap.find('button.svg-button-input-small').simulate('click');
    // assert
    expect(wrap.find('.DayPicker-Day--disabled').exists()).toBeTruthy();
  });

  it('Debe seleccionar un día desactivado', () => {
    // arrange
    const onChange = jest.fn();
    const wrap = mount(<DatePickerInput disablePreviousDays disableWeekends onChange={onChange} />);
    // act
    wrap.find('button.svg-button-input-small').simulate('click');
    wrap.find('.DayPicker-Day--disabled').first().simulate('click');
    // assert
    expect(onChange).not.toHaveBeenCalled();
  });

  it('Debe seleccionar un mes anterior y un mes siguiente', () => {
    // arrange
    const wrap = mount(<DatePickerInput />);
    // act
    wrap.find('button').at(1).simulate('click');
    wrap.find('#previousMonth').simulate('click');
    wrap.find('#nextMonth').simulate('click');
    // assert
    expect(wrap.find('.DayPicker').exists()).toBeTruthy();
  });
});
