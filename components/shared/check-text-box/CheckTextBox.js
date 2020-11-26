import React from 'react';
import PropTypes from 'prop-types';
import styles from './check-text-box.module.scss';

const CheckTextBox = ({ name, formulario, children }) => {
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
            type="checkbox"
            onChange={handleOnChange}
            checked={values[name]}
          />
          <label htmlFor={name} className={`${styles.label}`}>
            {' '}
          </label>
        </div>
        <div>{children}</div>
      </div>
      <span className="color-red">{errors[name] && touched[name] ? errors[name] : ''}&nbsp;</span>
    </>
  );
};

CheckTextBox.propTypes = {
  name: PropTypes.string.isRequired,
  formulario: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
};

export default CheckTextBox;