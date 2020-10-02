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
          linea2="crédito PyME"
          description="Además de un financiamiento personalizado, tendrás acceso a herramientas y asesorías que te ayudarán a impulsar tu empresa."
        />
      </div>
    </>
  );

  const bannerImageBlock = (
    <div>
      <div className={styles['banner-image-texture-2']}>
        <img src="/BENEFICIOS_1 2.svg" alt="Textura del banner" />
      </div>
      <div className={styles['banner-image-man']}>
        <img src="/BENEFICIOS_1 1.png" alt="Hombre" />
      </div>
    </div>
  );
  return <Banner backgroundImage="/BENEFICIOS_1.png" textBlock={bannerTextBlock} imageBlock={bannerImageBlock} />;
};

export default BannerBeneficios;
