import React from 'react';
import { shallow } from 'enzyme';
import EstadoDocumentosAnalista from './EstadoDocumentosAnalista';

describe('Pruebas en el componente EstadoDocumentosAnalista', () => {
  it('Debe coincidir con la snapshot', () => {
    // arrange
    const prospecto = {
      documentos: [
        { id: 1, nombre: 'Identificación oficial (Frente)', ruta: 'ALE_INE.jpg', estado: 1 },
        { id: 2, nombre: 'Identificación oficial (Reverso)', ruta: 'ALE_INE.jpg', estado: 1 },
        { id: 3, nombre: 'Comprobante de domicilio (Comercial)', ruta: 'comprobante_luz_factura_hogar.pdf', estado: 0 },
        { id: 4, nombre: 'Comprobante de domicilio (Fiscal)', ruta: 'comprobante_luz_factura_hogar.pdf', estado: 0 },
        { id: 5, nombre: 'Acta de matrimonio', ruta: 'Acta_matrimonio.pdf', estado: 0 },
        { id: 6, nombre: 'Prueba de vida', ruta: 'prueba.mv', estado: 0 },
        { id: 7, nombre: 'Selfie', ruta: 'selfie.png', estado: 0 },
        { id: 8, nombre: 'Autorización de crédito', ruta: 'Autorizacion_credito.pdf', estado: 0 },
        { id: 9, nombre: 'Reporte de buró de crédito', ruta: 'reporte_buro_credito.pdf', estado: 0 }
      ],
      relaciones: [
        {
          id: 1,
          nombre: 'Carlos Pérez Díaz', descripcion: 'Cónyuge del solicitante',
          documentos: [
            { id: 10, nombre: 'Identificación oficial (Frente)', ruta: 'INE_Carlos.jpg', estado: 1 },
            { id: 11, nombre: 'Identificación oficial (Reverso)', ruta: 'INE_Carlos.jpg', estado: 1 }
          ]
        }
      ]
    };
    const wrap = shallow(<EstadoDocumentosAnalista prospecto={prospecto} />);
    // assert
    expect(wrap).toMatchSnapshot();
  });
});
