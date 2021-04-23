import React from 'react';
import PropTypes from 'prop-types';
import styles from './radio-button.module.scss';

const RadioButton = ({ name, onChange, value, children, label }) => (
  <div className={`${!children ? styles['container-check-text-no-children'] : styles['container-check-text']}`}>
    <div className={`${styles['container-input']}`}>
      <input
        name={name}
        className={` ${styles['my-check']}`}
        type="radio"
        value={label}
        onChange={onChange}
        checked={value === label}
      />
    </div>
    {children && <div className={`${styles['container-content']}`}>{children}</div>}
  </div>
);

RadioButton.defaultProps = {
  children: false,
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default RadioButton;
