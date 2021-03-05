import React from 'react';
import { shallow } from 'enzyme';
import ChatBot from './ChatBot';

describe('Pruebas en el componente ChatBot', () => {
  it('Debe desplegar la presentación del chatbot', () => {
    // arrange
    const wrap = shallow(<ChatBot />);
    // act
    wrap.find('div[role="button"]').simulate('click');
    // assert
    expect(wrap.find('.card-simple-white-shadow').exists()).toBeTruthy();
  });

  it('Debe ocultar la presentación del chatbot', () => {
    // arrange
    const wrap = shallow(<ChatBot />);
    // act
    wrap.find('div[role="button"]').simulate('click');
    wrap.find('.d-flex.flex-row-reverse>div[role="button"]').simulate('click');
    // assert
    expect(wrap.find('.card-simple-white-shadow').exists()).not.toBeTruthy();
  });

  it('Debe desplegar el chatbot', () => {
    // arrange
    const wrap = shallow(<ChatBot />);
    const link = {
      click: jest.fn()
    };
    jest.spyOn(document, 'getElementsByClassName').mockImplementation(() => [link]);
    // act
    wrap.find('div[role="button"]').simulate('click');
    wrap.find('button').simulate('click');
    // assert
    expect(link.click).toHaveBeenCalledTimes(1);
  });

  it('Debe ocultar el chatbot caso 1', () => {
    // arrange
    const wrap = shallow(<ChatBot />);
    const link = {
      click: jest.fn()
    };
    document.getElementsByClassName = (val) => {
      if (val === 'inbenta-bot__launcher') {
        return [undefined];
      }
      return [link];
    };
    // act
    wrap.find('div[role="button"]').simulate('click');
    wrap.find('button').simulate('click');
    // assert
    expect(link.click).toHaveBeenCalledTimes(1);
  });

  it('Debe ocultar el chatbot caso 2', () => {
    // arrange
    const wrap = shallow(<ChatBot />);
    // act
    wrap.find('div[role="button"]').simulate('click');
    wrap.find('div[role="button"]').at(1).simulate('click');
    // assert
    expect(wrap.find('.card-simple-white-shadow').exists()).not.toBeTruthy();
  });

  it('Debe ocultar el chatbot caso 3', () => {
    // arrange
    const wrap = shallow(<ChatBot />);
    // act
    wrap.find('div[role="button"]').simulate('click');
    wrap.find('button').simulate('click');
    wrap.find('div[role="button"]').simulate('click');
    // assert
    expect(wrap.find('.card-simple-white-shadow').exists()).not.toBeTruthy();
  });
});
