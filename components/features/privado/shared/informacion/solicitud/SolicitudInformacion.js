import React from 'react';
import PropTypes from 'prop-types';
import { MORAL } from '../../../../../../constants/persona';

const SolicitudInformacion = ({ informacionSolicitud, tipoPersona }) => {
  const labels = {
    usoCredito: 'Destino del crédito',
    descripcionCredito: 'Razón social',
    domicilioFiscal: 'Domicilio fiscal',
    domicilioComercial: 'Domicilio comercial',
    nombreCompletoRecibe: 'Nombre de quien podría recibir token',
    celularRecibe: 'Teléfono de quien podría recibir token',
    telefonoEmpresa: 'Teléfono del negocio',
    curp: tipoPersona === MORAL ? 'CURP' : 'CURP del representante legal',
    estadoCivil: 'Estado civil del solicitante',
    nombreConyuge: 'Nombre de la Pareja',
    numeroEmpleados: 'Número de empleados',

    montoSolicitado: 'Crédito solicitado',
    montoAprobado: 'Crédito aprobado',

    tasaOrdinaria: 'Tasa ordinaria',
    tasaMoratoria: 'Tasa moratoria',
    comisionApertura: 'Comisión por apertura',
    plazo: 'Plazo del crédito',
    periodicidad: 'Esquema de pago',
    pago: 'Pagos',
    cat: 'CAT',
    tieneCuentaBancoppel: 'Tiene cuenta BanCoppel',
    clabe: 'Número de cuenta BanCoppel',
  };

  if (tipoPersona === MORAL) {
    delete labels.estadoCivil;
    delete labels.nombreConyuge;
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
            <div className="color-blue-storm body2">{informacionSolicitud[item]}</div>
          </div>
        </div>
      ))}
    </>
  );
};

SolicitudInformacion.propTypes = {
  informacionSolicitud: PropTypes.object.isRequired,
  tipoPersona: PropTypes.string.isRequired,
};

export default SolicitudInformacion;
