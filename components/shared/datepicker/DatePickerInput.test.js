/* eslint-disable no-undef */
// eslint-disable-next-line filenames/match-regex
import React from 'react';
import { shallow } from 'enzyme';
import DatePickerInput from './DatePickerInput';

describe('Pruebas en el componente DatePickerInput', () => {
  it('Debe mostrar dos líneas y un orden dentro del componente', () => {
    const wrap = shallow(<DatePickerInput  />);
    wrap.find('button.svg-button-input-small').simulate('click');
    expect(wrap.find('.DayPicker').exists()).toBeTruthy();
    // expect(wrap.find('h2.text-secondary').text()).toEqual('world');
  });
});
