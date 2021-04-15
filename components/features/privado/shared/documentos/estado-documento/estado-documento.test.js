import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import * as React from 'react';
import EstadoDocumento from './EstadoDocumento';

describe('Pruebas en el componente EstadoDocumento', () => {
  const onClick = jest.fn();
  const click = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe de mostrarse correctamente el componente', () => {
    // arrange
    const props = { label: 'Acta constitutiva', documento: 'acta.pdf', estadoDocumento: 9 };
    // act
    const wrapper = shallow(<EstadoDocumento {...props} />);
    // assert
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrarse el estado aprobado', () => {
    // arrange
    const props = { label: 'Acta constitutiva', documento: 'acta.pdf', estadoDocumento: 2 };
    const wrapper = shallow(<EstadoDocumento {...props} />);
    // act
    const svgAprobado = wrapper.find('SvgAprobado');
    // assert
    expect(svgAprobado.exists()).toBe(true);
  });

  test('Debe de mostrarse el estado pendiente', () => {
    // arrange
    const props = { label: 'Acta constitutiva', documento: 'acta.pdf', estadoDocumento: 3 };
    const wrapper = shallow(<EstadoDocumento {...props} />);
    // act
    const svgPendiente = wrapper.find('SvgPendiente');
    // assert
    expect(svgPendiente.exists()).toBe(true);
  });

  test('Debe de mostrarse el estado rechazado y se debe llamar la función de cambiar', () => {
    // arrange
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { click } });
    const props = { label: 'Acta constitutiva', documento: 'acta.pdf', estadoDocumento: 4, onClick };
    const wrapper = shallow(<EstadoDocumento {...props} />);
    // act
    const svgRechazado = wrapper.find('SvgRechazado');
    wrapper.find('button').simulate('click');
    // assert
    expect(svgRechazado.exists()).toBe(true);
    expect(useRefSpy).toBeCalledTimes(1);
    expect(click).toBeCalledTimes(1);
  });

  test('Debe de mostrarse un boton con el label enviado y se debera llamar la función enviada', () => {
    // arrange
    const props = {
      label: 'Acta constitutiva',
      documento: 'acta.pdf',
      estadoDocumento: 1,
      labelButton: 'Firmar',
      onClick,
    };
    const wrapper = shallow(<EstadoDocumento {...props} />);
    // act
    const buttonSubir = wrapper.find('button');
    buttonSubir.simulate('click');
    // assert
    expect(buttonSubir.text()).toBe(props.labelButton);
    expect(onClick).toBeCalledTimes(1);
  });

  test('Debe de mostrarse un boton el boton de subir archivo', () => {
    // arrange
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { click } });
    const props = { label: 'Acta constitutiva', documento: 'acta.pdf', estadoDocumento: 0, onClick };
    const wrapper = shallow(<EstadoDocumento {...props} />);
    // act
    const buttonSubir = wrapper.find('button');
    buttonSubir.simulate('click');
    // assert
    expect(buttonSubir.text()).toBe('Subir');
    expect(useRefSpy).toBeCalledTimes(1);
    expect(click).toBeCalledTimes(1);
  });

  test('Debe de llamar la función enviada cuando se cambiar de archivo', () => {
    // arrange
    const props = { label: 'Acta constitutiva', documento: 'acta.pdf', estadoDocumento: 0, onClick };
    const wrapper = shallow(<EstadoDocumento {...props} />);
    const fileInput = wrapper.find('input');
    const file = new Blob(['file contents'], { type: 'text/plain' });
    // act
    fileInput.simulate('change', { target: { files: [file] } });
    // assert
    expect(onClick).toBeCalledTimes(1);
    expect(onClick).toBeCalledWith(file);
  });

  test('Debe de llamar la función enviada cuando se cambiar de archivo', () => {
    // arrange
    const props = { label: 'Acta constitutiva', documento: 'acta.pdf', estadoDocumento: 0, onClick };
    const wrapper = shallow(<EstadoDocumento {...props} />);
    const fileInput = wrapper.find('input');
    const file = new Blob(['file contents'], { type: 'text/plain' });
    // act
    fileInput.simulate('change', { target: { files: [file] } });
    // assert
    expect(onClick).toBeCalledTimes(1);
    expect(onClick).toBeCalledWith(file);
  });
});
