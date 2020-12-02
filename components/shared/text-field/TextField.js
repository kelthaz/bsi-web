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
    readonly,
    disabled,
  } = props;
  const [inputStyle, iconCheckStyle, labelStyle, indicadorStyle, helpTextStyle] = seleccionaEstilo(size, inverted);
  const { handleChange, values, handleBlur, errors, touched, setFieldTouched } = formulario;

  const error = <SvgCross className={styles['icon-error']} />;
  const status = <SvgCheckOk className={iconCheckStyle} />;

  const { formatter, changeSelection, changeSelectionFunc } = useFormatter(format);
  const [showText, setShowText] = useState(false);
  const [active, setActive] = useState(false);
  let keyPress = '';

  const beforeInput = (event) => {
    keyPress = event.key;
  };

  const onHandleChange = (event) => {
    if (!touched[name]) {
      setFieldTouched(name, true);
    }
    const { selectionStart, selectionEnd } = changeSelectionFunc(event, keyPress);

    event.target.value = formatter(event.target.value.trim());
    handleChange(event);

    if (changeSelection) {
      event.target.setSelectionRange(selectionStart, selectionEnd);
    }
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

  const indicadorError = type === 'password' ? styles['indicador-error-password'] : styles['indicador-error'];
  const hasError = () => touched[name] && errors[name];

  return (
    <div className={`${styles.group}`}>
      <input
        id={name}
        name={name}
        className={`${type === 'password' ? styles['input-big-password'] : inputStyle} ${
          capitalize ? styles.capitalize : ''
        } ${hasError() ? indicadorError : active && indicadorStyle} ${
          !showText && type === 'password' ? styles['input-password-config'] : ''
        }`}
        type={type === 'password' ? 'text' : type}
        onChange={onHandleChange}
        onBlur={onHandleBlur}
        value={values[name]}
        maxLength={maxlength}
        autoComplete="off"
        placeholder={size === 'big' ? label : ''}
        onFocus={() => setActive(true)}
        onPaste={onPaste}
        onKeyDown={beforeInput}
        readOnly={readonly}
        tabIndex="0"
        disabled={disabled}
      />

      {size === 'small' && (
        <label
          htmlFor={name}
          className={`${disabled ? styles['label-disabled'] : labelStyle} ${hasError() ? styles['label-error'] : ''} ${
            values[name] !== '' || active ? styles['label-active'] : ''
          }`}
        >
          {label}
        </label>
      )}

      <span className={hasError() ? styles['help-text-error'] : helpTextStyle}>
        {hasError() ? errors[name] : active && optional && 'Opcional'}&nbsp;
      </span>
      {type === 'password' && (
        <button className={styles['button-password-inverted']} type="button" onClick={() => setShowText(!showText)}>
          {showText ? <SvgShowPassword /> : <SvgHidenPassword />}
        </button>
      )}
      {hasError() ? (
        <div className={type === 'password' ? styles['status-icon-password'] : styles['status-icon']}>{error}</div>
      ) : (
        validation && <div className={styles['status-icon']}>{active && status}</div>
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
  readonly: PropTypes.bool,
  disabled: PropTypes.bool,
};

TextField.defaultProps = {
  capitalize: false,
  inverted: false,
  optional: false,
  validation: false,
  paste: true,
  readonly: false,
  disabled: false,
  format: '',
};

export default TextField;
