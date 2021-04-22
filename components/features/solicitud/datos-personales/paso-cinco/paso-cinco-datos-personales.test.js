import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import { act } from 'react-dom/test-utils';
import storeTest from '../../../../../redux/storeTest';
import PasoCincoDatosPersonales from './PasoCincoDatosPersonales';
import {
  AGRADECIMIENTO_DATOS_PERSONA_ROUTE,
  PASO_CINCO_DATOS_PERSONA_ROUTE,
  PASO_CUATRO_DATOS_PERSONA_ROUTE,
} from '../../../../../constants/routes/solicitud/persona';
import LoginRepositorio from '../../../../../services/login/login.repositorio';
import { regexHyphen } from '../../../../../constants/regex';
import { MORAL } from '../../../../../constants/persona';
import { AVISO_ROUTE } from '../../../../../constants/routes/publico/publico';
import { rfcInvalido } from '../../../../../constants/errors';
import ModalActualizar from '../../../../core/containers/solicitud/modal-actualizar/ModalActualizar';
import TabInformativo from '../../../../core/containers/solicitud/tab-informativo/TabInformativo';
import ListaNegraRepositorio from '../../../../../services/solicitud/listaNegra.repositorio';

jest.mock('../../../../../services/login/login.repositorio');
jest.mock('../../../../../services/solicitud/listaNegra.repositorio');

