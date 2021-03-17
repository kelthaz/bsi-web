import PropTypes from 'prop-types';
import SvgBuscar from '../../svgs/iconos/SvgBuscar';
import styles from './text-field-sb.module.scss';

const TextFieldSB = ({ capitalize, onChange, value, placeholder, inverted }) => (
  <div className={`${styles.group} ${inverted && styles.inverted}`}>
    <input
      className={`${styles.input} ${capitalize ? styles.capitalize : ''}`}
      type="text"
      required
      onChange={onChange}
      placeholder={placeholder}
      value={value}
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
);

TextFieldSB.propTypes = {
  capitalize: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  inverted: PropTypes.bool
};

TextFieldSB.defaultProps = {
  capitalize: false,
  onChange: () => { },
  value: null,
  placeholder: '',
  inverted: false,
};

export default TextFieldSB;
