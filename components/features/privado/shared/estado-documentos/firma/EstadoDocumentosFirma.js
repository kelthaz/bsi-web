import PropTypes from 'prop-types';
import SvgAprobado from '../../../../../svgs/estados/SvgAprobado';

import styles from '../estado-documentos.module.scss';

// ESTADOS: 0: Pendiente, 1: Aprobado, 2: Rechazado
const EstadoDocumentosFirma = ({ documentos }) => {

  const iconoEstado = (estado) => {
    switch (estado) {
      case 0:
        return <button className="btn-mini-secondary" type="button">Firmar</button>;
      case 1:
        return <SvgAprobado />;
      case 2:
        return <button className="btn-mini-secondary" type="button">Ver</button>;
      default:
        return <></>;
    }
  };

  return (
    <div>
      <div className="col-12">
        {documentos.map((documento) => (
          <div className="row my-3" key={documento.id}>
            <div className="col-4 my-auto"><span className="body2">{documento.nombre}</span></div>
            <div className={`col-5 my-auto ${styles.overme}`}>
              <span className="link" title={documento.ruta}>{documento.ruta}</span>
            </div>
            <div className="col-3 my-auto text-center">{iconoEstado(documento.estado)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

EstadoDocumentosFirma.propTypes = {
  documentos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EstadoDocumentosFirma;
