import PropTypes from 'prop-types';
import styles from './title-section.module.scss';

const TitleSection = (props) => {
  const { inverted, orden, linea1, linea2 } = props;
  return (
    <div className={styles.box}>
      <h2 className={`${styles.line} ${inverted ? styles['secondary-inverted'] : ''}`}>{orden}</h2>

      <div className={`${styles.text}`}>
        <h2 className={`${styles['lh-100']} ${inverted ? styles['primary-inverted'] : 'text-primary'}`}>{linea1}</h2>
        <h2 className={`${styles['lh-100']} ${inverted ? styles['secondary-inverted'] : 'text-secondary'}`}>
          {linea2}
        </h2>
      </div>
    </div>
  );
};

TitleSection.propTypes = {
  inverted: PropTypes.bool,
  orden: PropTypes.string.isRequired,
  linea1: PropTypes.string.isRequired,
  linea2: PropTypes.string.isRequired,
};

TitleSection.defaultProps = {
  inverted: false,
};

export default TitleSection;
