import React from 'react';
import { mount } from 'enzyme';
import AsignarCasos from './AsignarCasos';
import useSearchEngine from '../../../../../hooks/useSearchEngine';

jest.mock('../../../../../hooks/useSearchEngine', () => jest.fn());

describe('Pruebas en el componente AsignarCasos', () => {

  beforeEach(() => {
    useSearchEngine.mockReturnValue([[{text: 'Johan Garces'}]]);
    jest.clearAllMocks();
  });

  it('Debe actualizar el ejecutivo', () => {
    // arrange
    const wrap = mount(<AsignarCasos />);
    // act
    wrap.find('button.btn-medium-secondary').simulate('click');
    wrap.find('input').simulate('change', { target: { value: 'Johan' } });
    wrap.find('li').find('button').at(0).simulate('click');
    // assert
    expect(wrap.find('p.body2').first().text()).toContain('Johan');
  });
});
