// eslint-disable-next-line filenames/match-regex
import React from 'react';
import { shallow } from 'enzyme';
import TitleSection from './TitleSection';

describe('Pruebas en el componente TitleSection', () => {
  it('Debe mostrar dos líneas y un orden dentro del componente', () => {
    const wrap = shallow(<TitleSection orden="1" linea1="Hello" linea2="world" />);
    expect(wrap.find('h2.text-primary').text()).toEqual('Hello');
    expect(wrap.find('h2.text-secondary').text()).toEqual('world');
  });
  it('Debe mostrar dos líneas y un orden dentro del componente', () => {
    const wrap = shallow(<TitleSection inverted orden="1" linea1="Hello" linea2="world" />);
    expect(wrap.find('h2').first().text()).toEqual('1');
  });
});
