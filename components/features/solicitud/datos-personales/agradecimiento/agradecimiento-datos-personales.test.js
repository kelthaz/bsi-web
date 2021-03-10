import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import storeTest from '../../../../../redux/storeTest';
import AgradecimientoDatosPersonales from './AgradecimientoDatosPersonales';

describe('Pruebas en el componente AgradecimientoDatosPersonales', () => {
  test('Debe de mostrarse correctamente el componente', () => {
    const store = storeTest();

    const wrapper = mount(
      <Provider store={store}>
        <AgradecimientoDatosPersonales />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrarse el mensaje de agradecimiento con el nombre', () => {
    // arrange
    const store = storeTest();
    const nombreEsperado = 'SERGIO';
    const {
      solicitud: { datosPersonales },
    } = store.getState();
    datosPersonales.primerNombre = nombreEsperado;

    const wrapper = mount(
      <Provider store={store}>
        <AgradecimientoDatosPersonales />
      </Provider>
    );
    // act
    const h2 = wrapper.find('h2').text();
    // assert
    expect(h2.includes(nombreEsperado)).toBe(true);
  });
});
