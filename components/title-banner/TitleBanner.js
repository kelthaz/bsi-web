import PropTypes from 'prop-types';
import styles from './title-banner.module.scss';

export const TitleBanner = (props) => {
  const { linea1, linea2, description } = props;

  return (
    <div className={styles.box}>
      <div className={styles['title-container']}>
        <div className={`col-md d-none d-md-block ${styles.line}`}>
          <img src="./title-banner-line.svg" alt="banner title line" />
        </div>
        <div className="col-md">
          <div className={`row ${styles.text}`}>
            <h1 className={`text-primary ${styles['h-55']}`}>{linea1}</h1>
            <h1 className="text-secondary">{linea2}</h1>
          </div>
          <div className={`row ${styles['sub-text']}`}>
            <p className="sub">{description}</p>
          </div>
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
