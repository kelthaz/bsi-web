import React from 'react';
import Link from 'next/link';

import Banner from '../../shared/banners/banner/Banner';
import TitleBanner from '../../shared/titles/title-banner/TitleBanner';
import styles from './banner.module.scss';

const BannerInicio = () => {
  const bannerTextBlock = (
    <div className="flex-column-start-config">
      <TitleBanner
        linea1="Da el siguiente"
        linea2="gran salto"
        description="Descubre un crédito diseñado para ti y las herramientas te ayudarán a elevar tu empresa."
      />
      <Link href="/simulador">
        <button type="button" className={`btn-big ${styles['button-margin']}`}>
          Solicita ya tu crédito
        </button>
      </Link>
    </div>
  );

  const bannerImageBlock = (
    <>
      <div className={styles['banner-image-texture']}>
        <img src="/BC_PYMES_1 2.svg" alt="Textura del banner" />
      </div>
      <div className={styles['banner-image-man']}>
        <img src="/BC_PYMES_1 1.png" alt="Mujer" />
      </div>
    </>
  );

  return (
    <>
      <Banner backgroundImage="/BC_PYMES_1.png" textBlock={bannerTextBlock} imageBlock={bannerImageBlock} />
    </>
  );
};

export default BannerInicio;
