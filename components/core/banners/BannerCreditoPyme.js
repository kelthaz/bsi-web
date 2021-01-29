import React from 'react';
import offsetTop from '../../../helpers/offsetTop';
import Banner from '../../shared/banners/banner/Banner';
import TitleBanner from '../../shared/titles/title-banner/TitleBanner';
import styles from './banner.module.scss';

const BannerCreditoPyme = () => {
  const bannerTextBlock = (
    <div className="flex-column-start-config">
      <TitleBanner
        linea1="CARACTERÍSTICAS"
        linea2={
          <span>
            DEL CRÉDITO <br /> DIGITAL PYME
          </span>
        }
        description={
          <span>
            Con este proceso <strong>adquiere de forma rápida un crédito</strong> que se adapte a tu negocio y a ti.
          </span>
        }
      />

      <button
        type="button"
        className={`btn-big-inverted ${styles['button-margin']}`}
        onClick={() => window.scrollTo(0, offsetTop('paso a paso'))}
      >
        Ver características
      </button>
    </div>
  );

  const bannerImageBlock = (
    <>
      <div className={styles['banner-image-texture']}>
        <img src="/BC_PYMES_1 2.svg" alt="Textura del banner" />
      </div>
      <div className={styles['banner-image-man']}>
        <img src="/chico-credito-pymes.png" alt="Imagen del banner" />
      </div>
    </>
  );

  return <Banner backgroundImage="/background-credito.jpg" textBlock={bannerTextBlock} imageBlock={bannerImageBlock} />;
};

export default BannerCreditoPyme;
