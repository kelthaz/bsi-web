import styles from './banner.module.scss';

export const Banner = (props) => {

  let containerStyles = {
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  // let isMobile = useMediaQuery('(max-width: 767px)');
  let isMobile = false;

  return <div className={styles.container}>
    <div className={styles.content}>
      {/* <div className={'row justify-content-center'}> */}
        <div className={`${styles.text_block}`}>
          {props.textBlock}
        </div>
        <div style={containerStyles} className={`${styles.image_block}`}>
          {props.imageBlock}
        </div>
      {/* </div> */}
    </div>
  </div>;
};

export default Banner;
