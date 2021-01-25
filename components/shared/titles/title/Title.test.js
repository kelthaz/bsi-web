// eslint-disable-next-line filenames/match-regex
import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('Pruebas en el componente Title', () => {
  it('Debe mostrar dos líneas dentro del componente', () => {
    const wrap = shallow(<Title linea1="Hello" linea2="world" />);
    expect(wrap.find('h2.text-primary').text()).toEqual('Hello');
    expect(wrap.find('h2.text-secondary').text()).toEqual('world');
  });

  it('Debe mostrar una línea dentro del componente', () => {
    const wrap = shallow(<Title linea1="Hello world" />);
    expect(wrap.find('h2.text-primary').text()).toEqual('Hello world');
  });
});
