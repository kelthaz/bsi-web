import PropTypes from 'prop-types';
import styles from './text-field.module.scss';

const TextField = (props) => {
  const { capitalize, label } = props;
  return (
    <div className={styles.group}>
      <input className={`${styles.input} ${capitalize ? styles.capitalize : ''}`} type="text" required />
      <span className={styles.highlight} />
      <span className={styles.bar} />
      <label className={`body2 ${styles.label}`}>{label}</label>
    </div>
  );
};

TextField.propTypes = {
  capitalize: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  capitalize: false,
};

export default TextField;
