/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import { useState } from 'react';
import SvgAprobado from '../../../../../svgs/estados/SvgAprobado';
import SvgPendiente from '../../../../../svgs/estados/SvgPendiente';
import SvgRechazado from '../../../../../svgs/estados/SvgRechazado';

import styles from '../estado-documentos.module.scss';

// ESTADOS: 0: Pendiente, 1: Aprobado, 2: Rechazado
const EstadoDocumentosProspecto = ({ documentos }) => {

  const [documentosState, setDocumentosState] = useState(documentos);

  const iconoEstado = (estado) => {
    switch (estado) {
      case 0:
        return <SvgPendiente />;
      case 1:
        return <SvgAprobado />;
      case 2:
        return <SvgRechazado />;
      default:
        return <></>;
    }
  };

  const uploadFile = () => {
    // TODO: Implementar función para subir archivo al servidor.
  };

  const onChangeFileHandler = (event, index) => {
    if (!event.target.files[0]) {
      return;
    }
    uploadFile();
    documentosState[index].ruta = event.target.files[0].name;
    setDocumentosState([...documentosState]);
  };

  return (
    <div className="w-100">
      {documentosState.map((documento, index) => (
        <div className="row my-3" key={documento.id}>
          <div className="col-4 my-auto"><span className="body2">{documento.nombre}</span></div>
          <div className={`col my-auto ${styles.overme}`}>
            <span className="link" title={documento.ruta}>{documento.ruta}</span>
          </div>
          {documento.estado === 2 &&
            <div className="col-3 my-auto">
              <label htmlFor={`inputFile-${documento.nombre}`} className="btn-mini-secondary">Editar</label>
              <input
                accept="image/png, image/jpg, application/pdf"
                type="file"
                id={`inputFile-${documento.nombre}`}
                onChange={(event) => onChangeFileHandler(event, index)}
                hidden
              />
            </div>
          }
          <div className="col-2 my-auto">{iconoEstado(documento.estado)}</div>
        </div>
      ))}
    </div>
  );
};

EstadoDocumentosProspecto.propTypes = {
  documentos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EstadoDocumentosProspecto;
