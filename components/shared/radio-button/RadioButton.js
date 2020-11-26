import React from 'react';
import PropTypes from 'prop-types';
import styles from './radio-button.module.scss';

const RadioButton = ({ name, formulario, children }) => {
  const { values, setFieldTouched, handleChange, errors, touched } = formulario;

  const handleOnChange = (event) => {
    if (!touched[name]) {
      setFieldTouched(name, true);
    }
    handleChange(event);
  };

  return (
    <>
      <div className={`card-simple-blue-light ${styles['container-check-text']}`}>
        <div className={`${styles['container-check']}`}>
          <input
            id={name}
            name={name}
            className={` ${styles['my-check']}`}
            type="radio"
            onChange={handleOnChange}
            value={values[name]}
          />
          <label htmlFor={name} className={`${styles.label}`}>
            {' '}
          </label>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default RadioButton;
