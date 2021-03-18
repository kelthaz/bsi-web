import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import useAxiosLoader from '../../../hooks/useAxiosLoader';
import Loader from './Loader';

jest.mock('../../../hooks/useAxiosLoader', () => jest.fn());
describe('Pruebas en el componente Loader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrarse correctamente el componente', () => {
    // arrange
    useAxiosLoader.mockReturnValue([true]);
    // act
    const wrapper = shallow(<Loader />);
    // assert
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe de no mostrarse el componente', () => {
    // arrange
    useAxiosLoader.mockReturnValue([false]);
    // act
    const wrapper = shallow(<Loader />);
    // assert
    expect(wrapper.find('div').exists()).toBe(false);
  });
});
