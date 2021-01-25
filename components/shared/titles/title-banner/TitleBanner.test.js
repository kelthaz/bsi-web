// eslint-disable-next-line filenames/match-regex
import React from 'react';
import { shallow } from 'enzyme';
import TitleBanner from './TitleBanner';

describe('Pruebas en el componente TitleBanner', () => {
  it('Debe mostrar dos líneas y la descripción dentro del componente', () => {
    const wrap = shallow(<TitleBanner linea1="Hello" linea2="world" description="Hello world!" />);
    expect(wrap.find('h1.color-white').text()).toEqual('Hello');
    expect(wrap.find('h1.color-yellow').text()).toEqual('world');
    expect(wrap.find('p.body1').text()).toEqual('Hello world!');
  });
});
