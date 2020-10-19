import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import TextField from '../../shared/text-field/TextField';
import styles from './search-box.module.scss';

const SearchBox = ({ unmount }) => {
  const [data, setData] = useState([]);
  const router = useRouter();

  const originalData = [
    { redirect: '/credito-pyme', text: 'Crédito PyME' },
    { redirect: '/requisitos', text: 'Requisitos para un crédito de Crédito Simple PyME' },
    { redirect: '/requisitos', text: 'Requisitos para una cuenta BanCoppel' },
    { redirect: '/simulador', text: 'Simulador' },
    { redirect: '/beneficios', text: 'Beneficios' },
    { redirect: '/ayuda', text: 'Ayuda' },
    { redirect: '/aviso-privacidad', text: 'Aviso de privacidad' },
  ];

  const dismiss = () => {
    unmount();
  };

  const formulario = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: Yup.object({
      search: Yup.string().max(15, 'Must be 15 characters or less').required('Campo requerido'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    const val = formulario.values.search;
    if (val.length > 0) {
      setData(
        originalData.filter(({ text }) =>
          text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .includes(val)
        )
      );
    } else {
      setData([]);
    }
  }, [formulario.values.search]);

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
        <div className="col-md-4 p-0">
          <h2 className={`text-center ${styles.text}`}>¿Cómo te podemos ayudar?</h2>
          {/*<img src="/search.svg" alt="Search icon" />*/}
          <TextField name="search" formulario={formulario} type="text" size="small" label="Buscar" inverted />
          <li className={styles['select-items']}>
            {data.map((item) => (
              <ul key={item.text}>
                <button className={styles.item} type="button" onClick={() => redirect(item.redirect)}>
                  {item.text}
                </button>
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
