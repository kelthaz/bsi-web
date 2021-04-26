import React from 'react';
import PropTypes from 'prop-types';

const CaracteristicasDocumento = ({
  documento = {
    clase: 'Documento pdf',
    tamano: '3,5 MB',
    paginas: '2',
    resolucion: '396 x 604',
    creacion: '30 de Abril de 2020, 21:09',
  },
}) => {
  const labels = {
    clase: 'Clase',
    tamano: 'Tamaño',
    paginas: 'Páginas',
    resolucion: 'Resolución',
    creacion: 'Creación',
  };

  const itemsPerfil = Object.keys(labels);

  return (
    <>
      {itemsPerfil.map((item) => (
        <div key={item} className="row pb-3">
          <div className="col-6">
            <div className="body2">{labels[item]}</div>
          </div>
          <div className="col-6">
            <div className="color-blue-storm body2">{documento[item]}</div>
          </div>
        </div>
      ))}
    </>
  );
};

CaracteristicasDocumento.propTypes = {
  documento: PropTypes.object.isRequired,
};

export default CaracteristicasDocumento;
