import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './select.module.scss';
import useOnClick from '../../../hooks/useOnClick';
import SvgChevron from '../../svgs/SvgChevron';

const seleccionaEstilo = (size, inverted, blue) => {
  const finalStyles = [];
  if (inverted) {
    finalStyles.push(styles['arrow-inverted']);
    finalStyles.push(size === 'big' ? styles['select-big-inverted'] : styles['select-small-inverted']);
    finalStyles.push(styles['indicador-inverted']);
    finalStyles.push(styles['indicador-activo-inverted']);
    finalStyles.push(styles['placeholder-color-inverted']);
  } else {
    finalStyles.push(styles.arrow);
    finalStyles.push(size === 'big' ? styles['select-big'] : styles['select-small']);
    finalStyles.push(styles.indicador);
    finalStyles.push(styles['indicador-activo']);
    finalStyles.push(styles['placeholder-color']);
  }
  if (blue) {
    finalStyles[1] = styles['select-small-blue'];
  }
  return finalStyles;
};

const Select = ({
  name,
  error,
  touched,
  value,
  setValue,
  setTouched,
  size,
  items,
  inverted,
  label,
  disabled,
  blue,
  showAlwaysErrors,
}) => {
  const [toggle, setToggle] = useState(false);
  const [arrrowStyle, selectStyle, indicadorStyle, indicadorActiveStyle, placeholderStyle] = seleccionaEstilo(
    size,
    inverted,
    blue
  );

  const onToggle = async () => {
    if (!touched) {
      await setTouched(true);
    }
    setToggle(!toggle);
  };

  useOnClick(toggle, onToggle);

  const onChangeItem = async (itemMap) => {
    await setValue(itemMap);
  };

  const hasError = !disabled && touched && error && items.length > 0;

  return (
    <div className={styles['custom-select']}>
      <button
        type="button"
        className={`svg-button-input-small ${arrrowStyle} ${toggle ? styles['arrow-active'] : ''}`}
        onClick={() => onToggle()}
        tabIndex="-1"
        disabled={disabled}
      >
        <SvgChevron />
      </button>
      <button
        name={name}
        type="button"
        className={`${!toggle && !value ? placeholderStyle : ''} ${selectStyle} ${
          toggle ? indicadorActiveStyle : indicadorStyle
        } ${hasError ? styles['indicador-error'] : ''}`}
        onClick={() => !toggle && onToggle()}
        disabled={disabled}
        tabIndex="0"
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
              onClick={() => onChangeItem(itemMap)}
              tabIndex="-1"
            >
              {itemMap.label}
            </button>
          </li>
        ))}
      </ul>
      <span className={styles['help-text-error']}>
        {hasError && error}
        {showAlwaysErrors && <span>&nbsp;</span>}
      </span>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  touched: PropTypes.any.isRequired,
  value: PropTypes.any,
  setValue: PropTypes.any.isRequired,
  setTouched: PropTypes.any.isRequired,
  size: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  blue: PropTypes.bool,
  showAlwaysErrors: PropTypes.bool,
};

Select.defaultProps = {
  value: null,
  error: '',
  inverted: false,
  disabled: false,
  blue: false,
  showAlwaysErrors: true,
};

export default Select;
