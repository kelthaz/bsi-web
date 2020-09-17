import Head from 'next/head';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { Banner } from '../../components/banner/Banner';
import { TitleBanner } from '../../components/title-banner/TitleBanner';
import styles from './inicio.module.scss';

const Home = () => {
  const bannerTextBlock = (
    <>
      <div className={`row justify-content-center ${styles.text_title}`}>
        <TitleBanner
          linea1="Da el siguiente"
          linea2="gran salto"
          description="Descubre un crédito diseñado para ti y las herramientas te ayudarán a elevar tu empresa."
        />
      </div>
      <div className="row justify-content-center mt-4">
        <button type="button" className="btn-big">
          Solicita ya tu crédito
        </button>
      </div>
    </>
  );

  const bannerImageBlock = (
    <div>
      <div className={styles.banner_image_texture}>
        <img src="/BC_PYMES_1 2.svg" alt="Textura del banner" />
      </div>
      <div className={styles.banner_image_man}>
        <img src="/BC_PYMES_1 1.png" alt="Mujer" />
      </div>
    </div>
  );

  return (
    <>
      <Banner backgroundImage="/BC_PYMES_1.png" textBlock={bannerTextBlock} imageBlock={bannerImageBlock} />
    </>
  );
};
export default Home;
