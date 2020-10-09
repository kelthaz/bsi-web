import PropTypes from 'prop-types';
import styles from './text-field.module.scss';

const TextField = ({ capitalize, label, onChange, value }) => (
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
    <label className={`body2 ${styles.label}`}>{label}</label>
  </div>
);

TextField.propTypes = {
  capitalize: PropTypes.bool,
  label: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

TextField.defaultProps = {
  capitalize: false,
  onChange: () => { },
  value: null,
};

export default TextField;
