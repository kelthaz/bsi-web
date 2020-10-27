import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './select.module.scss';

const seleccionaEstilo = (size, inverted) => {
  const finalStyles = [];
  if (inverted) {
    finalStyles.push(size === 'big' ? styles['select-big-inverted'] : styles['select-small-inverted']);
    finalStyles.push(styles['indicador-inverted']);
    finalStyles.push(styles['indicador-activo-inverted']);
    finalStyles.push(styles['help-text-inverted']);
  } else {
    finalStyles.push(size === 'big' ? styles['select-big'] : styles['select-small']);
    finalStyles.push(styles.indicador);
    finalStyles.push(styles['indicador-activo']);
    finalStyles.push(styles['help-text']);
  }
  return finalStyles;
};

const Select = (props) => {
  const [toggle, setToggle] = useState(false);
  const { name, formulario, size, items, inverted, optional } = props;
  const [selectStyle, indicadorStyle, indicadorActiveStyle, helpTextStyle] = seleccionaEstilo(size, inverted);
  const { values, errors, touched, setFieldValue, setFieldTouched } = formulario;

  const handleToggle = () => {
    if (!touched[name] && toggle) {
      setFieldTouched(name, true);
    }
    setToggle(!toggle);
  };
  const handleItem = (itemMap) => {
    setFieldValue(name, itemMap);
  };

  useEffect(() => {
    if (toggle) {
      window.addEventListener('click', handleToggle);
    }

    return () => {
      window.removeEventListener('click', handleToggle);
    };
  }, [toggle]);

  return (
    <div className={styles['custom-select']}>
      <button
        type="button"
        className={`${selectStyle} ${toggle ? indicadorActiveStyle : indicadorStyle} ${
          touched[name] && errors[name] ? styles['indicador-error'] : ''
        }`}
        onClick={() => !toggle && handleToggle()}
      >
        {values[name]}
      </button>
      <ul role="menu" className={`${styles['select-items']} ${toggle ? '' : styles['select-hide']}`}>
        {items.map((itemMap) => (
          <li role="none" key={itemMap}>
            <button
              role="menuitem"
              className={`${styles.item} ${values[name] === itemMap ? styles['item-selected'] : ''}`}
              type="button"
              onClick={() => handleItem(itemMap)}
            >
              {itemMap}
            </button>
          </li>
        ))}
      </ul>
      <span className={touched[name] && errors[name] ? styles['help-text-error'] : helpTextStyle}>
        {touched[name] && errors[name] ? errors[name] : optional && 'Opcional'}&nbsp;
      </span>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  formulario: PropTypes.any.isRequired,
  size: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  optional: PropTypes.bool,
  items: PropTypes.array.isRequired,
};

Select.defaultProps = {
  inverted: false,
  optional: false,
};

export default Select;
