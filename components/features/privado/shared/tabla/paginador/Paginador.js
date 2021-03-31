import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './paginador.module.scss';

const Paginador = ({numberOfPages, onChange, currentPage}) => {

  const [selectedPage, setSelectedPage] = useState(currentPage);

  const onPageChange = (numPage) => {
    if (numPage === currentPage || numPage > numberOfPages || numPage < 1) {
      return;
    }
    setSelectedPage(numPage);
    onChange(numPage);
  };

  return (
    <ul className={styles.pagination}>
      <li>
        <span role="button" onClick={() => onPageChange(currentPage - 1)} tabIndex={0}>&lt;</span>
      </li>
      {[...Array(numberOfPages)].map((__, num) =>
        // eslint-disable-next-line react/no-array-index-key
        <li key={num} className={selectedPage === (num + 1) ? styles.active : ''}>
          <span role="button" onClick={() => onPageChange(num + 1)} tabIndex={0}>{num + 1}</span>
        </li>
      )}
      <li>
        <span role="button" onClick={() => onPageChange(currentPage + 1)} tabIndex={0}>&gt;</span>
      </li>
    </ul>
  );
};

Paginador.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  onChange: PropTypes.func
};

Paginador.defaultProps = {
  currentPage: 1,
  onChange: () => {}
};

export default Paginador;
