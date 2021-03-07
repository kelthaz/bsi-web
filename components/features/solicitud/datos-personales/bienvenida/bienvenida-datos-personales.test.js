import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import storeTest from '../../../../../redux/storeTest';
import BienvenidaDatosPersonales from './BienvenidaDatosPersonales';
import { GRAN_SALTO_DATOS_PERSONA_ROUTE } from '../../../../../constants/routes/solicitud/persona';
import { SIMULADOR_ROUTE } from '../../../../../constants/routes/publico/publico';

describe('Pruebas en el componente BienvenidaDatosPersonales', () => {
  const store = storeTest();
  const {
    simulador,
    solicitud: { currentStep },
  } = store.getState();
  simulador.dataSimulador.plazo = { label: '12 meses' };
  simulador.dataSimulador.periodicidad = { label: 'Mensuales' };
  simulador.dataSimulador.aniosEmpresa = { label: 'Menos de 2 años' };
  simulador.dataSimulador.ventasAnio = { label: 'Menos de $2 MDP' };
  const push = jest.fn();
  useRouter.mockImplementation(() => ({ push }));

  const wrapper = mount(
    <Provider store={store}>
      <BienvenidaDatosPersonales />
    </Provider>
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrarse correctamente el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de guardar en el reducer el nuevo paso y enviarlo al siguiente paso', async () => {
    // arrange
    const comienzaSolicitud = wrapper.find('button').at(1);
    // act
    comienzaSolicitud.simulate('click');
    // assert
    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso + 1);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(GRAN_SALTO_DATOS_PERSONA_ROUTE);
  });

  test('Debe  enviarlo al simulador', async () => {
    // arrange
    const cambiaCredito = wrapper.find('button').at(0);
    // act
    cambiaCredito.simulate('click');
    // assert
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(SIMULADOR_ROUTE);
  });
});
