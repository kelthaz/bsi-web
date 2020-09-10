import styles from './banner.module.scss';

export const Banner = (props) => {

  let containerStyles = {
    backgroundImage: `url(${props.backgroundImage})`
  }

  return <div style={containerStyles} className={styles.container}>
    <div className={styles.content}>
      {props.children}
    </div>
  </div>;
};

export default Banner;
