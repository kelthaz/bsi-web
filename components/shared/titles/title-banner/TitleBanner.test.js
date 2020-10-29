// eslint-disable-next-line filenames/match-regex
import React from 'react';
import { mount } from 'enzyme';
import TitleBanner from './TitleBanner';

describe('Pruebas en el componente TitleBanner', () => {
  it('Debe mostrar dos líneas y la descripción dentro del componente', () => {
    const wrap = mount(
      <TitleBanner linea1="Hello" linea2="world" description="Hello world!" />,
    );
    expect(wrap.find('h1.text-primary').text()).toEqual('Hello');
    expect(wrap.find('h1.text-secondary').text()).toEqual('world');
    expect(wrap.find('p.sub').text()).toEqual('Hello world!');
  });
});
