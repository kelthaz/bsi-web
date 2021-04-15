import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { act } from 'react-dom/test-utils';
import storeTest from '../../../../../redux/storeTest';
import PasoUnoDatosPersonales from './PasoUnoDatosPersonales';
import { PASO_DOS_DATOS_PERSONA_ROUTE } from '../../../../../constants/routes/solicitud/persona';
import ModalActualizar from '../../../../core/containers/solicitud/modal-actualizar/ModalActualizar';

describe('Pruebas en el componente PasoUnoDatosPersonales', () => {
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
        <PasoUnoDatosPersonales validate={false} />
        <ModalActualizar />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  test('Debe de guardar en el reducer el nuevo paso y enviarlo al siguiente paso', async () => {
    // arrange
    const {
      solicitud: { currentStep },
    } = store.getState();
    const wrapper = mount(
      <Provider store={store}>
        <PasoUnoDatosPersonales validate />
      </Provider>
    );
    const form = wrapper.find('form');
    const primerNombre = wrapper.find('input').find({ name: 'primerNombre' });
    const primerApellido = wrapper.find('input').find({ name: 'primerApellido' });
    // act
    await act(async () => {
      primerNombre.simulate('change', {
        target: { value: 'alessa', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });
    await act(async () => {
      primerApellido.simulate('change', {
        target: { value: 'bolivar', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });
    await act(async () => {
      form.simulate('submit');
    });

    const {
      solicitud: { datosPersonales },
    } = store.getState();
    // assert
    expect(datosPersonales.primerNombre).toEqual(wrapper.find('input').find({ name: 'primerNombre' }).prop('value'));
    expect(datosPersonales.primerApellido).toEqual(
      wrapper.find('input').find({ name: 'primerApellido' }).prop('value')
    );
    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso + 1);
    expect(store.getState().solicitud.currentStep.valipStep).toBe(currentStep.valipStep + 1);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(PASO_DOS_DATOS_PERSONA_ROUTE);
    wrapper.unmount();
  });

  test('Debe de mantener el paso anterior en el reducer y enviarlo al siguiente paso', async () => {
    // arrange
    const {
      solicitud: { currentStep },
    } = store.getState();

    const wrapper = mount(
      <Provider store={store}>
        <PasoUnoDatosPersonales validate={false} />
        <ModalActualizar />
      </Provider>
    );

    const form = wrapper.find('form');
    const primerNombre = wrapper.find('input').find({ name: 'primerNombre' });
    const primerApellido = wrapper.find('input').find({ name: 'primerApellido' });
    // act
    await act(async () => {
      primerNombre.simulate('change', {
        target: { value: 'santiago', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });
    await act(async () => {
      primerApellido.simulate('change', {
        target: { value: 'perez', selectionStart: 0, setSelectionRange: jest.fn() },
      });
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
    expect(datosPersonales.primerNombre).toEqual(wrapper.find('input').find({ name: 'primerNombre' }).prop('value'));
    expect(datosPersonales.primerApellido).toEqual(
      wrapper.find('input').find({ name: 'primerApellido' }).prop('value')
    );
    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso);
    expect(store.getState().solicitud.currentStep.valipStep).toBe(currentStep.valipStep);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(PASO_DOS_DATOS_PERSONA_ROUTE);
    wrapper.unmount();
  });
});
