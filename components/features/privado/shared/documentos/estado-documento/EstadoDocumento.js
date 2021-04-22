import { useRef } from 'react';
import PropTypes from 'prop-types';
import SvgAprobado from '../../../../../svgs/estados/SvgAprobado';
import SvgPendiente from '../../../../../svgs/estados/SvgPendiente';
import SvgRechazado from '../../../../../svgs/estados/SvgRechazado';

const EstadoDocumento = ({ label, documento, estadoDocumento, onClick, labelButton }) => {
  const fileInput = useRef(null);

  const iconoEstado = (() => {
    switch (estadoDocumento) {
      case 0:
        return (
          <button className="btn-mini-secondary" type="button" onClick={() => fileInput.current.click()}>
            Subir
          </button>
        );
      case 1:
        return (
          <button className="btn-mini-secondary" type="button" onClick={onClick}>
            {labelButton}
          </button>
        );
      case 2:
        return <SvgAprobado />;
      case 3:
        return <SvgPendiente />;
      case 4:
        return <SvgRechazado />;
      default:
        return <></>;
    }
  })();

  const onChangeDocument = ({ target }) => {
    onClick(target.files[0]);
  };

  return (
    <div className="row pb-3">
      <div className="col-5">
        <span className="body2">{label}</span>
      </div>
      {(estadoDocumento === 0 || estadoDocumento === 4) && (
        <input
          ref={fileInput}
          accept="image/png, image/jpg, application/pdf"
          type="file"
          onChange={onChangeDocument}
          hidden
        />
      )}
      {estadoDocumento === 4 ? (
        <>
          <div className="col-3 text-overflow">
            <span className="link">{documento}</span>
          </div>
          <div className="col-2 text-overflow">
            <button className="btn-mini-secondary" type="button" onClick={() => fileInput.current.click()}>
              Editar
            </button>
          </div>
        </>
      ) : (
        <div className="col-5 text-overflow">
          <span className="link">{documento}</span>
        </div>
      )}
      <div className="col-2 text-center">{iconoEstado}</div>
    </div>
  );
};

EstadoDocumento.propTypes = {
  label: PropTypes.string.isRequired,
  documento: PropTypes.string.isRequired,
  estadoDocumento: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  labelButton: PropTypes.string,
};

EstadoDocumento.defaultProps = {
  onClick: () => {},
  labelButton: 'Revisar',
};

export default EstadoDocumento;
