import React from 'react';
import { mount } from 'enzyme';
import EstadoDocumentosProspecto from './EstadoDocumentosProspecto';

describe('Pruebas en el componente ResultSimulador', () => {
  it('Debe mostrar el ResultSimulador', () => {
    // arrange
    const documentos = [
      { nombre: 'Identificación oficial (Frente)', ruta: 'ALE_INE.jpg', estado: 1 },
      { nombre: 'Identificación oficial (Reverso)', ruta: 'ALE_INE.jpg', estado: 1 },
      { nombre: 'Comprobante de domicilio', ruta: 'comprobante_luz_factura_hogar.pdf', estado: 1 },
      { nombre: 'Poderes notariales', ruta: 'poderes.pdf', estado: 0 },
      { nombre: 'Acta constitutiva', ruta: 'acta.pdf', estado: 2 },
      { nombre: 'Reformas' },
      { nombre: 'Prueba de vida', ruta: 'prueba.mv', estado: 1 },
      { nombre: 'Selfie', ruta: 'selfie.png', estado: 1 },
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
    // expect(window.FileReader).toHaveBeenCalled();
    // expect(link.addEventListener).toHaveBeenCalledWith('load');
    // expect(link.readAsText).toHaveBeenCalledWith(file);
    // expect(component.setState).toHaveBeenCalledWith(expectedFinalState);
    // expect(component.state).toEqual(expectedFinalState);

  });
});
