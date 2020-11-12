import { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import TextField from '../../shared/text-field/TextField';
import styles from './search-box.module.scss';
import useSearchEngine from '../../../hooks/useSearchEngine';

const SearchBox = ({ unmount }) => {
  const [data, setData] = useState([]);
  const router = useRouter();

  const dismiss = () => {
    unmount();
  };

  const formulario = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: Yup.object({
      search: Yup.string().max(255, 'El campo debe contener 255 caracteres o menos'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useSearchEngine(formulario.values.search, setData);

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
        <div className="col-xs-11 col-md-10 col-lg-4 p-0">
          <h2 className={`text-center ${styles.text}`}>¿Cómo te podemos ayudar?</h2>
          <TextField
            name="search"
            formulario={formulario}
            type="text" size="small"
            label={<img src="/search.svg" alt="Search icon" />}
            inverted
          />
          <ul className={styles['select-items']}>
            {data.length > 0 && (
              <li>
                <button disabled className={styles.item} type="button">
                  Principales sugerencias de reporte
                </button>
              </li>
            )}
            {data.map((item) => (
              <li key={item.text}>
                <button className={styles.item} type="button" onClick={() => redirect(item)}>
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  unmount: PropTypes.func.isRequired,
};

export default SearchBox;
