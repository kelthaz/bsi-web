import React from 'react';
import Link from 'next/link';
import Banner from '../../shared/banners/banner/Banner';
import TitleBanner from '../../shared/titles/title-banner/TitleBanner';
import styles from './banner.module.scss';

const BannerInicio = () => {
  const bannerTextBlock = (
    <div className="flex-column-start-config">
      <TitleBanner
        linea1="CONOCE LA NUEVA"
        linea2="OFERTA DE CRÉDITO DIGITAL PYMES"
        description={
          <span>
            Es la manera <strong>más simple, rápida y confiable</strong> para hacer crecer tu negocio.
          </span>
        }
      />
      <Link href="/simulador">
        <button type="button" className={`btn-big-inverted ${styles['button-margin']}`}>
          Solicita tu crédito
        </button>
      </Link>
    </div>
  );

  const bannerImageBlock = (
    <>
      <div className={styles['banner-image-texture']}>
        <img src="/BC_PYMES_1 2.svg" alt="Textura del banner" />
      </div>
      <div className={styles['banner-image-man2']}>
        <img src="/chicaInicio.png" alt="Mujer" />
      </div>
    </>
  );

  return (
    <>
      <Banner backgroundImage="/Fondo_Inicio.png" textBlock={bannerTextBlock} imageBlock={bannerImageBlock} />
    </>
  );
};

export default BannerInicio;
