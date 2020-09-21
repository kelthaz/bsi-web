import Head from 'next/head';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { Banner } from '../../components/banner/Banner';
import { SimpleBanner } from '../../components/simple-banner/SimpleBanner';
import { TitleBanner } from '../../components/title-banner/TitleBanner';
import styles from '../beneficios/beneficios.module.scss';

const TempBanner = () => {
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
      <Head>
        <title>Temp Banner - BanCoppel | Pymes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      Requisitos
      <Banner
        backgroundImage="/requisitos/banner.png"
        textBlock={requistosBannerTextBlock}
        imageBlock={requistosBannerImageBlock}
      />
      Simulador
      <SimpleBanner className="overflow-hidden">
        <div className="row justify-content-center">
          <div className="col-auto my-auto">
            <h1 style={{ paddingTop: '100px', color: '#FFF' }}>¡TU DISEÑAS</h1>
            <h1 style={{ paddingBottom: '40px', color: '#81C1EA' }}>TU CRÉDITO!</h1>
          </div>
        </div>
        <div className="row justify-content-center mx-0">
          <div className="col-md-6">
            <div style={{ color: '#FFF', textAlign: 'center' }} className={`body1 ${styles.bt1}`}>
              Elige el monto, plazo y pagos que más se adapte a ti y tu empresa
            </div>
          </div>
        </div>
        <div className="row justify-content-center mx-0 mt-4">
          <div className="col-md-7">
            <div style={{ color: '#FFF', textAlign: 'center' }} className={`body2 ${styles.bt1}`}>
              Ten en cuenta que hay algunas zonas del país de donde no podrás solicitar un crédito PyME ni podrá residir
              tu Obligado Solidario.
            </div>
          </div>
        </div>
        <div className="row justify-content-center mx-0 mb-5 mt-4">
          <button type="button" className="btn-link" style={{ color: '#FFF' }}>
            Conoce las zonas aquí
          </button>
        </div>
      </SimpleBanner>
      <Footer />
    </>
  );
};

export default TempBanner;
