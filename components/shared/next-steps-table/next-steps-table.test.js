// eslint-disable-next-line filenames/match-regex
import React from 'react';
import { shallow } from 'enzyme';
import NextStepsTable from './NextStepsTable';

describe('Pruebas en el componente de NextStepTable', () => {
  it('Debe mostrar la clase del componente', () => {
    // arrange
    const wrap = shallow(<NextStepsTable />);

    // act
    const claseTable = wrap.find('div.body2').exists();

    // assert
    expect(claseTable).toBe(true);
  });
});
