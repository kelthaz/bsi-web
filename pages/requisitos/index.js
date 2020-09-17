import React from 'react';
import { Banner } from '../../components/banner/Banner';
import { TitleBanner } from '../../components/title-banner/TitleBanner';
import styles from './requisitos.module.scss';

export const Requisitos = () => {
  const requistosBannerTextBlock = (
    <>
      <div className={`row justify-content-center ${styles['text-title']}`}>
        <TitleBanner
          linea1="Todo para"
          linea2="comenzar"
          description="Conforme vayas avanzando, te solicitararemos algunos documentos dependiendo de las respuestas que nos vayas dando."
        />
      </div>
    </>
  );

  const requistosBannerImageBlock = (
    <div>
      <div className={styles['banner-image-texture']}>
        <img src="/requisitos/banner-texture.svg" alt="Textura del banner" />
      </div>
      <div className={styles['banner-image-man']}>
        <img src="/requisitos/banner-image.png" alt="Imagen del banner" />
      </div>
    </div>
  );

  return (
    <>
      <Banner
        backgroundImage="/requisitos/banner.png"
        textBlock={requistosBannerTextBlock}
        imageBlock={requistosBannerImageBlock}
      />
    </>
  );
};

export default Requisitos;
