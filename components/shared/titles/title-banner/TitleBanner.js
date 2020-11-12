import PropTypes from 'prop-types';
import styles from './title-banner.module.scss';

const TitleBanner = (props) => {
  const { linea1, linea2, description } = props;

  return (
    <div className={styles.box}>
      <div className={`d-none d-md-block ${styles.line}`} />
      <div>
        <div className={` ${styles.text}`}>
          <h1 className="color-white">{linea1}</h1>
          <h1 className="color-yellow">{linea2}</h1>
        </div>
        <div className={` ${styles['sub-text']}`}>
          <p className="body1">{description}</p>
        </div>
      </div>
    </div>
  );
};

TitleBanner.propTypes = {
  linea1: PropTypes.string.isRequired,
  linea2: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TitleBanner;
