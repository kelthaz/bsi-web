import React from 'react';
import PropTypes from 'prop-types';
import styles from './check-box.module.scss';

const CheckBox = ({ name, formulario, children, value }) => {
  const { handleChange } = formulario;

  return (
    <>
      <div className={`${styles['container-check-text']}`}>
        <div className={`${styles['container-input']}`}>
          <input
            name={name}
            className={` ${styles['my-check-box']}`}
            type="checkbox"
            value={value}
            onChange={handleChange}
          />
        </div>
        <div className={`${styles['container-content']}`}>{children}</div>
      </div>
    </>
  );
};

CheckBox.defaultProps = {
  value: undefined,
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  formulario: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
};

export default CheckBox;
