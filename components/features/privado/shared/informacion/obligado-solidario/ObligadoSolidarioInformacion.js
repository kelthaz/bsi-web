import React from 'react';
import PropTypes from 'prop-types';
import { MORAL } from '../../../../../../constants/persona';

const ObligadoSolidarioInformacion = ({ informacionObligado }) => {
  const labels = {
    nombreCompleto: 'Nombre',
    razonSocial: 'Razón social',
    nombreEmpresa: 'Nombre de la empresa',
    tipoPersona: 'Tipo de persona',
    correo: 'Correo electrónico',
    celular: 'Teléfono',
    curp: informacionObligado.tipoPersona === MORAL ? 'CURP' : 'CURP del representante legal',
    rfc: 'RFC',
    domicilioFiscal: informacionObligado.tipoPersona === MORAL ? 'Domicilio fiscal' : 'Domicilio',
    domicilioComercial: 'Domicilio comercial',
    estadoCivil: 'Es casado',
  };

  if (informacionObligado.tipoPersona === MORAL) {
    delete labels.estadoCivil;
  } else {
    delete labels.estadoCivil;
    delete labels.razonSocial;
    delete labels.nombreEmpresa;
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
            <div className="color-blue-storm body2">{informacionObligado[item]}</div>
          </div>
        </div>
      ))}
    </>
  );
};

ObligadoSolidarioInformacion.propTypes = {
  informacionObligado: PropTypes.object.isRequired,
};

export default ObligadoSolidarioInformacion;
