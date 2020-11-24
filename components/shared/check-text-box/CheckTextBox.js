import React from 'react';
import styles from './check-text-box.module.scss';

const CheckTextBox = ({ name, formulario, children }) => {
  const { values, handleChange } = formulario;
  return (
    <div className="row">
      <span className={` ${styles['content-check']}`}>
        <input
          id={name}
          name={name}
          className={` ${styles['my-check']}`}
          type="checkbox"
          onChange={handleChange}
          value={values[name]}
        />
        <label htmlFor={name} className={`${styles.label}`}>
          {' '}
        </label>
      </span>
      <p className="col-11">
        Acepto: (1) los&nbsp;
        <a className="link" target="_blank" rel="noreferrer">
          Términos y Condiciones
        </a>
        , (2) el&nbsp;
        <a href="/aviso-privacidad" className="link">
          Aviso de Privacidad
        </a>
        , (3) tu Solicitud de Crédito y que (4) los productos y/o servicios que ofrece BanCoppel serán promocionados,
        aceptados y/o modificados a través de medios electrónicos, telefónicos, digitales y/o cualquier otra tecnología.
      </p>
    </div>
  );
};

export default CheckTextBox;
