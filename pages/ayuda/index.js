import Head from 'next/head';
import styles from '../../styles/scss/pages/Ayuda.module.scss';
import { Header } from '../../components/header/Header';
import { Footer } from '../../components/footer/Footer';
import { Title } from '../../components/title/Title';

const Ayuda = () => {
  return (
    <div className={['container', styles.container].join(' ')}>
      <Head>
        <title>Ayuda - BanCoppel | Pymes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'flex-row'}>
        <Header />
      </div>

      {/* <Banner/> */}

      <div className={'flex-row mt-5 mb-5'}>
        <div className={'col-6'}>
          <div className={'flex-row'}>
            <div className={'col-8'}>
              <div className={'sub text-primary mb-3'}>Llámanos directo</div>
              <div className={'body2 mb-3'}>Un ejecutivo responderá todas tus dudas.</div>
              <div className={'sub text-secondary'}><a href="tel:+5510908290">55 1090 8290</a></div>
            </div>
            <div className={'col-4'}>
              <img src="/mobile.svg"/>
            </div>
          </div>
        </div>
        <div className={'col-1 only-desktop'}>
          <img src="/vertical-division.svg"/>
        </div>
        <div className={'col-1 only-mobile'}>
          <img src="/horizontal-division.svg"/>
        </div>
        <div className={'col-5'}>
          <div className={'flex-row'}>
            <div className={'col-8'}>
              <div className={'sub text-primary mb-3'}>Chat</div>
              <div className={'body2 mb-3'}>Si prefieres, manda tus dudas por nuestro chat.</div>
              <div className={'sub text-secondary'}><a href="#">Ver todos los requisitos</a><span className={'ml-3'}><img src="/arrow-right.svg"/></span></div>
            </div>
            <div className={'col-4'}>
              <img src="/chat.svg"/>
            </div>
          </div>
        </div>
      </div>

      <div className={'flex-row'}>
        <Title linea1="Todo sobre" linea2="crédito pyme"/>
      </div>

      <div className={'flex-row mt-5 justify-content-center'}>
        <div className={'col-3 pr-4'}>
          <div className={['flex-row', styles.about_pyme_box, styles.active].join(' ')}>
            <div className={'col-1 align-content-center'}>
              <img src="/document.svg" alt="Document"/>
            </div>
            <div className={'col'}>
              <div className={['sub', 'text-secondary', styles.highlighted_text].join(" ")}>Acerca del crédito</div>
              <div className={'body2'}>Todo sobre el crédito Pyme</div>
            </div>
          </div>
          <div className={['flex-row', styles.about_pyme_box].join(' ')}>
            <div className={'col-1'}>
              <img src="/user.svg" alt="User"/>
            </div>
            <div className={'col'}>
              <div className={['sub', 'text-secondary', styles.highlighted_text].join(" ")}>Cuenta de usuario</div>
              <div className={'body2'}>Tu sesión y administración</div>
            </div>
          </div>
          <div className={['flex-row', styles.about_pyme_box].join(' ')}>
            <div className={'col-1'}>
              <img src="/security.svg" alt="Security"/>
            </div>
            <div className={'col'}>
              <div className={['sub', 'text-secondary', styles.highlighted_text].join(" ")}>Seguridad de datos</div>
              <div className={'body2'}>Protegemos tu información</div>
            </div>
          </div>
        </div>
        <div className={['col-5 align-content-between', styles.about_pyme_content_box].join(' ')}>
          <div className={['flex-row', 'justify-content-between', styles.about_pyme_content_item].join(' ')}>
            <div className={'sub text-primary'}>¿Cómo comienzo?</div>
            <div><img src="/plus.svg" alt="Ver más"/></div>
          </div>
          <div className={['flex-row', 'justify-content-between', styles.about_pyme_content_item].join(' ')}>
            <div className={'sub text-primary'}>¿Cuanto es lo máximo que puedo solicitar?</div>
            <div><img src="/plus.svg" alt="Ver más"/></div>
          </div>
          <div className={['flex-row', 'justify-content-between', styles.about_pyme_content_item].join(' ')}>
            <div className={'sub text-primary'}>¿En cuanto tiempo recibo mi dinero?</div>
            <div><img src="/plus.svg" alt="Ver más"/></div>
          </div>
          <div className={['flex-row', 'justify-content-between', styles.about_pyme_content_item].join(' ')}>
            <div className={'sub text-primary'}>¿Necesito una cuenta empresarial?</div>
            <div><img src="/plus.svg" alt="Ver más"/></div>
          </div>
          <div className={['flex-row', 'justify-content-between', styles.about_pyme_content_item].join(' ')}>
            <div className={'sub text-primary'}>¿En cuanto tiempo recibiría mi dinero?</div>
            <div><img src="/plus.svg" alt="Ver más"/></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ayuda;
