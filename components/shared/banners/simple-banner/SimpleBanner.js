import SvgCuartaTextura from '../../../svgs/texturas/SvgCuartaTextura';
import SvgQuintaTextura from '../../../svgs/texturas/SvgQuintaTextura';
import styles from './simple-banner.module.scss';

const SimpleBanner = (props) => {
  const { className, children, showTexture = false } = props;
  return (
    <div className={`row justify-content-center ${styles.container} ${className}`}>
      <div className={`d-none d-lg-block ${styles['background-top-right']}`}>{showTexture && <SvgQuintaTextura />}</div>
      <div className={`d-none d-lg-block ${styles['background-bottom-left']}`}>
        {showTexture && <SvgCuartaTextura />}
      </div>
      <div id="banner-content" className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default SimpleBanner;
