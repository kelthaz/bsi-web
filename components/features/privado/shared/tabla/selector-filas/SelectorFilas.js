import PropTypes from 'prop-types';
import { useState } from 'react';

import Select from '../../../../../shared/select/Select';

import styles from './selector-filas.module.scss';

const SelectorFilas = ({ rowsPerPage, currentPage, totalRows, onChange }) => {

  const [value, setValue] = useState({label: rowsPerPage, value: rowsPerPage});

  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = (lastIndex - rowsPerPage) + 1;

  const handleChange = (val) => {
    setValue(val);
    onChange(val.value);
  };

  return (
    <div className={styles.inline}>
      <span className={`color-gray-light ${styles['data-count']}`}>
        {firstIndex} - {lastIndex > totalRows ? totalRows : lastIndex} de {totalRows} datos
      </span>
      <span className={`color-gray py-1 ml-2 pl-2 ${styles['rows-per-page']}`}>Filas por página:</span>
      <div className="w-25 ">
        <Select
          name="filasPorPagina"
          showAlwaysErrors={false}
          size="smallb"
          label=""
          value={value}
          setValue={handleChange}
          touched
          setTouched={() => {}}
          items={[
            { value: 5, label: 5 },
            { value: 10, label: 10 },
            { value: 20, label: 20 },
            { value: 50, label: 50 }
          ]}
        />
      </div>
    </div>
  );
};

SelectorFilas.propTypes = {
  rowsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalRows: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectorFilas;
