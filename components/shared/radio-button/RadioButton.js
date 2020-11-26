import React from 'react';
import PropTypes from 'prop-types';
import styles from './radio-button.module.scss';

const RadioButton = ({ name, formulario, children, value }) => {
  const { values, setFieldTouched, handleChange, errors, touched, setFieldValue } = formulario;

  const handleOnChange = (event) => {
    if (!touched[name]) {
      setFieldTouched(name, true);
    }

    console.log(event.target.value);
    setFieldValue(name, event.target.value);
  };
  console.log(values[name]);
  return (
    <>
      <div className={`${styles['container-check-text']}`}>
        <div className={`${styles['container-check']}`}>
          <input
            id={name}
            name={name}
            className={` ${styles['my-check']}`}
            type="radio"
            value={value}
            onClick={handleOnChange}
          />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default RadioButton;
