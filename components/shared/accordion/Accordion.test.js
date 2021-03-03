import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';
// import '@testing-library/jest-dom';

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
    const wrap = shallow(
      <Accordion title="Acerca de BanCoppel" expanded={false} color="white" icon="arrow">
        <h1>Welcome to Next.js!</h1>
      </Accordion>
    );
    expect(wrap.find('h1').text()).toEqual('Welcome to Next.js!');
  });
});
