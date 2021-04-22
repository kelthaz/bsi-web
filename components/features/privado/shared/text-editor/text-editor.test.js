// eslint-disable-next-line filenames/match-regex
import React from 'react';
import { shallow } from 'enzyme';
import TextEditor from './TextEditor';

describe('Pruebas en el componente TextEditor', () => {
  it('Debe mostrar la clase del componente', () => {
    // arrange
    const wrap = shallow(<TextEditor />);

    // act
    const claseProp = wrap.find('div.card-simple-blue-light').exists();

    // assert
    expect(claseProp).toBe(true);
  });
});
