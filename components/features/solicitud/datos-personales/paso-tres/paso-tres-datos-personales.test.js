import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { act } from 'react-dom/test-utils';
import storeTest from '../../../../../redux/storeTest';
import PasoTresDatosPersonales from './PasoTresDatosPersonales';
import { PASO_CUATRO_DATOS_PERSONA_ROUTE } from '../../../../../constants/routes/solicitud/persona';
import SectoresRepositorio from '../../../../../services/simulador/sectores.repositorio';
import { FISICA, MORAL } from '../../../../../constants/persona';
import ModalActualizar from '../../../../core/containers/solicitud/modal-actualizar/ModalActualizar';

jest.mock('../../../../../services/simulador/sectores.repositorio');

describe('Pruebas en el componente PasoTresDatosPersonales', () => {
  const sectores = [
    {
      id: 1,
      nombre: 'SERVICIOS PROFESIONALES Y TÉCNICO',
    },
    {
      id: 2,
      nombre: 'COMERCIO',
    },
    {
      id: 3,
      nombre: 'SERVICIOS FINANCIEROS',
    },
    {
      id: 4,
      nombre: 'CONSTRUCIÓN',
    },
    {
      id: 5,
      nombre: 'RESTO INDUSTRIA',
    },
    {
      id: 6,
      nombre: 'COMUNICACIONES Y TELECOMUNICACIONES',
    },
    {
      id: 7,
      nombre: 'TRANSPORTE',
    },
    {
      id: 8,
      nombre: 'HOTELES Y RESTAURANTES',
    },
    {
      id: 9,
      nombre: 'INDUSTRIA AUTOMOTRIZ',
    },
    {
      id: 10,
      nombre: 'INDUSTRIA QUIMICA Y FARMACÉUTICA',
    },
    {
      id: 11,
      nombre: 'INDUSTRIA MATERIALES DE CONSTRUCCIÓN',
    },
    {
      id: 12,
      nombre: 'INDUSTRIA TEXTIL Y DE CALZADO',
    },
    {
      id: 13,
      nombre: 'SALUD',
    },
  ];

  const giros = [
    {
      id: 1,
      nombre: 'ARRENDAMIENTO DE INMUEBLES COMERCIALES E INDUSTRIALES.',
    },
    {
      id: 2,
      nombre: 'ESTACIONAMIENTOS Y PENSIONES PARA VEHÍCULOS',
    },
    {
      id: 3,
      nombre: 'AGENCIAS PROFESIONALES.',
    },
    {
      id: 4,
      nombre: 'DESPACHOS DE PROFESIONISTAS.',
    },
    {
      id: 5,
      nombre: 'ORGANIZACIONES Y CÁMARAS EMPRESARIALES',
    },
  ];

  const push = jest.fn();
  const beforePopState = jest.fn();
  useRouter.mockImplementation(() => ({ push, beforePopState }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrarse correctamente el componente', async () => {
    const store = storeTest();
    const wrapper = mount(
      <Provider store={store}>
        <PasoTresDatosPersonales sectores={sectores} validate />
        <ModalActualizar />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  test('Debe de guardar en el reducer el nuevo paso, nombreEmpresa, sector, giro, descripcionEmpresa y enviarlo al siguiente paso, como persona Fisica', async () => {
    // arrange
    const store = storeTest();
    const {
      solicitud: { currentStep },
    } = store.getState();
    const wrapper = mount(
      <Provider store={store}>
        <PasoTresDatosPersonales sectores={sectores} validate />
        <ModalActualizar />
      </Provider>
    );

    await SectoresRepositorio.getGiroPorSector.mockResolvedValue({ data: giros });

    const form = wrapper.find('form');
    const nombreEmpresa = wrapper.find('input').find({ name: 'nombreEmpresa' });
    const sector = wrapper.find({ name: 'sector' }).find('.item');
    const descripcionEmpresa = wrapper.find('textarea').find({ name: 'descripcionEmpresa' });
    // act
    await act(async () => {
      nombreEmpresa.simulate('change', {
        target: { value: 'Paletas don chucho', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      descripcionEmpresa.simulate('change', {
        target: { value: 'Vende paletas', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      sector.at(1).simulate('click');
    });

    wrapper.update();
    const giro = wrapper.find({ name: 'giro' }).find('.item');

    await act(async () => {
      giro.at(1).simulate('click');
    });

    await act(async () => {
      form.simulate('submit');
    });

    const {
      solicitud: { datosPersonales },
    } = store.getState();
    // // assert
    expect(datosPersonales.nombreEmpresa).toEqual(wrapper.find('input').find({ name: 'nombreEmpresa' }).prop('value'));
    expect(datosPersonales.descripcionEmpresa).toEqual(
      wrapper.find('textarea').find({ name: 'descripcionEmpresa' }).prop('value')
    );
    expect(datosPersonales.sector.label).toEqual(wrapper.find({ name: 'sector' }).find('.select-big').text());
    expect(datosPersonales.giro.label).toEqual(wrapper.find({ name: 'giro' }).find('.select-big').text());
    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso + 1);
    expect(store.getState().solicitud.currentStep.valipStep).toBe(currentStep.valipStep + 1);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(PASO_CUATRO_DATOS_PERSONA_ROUTE);
    wrapper.unmount();
  });

  test('Debe de guardar en el reducer el nuevo paso, nombreEmpresa, sector, giro, descripcionEmpresa y enviarlo al siguiente paso, como persona Moral', async () => {
    // arrange
    const store = storeTest();
    const {
      solicitud: { currentStep, datosPersonales },
    } = store.getState();
    datosPersonales.tipoPersona = MORAL;
    const wrapper = mount(
      <Provider store={store}>
        <PasoTresDatosPersonales sectores={sectores} validate />
        <ModalActualizar />
      </Provider>
    );

    await SectoresRepositorio.getGiroPorSector.mockResolvedValue({ data: giros });

    const form = wrapper.find('form');
    const razonSocial = wrapper.find('input').find({ name: 'razonSocial' });
    const tipoSociedad = wrapper.find({ name: 'tipoSociedad' }).find('.item');
    const nombreEmpresa = wrapper.find('input').find({ name: 'nombreEmpresa' });
    const rfcRepresentante = wrapper.find('input').find({ name: 'rfcRepresentante' });
    const sector = wrapper.find({ name: 'sector' }).find('.item');
    const descripcionEmpresa = wrapper.find('textarea').find({ name: 'descripcionEmpresa' });
    // act
    await act(async () => {
      razonSocial.simulate('change', {
        target: { value: 'paletitas', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      tipoSociedad.at(1).simulate('click');
    });

    await act(async () => {
      nombreEmpresa.simulate('change', {
        target: { value: 'Paletas don chucho', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      rfcRepresentante.simulate('change', {
        target: { value: 'CUPU800825569', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      descripcionEmpresa.simulate('change', {
        target: { value: 'Vende paletas', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      sector.at(1).simulate('click');
    });

    wrapper.update();
    const giro = wrapper.find({ name: 'giro' }).find('.item');

    await act(async () => {
      giro.at(1).simulate('click');
    });

    await act(async () => {
      form.simulate('submit');
    });

    const {
      solicitud: { datosPersonales: datosPersonalesAfter },
    } = store.getState();
    // // assert
    expect(datosPersonalesAfter.nombreEmpresa).toEqual(
      wrapper.find('input').find({ name: 'nombreEmpresa' }).prop('value')
    );
    expect(datosPersonalesAfter.descripcionEmpresa).toEqual(
      wrapper.find('textarea').find({ name: 'descripcionEmpresa' }).prop('value')
    );
    expect(datosPersonalesAfter.sector.label).toEqual(wrapper.find({ name: 'sector' }).find('.select-big').text());
    expect(datosPersonalesAfter.giro.label).toEqual(wrapper.find({ name: 'giro' }).find('.select-big').text());
    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso + 1);
    expect(store.getState().solicitud.currentStep.valipStep).toBe(currentStep.valipStep + 1);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(PASO_CUATRO_DATOS_PERSONA_ROUTE);
    wrapper.unmount();
  });

  test('Debe de mantener el paso anterior en el reducer y actualizar los datos que se cambiaron y enviarlo al siguiente paso como persona fisica', async () => {
    // arrange
    const store = storeTest();
    const {
      solicitud: { currentStep, datosPersonales },
    } = store.getState();
    datosPersonales.tipoPersona = FISICA;

    const wrapper = mount(
      <Provider store={store}>
        <PasoTresDatosPersonales sectores={sectores} validate={false} />
        <ModalActualizar />
      </Provider>
    );

    await SectoresRepositorio.getGiroPorSector.mockResolvedValue({ data: giros });

    const form = wrapper.find('form');
    const nombreEmpresa = wrapper.find('input').find({ name: 'nombreEmpresa' });
    const sector = wrapper.find({ name: 'sector' }).find('.item');
    const descripcionEmpresa = wrapper.find('textarea').find({ name: 'descripcionEmpresa' });

    // act
    await act(async () => {
      nombreEmpresa.simulate('change', {
        target: { value: 'Paletas don chucho', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      descripcionEmpresa.simulate('change', {
        target: { value: 'Vende paletas', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      sector.at(1).simulate('click');
    });

    wrapper.update();
    const giro = wrapper.find({ name: 'giro' }).find('.item');

    await act(async () => {
      giro.at(1).simulate('click');
    });

    await act(async () => {
      form.simulate('submit');
    });

    wrapper.update();

    await act(async () => {
      wrapper.find('.btn-medium-secondary').simulate('click');
    });

    const {
      solicitud: { datosPersonales: datosPersonalesAfter },
    } = store.getState();

    // assert
    expect(datosPersonalesAfter.nombreEmpresa).toEqual(
      wrapper.find('input').find({ name: 'nombreEmpresa' }).prop('value')
    );
    expect(datosPersonalesAfter.descripcionEmpresa).toEqual(
      wrapper.find('textarea').find({ name: 'descripcionEmpresa' }).prop('value')
    );
    expect(datosPersonalesAfter.sector.label).toEqual(wrapper.find({ name: 'sector' }).find('.select-big').text());
    expect(datosPersonalesAfter.giro.label).toEqual(wrapper.find({ name: 'giro' }).find('.select-big').text());
    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso);
    expect(store.getState().solicitud.currentStep.valipStep).toBe(currentStep.valipStep);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(PASO_CUATRO_DATOS_PERSONA_ROUTE);
    wrapper.unmount();
  });
});
