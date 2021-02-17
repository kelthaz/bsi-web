import React from 'react';
import PropTypes from 'prop-types';
import styles from './radio-button.module.scss';

const RadioButton = ({ name, formulario, children, value }) => {
  const { values, handleChange } = formulario;

  return (
    <>
      <div className={`${styles['container-check-text']}`}>
        <div className={`${styles['container-input']}`}>
          <input
            id={name}
            name={name}
            className={` ${styles['my-check']}`}
            type="radio"
            value={value}
            onChange={handleChange}
            checked={value === values[name]}
          />
        </div>
        <div className={`${styles['container-content']}`}>{children}</div>
      </div>
    </>
  );
};

RadioButton.defaultProps = {
  children: <></>,
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  formulario: PropTypes.any.isRequired,
  children: PropTypes.any,
};

export default RadioButton;
