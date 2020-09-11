import styles from './simple-banner.module.scss';

export const SimpleBanner = (props) => {

  return <div className={`row justify-content-center ${styles.container}`}>
    <div className={`d-none d-lg-block ${styles.background_top_right}`}>
      <img src="/banner-texture-topright.svg"/>
    </div>
    <div className={`d-none d-lg-block ${styles.background_bottom_left}`}>
      <img src="/banner-texture-botleft.svg"/>
    </div>
    <div className={styles.content}>
      {props.children}
    </div>
  </div>;
};

export default SimpleBanner;
