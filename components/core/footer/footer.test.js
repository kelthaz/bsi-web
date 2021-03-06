import React from 'react';
import * as nextRouter from 'next/router';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Pruebas en el componente Footer', () => {
  it('Debe mostrar el footer', () => {
    // arrange
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({
      pathname: '/'
    }));
    const wrap = shallow(<Footer />);
    // assert
    expect(wrap.find('footer').exists()).toBeTruthy();
  });

  it('No debe mostrar el footer', () => {
    // arrange
    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({
      pathname: '/solicitud/'
    }));
    const wrap = shallow(<Footer />);
    // assert
    expect(wrap.find('footer').exists()).not.toBeTruthy();
  });
});
