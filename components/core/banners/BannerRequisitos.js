import React from 'react';
import Banner from '../../shared/banners/banner/Banner';
import TitleBanner from '../../shared/titles/title-banner/TitleBanner';
import styles from './banner.module.scss';

const BannerRequisitos = () => {
  const bannerTextBlock = (
    <TitleBanner
      linea1="REQUISITOS PARA"
      linea2="COMENZAR"
      description={
        <span>
          Conforme vayas avanzando, <strong>te solicitaremos algunos documentos</strong> dependiendo de las respuestas
          que nos vayas dando.
        </span>
      }
    />
  );

  const bannerImageBlock = (
    <>
      <div className={styles['banner-image-texture']}>
        <img src="/BC_PYMES_1 2.svg" alt="Textura del banner" />
      </div>
      <div className={styles['banner-image-man-requisitos']}>
        <img src="/chico-requisitos.png" alt="Imagen del banner" />
      </div>
    </>
  );

  return <Banner backgroundImage="/Fondo_Requisitos.png" textBlock={bannerTextBlock} imageBlock={bannerImageBlock} />;
};

export default BannerRequisitos;
