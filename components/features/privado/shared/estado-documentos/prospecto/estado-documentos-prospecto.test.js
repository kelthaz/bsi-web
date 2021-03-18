import React from 'react';
import { mount } from 'enzyme';
import EstadoDocumentosProspecto from './EstadoDocumentosProspecto';

describe('Pruebas en el componente EstadoDocumentosProspecto', () => {
  it('Debe coincidir con la snapshot', () => {
    // arrange
    const documentos = [
      { id: 1, nombre: 'Identificación oficial (Frente)', ruta: 'ALE_INE.jpg', estado: 1 },
      { id: 2, nombre: 'Identificación oficial (Reverso)', ruta: 'ALE_INE.jpg', estado: 1 },
      { id: 3, nombre: 'Comprobante de domicilio', ruta: 'comprobante_luz_factura_hogar.pdf', estado: 1 },
      { id: 4, nombre: 'Poderes notariales', ruta: 'poderes.pdf', estado: 0 },
      { id: 5, nombre: 'Acta constitutiva', ruta: 'acta.pdf', estado: 2 },
      { id: 6, nombre: 'Reformas' },
      { id: 7, nombre: 'Prueba de vida', ruta: 'prueba.mv', estado: 1 },
      { id: 8, nombre: 'Selfie', ruta: 'selfie.png', estado: 1 },
    ];
    const wrap = mount(<EstadoDocumentosProspecto documentos={documentos} />);
    const fileContents = 'file contents';
    const file = new Blob([fileContents], {type : 'text/plain'});
    const link = {
      addEventListener: jest.fn(),
      readAsDataURL: jest.fn()
    };
    // jest.spyOn(window, 'FileReader').mockImplementation(() => link);
    window.FileReader = jest.fn(() => link);
    // act
    wrap.find('input').first().simulate('change', {target: {files: [file]}});
    wrap.find('input').first().simulate('change', {target: {files: []}});
    // assert
    expect(wrap).toMatchSnapshot();
  });
});
