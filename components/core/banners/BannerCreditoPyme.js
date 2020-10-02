import React from 'react';
import Banner from '../../shared/banners/banner/Banner';
import TitleBanner from '../../shared/titles/title-banner/TitleBanner';
import styles from './banner.module.scss';

const BannerCreditoPyme = () => {
  const bannerTextBlock = (
    <TitleBanner
      linea1="Diseñado para"
      linea2="ser más simple"
      description="Sabemos que hay muchas cosas en qué ocuparte, este proceso entiende tu ritmo de trabajo."
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

  return (
    <Banner backgroundImage="/credito-pyme/banner.png" textBlock={bannerTextBlock} imageBlock={bannerImageBlock} />
  );
};

export default BannerCreditoPyme;
