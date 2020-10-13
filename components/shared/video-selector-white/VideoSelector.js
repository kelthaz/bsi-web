/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from 'react';
import styles from './video-selector.module.scss';

const VideoSelector = ({ videos }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`${styles['video-carrousel']} ${'card-simple-gray'}`}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-7 ">
        <div className={styles['video-preview']}>
          <iframe className={styles.video} src="https://www.youtube.com/embed/AWLA1ss1ccw" frameBorder="0" />
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
        <h4 className="text-primary">Mariana Hernández</h4>
        <p className={styles['text-gray']}>Artesanía mía Diseño y confección</p>
        <p className="body2 text-dark">
          "Siempre que tuve dudas estuvieron para responderlas y el proceso fue mucho más rápido de lo que esperaba."
        </p>
        <div className="row justify-content-md-end justify-content-xs-center">
          <div className={`mr-3 ${styles.a} ${styles.next} ${styles.round} `} role="button" onClick={handleToggle}>
            &#8249;
          </div>
          <div className={`${styles.a} ${styles.next} ${styles.round} `} role="button" onClick={handleToggle}>
            &#8250;
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSelector;
