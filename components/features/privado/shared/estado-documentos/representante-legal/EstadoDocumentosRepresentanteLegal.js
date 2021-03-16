import PropTypes from 'prop-types';
import SvgAprobado from '../../../../../svgs/estados/SvgAprobado';
import SvgPendiente from '../../../../../svgs/estados/SvgPendiente';
import SvgRechazado from '../../../../../svgs/estados/SvgRechazado';

import styles from '../estado-documentos.module.scss';

// ESTADOS: 0: Pendiente, 1: Aprobado, 2: Rechazado
const EstadoDocumentosRepresentanteLegal = ({ representantes }) => {

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

  return (
    <div>
      <div className="w-100">
        {representantes.map((representante) => (
          <div key={representante.nombre}>
            <div className="row my-3 card-simple-blue-light">
              <div className="col-7">
                <span className="d-flex sub color-blue-storm">{ representante.nombre }</span>
                <span className="d-flex overline color-gray">Representante legal</span>
              </div>
              <div className="col-5 text-center my-auto">
                {representante.documentos.some((documento) => documento.estado === 2) ?
                  <button className="btn-mini-secondary" type="button">Editar</button>
                  :
                  <>
                    <span className="d-flex overline color-gray">Telefono { representante.telefono }</span>
                    <span className="d-flex overline color-gray">Correo { representante.email }</span>
                  </>
                }
              </div>
            </div>
            {!representante.documentos.some((documento) => documento.estado === 2)
              && representante.documentos.map((documento) => (
                <div className="row my-3">
                  <div className="col-5 my-auto"><span className="body2">{documento.nombre}</span></div>
                  <div className={`col-5 my-auto ${styles.overme}`}>
                    <span className="link" title={documento.ruta}>{documento.ruta}</span>
                  </div>
                  <div className="col-2 my-auto text-center">{iconoEstado(documento.estado)}</div>
                </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

EstadoDocumentosRepresentanteLegal.propTypes = {
  representantes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EstadoDocumentosRepresentanteLegal;
