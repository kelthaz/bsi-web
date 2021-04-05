import { shallow } from 'enzyme';
import React from 'react';
import SelectorFilas from './SelectorFilas';

describe('Pruebas en el componente Accordion', () => {

  it('Debe de mostrarse correctamente el componente', () => {
    // arrange
    const onChange = jest.fn();
    const props = { rowsPerPage: 10, currentPage: 1, totalRows: 12, onChange };
    // act
    const wrapper = shallow(<SelectorFilas {...props} />);
    // assert
    expect(wrapper).toMatchSnapshot();
  });
});
