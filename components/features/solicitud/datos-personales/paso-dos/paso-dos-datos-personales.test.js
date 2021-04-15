import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { act } from 'react-dom/test-utils';
import storeTest from '../../../../../redux/storeTest';
import PasoDosDatosPersonales from './PasoDosDatosPersonales';
import { PASO_TRES_DATOS_PERSONA_ROUTE } from '../../../../../constants/routes/solicitud/persona';
import { FISICA, MORAL } from '../../../../../constants/persona';
import ModalActualizar from '../../../../core/containers/solicitud/modal-actualizar/ModalActualizar';

describe('Pruebas en el componente PasoDosDatosPersonales', () => {
  const store = storeTest();
  const push = jest.fn();
  const beforePopState = jest.fn();
  useRouter.mockImplementation(() => ({ push, beforePopState }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrarse correctamente el componente', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <PasoDosDatosPersonales validate={false} />
        <ModalActualizar />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  test('Debe de guardar en el reducer el nuevo paso, tipo de persona FISICA y enviarlo al siguiente paso', async () => {
    // arrange
    const {
      solicitud: { currentStep },
    } = store.getState();
    const wrapper = mount(
      <Provider store={store}>
        <PasoDosDatosPersonales validate />
      </Provider>
    );
    const form = wrapper.find('form');
    const personaFisica = wrapper.find('button').at(0);
    // act
    await act(async () => {
      personaFisica.simulate('click');
    });

    await act(async () => {
      form.simulate('submit');
    });

    const {
      solicitud: { datosPersonales },
    } = store.getState();
    // assert
    expect(datosPersonales.tipoPersona).toEqual(FISICA);
    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso + 1);
    expect(store.getState().solicitud.currentStep.valipStep).toBe(currentStep.valipStep + 1);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(PASO_TRES_DATOS_PERSONA_ROUTE);
    wrapper.unmount();
  });

  test('Debe de guardar en el reducer el nuevo paso, tipo de persona MORAL y enviarlo al siguiente paso', async () => {
    // arrange
    const {
      solicitud: { currentStep },
    } = store.getState();
    const wrapper = mount(
      <Provider store={store}>
        <PasoDosDatosPersonales validate />
      </Provider>
    );
    const form = wrapper.find('form');
    const personaMoral = wrapper.find('button').at(1);
    // act
    await act(async () => {
      personaMoral.simulate('click');
    });

    await act(async () => {
      form.simulate('submit');
    });

    const {
      solicitud: { datosPersonales },
    } = store.getState();
    // assert
    expect(datosPersonales.tipoPersona).toEqual(MORAL);
    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso + 1);
    expect(store.getState().solicitud.currentStep.valipStep).toBe(currentStep.valipStep + 1);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(PASO_TRES_DATOS_PERSONA_ROUTE);
    wrapper.unmount();
  });

  test('Debe de mantener el paso anterior en el reducer y enviarlo al siguiente paso', async () => {
    // arrange
    const {
      solicitud: { currentStep },
    } = store.getState();

    const wrapper = mount(
      <Provider store={store}>
        <PasoDosDatosPersonales validate={false} />
        <ModalActualizar />
      </Provider>
    );

    const form = wrapper.find('form');
    const personaMoral = wrapper.find('button').at(1);
    const personaFisica = wrapper.find('button').at(0);
    // act
    await act(async () => {
      personaMoral.simulate('click');
    });
    await act(async () => {
      personaFisica.simulate('click');
    });

    await act(async () => {
      form.simulate('submit');
    });

    wrapper.update();

    await act(async () => {
      wrapper.find('.btn-medium-secondary').simulate('click');
    });

    const {
      solicitud: { datosPersonales },
    } = store.getState();

    // assert
    expect(datosPersonales.tipoPersona).toEqual(FISICA);
    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso);
    expect(store.getState().solicitud.currentStep.valipStep).toBe(currentStep.valipStep);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(PASO_TRES_DATOS_PERSONA_ROUTE);
    wrapper.unmount();
  });
});
