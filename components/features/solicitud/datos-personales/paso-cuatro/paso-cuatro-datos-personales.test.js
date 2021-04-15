import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { act } from 'react-dom/test-utils';
import storeTest from '../../../../../redux/storeTest';
import PasoCuatroDatosPersonales from './PasoCuatroDatosPersonales';
import { PASO_CINCO_DATOS_PERSONA_ROUTE } from '../../../../../constants/routes/solicitud/persona';
import EmailageRepositorio from '../../../../../services/solicitud/emailage.repositorio';
import ModalActualizar from '../../../../core/containers/solicitud/modal-actualizar/ModalActualizar';

jest.mock('../../../../../services/solicitud/emailage.repositorio');

describe('Pruebas en el componente PasoCuatroDatosPersonales', () => {
  const push = jest.fn();
  const beforePopState = jest.fn();
  useRouter.mockImplementation(() => ({ push, beforePopState }));

  const emailage = {
    email: 'jesus.gomezo@udea.edu.com',
    fraudRisk: '500 Moderate',
    emailExists: 'Yes',
    domainExists: 'Yes',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrarse correctamente el componente', async () => {
    const store = storeTest();
    const wrapper = mount(
      <Provider store={store}>
        <PasoCuatroDatosPersonales validate />
        <ModalActualizar />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  test('Debe de guardar en el reducer el nuevo paso, celular, correo y enviarlo al siguiente paso, como persona Fisica', async () => {
    // arrange
    const store = storeTest();
    const {
      solicitud: { currentStep },
    } = store.getState();
    const wrapper = mount(
      <Provider store={store}>
        <PasoCuatroDatosPersonales validate />
        <ModalActualizar />
      </Provider>
    );

    await EmailageRepositorio.postEmailScore.mockResolvedValue({ data: emailage });

    const form = wrapper.find('form');
    const celular = wrapper.find('input').find({ name: 'celular' });
    const correo = wrapper.find('input').find({ name: 'correo' });
    // act
    await act(async () => {
      celular.simulate('change', {
        target: { value: '33-3333-3333', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      correo.simulate('change', {
        target: { value: 'jesus.gomezo@udea.edu.com', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      form.simulate('submit');
    });

    const {
      solicitud: { datosPersonales },
    } = store.getState();
    // // assert
    expect(datosPersonales.celular).toEqual(wrapper.find('input').find({ name: 'celular' }).prop('value'));
    expect(datosPersonales.correo).toEqual(wrapper.find('input').find({ name: 'correo' }).prop('value'));

    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso + 1);
    expect(store.getState().solicitud.currentStep.valipStep).toBe(currentStep.valipStep + 1);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(PASO_CINCO_DATOS_PERSONA_ROUTE);
    wrapper.unmount();
  });

  test('Debe de no guardar nombreEmpresa, sector, giro, descripcionEmpresa y no enviarlo al siguiente paso, como persona Moral', async () => {
    // arrange
    const store = storeTest();
    const {
      solicitud: { currentStep },
    } = store.getState();
    const wrapper = mount(
      <Provider store={store}>
        <PasoCuatroDatosPersonales validate />
        <ModalActualizar />
      </Provider>
    );

    await EmailageRepositorio.postEmailScore.mockRejectedValue({
      response: {
        data: { message: ['Ocurrio un error al consultar el correo'] },
      },
    });

    const form = wrapper.find('form');
    const celular = wrapper.find('input').find({ name: 'celular' });
    const correo = wrapper.find('input').find({ name: 'correo' });
    // act
    await act(async () => {
      celular.simulate('change', {
        target: { value: '33-3333-3333', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      correo.simulate('change', {
        target: { value: 'jesus.gomezo@udea.edu.com', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      form.simulate('submit');
    });

    const {
      solicitud: { datosPersonales },
    } = store.getState();
    // // assert
    expect(datosPersonales.celular).not.toEqual(wrapper.find('input').find({ name: 'celular' }).prop('value'));
    expect(datosPersonales.correo).not.toEqual(wrapper.find('input').find({ name: 'correo' }).prop('value'));

    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso);
    expect(store.getState().solicitud.currentStep.valipStep).toBe(currentStep.valipStep);
    expect(push).toHaveBeenCalledTimes(0);
    wrapper.unmount();
  });

  test('Debe de mantener el paso anterior en el reducer y actualizar los datos que se cambiaron y enviarlo al siguiente paso', async () => {
    // arrange
    const store = storeTest();
    const {
      solicitud: { currentStep },
    } = store.getState();
    const wrapper = mount(
      <Provider store={store}>
        <PasoCuatroDatosPersonales validate={false} />
        <ModalActualizar />
      </Provider>
    );

    await EmailageRepositorio.postEmailScore.mockResolvedValue({ data: emailage });

    const form = wrapper.find('form');
    const celular = wrapper.find('input').find({ name: 'celular' });
    const correo = wrapper.find('input').find({ name: 'correo' });
    // act
    await act(async () => {
      celular.simulate('change', {
        target: { value: '33-3333-3333', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      correo.simulate('change', {
        target: { value: 'jesus.gomezo@udea.edu.com', selectionStart: 0, setSelectionRange: jest.fn() },
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

    // assert//
    expect(datosPersonales.celular).toEqual(wrapper.find('input').find({ name: 'celular' }).prop('value'));
    expect(datosPersonales.correo).toEqual(wrapper.find('input').find({ name: 'correo' }).prop('value'));
    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso);
    expect(store.getState().solicitud.currentStep.valipStep).toBe(currentStep.valipStep);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(PASO_CINCO_DATOS_PERSONA_ROUTE);
    wrapper.unmount();
  });
});
