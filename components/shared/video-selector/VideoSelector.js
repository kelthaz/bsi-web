import { useState } from 'react';
import styles from './video-selector.module.scss';

const VideoSelector = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="body2 pb-5 pt-3 mx-auto text-center">Consulta nuestros videos para conocer más sobre los requisitos.</div>
      </div>
      <div className={`row mr-5 ml-auto ${toggle ? `card-simple-white ${styles['card-shadow']}` : 'card-simple-blue-storm'} ${styles['w-800']}`}>
        <div className="col-xm-12 col-sm-12 col-md-12 col-lg-7">
          <div className={styles['video-preview']}>
            <img className={styles['video-thumbnail']} src="/requisitos/video-preview.png" alt="Video thumbnail" />
            <img className={styles['video-play']} src="/requisitos/play-button.svg" alt="Play video" />
          </div>
        </div>
        <div className="col-xm-12 col-sm-12 col-md-12 col-lg-5">
          <h4 className={toggle ? 'text-primary' : styles['text-blue-morning']}>¿Qué es un Obligado Solidario y cómo designar uno?</h4>
          <p className={`body2 ${toggle ? 'text-dark' : styles['text-blue-light']}`}>
            Un obligado solidario es requisito para tu proceso y ayuda a que tu crédito sea entregado con
            mayor facilidad, pero no siempre es sencillo designar uno.
          </p>
          <div className={`${styles.circle} ${toggle ? styles['circle-blue'] : ''}`} role="button" tabIndex={0} onClick={handleToggle}>
            <span>{toggle ? 'x' : '+'}</span>
          </div>
        </div>
        { toggle && (
          <div className="col-12 mt-4 d-flex">
            <div className={styles['thumbnail-img']}>
              <img src="/requisitos/thumbnail-carrousel.png" alt="Thumbnail" />
            </div>
            <div className={styles['thumbnail-img']}>
              <img src="/requisitos/thumbnail-carrousel.png" alt="Thumbnail" />
            </div>
            <div className={styles['thumbnail-img']}>
              <img src="/requisitos/thumbnail-carrousel.png" alt="Thumbnail" />
            </div>
            <div className={styles['thumbnail-img']}>
              <img src="/requisitos/thumbnail-carrousel.png" alt="Thumbnail" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSelector;
