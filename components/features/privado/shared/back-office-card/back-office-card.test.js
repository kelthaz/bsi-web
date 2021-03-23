import { shallow } from 'enzyme';
import React from 'react';
import BackOfficeCard from './BackOfficeCard';

describe('Pruebas en el componente cards del backOffice', () => {
  test('Debe de mostrarse correctamente el componente', () => {
    // arrange
    const props = { iconoAgendar: true, title: 'Prueba del titulo', subTitle: 'Prueba del subtitle' };
    // act
    const wrapper = shallow(<BackOfficeCard {...props} />);
    // assert
    expect(wrapper).toMatchSnapshot();
  });
});
