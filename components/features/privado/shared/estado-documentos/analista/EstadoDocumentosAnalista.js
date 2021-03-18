import PropTypes from 'prop-types';
import SvgAprobado from '../../../../../svgs/estados/SvgAprobado';

import styles from '../estado-documentos.module.scss';

// ESTADOS: 0: Pendiente, 1: Revisado
const EstadoDocumentosAnalista = ({ prospecto }) => {

  const iconoEstado = (estado) => {
    switch (estado) {
      case 0:
        return <button className="btn-mini-secondary" type="button">Revisar</button>;
      case 1:
        return <SvgAprobado />;
      default:
        return <></>;
    }
  };

  return (
    <div>
      <div className="col-12">
        {prospecto.documentos && prospecto.documentos.map((documento) => (
          <div className="row my-3" key={documento.id}>
            <div className="col-5 my-auto"><span className="body2">{documento.nombre}</span></div>
            <div className={`col-4 my-auto ${styles.overme}`}>
              <span className="link" title={documento.ruta}>{documento.ruta}</span>
            </div>
            <div className="col-3 my-auto text-center">{iconoEstado(documento.estado)}</div>
          </div>
        ))}
        {prospecto.relaciones && prospecto.relaciones.map((relacion) => (
          <div key={relacion.id}>
            <div className="row my-3 card-simple-blue-light">
              <div className="col-12">
                <span className="d-flex sub color-blue-storm">{ relacion.nombre }</span>
                <span className="d-flex overline color-gray">{ relacion.descripcion }</span>
              </div>
            </div>
            {relacion.documentos.map((documento) => (
              <div className="row my-3" key={documento.id}>
                <div className="col-5 my-auto"><span className="body2">{documento.nombre}</span></div>
                <div className={`col-4 my-auto ${styles.overme}`}>
                  <span className="link" title={documento.ruta}>{documento.ruta}</span>
                </div>
                <div className="col-3 my-auto text-center">{iconoEstado(documento.estado)}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

EstadoDocumentosAnalista.propTypes = {
  prospecto: PropTypes.object.isRequired
};

export default EstadoDocumentosAnalista;
