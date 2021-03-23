import React from 'react';
import Banner from '../../shared/banners/banner/Banner';
import TitleBanner from '../../shared/titles/title-banner/TitleBanner';
import styles from './banner.module.scss';

const BannerBeneficios = () => {
  const bannerTextBlock = (
    <>
      <div className={`row justify-content-center ${styles['text-title']}`}>
        <TitleBanner
          linea1="Beneficios del"
          linea2={
            <span>
              Crédito <br /> Digital Pymes
            </span>
          }
          description={
            <span>
              Además de un <strong>financiamiento personalizado</strong>, tendrás acceso a herramientas que te ayudarán
              a impulsar tu empresa.
            </span>
          }
        />
      </div>
    </>
  );

  const bannerImageBlock = (
    <div>
      <div className={styles['banner-image-texture']}>
        <img src="/BC_PYMES_1 2.svg" alt="Textura del banner" />
      </div>
      <div className={styles['banner-image-chica-beneficios']}>
        <img src="/chica-beneficios.png" alt="Hombre" />
      </div>
    </div>
  );
  return <Banner backgroundImage="/Fondo_Beneficios.png" textBlock={bannerTextBlock} imageBlock={bannerImageBlock} />;
};

export default BannerBeneficios;
