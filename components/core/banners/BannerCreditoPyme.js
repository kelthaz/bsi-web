import React from 'react';
import Banner from '../../shared/banners/banner/Banner';
import TitleBanner from '../../shared/titles/title-banner/TitleBanner';
import styles from './banner.module.scss';

const BannerCreditoPyme = () => {
  const bannerTextBlock = (
    <TitleBanner
      linea1="CARACTERÍSTICAS"
      linea2="DEL CRÉDITO DIGITAL PYME"
      description={
        <span>
          Con este proceso <strong>adquiere de forma rápida un crédito</strong> para que se adapte a tu negocio y a ti.
        </span>
      }
    />
  );

  const bannerImageBlock = (
    <>
      <div className={styles['banner-image-texture-2']}>
        <img src="/requisitos/banner-texture.svg" alt="Textura del banner" />
      </div>
      <div className={styles['banner-image-man']}>
        <img src="/credito-pyme/banner-image.png" alt="Imagen del banner" />
      </div>
    </>
  );

  return <Banner backgroundImage="/restaurant.jpg" textBlock={bannerTextBlock} imageBlock={bannerImageBlock} />;
};

export default BannerCreditoPyme;
