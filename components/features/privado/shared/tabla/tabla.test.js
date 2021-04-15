import { mount, shallow } from 'enzyme';
import React from 'react';
import Tabla from './Tabla';

describe('Pruebas en el componente Accordion', () => {
  const COLUMNS = [
    { name: 'Nombre', selector: 'nombre', sortable: true },
    { name: 'Por revisar', selector: 'porRevisar', sortable: true },
    { name: 'Estatus', selector: 'estatus', sortable: true },
    { name: 'Persona', selector: 'persona', sortable: true },
    { name: 'Tiempo de espera', selector: 'tiempoEspera', sortable: true },
    { name: 'Región', selector: 'region', sortable: true },
  ];

  const data = [
    {
      nombre: 'Fernanda Rodriguez',
      porRevisar: '3 documentos',
      estatus: 1,
      persona: 'PFAE',
      tiempoEspera: '10 min',
      region: 'Norte',
    },
    {
      nombre: 'Daniela Fernanda',
      porRevisar: '2 documentos',
      estatus: 2,
      persona: 'Moral',
      tiempoEspera: '2 días',
      region: 'Oeste',
    },
    {
      nombre: 'José Lima Rodríguez',
      porRevisar: '2 documentos',
      estatus: 1,
      persona: 'PFAE',
      tiempoEspera: '3 días',
      region: 'Oeste',
    },
    {
      nombre: 'Alejandro Ramírez',
      porRevisar: '3 documentos',
      estatus: 0,
      persona: 'PFAE',
      tiempoEspera: '20 min',
      region: 'Norte',
    },
    {
      nombre: 'Mariana Nayeli',
      porRevisar: '5 documentos',
      estatus: 1,
      persona: 'Moral',
      tiempoEspera: '6 hrs',
      region: 'Oeste',
    },
    {
      nombre: 'Fernanda Rodriguez',
      porRevisar: '3 documentos',
      estatus: 1,
      persona: 'PFAE',
      tiempoEspera: '10 min',
      region: 'Norte',
    },
    {
      nombre: 'Daniela Fernanda',
      porRevisar: '2 documentos',
      estatus: 2,
      persona: 'Moral',
      tiempoEspera: '2 días',
      region: 'Oeste',
    },
    {
      nombre: 'José Lima Rodríguez',
      porRevisar: '2 documentos',
      estatus: 1,
      persona: 'PFAE',
      tiempoEspera: '3 días',
      region: 'Oeste',
    },
    {
      nombre: 'Alejandro Ramírez',
      porRevisar: '3 documentos',
      estatus: 0,
      persona: 'PFAE',
      tiempoEspera: '20 min',
      region: 'Norte',
    },
    {
      nombre: 'Mariana Nayeli',
      porRevisar: '5 documentos',
      estatus: 1,
      persona: 'Moral',
      tiempoEspera: '6 hrs',
      region: 'Oeste',
    },
    {
      nombre: 'Fernanda Rodriguez',
      porRevisar: '3 documentos',
      estatus: 1,
      persona: 'PFAE',
      tiempoEspera: '10 min',
      region: 'Norte',
    },
    {
      nombre: 'Daniela Fernanda',
      porRevisar: '2 documentos',
      estatus: 2,
      persona: 'Moral',
      tiempoEspera: '2 días',
      region: 'Oeste',
    },
    {
      nombre: 'José Lima Rodríguez',
      porRevisar: '2 documentos',
      estatus: 1,
      persona: 'PFAE',
      tiempoEspera: '3 días',
      region: 'Oeste',
    },
    {
      nombre: 'Alejandro Ramírez',
      porRevisar: '3 documentos',
      estatus: 0,
      persona: 'PFAE',
      tiempoEspera: '20 min',
      region: 'Norte',
    },
    {
      nombre: 'Mariana Nayeli',
      porRevisar: '5 documentos',
      estatus: 1,
      persona: 'Moral',
      tiempoEspera: '6 hrs',
      region: 'Oeste',
    },
    {
      nombre: 'Fernanda Rodriguez',
      porRevisar: '3 documentos',
      estatus: 1,
      persona: 'PFAE',
      tiempoEspera: '10 min',
      region: 'Norte',
    },
    {
      nombre: 'Daniela Fernanda',
      porRevisar: '2 documentos',
      estatus: 2,
      persona: 'Moral',
      tiempoEspera: '2 días',
      region: 'Oeste',
    },
    {
      nombre: 'José Lima Rodríguez',
      porRevisar: '2 documentos',
      estatus: 1,
      persona: 'PFAE',
      tiempoEspera: '3 días',
      region: 'Oeste',
    },
    {
      nombre: 'Alejandro Ramírez',
      porRevisar: '3 documentos',
      estatus: 0,
      persona: 'PFAE',
      tiempoEspera: '20 min',
      region: 'Norte',
    },
    {
      nombre: 'Mariana Nayeli',
      porRevisar: '5 documentos',
      estatus: 1,
      persona: 'Moral',
      tiempoEspera: '6 hrs',
      region: 'Oeste',
    },
    {
      nombre: 'Fernanda Rodriguez',
      porRevisar: '3 documentos',
      estatus: 1,
      persona: 'PFAE',
      tiempoEspera: '10 min',
      region: 'Norte',
    },
    {
      nombre: 'Daniela Fernanda',
      porRevisar: '2 documentos',
      estatus: 2,
      persona: 'Moral',
      tiempoEspera: '2 días',
      region: 'Oeste',
    },
    {
      nombre: 'José Lima Rodríguez',
      porRevisar: '2 documentos',
      estatus: 1,
      persona: 'PFAE',
      tiempoEspera: '3 días',
      region: 'Oeste',
    },
    {
      nombre: 'Alejandro Ramírez',
      porRevisar: '3 documentos',
      estatus: 0,
      persona: 'PFAE',
      tiempoEspera: '20 min',
      region: 'Norte',
    },
    {
      nombre: 'Mariana Nayeli',
      porRevisar: '5 documentos',
      estatus: 1,
      persona: 'Moral',
      tiempoEspera: '6 hrs',
      region: 'Oeste',
    },
    {
      nombre: 'Fernanda Rodriguez',
      porRevisar: '3 documentos',
      estatus: 1,
      persona: 'PFAE',
      tiempoEspera: '10 min',
      region: 'Norte',
    },
    {
      nombre: 'Daniela Fernanda',
      porRevisar: '2 documentos',
      estatus: 2,
      persona: 'Moral',
      tiempoEspera: '2 días',
      region: 'Oeste',
    },
    {
      nombre: 'José Lima Rodríguez',
      porRevisar: '2 documentos',
      estatus: 1,
      persona: 'PFAE',
      tiempoEspera: '3 días',
      region: 'Oeste',
    },
    {
      nombre: 'Alejandro Ramírez',
      porRevisar: '3 documentos',
      estatus: 0,
      persona: 'PFAE',
      tiempoEspera: '20 min',
      region: 'Norte',
    },
    {
      nombre: 'Mariana Nayeli',
      porRevisar: '5 documentos',
      estatus: 1,
      persona: 'Moral',
      tiempoEspera: '6 hrs',
      region: 'Oeste',
    },
  ];

  xit('Debe de mostrarse correctamente el componente', () => {
    // arrange
    // act
    const wrapper = shallow(<Tabla columns={COLUMNS} data={data} />);
    // assert
    expect(wrapper).toMatchSnapshot();
  });

  xit('Debe de mostrarse correctamente el componente', () => {
    // arrange
    // act
    const wrapper = mount(<Tabla columns={COLUMNS} data={data} />);
    wrapper.find('th').first().simulate('click');
    // assert
    // expect(wrapper).toMatchSnapshot();
  });
});
