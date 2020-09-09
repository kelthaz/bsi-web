import Head from 'next/head';
import styles from '../../styles/scss/pages/Ayuda.module.scss';
import { Header } from '../../components/header/Header';
import { Accordeon } from '../../components/accordeon/Accordeon';
import { Banner } from '../../components/banner/Banner';
import { Footer } from '../../components/footer/Footer';
import { Title } from '../../components/title/Title';

const Ayuda = () => {

  let about_pyme_items = [
    {title: '¿Cómo comienzo?', content: ''},
    {title: '¿Cuanto es lo máximo que puedo solicitar?', content: ''},
    {title: '¿En cuanto tiempo recibo mi dinero?', content: ''},
    {title: '¿Necesito una cuenta empresarial?', content: ''},
    {title: '¿En cuanto tiempo recibiría mi dinero?', content: ''},
  ]

  return (
    <div className={['container', styles.container].join(' ')}>
      <Head>
        <title>Ayuda - BanCoppel | Pymes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'flex-row'}>
        <Header />
      </div>

      <Banner/>

      <section className={'flex-row mt-5 mb-5 justify-content-center'}>
        <div className={['col-6', styles.contact_box].join(' ')}>
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
        <div className={['col-5', styles.contact_box].join(' ')}>
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
      </section>

      <section>
        <div className={'flex-row'}>
          <Title linea1="Todo sobre" linea2="crédito pyme"/>
        </div>

        <div className={'flex-row mt-5 justify-content-center'}>
          <div className={['col-3 pr-4', styles.about_pyme_selector].join(' ')}>
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
          <div className={'col-5 only-desktop'}>
            <Accordeon items={about_pyme_items}/>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ayuda;
