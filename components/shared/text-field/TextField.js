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
  if (inverted) {
    finalStyles.push(size === 'big' ? styles['input-big-inverted'] : styles['input-small-inverted']);
    finalStyles.push(styles['icon-check-inverted']);
    finalStyles.push(size === 'big' ? styles['label-big-inverted'] : styles['label-small-inverted']);
    finalStyles.push(styles['indicador-activo-inverted']);
    finalStyles.push(styles['help-text-inverted']);
  } else {
    finalStyles.push(size === 'big' ? styles['input-big'] : styles['input-small']);
    finalStyles.push(styles['icon-check']);
    finalStyles.push(size === 'big' ? styles['label-big'] : styles['label-small']);
    finalStyles.push(styles['indicador-activo']);
    finalStyles.push(styles['help-text']);
  }
  return finalStyles;
};

const TextField = (props) => {
  const { name, formulario, maxlength, capitalize, label, type, size, inverted, optional, validation } = props;
  const [inputStyle, iconCheckStyle, labelStyle, indicadorStyle, helpTextStyle] = seleccionaEstilo(size, inverted);
  const { handleChange, values, handleBlur, errors, touched, submitCount } = formulario;

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

  const hasError = () => touched[name] && errors[name];

  return (
    <div className={`${styles.group}`}>
      <input
        id={name}
        name={name}
        className={`${inputStyle} ${capitalize ? styles.capitalize : ''} ${
          hasError() ? styles['indicador-error'] : active && indicadorStyle
        }`}
        type={typeInput}
        required
        onChange={handleChange}
        onBlur={onHandleBlur}
        value={values[name]}
        maxLength={maxlength}
        autoComplete="off"
        placeholder={size === 'big' ? label : ''}
        onFocus={() => setActive(true)}
      />

      <label
        htmlFor={name}
        className={`${labelStyle} ${hasError() ? styles['label-error'] : ''} ${
          values[name] !== '' || active ? styles['label-active'] : ''
        }`}
      >
        {label}
      </label>

      <span className={hasError() ? styles['help-text-error'] : helpTextStyle}>
        {hasError() ? errors[name] : optional && 'Opcional'}
      </span>
      {hasError() ? (
        <div className={styles['status-icon']}>{error}</div>
      ) : (
        validation && active && <div className={styles['status-icon']}>{status}</div>
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
  validation: PropTypes.bool,
  maxlength: PropTypes.number,
};

TextField.defaultProps = {
  capitalize: false,
  inverted: false,
  optional: false,
  validation: true,
};

export default TextField;
