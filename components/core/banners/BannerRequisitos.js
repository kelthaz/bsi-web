import React from 'react';
import Banner from '../../shared/banners/banner/Banner';
import TitleBanner from '../../shared/titles/title-banner/TitleBanner';
import styles from './banner.module.scss';

const BannerRequisitos = () => {
  const bannerTextBlock = (
    <TitleBanner
      linea1="Todo para"
      linea2="comenzar"
      description="Conforme vayas avanzando, te solicitararemos algunos documentos dependiendo de las respuestas que nos vayas dando."
    />
  );

  const bannerImageBlock = (
    <>
      <div className={styles['banner-image-texture-2']}>
        <img src="/requisitos/banner-texture.svg" alt="Textura del banner" />
      </div>
      <div className={styles['banner-image-man']}>
        <img src="/requisitos/banner-image.png" alt="Imagen del banner" />
      </div>
    </>
  );

  return <Banner backgroundImage="/requisitos/banner.png" textBlock={bannerTextBlock} imageBlock={bannerImageBlock} />;
};

export default BannerRequisitos;
