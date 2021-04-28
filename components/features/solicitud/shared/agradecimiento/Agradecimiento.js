import React from 'react';
import PropTypes from 'prop-types';
import SvgContratoConSigno from '../../../../svgs/agradecimiento/SvgContratoConSigno';
import SvgOk from '../../../../svgs/SvgOk';

const Agradecimiento = ({ children, title, iconOk, button, handleClick }) => (
  <div className="contedor-fixed">
    <div className="contedor-solicitud ">
      <div className="container p-0">
        <div className="row">
          <div className="col-md-3 col-xs-12 order-md-last d-flex justify-content-center flex-md-column">
            {iconOk ? <SvgOk /> : <SvgContratoConSigno />}
          </div>
          <div className="col-md-9 col-xs-12">
            <h2 className="text-xs-center text-md-left color-blue-storm mt-2">{title}</h2>
            {children}
          </div>
        </div>
        {button && (
          <div className="row">
            <button type="submit" className="btn-medium offset-md-4 offset-xs-3" onClick={handleClick}>
              {button}
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);

Agradecimiento.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  iconOk: PropTypes.bool,
  button: PropTypes.string,
  handleClick: PropTypes.func,
};

Agradecimiento.defaultProps = {
  iconOk: true,
  button: '',
  handleClick: () => {},
};

export default Agradecimiento;
