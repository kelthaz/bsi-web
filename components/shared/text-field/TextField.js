/* eslint-disable complexity */
import PropTypes from 'prop-types';
import { useState } from 'react';
import SvgCheckOk from '../../svgs/SvgCheckOk';
import SvgCross from '../../svgs/SvgCross';
import SvgHidenPassword from '../../svgs/SvgHidenPassword';
import SvgShowPassword from '../../svgs/SvgShowPassword';
import styles from './text-field.module.scss';
import useFormatter from '../../../hooks/useFormatter';

const seleccionaEstilo = (size, inverted) => {
  const finalStyles = [];
  if (inverted) {
    finalStyles.push(size === 'big' ? styles['input-big-inverted'] : styles['input-small-inverted']);
    finalStyles.push(styles['icon-check-inverted']);
    finalStyles.push(styles['label-small-inverted']);
    finalStyles.push(styles['indicador-activo-inverted']);
    finalStyles.push(styles['help-text-inverted']);
  } else {
    finalStyles.push(size === 'big' ? styles['input-big'] : styles['input-small']);
    finalStyles.push(styles['icon-check']);
    finalStyles.push(styles['label-small']);
    finalStyles.push(styles['indicador-activo']);
    finalStyles.push(styles['help-text']);
  }
  return finalStyles;
};

const TextField = (props) => {
  const {
    name,
    formulario,
    maxlength,
    capitalize,
    label,
    type,
    size,
    inverted,
    optional,
    validation,
    format,
    paste,
  } = props;
  const [inputStyle, iconCheckStyle, labelStyle, indicadorStyle, helpTextStyle] = seleccionaEstilo(size, inverted);
  const { handleChange, values, handleBlur, errors, touched, setFieldTouched } = formulario;

  const error = <SvgCross className={styles['icon-error']} />;
  const status = <SvgCheckOk className={iconCheckStyle} />;

  const { formatter, changeSelection } = useFormatter(format);
  const [typeInput, setTypeInput] = useState(type);
  const [active, setActive] = useState(false);

  const handleViewPassword = () => {
    if (type === 'password') {
      setTypeInput(typeInput === 'text' ? 'password' : 'text');
    }
  };

  const onHandleChange = (event) => {
    if (!touched[name]) {
      setFieldTouched(name, true);
    }
    const { selectionStart, selectionEnd } = event.target;
    event.target.value = formatter(event.target.value.trim());
    handleChange(event);
    if (changeSelection && type === 'text') event.target.setSelectionRange(selectionStart, selectionEnd);
  };

  const onHandleBlur = (event) => {
    handleBlur(event);
    setActive(false);
  };

  const onPaste = (event) => {
    if (!paste) {
      event.preventDefault();
    } else {
      onHandleChange(event);
    }
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
        onChange={onHandleChange}
        onBlur={onHandleBlur}
        value={values[name]}
        maxLength={maxlength}
        autoComplete="off"
        placeholder={size === 'big' ? label : ''}
        onFocus={() => setActive(true)}
        onPaste={onPaste}
      />

      {size === 'small' && (
        <label
          htmlFor={name}
          className={`${labelStyle} ${hasError() ? styles['label-error'] : ''} ${
            values[name] !== '' || active ? styles['label-active'] : ''
          }`}
        >
          {label}
        </label>
      )}

      <span className={hasError() ? styles['help-text-error'] : helpTextStyle}>
        {hasError() ? active && errors[name] : active && optional && 'Opcional'}&nbsp;
      </span>
      {hasError() ? (
        <div className={styles['status-icon']}>{active && error}</div>
      ) : (
        validation && <div className={styles['status-icon']}>{active && status}</div>
      )}
      {type === 'password' && (
        <button className={styles['button-password-inverted']} type="button" onClick={handleViewPassword}>
          {typeInput === 'text' ? <SvgShowPassword /> : <SvgHidenPassword />}
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
  paste: PropTypes.bool,
  maxlength: PropTypes.number.isRequired,
  format: PropTypes.string,
};

TextField.defaultProps = {
  capitalize: false,
  inverted: false,
  optional: false,
  validation: false,
  paste: true,
  format: '',
};

export default TextField;
