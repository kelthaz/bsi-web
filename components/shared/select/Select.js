import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './select.module.scss';

const Select = (props) => {
  const [toggle, setToggle] = useState(false);
  const { items, setItem, item } = props;
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleItem = (itemMap) => {
    setItem(itemMap);
    handleToggle();
  };

  return (
    <div className={styles['custom-select']}>
      <button
        type="button"
        className={`${styles['select-selected']} ${toggle ? styles['select-arrow-active'] : ''}`}
        onClick={handleToggle}
      >
        {item}
      </button>
      <li className={`${styles['select-items']} ${toggle ? '' : styles['select-hide']}`}>
        {items.map((itemMap) => (
          <ul key={itemMap}>
            <button
              className={`${styles.item} ${item === itemMap ? styles['item-selected'] : ''}`}
              type="button"
              onClick={() => handleItem(itemMap)}
            >
              {itemMap}
            </button>
          </ul>
        ))}
      </li>
    </div>
  );
};

Select.propTypes = {
  items: PropTypes.array.isRequired,
  setItem: PropTypes.func.isRequired,
  item: PropTypes.any.isRequired,
};

export default Select;
