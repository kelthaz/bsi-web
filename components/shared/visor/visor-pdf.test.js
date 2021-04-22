import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import React, { useEffect } from 'react';
import VisorPDF from './VisorPDF';

jest.mock('react-pdf', () => ({
  pdfjs: { GlobalWorkerOptions: { workerSrc: 'abc' } },
  Document: () => <div />,
  Outline: null,
  Page: () => <div />,
}));

describe('Pruebas en el componente VisorPDF', () => {
  const container = {
    current: {
      clientWidth: 450,
    },
  };
  const pageDimentions = { originalWidth: 350, originalHeight: 300 };
  const numPages = { numPages: 4 };
  test('Debe de mostrarse correctamente el componente', async () => {
    // arrange
    const wrapper = shallow(<VisorPDF container={container} />);
    // act
    const { onLoadSuccess } = wrapper.find('Document').props();
    onLoadSuccess(numPages);
    // assert
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de avanzar a la siguiente pagina', () => {
    // arrange
    const wrapper = shallow(<VisorPDF container={container} />);
    const buttonNextjs = wrapper.find('button').at(2);
    // act
    buttonNextjs.simulate('click');
    const pageNumber = wrapper.find('span').text().split('/')[0].trim();
    // assert
    expect(pageNumber).toBe('2');
  });

  test('Debe de avanzar 2 paginas y luego regresar 1 pagina', () => {
    // arrange
    const wrapper = shallow(<VisorPDF container={container} />);
    const buttonNextjs = wrapper.find('button').at(2);
    const previusNextjs = wrapper.find('button').at(1);
    // act
    buttonNextjs.simulate('click');
    buttonNextjs.simulate('click');
    previusNextjs.simulate('click');

    const pageNumber = wrapper.find('span').text().split('/')[0].trim();
    // assert
    expect(pageNumber).toBe('2');
  });

  test('Debe de rotar 2 veces el pdf hacia la izquierda', () => {
    // arrange
    const wrapper = shallow(<VisorPDF container={container} />);
    const turnLeft = wrapper.find('button').at(3);
    // act
    turnLeft.simulate('click');
    turnLeft.simulate('click');
    const { rotate } = wrapper.find('Page').props();
    // assert
    expect(rotate).toBe(180);
  });

  test('Debe de rotar 2 veces el pdf hacia la derecha', () => {
    // arrange
    const wrapper = shallow(<VisorPDF container={container} />);
    const turnRight = wrapper.find('button').at(4);
    // act
    turnRight.simulate('click');
    turnRight.simulate('click');
    const { rotate } = wrapper.find('Page').props();
    // assert
    expect(rotate).toBe(180);
  });

  test('Debe de acercar el pdf', () => {
    // arrange
    const wrapper = shallow(<VisorPDF container={container} />);
    const { onLoadSuccess } = wrapper.find('Page').props();
    onLoadSuccess(pageDimentions);
    const onZoomIn = wrapper.find('button').at(5);
    // act
    onZoomIn.simulate('click');
    const { scale } = wrapper.find('Page').props();
    // assert
    expect(scale).toBe(1 * 1.1);
  });

  test('Debe de de alejar el pdf', () => {
    // arrange
    const wrapper = shallow(<VisorPDF container={container} />);
    const { onLoadSuccess } = wrapper.find('Page').props();
    onLoadSuccess(pageDimentions);
    const onZoomOut = wrapper.find('button').at(6);
    // act
    onZoomOut.simulate('click');
    const { scale } = wrapper.find('Page').props();
    // assert
    expect(scale).toBe(1 * 0.9);
  });
  test('Debe de de expandir el pdf', () => {
    // arrange
    const wrapper = shallow(<VisorPDF container={container} />);
    const { onLoadSuccess } = wrapper.find('Page').props();
    onLoadSuccess(pageDimentions);
    const turnLeft = wrapper.find('button').at(3);
    turnLeft.simulate('click');
    // act
    const expand = wrapper.find('button').at(7);
    expand.simulate('click');
    const { scale } = wrapper.find('Page').props();
    // assert
    expect(scale).toBe(1 * (container.current.clientWidth / pageDimentions.originalHeight));
  });
  test('Debe restaurar el pdf', () => {
    // arrange
    const wrapper = shallow(<VisorPDF container={container} />);
    const { onLoadSuccess } = wrapper.find('Page').props();
    onLoadSuccess(pageDimentions);
    // act
    wrapper.find('button').at(7).simulate('click');
    wrapper.find('button').at(7).simulate('click');
    const { scale } = wrapper.find('Page').props();
    // assert
    expect(scale).toBe(1);
  });
});
