import React from 'react';
import { shallow } from 'enzyme';
import ResultSimulador from './ResultSimulador';
import mexicanWeightFormatter from '../../../helpers/mexicanWeightFormatter';

describe('Pruebas en el componente ResultSimulador', () => {
  it('Debe mostrar el ResultSimulador', () => {
    // arrange
    const dataSimulador = {
      monto: 12000000,
      plazo: { label: '18 meses' },
      periodicidad: { label: 'Bimestrales' }
    };
    const resultSimulador = {
      tasaOrdinaria: '22.45%',
      comisionApertura: '3%',
      cat: '23.9%',
      pago: '$817,721.50'
    };
    const wrap = shallow(<ResultSimulador dataSimulador={dataSimulador} resultSimulador={resultSimulador} />);
    // assert
    expect(wrap.find('.row').exists()).toBeTruthy();
    expect(wrap.find('h4').at(0).text()).toEqual(mexicanWeightFormatter(dataSimulador.monto));
    expect(wrap.find('h4').at(1).text()).toEqual(`${resultSimulador.tasaOrdinaria} anual`);
    expect(wrap.find('h4').at(2).text()).toEqual(dataSimulador.plazo.label);
    expect(wrap.find('h4').at(3).text()).toEqual(resultSimulador.cat);
    expect(wrap.find('h4').at(4).text()).toEqual(resultSimulador.comisionApertura);
    expect(wrap.find('h4').at(5).text()).toEqual(dataSimulador.periodicidad.label.slice(0, dataSimulador.periodicidad.label.length - 2));
    expect(wrap.find('h4').at(6).text()).toEqual(resultSimulador.pago);
  });

  it('Debe mostrar el ResultSimulador sin monto', () => {
    // arrange
    const dataSimulador = {
      plazo: { label: '18 meses' },
      periodicidad: { label: 'Bimestrales' }
    };
    const resultSimulador = {
      tasaOrdinaria: '22.45%',
      comisionApertura: '3%',
      cat: '23.9%',
      pago: '$817,721.50'
    };
    const wrap = shallow(<ResultSimulador dataSimulador={dataSimulador} resultSimulador={resultSimulador} />);
    // assert
    expect(wrap.find('.row').exists()).toBeTruthy();
    expect(wrap.find('h4').at(0).text()).toEqual(`${resultSimulador.tasaOrdinaria} anual`);
    expect(wrap.find('h4').at(1).text()).toEqual(dataSimulador.plazo.label);
    expect(wrap.find('h4').at(2).text()).toEqual(resultSimulador.cat);
    expect(wrap.find('h4').at(3).text()).toEqual(resultSimulador.comisionApertura);
    expect(wrap.find('h4').at(4).text()).toEqual(dataSimulador.periodicidad.label.slice(0, dataSimulador.periodicidad.label.length - 2));
    expect(wrap.find('h4').at(5).text()).toEqual(resultSimulador.pago);
  });
});
