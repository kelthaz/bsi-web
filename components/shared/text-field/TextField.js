/* eslint-disable complexity */
import PropTypes from 'prop-types';
import { useState } from 'react';
import SvgCheckOk from '../../svgs/SvgCheckOk';
import SvgCross from '../../svgs/SvgCross';
import SvgHidenPassword from '../../svgs/SvgHidenPassword';
import SvgShowPassword from '../../svgs/SvgShowPassword';
import styles from './text-field.module.scss';

const seleccionaEstilo = (size, inverted) => {
  const finalStyles = [];
  if (size === 'big') {
    if (inverted) {
      finalStyles.push(styles['input-big-inverted']);
      finalStyles.push(styles['icon-check-inverted']);
      finalStyles.push(styles['label-inverted']);
      finalStyles.push(styles['indicador-activo-inverted']);
      finalStyles.push(styles['help-text-inverted']);
    } else {
      finalStyles.push(styles['input-big']);
      finalStyles.push(styles['icon-check']);
      finalStyles.push(styles.label);
      finalStyles.push(styles['indicador-activo']);
      finalStyles.push(styles['help-text']);
    }
  } else if (inverted) {
    finalStyles.push(styles['input-small-inverted']);
    finalStyles.push(styles['icon-check-inverted']);
    finalStyles.push(styles['label-inverted']);
    finalStyles.push(styles['indicador-activo-inverted']);
    finalStyles.push(styles['help-text-inverted']);
  } else {
    finalStyles.push(styles['input-small']);
    finalStyles.push(styles['icon-check']);
    finalStyles.push(styles.label);
    finalStyles.push(styles['indicador-activo']);
    finalStyles.push(styles['help-text']);
  }
  return finalStyles;
};

const TextField = (props) => {
  const { name, formulario, capitalize, label, type, size, inverted, optional } = props;
  const [inputStyle, iconCheckStyle, labelStyle, indicadorStyle, helpTextStyle] = seleccionaEstilo(size, inverted);
  const { handleChange, values, handleBlur, errors, touched } = formulario;

  const error = <SvgCross className={styles['icon-error']} />;
  const status = <SvgCheckOk className={iconCheckStyle} />;
  const [typeInput, setTypeInput] = useState(type);
  const [active, setActive] = useState(false);

  const handleViewPassword = () => {
    if (type === 'password') {
      setTypeInput(typeInput === 'text' ? 'password' : 'text');
    }
  };

  const onHandleBlur = (event) => {
    handleBlur(event);
    setActive(false);
  };

  return (
    <div className={`${styles.group}`}>
      <input
        id={name}
        name={name}
        className={`${inputStyle} ${capitalize ? styles.capitalize : ''} ${
          touched[name] && errors[name] ? styles['indicador-error'] : active && indicadorStyle
        }`}
        type={typeInput}
        required
        onChange={handleChange}
        onBlur={onHandleBlur}
        value={values[name]}
        autoComplete="off"
        placeholder={size === 'big' ? label : ''}
        onFocus={() => setActive(true)}
      />
      {size === 'small' && (
        <label
          htmlFor={name}
          className={`${touched[name] && errors[name] ? styles['label-error'] : labelStyle} ${
            values[name] !== '' || active ? styles['label-active'] : ''
          }`}
        >
          {label}
        </label>
      )}
      <span className={touched[name] && errors[name] ? styles['help-text-error'] : helpTextStyle}>
        {touched[name] && errors[name] ? errors[name] : optional && 'Opcional'}
      </span>
      {touched[name] && errors[name] ? (
        <div className={styles['status-icon']}>{error}</div>
      ) : (
        active && <div className={styles['status-icon']}>{status}</div>
      )}
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
