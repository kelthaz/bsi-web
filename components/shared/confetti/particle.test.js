import React from 'react';
import { mount } from 'enzyme';
import Particle from './Particle';

describe('Pruebas en el componente Particle', () => {
  it('Debe mostrar el svg del confetti', () => {
    // arrange
    const wrap = mount(<Particle />);
    // assert
    expect(wrap.find('svg').exists()).toBeTruthy();
  });
});
