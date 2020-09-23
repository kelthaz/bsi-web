import styles from './simple-banner.module.scss';

const SimpleBanner = (props) => {
  const { className, children } = props;
  return (
    <div className={`row justify-content-center ${styles.container} ${className}`}>
      <div className={`d-none d-lg-block ${styles['background-top-right']}`}>
        <img src="/banner-texture-topright.svg" alt="Banner texture top right" />
      </div>
      <div className={`d-none d-lg-block ${styles['background-bottom-left']}`}>
        <img src="/banner-texture-botleft.svg" alt="Banner texture bot left" />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default SimpleBanner;
