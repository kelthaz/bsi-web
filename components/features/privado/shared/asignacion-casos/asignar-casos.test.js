import React from 'react';
import { mount } from 'enzyme';
import AsignarCasos from './AsignarCasos';

describe('Pruebas en el componente AsignarCasos', () => {
  it('Debe actualizar el ejecutivo', () => {
    // arrange
    const wrap = mount(<AsignarCasos />);
    // act
    wrap.find('button.btn-medium-secondary').simulate('click');
    wrap.find('input').simulate('change', { target: { value: 'Mateo' } });
    wrap.find('li>button').first().simulate('click');
    // assert
    expect(wrap.find('p.body2').first().text()).toContain('Mateo');
  });
});
