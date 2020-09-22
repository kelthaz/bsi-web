// eslint-disable-next-line filenames/match-regex
import React from 'react';
import { mount } from 'enzyme';
import Accordion from './Accordion';

describe('Pruebas en el componente Accordion', () => {
  it('Debe mostrar Welcome to Next.js! dentro del componente', () => {
    const wrap = mount(
      <Accordion title="Acerca de BanCoppel" expanded={false} type="white">
        <h1>Welcome to Next.js!</h1>
      </Accordion>
    );
    expect(wrap.find('h1').text()).toEqual('Welcome to Next.js!');
  });
});
