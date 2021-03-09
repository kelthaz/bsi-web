import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import storeTest from '../../../../../redux/storeTest';
import GranSaltoDatosPersonales from './GranSaltoDatosPersonales';
import { PASO_UNO_DATOS_PERSONA_ROUTE } from '../../../../../constants/routes/solicitud/persona';

describe('Pruebas en el componente GranSaltoDatosPersonales', () => {
  const store = storeTest();

  const push = jest.fn();
  useRouter.mockImplementation(() => ({ push }));

  const wrapper = mount(
    <Provider store={store}>
      <GranSaltoDatosPersonales validate />
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
    const {
      solicitud: { currentStep },
    } = store.getState();
    const comencemos = wrapper.find('button');
    // act
    comencemos.simulate('click');
    // assert
    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso + 1);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(PASO_UNO_DATOS_PERSONA_ROUTE);
  });

  test('Debe de guardar en el reducer el nuevo paso y enviarlo al siguiente paso', async () => {
    // arrange
    const {
      solicitud: { currentStep },
    } = store.getState();

    const wrap = mount(
      <Provider store={store}>
        <GranSaltoDatosPersonales validate={false} />
      </Provider>
    );
    const comencemos = wrap.find('button');
    // act
    comencemos.simulate('click');
    // assert
    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(PASO_UNO_DATOS_PERSONA_ROUTE);
  });
});
