import React from 'react';
import PropTypes from 'prop-types';
import styles from './check-text-box.module.scss';

const CheckTextBox = ({ name, formulario, children }) => {
  const { values, setFieldValue, errors } = formulario;

  return (
    <>
      <div className={`card-simple-blue-light ${styles['container-check-text']}`}>
        <div className={`${styles['container-check']}`}>
          <input
            id={name}
            name={name}
            className={` ${styles['my-check']}`}
            type="checkbox"
            onChange={() => setFieldValue(name, !values[name])}
            checked={!!values[name]}
          />
          <label htmlFor={name} className={`${styles.label}`}>
            {' '}
          </label>
        </div>
        <div>{children}</div>
      </div>
      <span className="color-red">{errors[name] && values[name] !== null ? errors[name] : ''}&nbsp;</span>
    </>
  );
};

CheckTextBox.propTypes = {
  name: PropTypes.string.isRequired,
  formulario: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
};

export default CheckTextBox;
