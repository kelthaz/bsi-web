import React from 'react';
import PropTypes from 'prop-types';
import EstadoDocumento from '../estado-documento/EstadoDocumento';

const RepresentantesLegales = ({ documentosRepresentantesLegales }) => (
  <>
    {documentosRepresentantesLegales.map((representanteLegal) => {
      const { nombreCompleto, telefono, correo, ine, ineReverso } = representanteLegal;
      return (
        <>
          <div className="row no-gutters mb-3 card-simple-blue-light">
            <div className="col-6 d-flex justify-content-start ">
              <div className="d-flex flex-column">
                <span className="sub color-blue-storm">{nombreCompleto}</span>
                <span className="overline color-gray">Representante Legal</span>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <div className="d-flex flex-column">
                <span className="overline color-gray">Teléfono: {telefono}</span>
                <span className="overline color-gray">Correo: {correo}</span>
              </div>
            </div>
          </div>
          <EstadoDocumento
            label="Identificación oficial (Frente)"
            documento={ine.nombreDocumento}
            estadoDocumento={ine.estado}
          />
          <EstadoDocumento
            label="Identificación oficial (Reverso)"
            documento={ineReverso.nombreDocumento}
            estadoDocumento={ineReverso.estado}
          />
        </>
      );
    })}
    <div className="row pb-3 d-flex justify-content-center">
      <button className="btn-big-inverted-secondary" type="button">
        Agregar
      </button>
    </div>
  </>
);

RepresentantesLegales.propTypes = {
  documentosRepresentantesLegales: PropTypes.object.isRequired,
};

export default RepresentantesLegales;
