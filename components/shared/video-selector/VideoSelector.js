/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from 'react';
import styles from './video-selector.module.scss';

const VideoSelector = ({ color }) => {
  const videos = [
    {
      title: '¿Qué es un obligado solidario y cómo designar uno?',
      description: 'Un obligado solidario es requisito para tu proceso y ayuda a que tu crédito sea entregado con mayor facilidad, pero no siempre es sencillo designar uno.',
      url: 'https://www.youtube.com/embed/AWLA1ss1ccw'
    }
  ]

  return (
    <div className={`${styles['video-carrousel']} card-simple-${color}`}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-7 ">
        <div className={styles['video-preview']}>
          <iframe className={styles.video} src={videos[0].url} frameBorder="0" />
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
        <h4 className={color == 'blue-storm' ? 'text-white' : 'text-primary'}>{videos[0].title}</h4>
	  { videos[0].subtitle && <p className={styles['text-gray']}>{videos[0].subtitle}</p>}
        <p className={`body2 ${color == 'blue-storm' ? 'text-white' : 'text-dark'}`}>{videos[0].description}</p>
        <div className="row justify-content-md-end justify-content-xs-center">
          <div className={`mr-3 ${styles.a} ${styles.next} ${styles.round} `} role="button">
            &#8249;
          </div>
          <div className={`${styles.a} ${styles.next} ${styles.round} `} role="button">
            &#8250;
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSelector;