describe('Pruebas en el componente PasoCincoDatosPersonales', () => {
  const push = jest.fn();
  const beforePopState = jest.fn();
  const datoPersona = {
    primerNombre: 'JESUS',
    segundoNombre: 'D',
    primerApellido: 'DAVID',
    segundoApellido: '',
    tipoPersona: 'FISICA',
    razonSocial: 'Paletas',
    tipoSociedad: {
      value: 10,
      label: 'S.A.',
    },
    nombreEmpresa: 'PALETITAS',
    rfcRepresentante: 'JUPU800825561',
    sector: {
      value: 1,
      label: 'SERVICIOS PROFESIONALES Y TÉCNICO',
    },
    giro: {
      value: 1,
      label: 'ARRENDAMIENTO DE INMUEBLES COMERCIALES E INDUSTRIALES.',
    },
    descripcionEmpresa: 'vendo paletas',
    celular: '22-2222-2222',
    correo: 'paletas@gmail.com',
  };
  useRouter.mockImplementation(() => ({ push, beforePopState }));
  // prefetch.mockImplementation(() => {});

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrarse correctamente el componente', async () => {
    const store = storeTest();
    const wrapper = mount(
      <Provider store={store}>
        <PasoCincoDatosPersonales validate />
        <ModalActualizar />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  test('Debe de existir el link con el href hacia aviso', async () => {
    // arrange
    const store = storeTest();
    const wrapper = mount(
      <Provider store={store}>
        <PasoCincoDatosPersonales validate />
        <ModalActualizar />
      </Provider>
    );
    // act
    const link = wrapper.find({ href: AVISO_ROUTE });
    // assert
    expect(link.exists()).toBe(true);
    wrapper.unmount();
  });

  test('Debe de guardar en el reducer rfc, contrasena, confirmarContrasena, aceptoTerminos y enviarlo al paso que selecciono, como persona Fisica', async () => {
    // arrange
    const store = storeTest();

    const wrapper = mount(
      <Provider store={store}>
        <TabInformativo
          tabs={[{ path: 'documentacion', label: 'Documentación' }]}
          currentTab="datos-personales"
          currentStep={6}
          valipStep={5}
          steps={[
            { step: 4, paso: 5, tipoPersona: '', action: PASO_CUATRO_DATOS_PERSONA_ROUTE },
            { step: 5, paso: 6, tipoPersona: '', action: PASO_CINCO_DATOS_PERSONA_ROUTE },
          ]}
        />
        <PasoCincoDatosPersonales validate />
        <ModalActualizar />
      </Provider>
    );

    const rfc = wrapper.find('input').find({ name: 'rfc' });
    const contrasena = wrapper.find('input').find({ name: 'contrasena' });
    const confirmarContrasena = wrapper.find('input').find({ name: 'confirmarContrasena' });
    const aceptoTerminos = wrapper.find('input').find({ name: 'aceptoTerminos' });
    // act
    await act(async () => {
      rfc.simulate('change', {
        target: { value: 'CUPU800825569', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      contrasena.simulate('change', {
        target: { value: 'abcdefA6', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      confirmarContrasena.simulate('change', {
        target: { value: 'abcdefA6', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      aceptoTerminos.simulate('change');
    });

    await act(async () => {
      wrapper.find('button.buttons-arrow').at(0).simulate('click');
    });

    wrapper.update();

    await act(async () => {
      wrapper.find('.btn-medium-secondary').simulate('click');
    });
    const {
      solicitud: { datosPersonales },
    } = store.getState();
    // assert
    expect(datosPersonales.rfc).toEqual(wrapper.find('input').find({ name: 'rfc' }).prop('value'));
    expect(datosPersonales.contrasena).toEqual(wrapper.find('input').find({ name: 'contrasena' }).prop('value'));
    expect(datosPersonales.confirmarContrasena).toEqual(
      wrapper.find('input').find({ name: 'confirmarContrasena' }).prop('value')
    );
    expect(datosPersonales.aceptoTerminos).toEqual(
      wrapper.find('input').find({ name: 'aceptoTerminos' }).prop('checked')
    );

    expect(store.getState().solicitud.currentStep.lastStep).toBe(true);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(PASO_CUATRO_DATOS_PERSONA_ROUTE);
    wrapper.unmount();
  });

  test('Debe de llamar el servicio de registro y guardar la data del reducer y enviarlo al paso de agradecimiento, como persona Moral', async () => {
    // arrange
    const store = storeTest();
    const { solicitud, simulador } = store.getState();
    solicitud.datosPersonales = {
      ...solicitud.datosPersonales,
      ...datoPersona,
      tipoPersona: MORAL,
    };
    simulador.dataSimulador.plazo = { label: '12 meses' };
    simulador.dataSimulador.periodicidad = { label: 'Mensuales' };

    const wrapper = mount(
      <Provider store={store}>
        <PasoCincoDatosPersonales validate />
        <ModalActualizar />
      </Provider>
    );

    await LoginRepositorio.postRegistro.mockResolvedValue();
    await ListaNegraRepositorio.postListaNegra.mockResolvedValue({ data: { resultadoConsulta: '0' } });

    const form = wrapper.find('form');
    const rfc = wrapper.find('input').find({ name: 'rfc' });
    const contrasena = wrapper.find('input').find({ name: 'contrasena' });
    const confirmarContrasena = wrapper.find('input').find({ name: 'confirmarContrasena' });
    const aceptoTerminos = wrapper.find('input').find({ name: 'aceptoTerminos' });
    // act
    await act(async () => {
      rfc.simulate('change', {
        target: { value: 'CUPU800825569', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      contrasena.simulate('change', {
        target: { value: 'abcdefA6', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      confirmarContrasena.simulate('change', {
        target: { value: 'abcdefA6', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      aceptoTerminos.simulate('change');
    });

    wrapper.update();

    await act(async () => {
      form.simulate('submit');
    });

    const {
      solicitud: { datosPersonales, sincronizado },
      simulador: {
        dataSimulador: { monto, plazo, periodicidad },
      },
    } = store.getState();
    const data = {
      ...datosPersonales,
      celular: datosPersonales.celular.replace(regexHyphen, ''),
      tipoSociedad: datosPersonales.tipoSociedad?.value,
      sector: datosPersonales.sector.value,
      giro: datosPersonales.giro.value,
      rfc: wrapper.find('input').find({ name: 'rfc' }).prop('value'),
      password: wrapper.find('input').find({ name: 'contrasena' }).prop('value'),
      simulador: { monto, plazo: plazo.value, periodicidad: periodicidad.value },
    };
    delete data.aceptoTerminos;
    delete data.contrasena;
    delete data.confirmarContrasena;
    delete data.enListaNegra;

    // assert
    expect(LoginRepositorio.postRegistro).toHaveBeenCalledTimes(1);
    expect(LoginRepositorio.postRegistro).toHaveBeenCalledWith(data);
    expect(sincronizado).toBe(false);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(AGRADECIMIENTO_DATOS_PERSONA_ROUTE);
    wrapper.unmount();
  });

  test('Debe de llamar el servicio de registro y guardar la data del reducer y enviarlo al paso de agradecimiento, como persona Fisica', async () => {
    // arrange
    const store = storeTest();
    const { solicitud, simulador } = store.getState();
    solicitud.datosPersonales = {
      ...solicitud.datosPersonales,
      ...datoPersona,
    };
    simulador.dataSimulador.plazo = { label: '12 meses' };
    simulador.dataSimulador.periodicidad = { label: 'Mensuales' };

    const wrapper = mount(
      <Provider store={store}>
        <PasoCincoDatosPersonales validate />
        <ModalActualizar />
      </Provider>
    );

    await ListaNegraRepositorio.postListaNegra.mockResolvedValue({ data: { resultadoConsulta: '0' } });
    await LoginRepositorio.postRegistro.mockResolvedValue();

    const form = wrapper.find('form');
    const rfc = wrapper.find('input').find({ name: 'rfc' });
    const contrasena = wrapper.find('input').find({ name: 'contrasena' });
    const confirmarContrasena = wrapper.find('input').find({ name: 'confirmarContrasena' });
    const aceptoTerminos = wrapper.find('input').find({ name: 'aceptoTerminos' });
    // act
    await act(async () => {
      rfc.simulate('change', {
        target: { value: 'CUPU800825569', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      contrasena.simulate('change', {
        target: { value: 'abcdefA6', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      confirmarContrasena.simulate('change', {
        target: { value: 'abcdefA6', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      aceptoTerminos.simulate('change');
    });

    wrapper.update();

    await act(async () => {
      form.simulate('submit');
    });

    const {
      solicitud: { datosPersonales, sincronizado },
      simulador: {
        dataSimulador: { monto, plazo, periodicidad },
      },
    } = store.getState();
    const data = {
      ...datosPersonales,
      celular: datosPersonales.celular.replace(regexHyphen, ''),
      tipoSociedad: datosPersonales.tipoSociedad?.label,
      sector: datosPersonales.sector.value,
      giro: datosPersonales.giro.value,
      rfc: wrapper.find('input').find({ name: 'rfc' }).prop('value'),
      password: wrapper.find('input').find({ name: 'contrasena' }).prop('value'),
      simulador: { monto, plazo: plazo.value, periodicidad: periodicidad.value },
    };
    delete data.aceptoTerminos;
    delete data.contrasena;
    delete data.confirmarContrasena;
    delete data.tipoSociedad;
    delete data.razonSocial;
    delete data.enListaNegra;
    delete data.rfcRepresentante;

    // assert
    expect(LoginRepositorio.postRegistro).toHaveBeenCalledTimes(1);
    expect(LoginRepositorio.postRegistro).toHaveBeenCalledWith(data);
    expect(sincronizado).toBe(false);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(AGRADECIMIENTO_DATOS_PERSONA_ROUTE);
    wrapper.unmount();
  });

  test('Debe de llamar el servicio de registro y fallar, como persona Fisica', async () => {
    // arrange
    const store = storeTest();
    const { solicitud, simulador } = store.getState();
    solicitud.datosPersonales = {
      ...solicitud.datosPersonales,
      ...datoPersona,
    };
    simulador.dataSimulador.plazo = { label: '12 meses' };
    simulador.dataSimulador.periodicidad = { label: 'Mensuales' };

    const wrapper = mount(
      <Provider store={store}>
        <PasoCincoDatosPersonales validate />
        <ModalActualizar />
      </Provider>
    );

    await ListaNegraRepositorio.postListaNegra.mockResolvedValue({ data: { resultadoConsulta: '0' } });
    await LoginRepositorio.postRegistro.mockRejectedValue();

    const form = wrapper.find('form');
    const rfc = wrapper.find('input').find({ name: 'rfc' });
    const contrasena = wrapper.find('input').find({ name: 'contrasena' });
    const confirmarContrasena = wrapper.find('input').find({ name: 'confirmarContrasena' });
    const aceptoTerminos = wrapper.find('input').find({ name: 'aceptoTerminos' });
    // act
    await act(async () => {
      rfc.simulate('change', {
        target: { value: 'CUPU800825569', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      contrasena.simulate('change', {
        target: { value: 'abcdefA6', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      confirmarContrasena.simulate('change', {
        target: { value: 'abcdefA6', selectionStart: 0, setSelectionRange: jest.fn() },
      });
    });

    await act(async () => {
      aceptoTerminos.simulate('change');
    });

    wrapper.update();

    await act(async () => {
      form.simulate('submit');
    });

    const {
      solicitud: { datosPersonales, currentStep },
      simulador: {
        dataSimulador: { monto, plazo, periodicidad },
      },
    } = store.getState();
    const data = {
      ...datosPersonales,
      celular: datosPersonales.celular.replace(regexHyphen, ''),
      tipoSociedad: datosPersonales.tipoSociedad?.label,
      sector: datosPersonales.sector.value,
      giro: datosPersonales.giro.value,
      rfc: wrapper.find('input').find({ name: 'rfc' }).prop('value'),
      password: wrapper.find('input').find({ name: 'contrasena' }).prop('value'),
      simulador: { monto, plazo: plazo.value, periodicidad: periodicidad.value },
    };
    delete data.aceptoTerminos;
    delete data.contrasena;
    delete data.confirmarContrasena;
    delete data.tipoSociedad;
    delete data.razonSocial;
    delete data.enListaNegra;
    delete data.rfcRepresentante;
    // assert
    expect(LoginRepositorio.postRegistro).toHaveBeenCalledTimes(1);
    expect(LoginRepositorio.postRegistro).toHaveBeenCalledWith(data);
    expect(store.getState().solicitud.currentStep.paso).toBe(currentStep.paso);
    expect(store.getState().solicitud.currentStep.valipStep).toBe(currentStep.valipStep);
    expect(push).toHaveBeenCalledTimes(0);
    wrapper.unmount();
  });

  test('Debe aparecer error en el campo del rfc debido a que se cambio el tipo de persona', async () => {
    // arrange
    const store = storeTest();
    const { solicitud } = store.getState();
    solicitud.datosPersonales = {
      rfc: 'CUPU800825569',
      contrasena: 'aaaaaaA6',
      confirmarContrasena: 'aaaaaaA6',
      aceptoTerminos: true,
      tipoPersona: MORAL,
    };
    solicitud.currentStep = {
      ...solicitud.currentStep,
      lastStep: true,
    };

    let wrapper;
    await act(async () => {
      wrapper = mount(
        <Provider store={store}>
          <PasoCincoDatosPersonales validate />
          <ModalActualizar />
        </Provider>
      );
    });

    const rfc = wrapper.find('TextField').find({ name: 'rfc' });
    // act
    const error = rfc.find('span').text();
    // assert
    expect(error).toBe(rfcInvalido());
    wrapper.unmount();
  });
});
