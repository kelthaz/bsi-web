// eslint-disable-next-line filenames/match-regex
import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('Pruebas en el componente ProgressBar', () => {
  it('Debe mostrar el value del componente', () => {
    // arrange
    const props = { className: 'progress' };
    const wrap = shallow(<ProgressBar {...props} />);

    // act
    const claseProp = wrap.find('progress.progress').exists();

    // assert
    expect(claseProp).toBe(true);
  });
});
