/* eslint-disable complexity */

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import styles from './check-field.module.scss';

const CheckField = (props) => {
  const { name, formulario, label } = props;
  const hiddenMaxMin = formulario.errors.contraseña !== '8 caracteres mínimo' ? false : true;

  console.log('formulario, formulario', formulario);
  const hiddenCapital = formulario.errors.contraseña === 'error' || null ? true : false;

  return (
    <div className="mb-5">
      <label htmlFor="max-min">
        <img hidden={hiddenMaxMin} src="/check.svg" alt="Check" />
        <input className={`mr-2  ${hiddenMaxMin ? styles['input-visible'] : styles.input}`} type="radio" disabled />
        Deben ser 8 caracteres mínimo y máximo 20
      </label>
      <label htmlFor="min-letter">
        <img hidden={hiddenCapital} src="/check.svg" alt="Check" />
        <input className={`mr-2  ${hiddenCapital ? styles['input-visible'] : styles.input}`} type="radio" disabled />
        Debe tener mínimo 1 letra mayúscula y 1 minúscula
      </label>
      <label htmlFor="min-num">
        <img hidden={hiddenCapital} src="/check.svg" alt="Check" />
        <input className={`mr-2  ${hiddenCapital ? styles['input-visible'] : styles.input}`} type="radio" />
        Debe tener mínimo 1 número
      </label>
      <label htmlFor="without-num">
        <img hidden={hiddenCapital} src="/check.svg" alt="Check" />
        <input className={`mr-2  ${hiddenCapital ? styles['input-visible'] : styles.input}`} type="radio" disabled />
        Sin números consecutivos
      </label>
    </div>
  );
};

export default CheckField;
