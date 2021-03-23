// eslint-disable-next-line filenames/match-regex
import React from 'react';
import { shallow } from 'enzyme';
import BackOfficeVideo from './BackOfficeVideo';

describe('Pruebas en el componente de NextStepTable', () => {
  it('Debe mostrar la clase del componente', () => {
    // arrange
    const wrap = shallow(<BackOfficeVideo width="210" idVideo={1} src="https://www.youtube.com/embed/PMP6zcY6Fcc" />);

    // act
    const claseTable = wrap.find('div.col-xs-12').exists();

    // assert
    expect(claseTable).toBe(true);
  });
});
