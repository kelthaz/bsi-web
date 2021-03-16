import React from 'react';
import PropTypes from 'prop-types';
import styles from './text-area.module.scss';
import useFormatter from '../../../hooks/useFormatter';
import { regexMultipleSpaces } from '../../../constants/regex';

const TextArea = ({ name, error, touched, value, setValue, setTouched, label, optional, maxlength, format }) => {
  const [formatter, changeSelection] = useFormatter(format);

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
    changeSelection('', '', valueTarget, formattedValue, selectionStart, event.target);
  };

  const onBlur = async () => {
    await setValue(value.trimEnd());
    await onTouch();
  };

  const hasError = touched && error;

  return (
    <div className={styles['text-area-container']}>
      <div className={`${styles['border-text-area']} ${hasError && styles['indicador-error']}`}>
        <textarea
          id={name}
          name={name}
          className={styles['text-area']}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          maxLength={maxlength}
          autoComplete="off"
          placeholder={label}
          tabIndex="0"
          onBeforeInput={onBeforeInput}
        />

        <div className={styles['resize-text-area']} />
      </div>

      <span className={hasError ? styles['help-text-error'] : styles['help-text']}>
        {hasError ? error : optional && 'Opcional'}&nbsp;
      </span>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  error: PropTypes.string,
  touched: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.any.isRequired,
  setTouched: PropTypes.any.isRequired,
  maxlength: PropTypes.number.isRequired,
  optional: PropTypes.bool,
};

TextArea.defaultProps = {
  optional: false,
  error: '',
};

export default TextArea;
