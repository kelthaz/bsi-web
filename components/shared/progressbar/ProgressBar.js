import PropTypes from 'prop-types';
import styles from './progress-bar.module.scss';

const ProgressBar = ({ value }) => (
  <div>
    <progress className={`${styles.progress}`} value={value} max="100" />
  </div>
);

ProgressBar.propTypes = {
  value: PropTypes.string,
};

ProgressBar.defaultProps = {
  value: null,
};

export default ProgressBar;
