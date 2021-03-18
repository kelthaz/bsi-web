import { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import styles from './search-box.module.scss';
import TextFieldSB from '../../shared/text-field-sb/TextFieldSB';
import useSearchEngine from '../../../hooks/useSearchEngine';

import keywordsList from '../../../constants/searchBoxList';

const SearchBox = ({ unmount }) => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const router = useRouter();

  const dismiss = () => {
    unmount();
  };

  useSearchEngine(value, setData, keywordsList);

  const redirect = (item) => {
    if (item.newTab) {
      const win = window.open(item.redirect, '_blank');
      win.focus();
    } else {
      router.push(item.redirect);
    }
    dismiss();
  };

  const handler = (evt) => {
    setValue(evt.target.value);
  };

  return (
    <div className={styles['search-box']}>
      <div className={styles.close} onClick={dismiss} role="button" tabIndex="0">
        <img src="/x.svg" alt="Cerrar búsqueda" />
      </div>
      <div className="d-flex justify-content-center my-5">
        <div className="col-xs-11 col-md-7 col-lg-4 p-0">
          <h2 className={`text-center ${styles.text}`}>¿Cómo te podemos ayudar?</h2>
          <TextFieldSB value={value} onChange={handler} />
          {data.length > 0 && (
            <ul className={styles['select-items']}>
              <li>
                <button disabled className={styles.item} type="button">
                  Principales sugerencias de reporte
                </button>
              </li>

              {data.map((item) => (
                <li key={item.text}>
                  <button className={styles.item} type="button" onClick={() => redirect(item)}>
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  unmount: PropTypes.func.isRequired,
};

export default SearchBox;
