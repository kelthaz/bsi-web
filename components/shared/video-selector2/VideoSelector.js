import { useState } from 'react';
import styles from './video-selector.module.scss';

const VideoSelector = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div id="slider" className={styles.slider}>
      <div className={styles.wrapper}>
        <div id="items" className={styles.items}>
          <span className={styles.slide}>
            <div className={styles.content}>
              <div className={styles.up}>
                <div className={`${styles.producto} ${styles.pro_1}`}>
                  <div className={styles.price}><p>30%</p></div>
                </div>
                <div className={styles.button}>Comprar</div>
              </div>
            </div>
          </span>
          <span className={styles.slide}>
            <div className={styles.content}>
              <div className={styles.up}>
                <div className={`${styles.producto} ${styles.pro_2}`}>
                  <div className={styles.price}><p>10%</p></div>
                </div>
                <div className={styles.button}>Comprar</div>
              </div>
            </div>
          </span>
          <span className={styles.slide}>
            <div className={styles.content}>
              <div className={styles.up}>
                <div className={`${styles.producto} ${styles.pro_3}`} />
                <div className={styles.button}>Comprar</div>
              </div>
            </div>
          </span>
          <span className={styles.slide}>
            <div className={styles.content}>
              <div className={styles.up}>
                <div className={`${styles.producto} ${styles.pro_4}`}>
                  <div className={styles.price}><p>50%</p></div>
                </div>
                <div className={styles.button}>Comprar</div>
              </div>
            </div>
          </span>
          <span className={styles.slide}>
            <div className={styles.content}>
              <div className={styles.up}>
                <div className={`${styles.producto} ${styles.pro_5}`} />
                <div className={styles.button}>Comprar</div>
              </div>
            </div>
          </span>
        </div>
      </div>
      <a id="prev" className={`${styles.control} ${styles.prev}`} />
      <a id="next" className={`${styles.control} ${styles.next}`} />
    </div>
  );
};

export default VideoSelector;
