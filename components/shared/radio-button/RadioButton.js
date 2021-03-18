import React from 'react';
import PropTypes from 'prop-types';
import styles from './radio-button.module.scss';

const RadioButton = ({ name, onChange, checked, children, label }) => (
  <div className={`${styles['container-check-text']}`}>
    <div className={`${styles['container-input']}`}>
      <input
        name={name}
        className={` ${styles['my-check']}`}
        type="radio"
        value={label}
        onChange={onChange}
        checked={checked}
      />
    </div>
    <div className={`${styles['container-content']}`}>{children}</div>
  </div>
);

RadioButton.defaultProps = {
  children: <></>,
  checked: undefined,
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  children: PropTypes.any,
};

export default RadioButton;
