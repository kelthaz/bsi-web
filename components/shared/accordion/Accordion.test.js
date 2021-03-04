import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';
import '@testing-library/jest-dom';

describe('Pruebas en el componente Accordion', () => {
  test('Debe crear la prueba instantanea', () => {
    // arrange
    const props = {
      title: 'Acerca de BanCoppel',
      expanded: false,
      color: 'white',
      icon: 'arrow',
    };
    // act
    const wrap = shallow(
      <Accordion {...props}>
        <h1>Welcome to Next.js!</h1>
      </Accordion>
    );
    // assert
    expect(wrap).toMatchSnapshot();
  });

  test('Debe mostrar Welcome to Next.js! dentro del componente', () => {
    // arrange
    const props = {
      title: 'Acerca de BanCoppel',
      expanded: false,
      color: 'white',
      icon: 'arrow',
    };
    const wrapper = shallow(
      <Accordion {...props}>
        <h1>Welcome to Next.js!</h1>
      </Accordion>
    );
    // act
    const h1 = wrapper.find('h1').text();
    // assert
    expect(h1).toEqual('Welcome to Next.js!');
  });

  test('Debe mostrar de abrirse el acordeon', () => {
    // arrange
    const props = {
      title: 'Acerca de BanCoppel',
      expanded: false,
      color: 'white',
      icon: 'arrow',
    };
    const wrapper = shallow(
      <Accordion {...props}>
        <h1>Welcome to Next.js!</h1>
      </Accordion>
    );
    // act
    wrapper.find('button').simulate('click');
    const className = wrapper.find('.panel').prop('className');
    // assert
    expect(className.includes('panel-active')).toBe(true);
  });

  test('Debe mostrar de cerrar el acordeon', () => {
    // arrange
    const props = {
      title: 'Acerca de BanCoppel',
      expanded: true,
      color: 'blue',
      icon: 'arrow',
    };
    const wrapper = shallow(
      <Accordion {...props}>
        <h1>Welcome to Next.js!</h1>
      </Accordion>
    );
    // act
    wrapper.find('button').simulate('click');
    const className = wrapper.find('.panel').prop('className');
    // assert
    expect(className.includes('panel-active')).toBe(false);
  });
});
