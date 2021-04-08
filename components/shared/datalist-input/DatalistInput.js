/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import { useState } from 'react';
import useSearchEngine from '../../../hooks/useSearchEngine';
import SvgBuscar from '../../svgs/iconos/SvgBuscar';
import styles from './datalist-input.module.scss';

const DatalistInput = ({ capitalize, onChange, value, placeholder, inverted, keywordsList }) => {
  const [valueState, setValue] = useState(value);
  const [selected, setSelected] = useState();
  const [data] = useSearchEngine(valueState, keywordsList);

  const onSelectionChange = (item) => {
    setValue(item.text);
    setSelected(item);
    onChange(item);
  };

  return (
    <>
      <div className={`${styles.group} ${inverted && styles.inverted}`}>
        <input
          className={`${styles.input} ${capitalize ? styles.capitalize : ''}`}
          type="text"
          required
          onChange={(evt) => setValue(evt.target.value)}
          placeholder={placeholder}
          value={valueState}
        />
        <span className={styles.highlight} />
        <span className={styles.bar} />
        <label className={`body2 ${styles.label}`}>
          <SvgBuscar color="#636363" />
        </label>
        <label className={`body2 ${styles['right-label']}`}>
          <img src="/chevron.svg" alt="Chevron" />
        </label>
      </div>
      {data.length > 0 && (
        <ul className={styles['select-items']}>
          {data.map((item) => (
            <li key={item.text}>
              <button
                disabled={item.disabled}
                className={styles.item}
                type="button"
                onClick={() => onSelectionChange(item)}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

DatalistInput.propTypes = {
  capitalize: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  inverted: PropTypes.bool,
  keywordsList: PropTypes.array.isRequired,
};

DatalistInput.defaultProps = {
  capitalize: false,
  onChange: () => {},
  value: '',
  placeholder: '',
  inverted: false,
};

export default DatalistInput;
