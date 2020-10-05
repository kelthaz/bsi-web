import { useState } from 'react';
import styles from './video-selector.module.scss';

const VideoSelector = ({ videos }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`${styles['video-carrousel']} ${toggle ? `card-simple-white ${styles['card-shadow']}` : 'card-simple-blue-storm'}`}>
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
        <div
          className={`${styles.circle} ${toggle ? styles['circle-blue'] : ''}`}
          aria-label="Toggle video selector"
          role="button"
          tabIndex={0}
          onClick={handleToggle}
        />
      </div>
      <div className={`col-12 mt-4 d-flex ${styles['scrollable-carrousel']} ${toggle ? styles['scrollable-carrousel-active']: ''}`}>
        <div className={styles['thumbnail-img']} data-description="¿Cómo escanear tus documentos con una app?">
          <img src="/requisitos/play-button.svg" alt="Play video" />
        </div>
        <div className={styles['thumbnail-img']} data-description="¿Cómo escanear tus documentos con una app?">
          <img src="/requisitos/play-button.svg" alt="Play video" />
        </div>
        <div className={styles['thumbnail-img']} data-description="¿Cómo escanear tus documentos con una app?">
          <img src="/requisitos/play-button.svg" alt="Play video" />
        </div>
        <div className={styles['thumbnail-img']} data-description="¿Cómo escanear tus documentos con una app?">
          <img src="/requisitos/play-button.svg" alt="Play video" />
        </div>
        <div className={styles['thumbnail-img']} data-description="¿Cómo escanear tus documentos con una app?">
          <img src="/requisitos/play-button.svg" alt="Play video" />
        </div>
      </div>
    </div>
  );
};

export default VideoSelector;
