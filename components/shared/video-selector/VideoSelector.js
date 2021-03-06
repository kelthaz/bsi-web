/* eslint-disable jsx-a11y/iframe-has-title */
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './video-selector.module.scss';

const VideoSelector = ({ color, sliderOptions }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const updateSlide = (direction) => {
    const updateSlidePosition = currentSlide;
    let copySliderOptions = {};

    if (direction === 'next') {
      copySliderOptions = {
        ...sliderOptions[updateSlidePosition],
      };
      sliderOptions[updateSlidePosition - 1].active = false;
      copySliderOptions.active = true;
      Object.assign(sliderOptions[currentSlide], copySliderOptions);
    }

    if (direction === 'prev') {
      copySliderOptions = {
        ...sliderOptions[updateSlidePosition - 2],
      };
      sliderOptions[updateSlidePosition - 1].active = false;
      copySliderOptions.active = true;
      Object.assign(sliderOptions[updateSlidePosition - 2], copySliderOptions);
    }
  };

  const slideHandler = (direction) => {
    if (direction === 'next' && currentSlide < sliderOptions.length) {
      setCurrentSlide((prevState) => prevState + 1);
      updateSlide(direction);
    }
    if (direction === 'prev' && currentSlide > 1) {
      setCurrentSlide((prevState) => prevState - 1);
      updateSlide(direction);
    }
  };

  const renderSlider = sliderOptions.map((option) => (
    <div key={option.id} className={`${option.active ? 'd-block ' : 'd-none'} ${currentSlide}`}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-7">
        <div className={styles['video-preview']}>
          <iframe className={styles.video} src={option.src} start="100" frameBorder="0" />
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 offset-lg-6 offset-md-6  ">
        <div className="ml-xs-0 ml-md-4 ml-lg-0">
          <h4 className={color === 'blue-storm' ? 'text-white' : 'text-primary'}>{option.title}</h4>
          <p className={`body2 ${styles['text-company-gray']}`}>{option.company}</p>
          {option.subtitle && <p className={styles['text-gray']}>{option.subtitle}</p>}
          <p className={`body2 ${color === 'blue-storm' ? 'text-white' : 'text-dark'}`}>{option.parragraph}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className={`${styles['video-carrousel']} card-simple-${color}`}>
      <div style={{ display: 'flex' }}>{renderSlider}</div>

      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="row justify-content-md-end justify-content-xs-center">
          <button
            type="button"
            className={`mr-3 ${styles.a} ${styles.next} ${styles.round} ${
              color === 'blue-storm' && styles['btn-blue-morning']
            }`}
            onClick={() => slideHandler('prev')}
          >
            &#10094;
          </button>
          <button
            type="button"
            className={`mr-2 ${styles.a} ${styles.next} ${styles.round} ${
              color === 'blue-storm' && styles['btn-blue-morning']
            }`}
            onClick={() => slideHandler('next')}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

VideoSelector.propType = {
  sliderOptions: PropTypes.array,
};

VideoSelector.defaultProps = {
  sliderOptions: [],
};

export default VideoSelector;
