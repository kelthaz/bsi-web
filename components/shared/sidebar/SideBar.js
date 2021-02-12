import PropTypes from 'prop-types';
import styles from './side-bar.module.scss';

const SideBar = ({ value }) => (
  <div>
    <progress className={`${styles.progress}`} value={value} max="100" />
  </div>
);

SideBar.propTypes = {
  value: PropTypes.string,
};

SideBar.defaultProps = {
  value: null,
};

export default SideBar;
