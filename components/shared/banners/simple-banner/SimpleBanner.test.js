// eslint-disable-next-line filenames/match-regex
import React from 'react';
import { mount } from 'enzyme';
import SimpleBanner from './SimpleBanner';

describe('Pruebas en el componente SimpleBanner', () => {
  it('Debe contener la clase y el contenido', () => {
    const wrap = mount(
      <SimpleBanner className="test">
        Test
      </SimpleBanner>,
    );
    expect(wrap.find('div.test').exists()).toBe(true);
    expect(wrap.find('div#banner-content').text()).toEqual('Test');
  });

});
