import React from 'react';
import PropTypes from 'prop-types';
import { MORAL } from '../../../../../../constants/persona';

const DatosBasicos = ({ informacionProspecto, tipoPersona }) => {
  const labels = {
    razonSocial: 'Razón social del negocio',
    nombreEmpresa: 'Nombre del negocio',
    sector: 'Sector',
    giro: 'Giro',
    descripcionEmpresa: 'Explicación',
    celular: 'Teléfono',
    correo: 'Correo electrónico',
    rfc: 'RFC',
  };

  if (tipoPersona !== MORAL) {
    delete labels.razonSocial;
  }

  const itemsPerfil = Object.keys(labels);

  return (
    <>
      {itemsPerfil.map((item) => (
        <div key={item} className="row pb-3">
          <div className="col-6">
            <div className="body2">{labels[item]}</div>
          </div>
          <div className="col-6">
            <div className="color-blue-storm body2">{informacionProspecto[item]}</div>
          </div>
        </div>
      ))}
    </>
  );
};

DatosBasicos.propTypes = {
  informacionProspecto: PropTypes.object.isRequired,
  tipoPersona: PropTypes.string.isRequired,
};

export default DatosBasicos;
