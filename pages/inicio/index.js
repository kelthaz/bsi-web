import Link from 'next/link';
import { useRouter } from 'next/router';
import BannerInicio from '../../components/core/banners/BannerInicio';
import styles from './inicio.module.scss';
import Title from '../../components/shared/titles/title/Title';
import VideoSelector from '../../components/shared/video-selector/VideoSelector';
import Simulador from '../../components/core/simulador/Simulador';

export const Home = () => {
  const router = useRouter();
  const handleSimular = () => router.push('/simulador').then(() => window.scrollTo(0, 958));

  return (
    <>
      <BannerInicio />
      <article>
        <section className="section-blue-storm">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className={`mt-5 col-lg-12 text-center ${styles['color-white']}`}>DISEÑADO PARA</h2>
              <h2 className={`col-lg-12 text-center ${styles['color-blue-morning']}`}>SER MÁS SIMPLE</h2>
            </div>
            <div className="row justify-content-center ">
              <div className="col-lg-7 col-md-6 col-xs-12 mb-lg-3">
                <div className={`body2 text-center ${styles['color-white-text']}`}>
                  El proceso de solicitud entiende tu ritmo de trabajo y lo diseñamos para que en cuatro pasos lo
                  completes:
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-xs-4 mt-lg-0">
              <div className="col-xs-12 col-md-8 col-lg-3 text-center mr-xs-0 mt-lg-3 ">
                <div className="card-simple-blue-night">
                  <img alt="" src="/Persona.svg" />
                  <div>
                    <h4>Datos personales</h4>
                    <p className={`${styles['color-white-text']}`}>para conocerte mejor</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-8 col-lg-3 text-center mt-xs-2 mt-lg-3 ">
                <div className="card-simple-blue-night">
                  <img alt="" src="/Empresa.svg" />
                  <div>
                    <h4>Datos de tu empresa</h4>
                    <p className={`body2 ${styles['color-white-text']}`}> platícanos sobre ella </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-8 col-lg-3 text-center mt-xs-2 mt-lg-3">
                <div className="card-simple-blue-night">
                  <img alt="" src="/Oferta.svg" />
                  <div>
                    <h4>Conoce tu oferta</h4>
                    <p className={`body2  ${styles['color-white-text']}`}>cuánto te otorgamos</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-8 col-lg-3 text-center mt-lg-3 mt-xs-2">
                <div className="card-simple-blue-night">
                  <img alt="" src="/Documentos.svg" />
                  <div>
                    <h4>Documentación</h4>
                    <p className={`  ${styles['color-white-text']}`}>carga unos archivos</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center ">
              <div className="col-lg-5 col-md-6 mt-lg-5 mt-xs-3 mx-xs-2 px-xs-0 mx-lg-0 px-lg-3">
                <div className={`row mb-sm-4 ${styles['design-pipe']}`}>
                  <p className={` col-md-8 col-lg-9 col-sm-9 col-xs-9 px-xs-0 px-lg-4 ${styles['color-white-text']}`}>
                    En el primer bloque de tu solicitud sólo necesitarás tener a la mano el RFC con el que facturas.
                  </p>
                  <div className="col-md-4 col-lg-3 col-sm-3 col-xs-3 px-lg-0">
                    <img alt="" src="/RFC.svg" />
                  </div>
                  <div className="col-md-12  mb-xs-4 mb-lg-0 px-xs-0 px-lg-4">
                    <Link href="credito-pyme">
                      <button className="btn-link-arrow-right-inverted" type="button">
                        Leer más sobre el crédito
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 mt-md-0 mt-lg-5 px-xs-0 px-lg-5 ">
                <div className="row mt-sm-1 mt-md-0 mt-xs-4 mb-lg-4">
                  <p
                    className={`body2 d-none d-md-block col-md-9 col-sm-9 col-xs-8 col-lg-9 px-md-0 ${styles['color-white-text']}`}
                  >
                    Ten en cuenta que conforme vayas avanzando, solicitaremos un poco más de información y documentos.
                  </p>
                  <p
                    className={`d-sm-block d-md-none col-md-9 col-sm-9 col-xs-9 col-lg-8 ${styles['color-white-text']}`}
                  >
                    Conforme vayas avanzando, solicitaremos un poco más de información y documentos.
                  </p>
                  <div className="col-md-3 col-sm-3 col-xs-3 col-lg-2 pr-xs-5 pr-sm-0 pr-md-0 text-md-right">
                    <img alt="" src="/Archivos.svg" />
                  </div>
                  <div className="col-md-8 ml-lg-0 ml-md-0 ml-xs-3 mb-xs-3 px-xs-0 px-lg-1">
                    <Link href="requisitos">
                      <button className="btn-link-arrow-right-inverted" type="button">
                        Ver todos los requisitos
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="container mt-5 mb-5 ">
                <div className="row  justify-content-center">
                  <div className="col-lg-12 col-md-12 col-xs-12 text-center">
                    <h2 className={`${styles['color-white']}`}>SIMULA TU CRÉDITO PYME</h2>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 mt-3 text-center px-xs-0">
                    <p className={`body2 ${styles['color-white-text']}`}>
                      Con la información que nos proporciones podremos diseñar una oferta que se ajuste a las
                      necesidades de tu negocio.
                    </p>
                    <br />
                    <p className={`body2 ${styles['color-white-text']}`}>
                      Requisitos mínimos: Tener más de 2 años operando y facturar más de 2 MDP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-white-relative">
          <div className={styles['simulador-container']}>
            <Simulador handleSimular={handleSimular} />
          </div>
        </section>
        <section className="section-white">
          <div className="container mt-5 mb-5">
            <div className="row mb-5">
              <div
                className={`text-xs-center text-md-left col-md-6 col-xs-12 mt-5 px-xs-0 ${styles['title-benefits']}`}
              >
                <h2 className={`text-primary mt-md-5 ${styles.subtitle}`}>BENEFICIOS PARA TI</h2>
                <h2 className={`text-secondary ${styles.subtitle}`}>Y TU EMPRESA</h2>
                <p>Conoce las características que nuestros clientes aprovechan para hacer crecer sus empresas.</p>
                <div className="ml-xs-5 ml-md-0">
                  <Link href="beneficios">
                    <button className="ml-sm-5 ml-md-0 btn-link-arrow-right" type="button">
                      Leer más sobre los beneficios
                    </button>
                  </Link>
                </div>
              </div>
              <div className={`d-none d-md-block d-xl-none col-md-6 col-lg-6 mb-5 px-0 ${styles['circle-container']}`}>
                <Link href="beneficios">
                  <a className={`col-md-6 col-lg-6 ${styles.circle1} ${styles.circle}`}>
                    <span className={`${styles['text-radius']}`}>Tasas atractivas</span>
                  </a>
                </Link>
                <Link href="beneficios">
                  <a className={`col-md-6 ${styles.circle2} ${styles.circle}`}>
                    <span className={`${styles['text-radius']}`}>Crecer tu negocio</span>
                  </a>
                </Link>
                <Link href="beneficios">
                  <a className={`col-md-6  ${styles.circle3} ${styles.circle}`}>
                    <span className={`${styles['text-radius']}`}>Apoyo constante</span>
                  </a>
                </Link>
                <Link href="beneficios">
                  <a className={`col-md-6 ${styles.circle4} ${styles.circle}`}>
                    <span className={`${styles['text-radius']}`}>Cuenta y banca en línea</span>
                  </a>
                </Link>
                <Link href="beneficios">
                  <a className={`col-md-6 col-lg-6 ${styles.circle5} ${styles.circle}`}>
                    <span className={`${styles['text-radius']}`}>Flujo de operación</span>
                  </a>
                </Link>
                <div className="row mt-md-0 mt-lg-5 justify-content-center">
                  <img
                    className={`col-md-8 col-lg-8 ${styles['image-home']}`}
                    src="/home-company-image.png"
                    alt="Hombre"
                  />
                </div>
              </div>
              <div className={`d-block d-md-none col-md-6 mb-5 text-center ${styles['circle-container']}`}>
                <div className="row">
                  <Link href="beneficios">
                    <a className={`col-12 mt-4 ${styles['text-links']}`}>Cuenta y banca en línea</a>
                  </Link>
                  <Link href="beneficios">
                    <a className={`col-12 mt-2 ${styles['text-links']}`}>Apoyo constante</a>
                  </Link>
                  <Link href="beneficios">
                    <a className={`col-12 mt-2 ${styles['text-links']}`}>Flujo de operación</a>
                  </Link>
                  <Link href="beneficios">
                    <a className={`col-12 mt-2 ${styles['text-links']}`}>Crecer tu negocio</a>
                  </Link>
                  <Link href="beneficios">
                    <a className={`col-12 mt-2 ${styles['text-links']}`}>Tasas atractivas</a>
                  </Link>
                </div>

                <div className="row mt-md-5 justify-content-center">
                  <img
                    className={`d-block d-sm-block d-md-none col-md-6 ${styles['image-home']}`}
                    src="/chica-mobile.png"
                    alt="Hombre"
                  />
                </div>
              </div>
            </div>
          </div>
          <Title className="mt3" linea1="EMPRESARIOS COMO TÚ" />

          <div className="container">
            <div className="row justify-content-center mt-3 mb-5">
              <div>Ya confiaron en nosotros </div>
              <div className="text-xs-center text-md-left col-lg-10 col-xs-12 mt-5 mb-5  px-xs-0 px-md-3 ">
                <VideoSelector color="blue-light" />
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default Home;
