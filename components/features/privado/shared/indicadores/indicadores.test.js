import React from 'react';
import { shallow } from 'enzyme';
import Indicadores from './Indicadores';

describe('Pruebas en el componente Indicadores', () => {
  it('Debe mostrar la clase del componente', () => {
    // arrange
    const wrap = shallow(<Indicadores />);

    // act
    const claseProp = wrap.find('div.card-simple-blue-light').exists();

    // assert
    expect(claseProp).toBe(true);
  });
});
