import { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import TextField from '../../shared/text-field/TextField';
import styles from './search-box.module.scss';

const SearchBox = ({ unmount }) => {
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const router = useRouter();

  const originalData = [
    { redirect: '/requisitos', text: 'Requisitos para un crédito de Crédito Simple PyME' },
    { redirect: '/requisitos', text: 'Requisitos para una cuenta BanCoppel' },
    { redirect: '/simulador', text: 'Simulador' },
    { redirect: '/beneficios', text: 'Beneficios' },
    { redirect: '/ayuda', text: 'Ayuda' },
  ];

  const dismiss = () => {
    unmount();
  };

  const handler = (evt) => {
    const val = evt.target.value;
    setValue(val);
    if (val.length >= 3) {
      setData(originalData.filter((item) => item.text.toLowerCase().includes(val)));
    } else {
      setData([]);
    }
  };

  const redirect = (url) => {
    router.push(url);
    dismiss();
  };

  return (
    <div className={styles['search-box']}>
      <div className={styles.close} onClick={dismiss} role="button" tabIndex="0">
        <img src="/x.svg" alt="Cerrar búsqueda" />
      </div>
      <div className="d-flex justify-content-center my-5">
        <div className="col-md-4">
          <h2 className={`text-center ${styles.text}`}>¿Cómo te podemos ayudar?</h2>
          <TextField
            label={(<img src="/search.svg" alt="Search icon" />)}
            onChange={handler}
            value={value}
          />
          <li className={styles['select-items']}>
            { data.map((item) => (
              <ul>
                <button className={styles.item} type="button" onClick={() => redirect(item.redirect)}>{item.text}</button>
              </ul>
            ))}
          </li>
        </div>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  unmount: PropTypes.func.isRequired,
};

export default SearchBox;
