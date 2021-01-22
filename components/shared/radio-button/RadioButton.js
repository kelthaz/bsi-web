import React from 'react';
import PropTypes from 'prop-types';
import styles from './radio-button.module.scss';

const RadioButton = ({ name, formulario, children, value }) => {
  const { setFieldTouched, touched, setFieldValue, values } = formulario;

  const handleOnChange = (event) => {
    if (!touched[name]) {
      setFieldTouched(name, true);
    }

    setFieldValue(name, event.target.value);
  };

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
            onChange={handleOnChange}
            checked={value === values[name]}
          />
        </div>
        <div className={`${styles['container-content']}`}>{children}</div>
      </div>
    </>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  formulario: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
};

export default RadioButton;
