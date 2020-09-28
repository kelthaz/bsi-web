import Link from 'next/link';
import Banner from '../../components/shared/banners/banner/Banner';
import TitleBanner from '../../components/shared/titles/title-banner/TitleBanner';
import TitleSection from '../../components/shared/titles/title-section/TitleSection';
import { Section } from '../../components/shared/section/Section';
import styles from './beneficios.module.scss';

const Beneficios = () => {
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
      <div className={styles['banner-image-texture']}>
        <img src="/BENEFICIOS_1 2.svg" alt="Textura del banner" />
      </div>
      <div className={styles['banner-image-man']}>
        <img src="/BENEFICIOS_1 1.png" alt="Hombre" />
      </div>
    </div>
  );

  return (
    <>
      <Banner backgroundImage="/BENEFICIOS_1.png" textBlock={bannerTextBlock} imageBlock={bannerImageBlock} />

      <article>
        {/* Apoyo constante */}
        <Section className={styles.section}>
          <div className="col-lg-6 col-md-6 d-none d-md-flex justify-content-center">
            <img src="/beneficios/apoyo-constante.svg" alt="Apoyo constante" />
          </div>
          <div className={`col-lg-6 col-md-6 ${styles['section-content']}`}>
            <div className="mb-md-4">
              <TitleSection orden="01" linea1="Apoyo" linea2="constante" />
            </div>
            <div>
              <div className={`body2 ${styles['text-box']}`}>
                Nuestros clientes son lo más importante para nosotros, por lo que siempre estarás asesorado y acompañado
                por nuestro equipo para cualquiera de tus dudas o necesidades.
                <br />
                <br />
                Ya sea por teléfono, correo electrónico o chat siempre estaremos pendientes de ti.
              </div>
            </div>
          </div>
        </Section>

        {/* Tasas atractivas */}
        <Section className={`overflow-hidden ${styles.section} ${styles['section-storm']}`}>
          <div className={`col-lg-6 col-md-6 position-relative ${styles['section-content']}`}>
            <div className="mb-md-4">
              <TitleSection inverted orden="02" linea1="Tasas" linea2="atractivas" />
            </div>
            <div>
              <div className={`body2 ${styles['text-box']} ${styles['bg-white']}`}>
                Nuestras tasas varían dependiendo del diseño de tu crédito, sin embargo son muy atractivas y pensadas
                específicamente en ti como empresario PyME.
                <button type="button" className={`btn-link pt-3 ${styles.button}`}>
                  Conoce más sobre las tasas
                </button>
              </div>
            </div>
            <div className={`d-none d-md-flex ${styles['section-texture']}`}>
              <img src="/beneficios/tasas-atractivas-texture.svg" alt="Textura tasas atractivas" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 d-none d-md-flex justify-content-center">
            <img src="/beneficios/tasas-atractivas.svg" alt="Apoyo constante" />
          </div>
        </Section>

        {/* Cuenta y banca en línea */}
        <Section className={styles.section}>
          <div className="col-lg-6 col-md-6 d-none d-md-block position-relative">
            <div className={styles['online-bank-left-phone']}>
              <img src="/beneficios/app.png" alt="Left phone" />
            </div>
            <div className={styles['online-bank-right-phone']}>
              <img src="/beneficios/bacaexpress_1.png" alt="Right phone" />
            </div>
            <div className={styles.ellipse} />
          </div>
          <div className={`col-lg-6 col-md-6 ${styles['section-content']}`}>
            <div className="mb-md-4">
              <TitleSection orden="03" linea1="Cuenta y" linea2="banca en línea" />
            </div>
            <div>
              <div className={`body2 ${styles['text-box']}`}>
                Administra los recursos de tu empresa, además podrás realizar operaciones con tus productos de manera
                rápida, autónoma y segura.
                <br />
                <br />
                <span className="sub text-primary">¿Tienes que ir a una sucursal?</span>
                <br />
                Contamos con más de 1,150 con el mejor horario de la banca: 365 días del año, de 10:00 am a 8:00 pm.
              </div>
            </div>
          </div>
        </Section>

        {/* Crecer tu negocio */}
        <section className={`overflow-hidden ${styles.section} section-blue-night`}>
          <div className={`container ${styles['container-img']}`}>
            <div className="row p-lg-5 p-md-4 p-sm-2 p-xm-1">
              <div
                className={`col-lg-6 col-md-6 position-relative ${styles['section-content']} ${styles['section-absolute']}`}
              >
                <div className="mb-md-4">
                  <TitleSection inverted orden="04" linea1="Crecer" linea2="tu negocio" />
                </div>
                <div>
                  <div className={`body2 ${styles['text-box']} ${styles['bg-white']}`}>
                    Invierte tu crédito en maquinaria, equipamiento o algún otro tipo de activo fijo que haga trabajar y
                    crecer tu dinero por ti.
                    <br />
                    <br />
                    <span className="sub text-primary">¡Hazlo crecer tanto económicamente como físicamente!</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-none d-md-flex justify-content-center">
                <img src="/beneficios/crecer-negocio.svg" alt="Crecer tu negocio" />
              </div>
            </div>
          </div>
        </section>

        {/* Flujo de operación */}
        <Section className={styles.section}>
          <div className="col-lg-6 col-md-6 d-none d-md-flex justify-content-center">
            <img src="/beneficios/flujo-operacion.svg" alt="Apoyo constante" />
          </div>
          <div className={`col-lg-6 col-md-6 ${styles['section-content']}`}>
            <div className="mb-md-4">
              <TitleSection orden="05" linea1="Flujo de" linea2="operación" />
            </div>
            <div>
              <div className={`body2 ${styles['text-box']}`}>
                Asegura que tendrás el flujo necesario para ese pago de nómina, tu próxima gran inversión o esa
                remodelación de ensueño.
                <br />
                <br />Y recuerda que hay situaciones que no controlamos, un crédito te servirá para afrontar todos los
                imprevistos.
              </div>
            </div>
          </div>
        </Section>

        {/* Da el siguiente gran salto */}
        <Section className={`${styles['section-last']}`}>
          <div className="col-12 my-auto">
            <div className={`text-center ${styles.text}`}>
              <h2 className="text-primary">Da el siguiente</h2>
              <h2 className="text-secondary">gran salto</h2>
            </div>
            <div className="d-flex justify-content-center pt-4">
              <Link href="simulador">
                <button className={`btn-link ${styles.button}`} type="button">
                  Solicitar mi crédito
                </button>
              </Link>
            </div>
          </div>
        </Section>
      </article>
    </>
  );
};
export default Beneficios;
