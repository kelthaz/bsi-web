// eslint-disable-next-line filenames/match-regex
import React from 'react';
import { shallow, mount } from 'enzyme';
import VideoSelector from './VideoSelector';

const sliderOptions = [
  {
    id: 1,
    active: true,
    src: 'https://www.youtube.com/embed/mJZYMWDL_0o',
    title: 'Ismael García López ',
    company: 'Nuevo Grupo Visual SA de CV',
    subtitle: 'Atención cálida para asegurar tu futuro | BanCoppel Pymes',
    parragraph:
      'En BanCoppel procuramos atenderte de una manera cálida y humana para que tu empresa tenga la estabilidad económica que necesita a través de un proceso ágil y personalizado asegurando así, el flujo de capital necesario para avanzar hacia el futuro. Ingresa a www.bancoppel.com/empresas y conoce todo lo que tenemos para tí.',
  },
  {
    id: 2,
    active: false,
    src: 'https://www.youtube.com/embed/VayHlVwGmGs',
    title: 'Óscar Vélez González',
    company: 'PIZZETA SA de CV',
    subtitle: 'Somos el aliado que tu empresa necesita | BanCoppel Pymes',
    parragraph:
      'Nos aseguramos de que tengas una verdadera buena experiencia con nosotros para que puedas crecer como tu empresa lo merece. Ingresa a www.bancoppel.com/empresas y conoce todo lo que tenemos para tí.',
  },
];

describe('Pruebas en el componente del video de selector', () => {
  test('Debe mostrar array dentro del componente de video', () => {
    // arrange
    const wrap = shallow(<VideoSelector sliderOptions={sliderOptions} color="blue" />);
    // act
    const claseVideo = wrap.find('div.video-preview').exists();
    // assert
    expect(claseVideo).toBe(true);
  });

  it('Debe cambiar a next', () => {
    // arrange
    const onChange = (button) => {
      const next = 'next';
      expect(button).toStrictEqual(next);
    };
    // act
    const wrap = mount(<VideoSelector onChange={onChange} />);
    wrap.find('button.mr-2').simulate('click');
  });

  it('Debe cambiar a prev', () => {
    // arrange
    const onChange = (button) => {
      const prev = 'prev';
      expect(button).toStrictEqual(prev);
    };
    // act
    const wrap = mount(<VideoSelector onChange={onChange} />);
    wrap.find('button.mr-3').simulate('click');
  });

  it('Debe hacer el update', () => {
    // arrange
    const onChange = (direction) => {
      const prev = 'prev';
      expect(direction).toStrictEqual(prev);
    };
    // act
    const wrap = mount(<VideoSelector onChange={onChange} />);
    wrap.find('button.mr-3').simulate('click');
  });
});
