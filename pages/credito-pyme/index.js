import Head from 'next/head';
import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { TitleSection } from '../../components/title-section2/TitleSection';
import styles from './credito-pyme.module.scss';

const CreditoPyme = () => {
  const data = {
    steps: [
      {
        num: '01',
        title: 'datos',
      },
      {},
    ],
  };

  return (
    <>
      <Head>
        <title>Ayuda - BanCoppel | Pymes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <article>
        <section className="section-blue-storm">
          <div className="container">
            <div className="row p-lg-5 p-md-4 p-sm-2 p-xm-1">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12">
                <TitleSection className="pb-1" inverted="true" orden="02" linea1="Datos" linea2="personales" />
                <div className="card-simple-white">
                  <p>
                    El primer bloque de Datos Personales es para conocerte, por lo que te solicitaremos información
                    básica como tu nombre y tus datos de contacto.
                  </p>
                  <p>Para este bloque de la solicitud será indispensable contar con tu RFC con el que facturas.</p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12">
                <div className={styles['container-svg']}>
                  <img className="p-lg-5 p-md-4 p-sm-2 p-xm-1" src="/pantalla-circulo.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-white">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="card-simple-white">
                  <p>
                    El primer bloque de Datos Personales es para conocerte, por lo que te solicitaremos información
                    básica como tu nombre y tus datos de contacto.
                    <br />
                    Para este bloque de la solicitud será indispensable contar con tu RFC con el que facturas.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <button>dasd</button>
              </div>
            </div>
          </div>
        </section>
        <section className="section-blue-night">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <button>dasd</button>
              </div>
              <div className="col-4">
                <button>dasd</button>
              </div>
            </div>
          </div>
        </section>
        <section className="section-white">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <button>dasd</button>
              </div>
              <div className="col-4">
                <button>dasd</button>
              </div>
            </div>
          </div>
        </section>
        <section className="section-blue-storm">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <button>dasd</button>
              </div>
              <div className="col-4">
                <button>dasd</button>
              </div>
            </div>
          </div>
        </section>
        <section className="section-blue-light">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <button>dasd</button>
              </div>
              <div className="col-4">
                <button>dasd</button>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
};

export default CreditoPyme;
