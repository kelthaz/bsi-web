import { useState } from 'react';
import SimpleBanner from '../../components/shared/banners/simple-banner/SimpleBanner';
import TextField from '../../components/shared/text-field/TextField';
import Title from '../../components/shared/titles/title/Title';
import Accordion from '../../components/shared/accordion/Accordion';
import styles from './ayuda.module.scss';

const Ayuda = () => {
  const [option, setOption] = useState(1);

  const handleOption = (opt) => {
    setOption(opt);
  };

  const aboutPymeItems = [
    {
      title: '¿Cómo comienzo?',
      content:
        'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.',
    },
    {
      title: '¿Cuánto es lo máximo que puedo solicitar?',
      content:
        'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.',
    },
    {
      title: '¿En cuánto tiempo recibo mi dinero?',
      content:
        'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.',
    },
    {
      title: '¿Necesito una cuenta empresarial?',
      content:
        'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.',
    },
    {
      title: '¿En cuánto tiempo recibiría mi dinero?',
      content:
        'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.',
    },
  ];

  const acc = (
    <div className={styles['container-accordion']}>
      {aboutPymeItems.map(({ title, content }) => (
        <Accordion key={title} type="blue" title={title} expanded={false}>
          <div>
            <p>{content}</p>
          </div>
        </Accordion>
      ))}
    </div>
  );

  return (
    <>
      <form>
        <SimpleBanner>
          <div className="row justify-content-center mx-0">
            <h1 className={`${styles.title}`}>CENTRO DE AYUDA</h1>
          </div>
          <div className="row justify-content-center mx-0">
            <h4 className={styles.bt1}>
              Queremos que tomes la mejor decisión con toda la información a tu alcance. Si tienes dudas contáctanos.
            </h4>
          </div>
          <div className="row justify-content-center mt-5 mx-0">
            <div className="col-sm-12 col-md-4">
              <TextField capitalize label="Nombre" />
            </div>
            <div className="col-sm-12 col-md-4">
              <TextField label="Correo electrónico" />
            </div>
            <div className="col-sm-12 col-md-4">
              <TextField label="Número de teléfono" />
            </div>
          </div>
          <div className="row justify-content-center mx-0">
            <div className={`col-auto ${styles['textarea-questions']}`}>
              <textarea className="body2" placeholder="Cuéntanos tus dudas..." maxLength="300" />
            </div>
          </div>
        </SimpleBanner>

        <div className="row justify-content-center mt-5 pt-3 mx-0">
          <div className="col-auto">
            <button type="button" className="btn-small">
              Enviar
            </button>
          </div>
        </div>
      </form>

      <section>
        <div className="container">
          <div className={`row py-5 ${styles['border-contact']}`}>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex flex-row align-items-center">
                <div className="col-8">
                  <div className="sub text-primary mb-3">Llámanos directo</div>
                  <div className="body2 mb-3">Un ejecutivo responderá todas tus dudas.</div>
                  <div className="sub text-secondary">
                    <a href="tel:+5510908290">55 1090 8290</a>
                  </div>
                </div>
                <div className="col-4">
                  <img src="/mobile.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex flex-row align-items-center">
                <div className="col-8">
                  <div className="sub text-primary mb-3">Chat</div>
                  <div className="body2 mb-3">Si prefieres, manda tus dudas por nuestro chat.</div>
                  <button className="btn-link text-primary" type="button">
                    Ver todos los requisitos
                  </button>
                </div>
                <div className="col-4">
                  <img src="/chat.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Title linea1="Todo sobre" linea2="crédito pyme" />

        <div className="container">
          <div className="row py-5">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div
                name="acerca-del-credito"
                className={`${styles.card} ${styles['about-pyme-box']} ${option === 1 ? styles.active : ''}`}
                onClick={() => handleOption(1)}
                role="button"
              >
                <img src="/document.svg" alt="Document" />
                <div>
                  <div className="sub ">Acerca del crédito</div>
                  <div className="body2">Todo sobre el crédito Pyme</div>
                </div>
              </div>
              <div className="d-lg-none d-md-none d-sm-block d-block">{option === 1 && acc}</div>
              <div
                name="cuenta-usuario"
                className={`${styles.card} ${styles['about-pyme-box']} ${option === 2 ? styles.active : ''}`}
                onClick={() => handleOption(2)}
                role="button"
              >
                <img src="/user.svg" alt="User" />
                <div>
                  <div className="sub">Cuenta de usuario</div>
                  <div className="body2">Tu sesión y administración</div>
                </div>
              </div>
              <div className="d-lg-none d-md-none d-sm-block d-block">{option === 2 && acc}</div>
              <div
                name="seguridad-datos"
                className={`${styles.card} ${styles['about-pyme-box']} ${option === 3 ? styles.active : ''}`}
                onClick={() => handleOption(3)}
                role="button"
              >
                <img src="/security.svg" alt="Security" />
                <div>
                  <div className="sub ">Seguridad de datos</div>
                  <div className="body2">Protegemos tu información</div>
                </div>
              </div>
              <div className="d-lg-none d-md-none d-sm-block d-block">{option === 3 && acc}</div>
            </div>
            <div className="col-lg-7 col-md-7 d-lg-block d-md-block d-sm-none d-none">{acc}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ayuda;
