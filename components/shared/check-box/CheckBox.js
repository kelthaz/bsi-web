import React from 'react';
import PropTypes from 'prop-types';
import styles from './check-box.module.scss';

const CheckBox = ({ name, checked, onChange, children, label }) => (
  <div className={`${styles['container-check-text']}`}>
    <div className={`${styles['container-input']}`}>
      <input
        name={name}
        className={` ${styles['my-check-box']}`}
        type="checkbox"
        value={label}
        onChange={onChange}
        checked={checked}
      />
    </div>
    <div className={`${styles['container-content']}`}>{children}</div>
  </div>
);

CheckBox.defaultProps = {
  label: undefined,
  checked: undefined,
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

export default CheckBox;
