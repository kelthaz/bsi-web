import React from 'react';
import { useRouter } from 'next/router';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Pruebas en el componente Footer', () => {
  it('Debe mostrar el footer', () => {
    // arrange
    useRouter.mockImplementation(() => ({
      pathname: '/',
    }));
    const wrap = shallow(<Footer />);
    // assert
    expect(wrap.find('footer').exists()).toBeTruthy();
  });

  it('No debe mostrar el footer', () => {
    // arrange
    useRouter.mockImplementation(() => ({
      pathname: '/solicitud/',
    }));
    const wrap = shallow(<Footer />);
    // assert
    expect(wrap.find('footer').exists()).not.toBeTruthy();
  });
});
