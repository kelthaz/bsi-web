import PropTypes from 'prop-types';
import styles from './title.module.scss';

const Title = (props) => {
  const { linea1, linea2 } = props;
  return (
    <div className="container-fluid">
      <div className={`${styles.box} row`}>
        <div className={`${styles['line-left']} col-xl-4 col-lg-3 col-md-3 col-sm-3 col-2`} />
        <div className={`${styles.text} col-xl-4 col-lg-6 col-md-6 col-sm-6 col-8`}>
          <h2 className="text-primary">{linea1}</h2>
          <h2 className="text-secondary">{linea2}</h2>
        </div>
        <div className={`${styles['line-rigth']} col-xl-4 col-lg-3 col-md-3 col-sm-3 col-2`} />
      </div>
    </div>
  );
};

Title.propTypes = {
  linea1: PropTypes.string.isRequired,
  linea2: PropTypes.string,
};

Title.defaultProps = {
  linea2: '',
};

export default Title;
