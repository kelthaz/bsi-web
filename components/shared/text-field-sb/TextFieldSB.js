import PropTypes from 'prop-types';
import styles from './text-field-sb.module.scss';

const TextFieldSB = ({ capitalize, onChange, value }) => (
  <div className={styles.group}>
    <input
      className={`${styles.input} ${capitalize ? styles.capitalize : ''}`}
      type="text"
      required
      onChange={onChange}
      value={value}
    />
    <span className={styles.highlight} />
    <span className={styles.bar} />
    <label className={`body2 ${styles.label}`}>
      <img src="/search.svg" alt="Search icon" />
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
};

TextFieldSB.defaultProps = {
  capitalize: false,
  onChange: () => { },
  value: null,
};

export default TextFieldSB;