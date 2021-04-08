import React from 'react';
import PropTypes from 'prop-types';
import EstadoDocumento from '../estado-documento/EstadoDocumento';

const DocumentosBancoppel = ({ documentosBancoppel }) => {
  const labels = {
    contrato: { label: 'Contrato', labelButton: 'Firmar' },
    solicitudServicioEmpresaNet: { label: 'Solicitud de servicio EmpresaNet', labelButton: 'Ver' },
    kitApertura: 'Kit de apertura',
  };

  const itemsPerfil = Object.keys(labels);

  return (
    <>
      {itemsPerfil.map((item) => {
        const props = {
          key: item,
          documento: documentosBancoppel[item].nombreDocumento,
          estadoDocumento: documentosBancoppel[item].estado,
        };

        if (typeof labels[item] === 'object') {
          props.label = labels[item].label;
          props.labelButton = labels[item].labelButton;
        } else {
          props.label = labels[item];
        }

        return <EstadoDocumento {...props} />;
      })}
    </>
  );
};

DocumentosBancoppel.propTypes = {
  documentosBancoppel: PropTypes.object.isRequired,
};

export default DocumentosBancoppel;
