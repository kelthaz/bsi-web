import React from 'react';
import { shallow } from 'enzyme';
import EstadoDocumentosAnalista from './EstadoDocumentosAnalista';

describe('Pruebas en el componente EstadoDocumentosAnalista', () => {
  it('Debe mostrar el componente', () => {
    // arrange
    const prospecto = {
      documentos: [
        { nombre: 'Identificación oficial (Frente)', ruta: 'ALE_INE.jpg', estado: 1 },
        { nombre: 'Identificación oficial (Reverso)', ruta: 'ALE_INE.jpg', estado: 1 },
        { nombre: 'Comprobante de domicilio (Comercial)', ruta: 'comprobante_luz_factura_hogar.pdf', estado: 0 },
        { nombre: 'Comprobante de domicilio (Fiscal)', ruta: 'comprobante_luz_factura_hogar.pdf', estado: 0 },
        { nombre: 'Acta de matrimonio', ruta: 'Acta_matrimonio.pdf', estado: 0 },
        { nombre: 'Prueba de vida', ruta: 'prueba.mv', estado: 0 },
        { nombre: 'Selfie', ruta: 'selfie.png', estado: 0 },
        { nombre: 'Autorización de crédito', ruta: 'Autorizacion_credito.pdf', estado: 0 },
        { nombre: 'Reporte de buró de crédito', ruta: 'reporte_buro_credito.pdf', estado: 0 }
      ],
      relaciones: [
        {
          nombre: 'Carlos Pérez Díaz', descripcion: 'Cónyuge del solicitante',
          documentos: [
            { nombre: 'Identificación oficial (Frente)', ruta: 'INE_Carlos.jpg', estado: 1 },
            { nombre: 'Identificación oficial (Reverso)', ruta: 'INE_Carlos.jpg', estado: 1 }
          ]
        }
      ]
    };
    const wrap = shallow(<EstadoDocumentosAnalista prospecto={prospecto} />);
    // act
    // assert
    expect(wrap.find('span.body2').first().text()).toEqual(documentos[0].nombre);
    expect(wrap.find('.link').first().text()).toEqual(documentos[0].ruta);
  });
});
