import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import BannerInicio from '../../components/core/banners/BannerInicio';
import styles from './inicio.module.scss';
import VideoSelector from '../../components/shared/video-selector/VideoSelector';
import Simulador from '../../components/core/simulador/Simulador';
import SimuladorRepositorio from '../../services/simulador/simulador.repositorio';
import SvgPantallaPersonaTexto from '../../components/svgs/SvgPantallaPersonaTexto';
import SvgEdificioTexto from '../../components/svgs/SvgEdificioTexto';
import SvgDineroTarjeta from '../../components/svgs/SvgDineroTarjeta';
import SvgCarpetaDocumento from '../../components/svgs/SvgCarpetaDocumento';
import SvgDocumentoImagen from '../../components/svgs/SvgDocumentoImagen';
import SvgPantallaRFC from '../../components/svgs/SvgPantallaRFC';
import SvgTerceraTextura from '../../components/svgs/texturas/SvgTerceraTextura';
import offsetTop from '../../helpers/offsetTop';

export const Home = ({ catalogo }) => {
  const router = useRouter();
  const handleSimular = () => router.push('/simulador').then(() => window.scrollTo(0, offsetTop('result-simulador')));

  return (
    <>
      <BannerInicio />
      <section className="section-blue-storm">
        <div className="container py-lg-5 py-md-3 py-sm-4 py-xs-4 px-lg-0">
          <h2 className="text-center">
            <span className="color-white">DISEÑAMOS UN CRÉDITO PARA</span>
            <br />
            <span className="color-blue-morning">HACERLO MÁS SIMPLE</span>
          </h2>
          <p className="body2 text-center color-white">
            El proceso de solicitud entiende tu ritmo de trabajo y lo diseñamos para que lo completes <br /> en cuatro
            pasos:
          </p>
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 pb-sm-2 pb-xs-2 p-md-3 p-lg-1">
              <div className="card-blue-night text-md-center">
                <div className="container-svg-card">
                  <SvgPantallaPersonaTexto />
                </div>
                <div>
                  <h4 className="color-white m-0">Datos personales</h4>
                  <p className="color-white body2 m-0">para conocerte mejor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 pb-sm-2 pb-xs-2 p-md-3 p-lg-1">
              <div className="card-blue-night text-md-center">
                <div className="container-svg-card">
                  <SvgEdificioTexto />
                </div>
                <div>
                  <h4 className="color-white m-0">Datos de tu empresa</h4>
                  <p className="color-white body2 m-0">platícanos sobre ella</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 pb-sm-2 pb-xs-2 p-md-3 p-lg-1">
              <div className="card-blue-night text-md-center">
                <div className="container-svg-card">
                  <SvgDineroTarjeta />
                </div>
                <div>
                  <h4 className="color-white m-0">Conoce tu oferta</h4>
                  <p className="color-white body2 m-0">cuánto te otorgaremos</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 pb-sm-2 pb-xs-2 p-md-3 p-lg-1">
              <div className="card-blue-night text-md-center">
                <div className="container-svg-card">
                  <SvgCarpetaDocumento />
                </div>
                <div>
                  <h4 className="color-white m-0">Documentación</h4>
                  <p className="color-white body2 m-0">carga unos archivos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-lg-5 py-md-5 px-md-0 p-sm-4 no-gutters">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 my-2">
              <div className="card-transparent-only-row line-card">
                <div className="flex-row-center-config">
                  <p className=" body2 color-white">
                    En el primer bloque de tu solicitud sólo necesitarás tener a la mano el RFC con el que facturas.
                  </p>
                  <div className="container-svg-left-card">
                    <SvgPantallaRFC />
                  </div>
                </div>

                <Link href="credito-pyme">
                  <button className="btn-link-arrow-right-inverted" type="button">
                    Leer más sobre el crédito
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 my-2">
              <div className="card-transparent-only-row">
                <div className="flex-row-center-config">
                  <p className=" body2 color-white">
                    Conforme vayas avanzando, solicitaremos un poco más de información y documentos.
                  </p>
                  <div className="container-svg-left-card">
                    <SvgDocumentoImagen />
                  </div>
                </div>
                <Link href="requisitos">
                  <button className="btn-link-arrow-right-inverted" type="button">
                    Ver todos los requisitos
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-white">
        <div className="container py-lg-5 py-md-3 py-sm-4 py-xs-4 px-lg-0">
          <h2 className="color-blue-storm text-center">SIMULA TU CRÉDITO DIGITAL PYMES</h2>
          <p className="body2 color-gray-dark text-center">
            Con esta poca información podremos <strong>diseñar una oferta que se ajuste a tu negocio.</strong>
            <br /> Para solicitarlo debes tener más de 2 años operando y facturar más de $2 Millones de pesos (MDP)
          </p>
        </div>
      </section>
      <section className="pb-5">
        <Simulador handleSimular={handleSimular} catalogo={catalogo} />
      </section>
      <section className="section-blue-night">
        <div className="container py-lg-5 py-md-3 py-sm-4 py-xs-4 px-lg-0">
          <div className="row mb-5">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className={styles['center-content']}>
                <h2 className="text-xs-center text-md-left">
                  <span className="color-white">BENEFICIOS PARA TI</span>
                  <br />
                  <span className="color-blue-morning">Y TU EMPRESA</span>
                </h2>
                <p className="body2 color-white text-xs-center text-md-left">
                  Conoce las características que nuestros clientes aprovechan para hacer crecer sus empresas.
                </p>

                <Link href="beneficios">
                  <button className=" btn-link-arrow-right-inverted" type="button">
                    Leer más sobre los beneficios
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className={styles['container-info-img']}>
                <div className={`${styles.circle1} ${styles.circle}`}>
                  <span className="button color-white">Banca en línea</span>
                </div>
                <div className={`${styles.circle2} ${styles.circle}`}>
                  <span className="button color-white">Apoyo constante</span>
                </div>
                <div className={`${styles.circle3} ${styles.circle}`}>
                  <span className="button color-white">Crédito digital</span>
                </div>
                <div className={`${styles.circle4} ${styles.circle}`}>
                  <span className="button color-white">Flujo de operación</span>
                </div>
                <div className={`${styles.circle5} ${styles.circle} ${styles.circlebig}`}>
                  <span className="button color-white">Crecimiento de tu negocio</span>
                </div>
                <div className={`${styles.circle6} ${styles.circle}`}>
                  <span className="button color-white">Tasas atractivas</span>
                </div>
                <div className={`${styles.circle7} ${styles.circle} `}>
                  <span className="button color-white">Proceso ágil</span>
                </div>
                <div className={`${styles.circle8} ${styles.circle}`}>
                  <span className="button color-white">Sin tanto papeleo</span>
                </div>
                <img className={styles['img-position']} src="/chica2Inicio.png" alt="women" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-white-relative">
        <div className="container py-lg-5 py-md-3 py-sm-4 py-xs-4 px-lg-0">
          <h2 className="color-blue-storm text-center">EMPRESARIOS COMO TÚ</h2>
          <p className="body1 color-gray-dark text-center">Confían en nosotros, conoce sus historias.</p>
          <div className="row justify-content-center mt-3 mb-5">
            <div className="text-xs-center z-indez-1  text-md-left col-lg-10 col-xs-12 mt-5 mb-5  px-xs-0 px-md-3 ">
              <VideoSelector color="blue-light" />
            </div>
          </div>
        </div>
        <div className={`${styles.textura} svg-textura-left-bottom`}>
          <SvgTerceraTextura />
        </div>
      </section>
    </>
  );
};

Home.propTypes = {
  catalogo: PropTypes.any.isRequired,
};

export const getStaticProps = async () => {
  const catalogo = await SimuladorRepositorio.getSimuladorCatalogo().then((res) => res.data);

  return {
    props: {
      catalogo,
    },
  };
};

export default Home;
