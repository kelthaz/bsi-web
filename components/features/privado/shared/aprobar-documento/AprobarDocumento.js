import React from 'react';

const AprobarDocumento = () => {
  return (
    <div className="row card-simple-blue-light no-gutters mb-3">
      <div className="col-9 d-flex flex-row align-items-center">
        <p className="m-0">
          Si el documento está en orden da click en validar documento, de lo contrario escribe tu retroalimentación en
          el bloque de notas y da click en el botón rechazar.
        </p>
      </div>
      <div className="col-3 d-flex flex-row align-items-center">
        <button type="button" className="btn-medium-secondary mx-3">
          Rechazar
        </button>
        <button type="button" className="btn-medium-secondary ">
          Validar
        </button>
      </div>
    </div>
  );
};

export default AprobarDocumento;
