import Link from 'next/link';
import TitleSection from '../../components/shared/titles/title-section/TitleSection';
import { Section } from '../../components/shared/section/Section';
import styles from './beneficios.module.scss';
import BannerBeneficios from '../../components/core/banners/BannerBeneficios';

const Beneficios = () => (
  <>
    <BannerBeneficios />

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
              Las tasas varían dependiendo del diseño de tu crédito, sin embargo son muy atractivas y pensadas
              específicamente en ti como empresario Pyme.
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
            <img src="/beneficios/app.svg" alt="Left phone" />
          </div>
        </div>
        <div className={`col-lg-6 col-md-6 ${styles['section-content']}`}>
          <div className="mb-md-4">
            <TitleSection orden="03" linea1="banca" linea2="en línea" />
          </div>
          <div>
            <div className={`body2 ${styles['text-box']}`}>
              Administra los recursos de tu empresa, además podrás realizar operaciones con tus productos de manera
              rápida, autónoma y segura.
              <br />
              <br />
              <span className="sub color-blue-storm">¿Tienes que ir a una sucursal?</span>
              <br />
              Contamos con más de 1,150 con el mejor horario de la banca: 365 días del año, de 10:00 am a 8:00 pm.
            </div>
          </div>
        </div>
      </Section>

      {/* Crecer tu negocio */}
      <section className={`overflow-hidden ${styles.section} section-blue-storm`}>
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
                  Invierte tu crédito en capital de trabajo, maquinaria, equipamiento o algún otro tipo de activo fijo
                  que haga trabajar y crecer tu dinero por ti.
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
              Asegura que tendrás el flujo necesario para los pagos de nómina, tu próxima gran inversión o esa
              remodelación de ensueño.
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
              <button className="btn-link-arrow-right" type="button">
                Solicita tu crédito
              </button>
            </Link>
          </div>
        </div>
      </Section>
    </article>
  </>
);
export default Beneficios;
