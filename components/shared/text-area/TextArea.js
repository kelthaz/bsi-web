import React from 'react';
import PropTypes from 'prop-types';
import styles from './text-area.module.scss';
import useFormatter from '../../../hooks/useFormatter';

const TextArea = (props) => {
  const { name, formulario, label, optional, maxlength, format } = props;
  const { handleChange, values, handleBlur, errors, touched, setFieldTouched, setFieldValue } = formulario;

  const { formatter, changeSelection } = useFormatter(format);

  const beforeInput = (event) => {
    if (formatter(event.data) === '') {
      event.preventDefault();
    }
  };

  const onHandleChange = (event) => {
    const { selectionStart, selectionEnd, value } = event.target;
    const formattedValue = formatter(value.trimStart().replace(/\s+/g, ' '));

    if (!touched[name] && formattedValue !== values[name]) {
      setFieldTouched(name, true);
    }

    event.target.value = formattedValue;
    handleChange(event);

    if (changeSelection) {
      const difference = formattedValue.length - value.length;
      event.target.setSelectionRange(selectionStart + difference, selectionEnd + difference);
    }
  };

  const onHandleBlur = (event) => {
    setFieldValue(name, values[name].trimEnd());
    handleBlur(event);
  };

  const hasError = () => touched[name] && errors[name];

  return (
    <div className={styles['text-area-container']}>
      <div className={`${styles['border-text-area']} ${hasError() && styles['indicador-error']}`}>
        <textarea
          id={name}
          name={name}
          className={styles['text-area']}
          onChange={onHandleChange}
          onBlur={onHandleBlur}
          value={values[name]}
          maxLength={maxlength}
          autoComplete="off"
          placeholder={label}
          tabIndex="0"
          onBeforeInput={beforeInput}
        >
          {values[name]}
        </textarea>
        <div className={styles['resize-text-area']} />
      </div>

      <span className={hasError() ? styles['help-text-error'] : styles['help-text']}>
        {hasError() ? errors[name] : optional && 'Opcional'}&nbsp;
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
