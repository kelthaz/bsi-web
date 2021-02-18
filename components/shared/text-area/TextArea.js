import React from 'react';
import PropTypes from 'prop-types';
import styles from './text-area.module.scss';
import useFormatter from '../../../hooks/useFormatter';
import { regexMultipleSpaces } from '../../../constants/regex';

const TextArea = (props) => {
  const { name, formulario, label, optional, maxlength, format } = props;
  const { setFieldTouched, setFieldValue, getFieldMeta } = formulario;
  const { error, touched, value } = getFieldMeta(name);
  const [formatter, changeSelection] = useFormatter(format);

  const beforeInput = (event) => {
    if (formatter(event.data) === '') {
      event.preventDefault();
    }
  };

  const onHandleChange = async (event) => {
    const { selectionStart, value: valueTarget } = event.target;
    const formattedValue = formatter(valueTarget.trimStart().replace(regexMultipleSpaces, ' '));

    if (!touched && formattedValue !== value) {
      await setFieldTouched(name, true);
    }

    await setFieldValue(name, formattedValue);
    changeSelection('', '', valueTarget, formattedValue, selectionStart, event.target);
  };

  const onHandleBlur = () => {
    setFieldValue(name, value.trimEnd());
    setFieldTouched(name, true);
  };

  const hasError = () => touched && error;

  return (
    <div className={styles['text-area-container']}>
      <div className={`${styles['border-text-area']} ${hasError() && styles['indicador-error']}`}>
        <textarea
          id={name}
          name={name}
          className={styles['text-area']}
          onChange={onHandleChange}
          onBlur={onHandleBlur}
          value={value}
          maxLength={maxlength}
          autoComplete="off"
          placeholder={label}
          tabIndex="0"
          onBeforeInput={beforeInput}
        />

        <div className={styles['resize-text-area']} />
      </div>

      <span className={hasError() ? styles['help-text-error'] : styles['help-text']}>
        {hasError() ? error : optional && 'Opcional'}&nbsp;
      </span>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  formulario: PropTypes.any.isRequired,
  maxlength: PropTypes.number.isRequired,
  optional: PropTypes.bool,
};

TextArea.defaultProps = {
  optional: false,
};

export default TextArea;
