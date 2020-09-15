import Head from 'next/head';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { Banner } from '../components/banner/Banner';
import { TitleBanner } from '../components/title-banner/TitleBanner';
import styles from './home.module.scss';

const Home = () => {
  let banner_text_block = (
    <>
      <div className={`row justify-content-center ${styles.text_title}`}>
        <TitleBanner
          linea1="Da el siguiente"
          linea2="gran salto"
          description="Descubre un crédito diseñado para ti y las herramientas te ayudarán a elevar tu empresa."
        />
      </div>
      <div className={'row justify-content-center mt-4'}>
        <button type="button" className="btn-big">
          Solicita ya tu crédito
        </button>
      </div>
    </>
  );

  let banner_image_block = (
    <div>
      <div className={styles.banner_image_texture}>
        <img src="/BC_PYMES_1 2.svg" />
      </div>
      <div className={styles.banner_image_man}>
        <img src="/BC_PYMES_1 1.png" />
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>BanCoppel | Pymes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={`row justify-content-center ${styles.banner}`}>
        <Banner backgroundImage={'/BC_PYMES_1.png'} textBlock={banner_text_block} imageBlock={banner_image_block} />
      </div>

      <Footer />
    </>
  );
};
export default Home;
