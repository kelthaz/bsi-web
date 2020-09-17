import styles from './banner.module.scss';

export const Banner = (props) => {

  let containerStyles = {
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }


  return <div className={`row justify-content-center mx-0`}>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.text_block}`}>
          {props.textBlock}
        </div>
        <div style={containerStyles} className={`${styles.image_block}`}>
          {props.imageBlock}
        </div>
      </div>
    </div>
  </div>;
};

export default Banner;
