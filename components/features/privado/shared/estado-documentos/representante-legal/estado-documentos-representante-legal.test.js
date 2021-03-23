import React from 'react';
import { mount } from 'enzyme';
import EstadoDocumentosRepresentanteLegal from './EstadoDocumentosRepresentanteLegal';

describe('Pruebas en el componente EstadoDocumentosRepresentanteLegal', () => {
  it('Debe coincidir con la snapshot', () => {
    // arrange
    const representantes = [
      {
        id: 1,
        nombre: 'Jorge Ortiz Cruz', telefono: '55 1234 5678', email: 'jorge@mail.com',
        documentos: [
          { id: 1, nombre: 'Identificación oficial (Frente)', ruta: 'INE_representante.jpg', estado: 0 },
          { id: 2, nombre: 'Identificación oficial (Reverso)', ruta: 'INE_representante.jpg', estado: 1 }
        ]
      },
      {
        id: 2,
        nombre: 'Patricia Florez Sánchez', telefono: '55 1234 5678', email: 'patricia@mail.com',
        documentos: [
          { id: 3, nombre: 'Identificación oficial (Frente)', ruta: 'INE_representante.jpg', estado: 2 },
          { id: 4, nombre: 'Identificación oficial (Reverso)', ruta: 'INE_representante.jpg', estado: 3 }
        ]
      }
    ];
    const wrap = mount(<EstadoDocumentosRepresentanteLegal representantes={representantes} />);
    // assert
    expect(wrap).toMatchSnapshot();
  });
});
