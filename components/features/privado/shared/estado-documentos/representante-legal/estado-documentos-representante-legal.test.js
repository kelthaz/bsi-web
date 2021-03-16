import React from 'react';
import { mount } from 'enzyme';
import EstadoDocumentosRepresentanteLegal from './EstadoDocumentosRepresentanteLegal';

describe('Pruebas en el componente ResultSimulador', () => {
  it('Debe mostrar el ResultSimulador', () => {
    // arrange
    const representantes = [
      {
        nombre: 'Jorge Ortiz Cruz', telefono: '55 1234 5678', email: 'jorge@mail.com',
        documentos: [
          { nombre: 'Identificación oficial (Frente)', ruta: 'INE_representante.jpg', estado: 0 },
          { nombre: 'Identificación oficial (Reverso)', ruta: 'INE_representante.jpg', estado: 1 }
        ]
      },
      {
        nombre: 'Patricia Florez Sánchez', telefono: '55 1234 5678', email: 'patricia@mail.com',
        documentos: [
          { nombre: 'Identificación oficial (Frente)', ruta: 'INE_representante.jpg', estado: 2 },
          { nombre: 'Identificación oficial (Reverso)', ruta: 'INE_representante.jpg', estado: 3 }
        ]
      }
    ];
    const wrap = mount(<EstadoDocumentosRepresentanteLegal representantes={representantes} />);
    // act
    // assert

  });
});
