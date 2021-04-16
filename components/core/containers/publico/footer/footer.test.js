import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Pruebas en el componente Footer', () => {
  it('Debe mostrar el footer', () => {
    // arrange
    const wrap = shallow(<Footer />);
    // assert
    expect(wrap.find('footer').exists()).toBeTruthy();
  });
});
