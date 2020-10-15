import PropTypes from 'prop-types';
import { useState } from 'react';
import SvgCheckOk from '../../svgs/SvgCheckOk';
import SvgCross from '../../svgs/SvgCross';
import SvgHidenPassword from '../../svgs/SvgHidenPassword';
import SvgShowPassword from '../../svgs/SvgShowPassword';
import styles from './text-field.module.scss';

const seleccionaEstilo = (size, inverted) => {
  if (size === 'big') {
    return inverted ? styles['input-big-reverse'] : styles['input-big'];
  }
  return inverted ? styles['input-small-reverse'] : styles['input-small'];
};

const TextField = (props) => {
  const { name, formulario, capitalize, label, type, size, inverted, optional } = props;
  // const status = <SvgCross className={styles['icon-error']} />;
  const status = <SvgCheckOk className={styles['icon-check-inverted']} />;
  const [typeInput, setTypeInput] = useState(type);
  // const [labelUp, seTlabelUp] = useState(value !== '');

  const inputStyle = seleccionaEstilo(size, inverted);

  const handleViewPassword = () => {
    if (type === 'password') {
      setTypeInput(typeInput === 'text' ? 'password' : 'text');
    }
  };

  return (
    <div className={`${styles.group}`}>
      <input
        id={name}
        name={name}
        className={`${inputStyle} ${capitalize ? styles.capitalize : ''}`}
        type={typeInput}
        required
        onChange={formulario.handleChange}
        onBlur={formulario.handleBlur}
        value={formulario.values[name]}
        autoComplete="off"
        placeholder={size === 'big' ? label : ''}
        onFocus={() => console.log(formulario.errors[name])}
      />
      {size === 'small' && (
        <label htmlFor={name} className={`${styles.label} ${true ? styles['label-active'] : ''}`}>
          {label}
        </label>
      )}
      <span className={styles['help-text']}>&nbsp;</span>
      {false && <div className={styles['status-icon']}>{status}</div>}
      {type === 'password' && (
        <button className={styles['button-password-inverted']} type="button" onClick={handleViewPassword}>
          {typeInput === 'text' ? <SvgHidenPassword /> : <SvgShowPassword />}
        </button>
      )}
    </div>
  );
};

TextField.propTypes = {
  capitalize: PropTypes.bool,
  label: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  formulario: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  optional: PropTypes.bool,
};

TextField.defaultProps = {
  capitalize: false,
  inverted: false,
  optional: false,
};

export default TextField;
