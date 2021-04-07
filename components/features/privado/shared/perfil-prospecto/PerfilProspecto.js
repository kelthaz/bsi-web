import React from 'react';
import PropTypes from 'prop-types';
import { CLIENTE, ANALISTA_PLD } from '../../../../../constants/roles';
import SvgAvatarBig from '../../../../svgs/sidebar/SvgAvatarBig';
import { regexMultipleSpaces } from '../../../../../constants/regex';

const PerfilProspecto = ({ role, perfilData }) => {
  const nombreCompleto = `${perfilData.primerNombre} ${perfilData.segundoNombre} ${perfilData.primerApellido} ${perfilData.segundoApellido}`.replace(
    regexMultipleSpaces,
    ' '
  );

  const itemsPerfil = (() => {
    switch (role) {
      case CLIENTE:
        return ['idSolicitud', 'fechaAprobacionCredito', 'numeroCuenta', 'fechaAltaUsuario'];

      case ANALISTA_PLD:
        return ['tipoPersona', 'relacion', 'coincidenciaLista', 'fechaNacimiento', 'nombreCoincidencia'];

      default:
        return [
          'tipoPersona',
          'tipoPersonaObligado',
          'tiempoEnEspera',
          'idSolicitud',
          'numeroCliente',
          'numeroLinea',
          'numeroCuenta',
          'totalDesembolsado',
        ];
    }
  })();

  const labels = {
    tipoPersona: 'Tipo de persona',
    tipoPersonaObligado: 'Tipo de persona (Obligado solidario)',
    tiempoEnEspera: 'Tiempo en espera',
    idSolicitud: 'ID de solicitud',
    numeroCliente: 'Número de cliente',
    numeroLinea: 'Número de línea',
    numeroCuenta: 'Número de cuenta',
    totalDesembolsado: 'Total desembolsado',

    relacion: 'Relación',
    coincidenciaLista: 'Coincidencia con lista',
    fechaNacimiento: 'Fecha de nacimiento',
    nombreCoincidencia: 'Nombre coincidencia',

    fechaAprobacionCredito: 'Fecha de aprobación de crédito',
    fechaAltaUsuario: 'Fecha alta de usuario',
  };

  return (
    <div className="card-simple-blue-light mt-3">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="svg-avatar">
          <SvgAvatarBig />
          <span className="color-white input2">
            {`
              ${perfilData.primerNombre.charAt(0)}${perfilData.primerApellido.charAt(0)}
            `}
          </span>
        </div>
        <h3 className="color-blue-storm sub pl-3">{nombreCompleto}</h3>
      </div>
      {itemsPerfil.map((item) => (
        <div key={item} className="row mt-3">
          <div className="col-6">
            <div className="text-right body3">{labels[item]}</div>
          </div>
          <div className="col-6">
            <div className="color-blue-storm body3">{perfilData[item]}</div>
          </div>
        </div>
      ))}
      {role === ANALISTA_PLD && (
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-end">
            <div className="color-blue-storm body3">
              <button className="btn-medium-secondary" type="button">
                Rechazar
              </button>
              <button className="btn-medium-secondary ml-3" type="button">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

PerfilProspecto.propTypes = {
  perfilData: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
};

export default PerfilProspecto;
