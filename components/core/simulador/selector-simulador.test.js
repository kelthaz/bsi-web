import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import SelectorSimulador from './SelectorSimulador';
import storeTest from '../../../redux/storeTest';
import SimuladorRepositorio from '../../../services/simulador/simulador.repositorio';

jest.mock('../../../services/simulador/simulador.repositorio');

describe('Pruebas en el componente SelectorSimulador', () => {
  const catalago = [
    {
      id: 1,
      categoria: 'monto',
      parametrosCatalogo: [
        {
          descripcion: 'min',
          valor: 300000,
        },
        {
          descripcion: 'max',
          valor: 12000000,
        },
        {
          descripcion: 'step',
          valor: 100000,
        },
      ],
    },
    {
      id: 2,
      categoria: 'plazo',
      parametrosCatalogo: [
        {
          descripcion: '12 meses',
          valor: 12,
        },
        {
          descripcion: '18 meses',
          valor: 18,
        },
        {
          descripcion: '24 meses',
          valor: 24,
        },
        {
          descripcion: '30 meses',
          valor: 30,
        },
        {
          descripcion: '36 meses',
          valor: 36,
        },
      ],
    },
    {
      id: 3,
      categoria: 'periodicidad',
      parametrosCatalogo: [
        {
          descripcion: 'Mensuales',
          valor: 1,
        },
        {
          descripcion: 'Bimestrales',
          valor: 2,
        },
      ],
    },
    {
      id: 4,
      categoria: 'antiguedad',
      parametrosCatalogo: [
        {
          descripcion: 'Menos de 2 años',
          valor: 1,
        },
        {
          descripcion: 'Más de 2 años',
          valor: 2,
        },
      ],
    },
    {
      id: 5,
      categoria: 'venta',
      parametrosCatalogo: [
        {
          descripcion: 'Menos de $2 MDP',
          valor: 1,
        },
        {
          descripcion: 'Más de $2 MDP',
          valor: 2,
        },
      ],
    },
  ];

  const resultSimulador = {
    tasaOrdinaria: '25.52%',
    tasaMoratoria: '50%',
    comisionApertura: '3%',
    cat: '29.2%',
    pago: '$40,036.69',
  };
  const resultSimuladorTabla = [
    {
      numeroAmortizacion: 'Disposición',
      fecha: '05/mar/2021',
      capital: '-',
      interes: '-',
      saldo: '$1,000,000.00',
      pagoMensual: '-',
    },
    {
      numeroAmortizacion: '1',
      fecha: '05/abr/2021',
      capital: '$18,058.98',
      interes: '$21,977.71',
      saldo: '$981,941.02',
      pagoMensual: '$40,036.69',
    },
  ];

  const store = storeTest();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrarse correctamente el componente', () => {
    const wrap = mount(
      <Provider store={store}>
        <SelectorSimulador catalogo={catalago} />
      </Provider>
    );
    expect(wrap).toMatchSnapshot();
  });

  test('Debe seleccionar varios selects, disparar el submit y actualizar el estado del reducer', async () => {
    // arrange
    const handleSimular = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <SelectorSimulador catalogo={catalago} handleSimular={handleSimular} />
      </Provider>
    );

    await SimuladorRepositorio.postSimulador.mockResolvedValue({ data: resultSimulador });
    await SimuladorRepositorio.postSimuladorTabla.mockResolvedValue({ data: resultSimuladorTabla });

    const plazo = wrapper.find({ name: 'plazo' }).find('.item');
    const periodicidad = wrapper.find({ name: 'periodicidad' }).find('.item');
    const aniosEmpresa = wrapper.find({ name: 'aniosEmpresa' }).find('.item');
    // act

    await act(async () => {
      plazo.at(1).simulate('click');
    });
    await act(async () => {
      periodicidad.at(1).simulate('click');
    });
    await act(async () => {
      aniosEmpresa.at(1).simulate('click');
    });
    await act(async () => {
      wrapper.find('form').simulate('submit');
    });
    const { simulador } = store.getState();

    // assert
    expect(handleSimular).toHaveBeenCalledTimes(1);
    expect(simulador.dataSimulador.plazo.label).toEqual(plazo.at(1).text());
    expect(simulador.dataSimulador.periodicidad.label).toEqual(periodicidad.at(1).text());
    expect(simulador.dataSimulador.aniosEmpresa.label).toEqual(aniosEmpresa.at(1).text());
    expect(simulador.showResult).toBe(true);
    expect(simulador.resultSimulador).toEqual(resultSimulador);
    expect(simulador.resultSimuladorTabla).toEqual(resultSimuladorTabla);
  });

  test('Debe seleccionar varios selects, lanzar el submit, luego cambiar un select y luego ocultar el resultado', async () => {
    // arrange
    const wrapper = mount(
      <Provider store={store}>
        <SelectorSimulador catalogo={catalago} />
      </Provider>
    );

    await SimuladorRepositorio.postSimulador.mockResolvedValue({ data: resultSimulador });
    await SimuladorRepositorio.postSimuladorTabla.mockResolvedValue({ data: resultSimuladorTabla });

    const plazo = wrapper.find({ name: 'plazo' }).find('.item');
    const periodicidad = wrapper.find({ name: 'periodicidad' }).find('.item');
    const aniosEmpresa = wrapper.find({ name: 'aniosEmpresa' }).find('.item');
    // act

    await act(async () => {
      plazo.at(1).simulate('click');
    });
    await act(async () => {
      periodicidad.at(1).simulate('click');
    });
    await act(async () => {
      aniosEmpresa.at(1).simulate('click');
    });
    await act(async () => {
      wrapper.find('form').simulate('submit');
    });
    await act(async () => {
      plazo.at(2).simulate('click');
    });
    const { simulador } = store.getState();

    // assert
    expect(simulador.showResult).toBe(false);
  });
});
