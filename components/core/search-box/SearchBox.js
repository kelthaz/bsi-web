import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import styles from './search-box.module.scss';
import DatalistInput from '../../shared/datalist-input/DatalistInput';

import keywordsList from '../../../constants/searchBoxList';

const SearchBox = ({ unmount }) => {
  const router = useRouter();

  const dismiss = () => {
    unmount();
  };

  const redirect = (item) => {
    if (item.newTab) {
      const win = window.open(item.redirect, '_blank');
      win.focus();
    } else {
      router.push(item.redirect);
    }
    dismiss();
  };

  return (
    <div className={styles['search-box']}>
      <div className={styles.close} onClick={dismiss} role="button" tabIndex="0">
        <img src="/x.svg" alt="Cerrar búsqueda" />
      </div>
      <div className="d-flex justify-content-center my-5">
        <div className="col-xs-11 col-md-7 col-lg-4 p-0">
          <h2 className={`text-center ${styles.text}`}>¿Cómo te podemos ayudar?</h2>
          <DatalistInput onChange={redirect} keywordsList={keywordsList} />
        </div>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  unmount: PropTypes.func.isRequired,
};

export default SearchBox;
