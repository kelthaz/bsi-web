import PropTypes from 'prop-types';
import styles from './banner.module.scss';

const Banner = (props) => {
  const { backgroundImage, textBlock, imageBlock } = props;
  const containerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div className="row justify-content-center mx-0">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles['text-block']}>{textBlock}</div>
          <div style={containerStyles} className={styles['image-block']}>
            {imageBlock}
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  textBlock: PropTypes.any.isRequired,
  imageBlock: PropTypes.any.isRequired,
};

export default Banner;
