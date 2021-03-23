import React from 'react';
import { mount } from 'enzyme';
import EstadoDocumentosFirma from './EstadoDocumentosFirma';

describe('Pruebas en el componente EstadoDocumentosFirma', () => {
  it('Debe mostrar el componente', () => {
    // arrange
    const documentos=[
      { id: 1, nombre: 'Contrato', ruta: 'contrato_alejandra.pdf', estado: 0 },
      { id: 2, nombre: 'Solicitud de servicio EmpresaNet', ruta: 'solicitud_empNet.pdf', estado: 2 },
      { id: 3, nombre: 'Kit de apertura', ruta: 'kitapertura.pdf', estado: 1 },
      { id: 4, nombre: 'Estado inexistente', ruta: 'kitapertura.pdf', estado: 3 }
    ];
    const wrap = mount(<EstadoDocumentosFirma documentos={documentos} />);
    // assert
    expect(wrap.find('span.body2').first().text()).toEqual(documentos[0].nombre);
    expect(wrap.find('.link').first().text()).toEqual(documentos[0].ruta);
  });
});
