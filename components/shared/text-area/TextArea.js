import React from 'react';
import PropTypes from 'prop-types';
import styles from './text-area.module.scss';

const TextArea = (props) => {
  const { name, formulario, label, optional } = props;
  const { handleChange, values, handleBlur, errors, touched } = formulario;

  const hasError = () => touched[name] && errors[name];

  return (
    <div className={styles['text-area-container']}>
      <div className={`${styles['border-text-area']} ${hasError() && styles['indicador-error']}`}>
        <textarea
          id={name}
          name={name}
          className={styles['text-area']}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
          autoComplete="off"
          placeholder={label}
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
  formulario: PropTypes.any.isRequired,
  optional: PropTypes.bool,
};

TextArea.defaultProps = {
  optional: false,
};

export default TextArea;
