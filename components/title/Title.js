import PropTypes from 'prop-types';
import styles from './title.module.scss';

export const Title = (props) => {
  const { linea1, linea2 } = props;
  return (
    <div className="container-fluid">
      <div className={`${styles.box} row`}>
        <div className={`${styles['line-left']} col-lg-4 col-md-3 col-sm-3 col-2`} />
        <div className={`${styles.text} col-lg-4 col-md-6 col-sm-6 col-8`}>
          <h2 className="text-primary">{linea1}</h2>
          <h2 className="text-secondary">{linea2}</h2>
        </div>
        <div className={`${styles['line-rigth']} col-lg-4 col-md-3 col-sm-3 col-2`} />
      </div>
    </div>
  );
};

Title.propTypes = {
  linea1: PropTypes.string.isRequired,
  linea2: PropTypes.string.isRequired,
};

export default Title;
