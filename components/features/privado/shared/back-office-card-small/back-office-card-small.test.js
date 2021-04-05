import { shallow } from 'enzyme';
import React from 'react';
import BackOfficeCardSmall from './BackOfficeCardSmall';

describe('Pruebas en el componente cards del backOffice small', () => {
  test('Debe de mostrarse correctamente el componente', () => {
    // arrange
    const props = { iconoLista: true, title: 'Prueba del titulo', subTitle: 'Prueba del subtitle' };
    // act
    const wrapper = shallow(<BackOfficeCardSmall {...props} />);
    // assert
    expect(wrapper).toMatchSnapshot();
  });
});
