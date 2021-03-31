import React from 'react';
import PropTypes from 'prop-types';

const DictamenJuridico = ({ dictamenFuction }) => (
  <>
    <div className="row pb-3">
      <div className="col-12">
        <span className="color-gray body3">
          Recuerda realizar tu dictamen cuando hayas validado el Acta constitutiva, los Poderes notariales y las
          Reformas (si aplica).
        </span>
      </div>
    </div>
    <div className="row pb-3">
      <div className="col-6">
        <span className="body2 color-gray-dark">Dictamen Jurídico</span>
      </div>

      <div className="col-6 d-flex justify-content-end">
        <button className="btn-mini-secondary" type="button" onClick={dictamenFuction} disabled>
          Revisar
        </button>
      </div>
    </div>
  </>
);

DictamenJuridico.propTypes = {
  dictamenFuction: PropTypes.func.isRequired,
};

export default DictamenJuridico;
