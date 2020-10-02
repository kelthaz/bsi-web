import PropTypes from 'prop-types';
import styles from './banner.module.scss';

const Banner = (props) => {
  const { backgroundImage, textBlock, imageBlock } = props;

  return (
    <>
      <section className="section-white d-lg-none d-md-none d-block">
        <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
          <div className="row py-lg-5 py-md-4 py-sm-2 py-xs-2">
            <div className="col-sm-12 col-xs-12">
              <div className={styles['text-block']}>{textBlock}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container py-lg-3 py-md-3 py-sm-4 py-xs-4">
          <div className="row py-lg-5 py-md-4 py-sm-2 py-xs-2">
            <div className="col-lg-6 col-md-6 d-md-block d-none">
              <div className={styles['text-block']}>{textBlock}</div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className={styles['banner-img-content']}>{imageBlock}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  textBlock: PropTypes.any.isRequired,
  imageBlock: PropTypes.any.isRequired,
};

export default Banner;
