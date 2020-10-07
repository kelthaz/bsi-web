import TextField from '../../shared/text-field/TextField';
import styles from './search-box.module.scss';

const SearchBox = ({ unmount }) => {
  const dismiss = () => {
    unmount();
  };

  return (
    <div className={styles['search-box']}>
      <div className={styles.close} onClick={dismiss} role="button" tabIndex="0">
        <img src="/x.svg" alt="Cerrar búsqueda" />
      </div>
      <div className="d-flex justify-content-center my-5">
        <div className="col-md-4">
          <h2 className={`text-center ${styles.text}`}>¿Cómo te podemos ayudar?</h2>
          <TextField label={(<img src="/search.svg" alt="Search icon" />)} />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
