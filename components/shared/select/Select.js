/* eslint-disable complexity */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './select.module.scss';
import useOnClick from '../../../hooks/useOnClick';
import SvgChevron from '../../svgs/SvgChevron';
// import SvgCross from '../../svgs/SvgCross';

const seleccionaEstilo = (size, inverted) => {
  const finalStyles = [];
  if (inverted) {
    finalStyles.push(styles['arrow-inverted']);
    finalStyles.push(size === 'big' ? styles['select-big-inverted'] : styles['select-small-inverted']);
    finalStyles.push(styles['indicador-inverted']);
    finalStyles.push(styles['indicador-activo-inverted']);
    finalStyles.push(styles['help-text-inverted']);
    finalStyles.push(styles['placeholder-color-inverted']);
  } else {
    finalStyles.push(styles.arrow);
    finalStyles.push(size === 'big' ? styles['select-big'] : styles['select-small']);
    finalStyles.push(styles.indicador);
    finalStyles.push(styles['indicador-activo']);
    finalStyles.push(styles['help-text']);
    finalStyles.push(styles['placeholder-color']);
  }
  return finalStyles;
};

const Select = (props) => {
  const [toggle, setToggle] = useState(false);
  const {
    name,
    formulario,
    size,
    items,
    inverted,
    optional,
    label,
    disabled,
    defaultValue,
    blue,
    showAlwaysErrors,
  } = props;
  const [
    arrrowStyle,
    selectStyle,
    indicadorStyle,
    indicadorActiveStyle,
    helpTextStyle,
    placeholderStyle,
  ] = seleccionaEstilo(size, inverted);
  const { setFieldValue, setFieldTouched, getFieldMeta } = formulario;
  const { error, touched, value } = getFieldMeta(name);

  useEffect(() => {
    if (!value && defaultValue !== null) {
      setFieldValue(name, items[defaultValue]);
    }
  }, []);

  const handleToggle = () => {
    if (!touched && toggle) {
      setFieldTouched(name, true);
    }
    setToggle(!toggle);
  };

  useOnClick(toggle, handleToggle);

  const handleItem = (itemMap) => {
    setFieldValue(name, itemMap);
  };

  return (
    <div className={styles['custom-select']}>
      <button
        type="button"
        className={`svg-button-input-small ${arrrowStyle} ${toggle ? styles['arrow-active'] : ''}`}
        onClick={() => handleToggle()}
        tabIndex="-1"
        disabled={disabled}
      >
        <SvgChevron />
      </button>
      {/* {values[name] && <button
        type="button"
        className={`svg-button-input-small ${styles['deselect-item']}`}
        onClick={() => setFieldValue(name, null)}
      >
        <SvgCross />
      </button>} */}
      <button
        type="button"
        className={`${!toggle && !value ? placeholderStyle : ''} ${blue ? styles['select-small-blue'] : selectStyle} ${
          toggle ? indicadorActiveStyle : indicadorStyle
        } ${touched && error ? styles['indicador-error'] : ''}`}
        onClick={() => !toggle && handleToggle()}
        disabled={disabled}
        tabIndex="0"
        // onFocus={() => !toggle && handleToggle()}
        // onBlur={() => handleToggle()}
      >
        {value ? value.label : label}
      </button>
      <ul role="menu" className={`${styles['select-items']} ${toggle ? '' : styles['select-hide']}`}>
        {items.map((itemMap) => (
          <li role="none" key={itemMap.value}>
            <button
              role="menuitem"
              className={`${styles.item} ${value && value.value === itemMap.value ? styles['item-selected'] : ''}`}
              type="button"
              onClick={() => handleItem(itemMap)}
              tabIndex="-1"
            >
              {itemMap.label}
            </button>
          </li>
        ))}
      </ul>
      <span className={touched && error ? styles['help-text-error'] : helpTextStyle}>
        {touched && error && items.length > 0 ? error : optional && 'Opcional'}
        {showAlwaysErrors && <span>&nbsp;</span>}
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
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  blue: PropTypes.bool,
  showAlwaysErrors: PropTypes.bool,
};

Select.defaultProps = {
  inverted: false,
  optional: false,
  defaultValue: null,
  disabled: false,
  blue: false,
  showAlwaysErrors: true,
};

export default Select;
