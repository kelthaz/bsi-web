import PropTypes from 'prop-types';
import { useState } from 'react';
import SvgCross from '../../svgs/SvgCross';
import SvgHidenPassword from '../../svgs/SvgHidenPassword';
import SvgShowPassword from '../../svgs/SvgShowPassword';
import styles from './text-field.module.scss';
import useFormatter from '../../../hooks/useFormatter';
import { regexMultipleSpaces } from '../../../constants/regex';

const TextField = ({
  name,
  error,
  touched,
  value,
  setValue,
  setTouched,
  maxlength,
  capitalize,
  label,
  type: typeInput,
  size,
  inverted,
  optional,
  format,
  paste,
  readonly,
  disabled,
}) => {
  const classInput = `input-${size}${typeInput === 'password' ? '-password' : ''}${inverted ? '-inverted' : ''}`;
  const inputStyle = styles[classInput];
  const inputErrorStyle = styles[`${classInput}-error`];
  // const { getFieldMeta, getFieldHelpers } = formulario;

  // const { error, touched, value } = getFieldMeta(name);
  // const { setValue, setTouched } = getFieldHelpers(name);

  const [type, setType] = useState(typeInput);
  const [formatter, changeSelection] = useFormatter(format);

  let keyPress = '';

  const onBeforeInput = (event) => {
    if (formatter(event.data) === '') {
      event.preventDefault();
    }
  };

  const onTouch = async () => {
    if (!touched) {
      await setTouched(true);
    }
  };

  const onChange = async (event) => {
    const { selectionStart, value: valueTarget } = event.target;
    const formattedValue = formatter(valueTarget.trimStart().replace(regexMultipleSpaces, ' '));
    await onTouch();
    await setValue(formattedValue);
    changeSelection(keyPress, value, valueTarget, formattedValue, selectionStart, event.target);
    keyPress = '';
  };

  const onBlur = async () => {
    await setValue(value.trimEnd());
    await onTouch();
  };

  const onPaste = (event) => {
    if (!paste) {
      event.preventDefault();
    }
  };

  const hasError = !disabled && touched && error;

  return (
    <div className={`${styles.group}`}>
      <input
        id={name}
        name={name}
        className={`${hasError ? inputErrorStyle : inputStyle} ${capitalize ? styles.capitalize : ''} `}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        maxLength={maxlength}
        autoComplete="off"
        placeholder={size === 'big' ? label : ' '}
        onPaste={onPaste}
        onKeyDown={(event) => {
          keyPress = event.key;
        }}
        readOnly={readonly}
        tabIndex="0"
        disabled={disabled}
        onBeforeInput={onBeforeInput}
      />

      {size === 'small' && (
        <label htmlFor={name} className="text-overflow">
          {label}
        </label>
      )}

      {hasError ? (
        <span className={styles['opacity-error']}>{error}</span>
      ) : (
        <span>{optional && 'Opcional'}&nbsp;</span>
      )}

      {typeInput === 'password' && (
        <button
          className={styles['button-password-inverted']}
          type="button"
          onClick={() => setType(type === 'password' ? 'text' : 'password')}
        >
          {type === 'text' ? <SvgShowPassword /> : <SvgHidenPassword />}
        </button>
      )}

      {hasError && (
        <div className={typeInput === 'password' ? styles['status-icon-password'] : styles['status-icon']}>
          <SvgCross className={styles['icon-error']} />
        </div>
      )}
    </div>
  );
};

TextField.propTypes = {
  capitalize: PropTypes.bool,
  label: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  touched: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.any.isRequired,
  setTouched: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  inverted: PropTypes.bool,
  optional: PropTypes.bool,
  paste: PropTypes.bool,
  maxlength: PropTypes.number.isRequired,
  format: PropTypes.string,
  readonly: PropTypes.bool,
  disabled: PropTypes.bool,
};

TextField.defaultProps = {
  error: '',
  size: 'small',
  capitalize: false,
  inverted: false,
  optional: false,
  paste: true,
  readonly: false,
  disabled: false,
  format: '',
};

export default TextField;
