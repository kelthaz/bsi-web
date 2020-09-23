import React from 'react';
import styles from './requisitos.module.scss';
import Accordion from '../../components/shared/accordion/Accordion';
import Banner from '../../components/shared/banners/banner/Banner';
import { Section } from '../../components/shared/section/Section';
import Title from '../../components/shared/titles/title/Title';
import TitleBanner from '../../components/shared/titles/title-banner/TitleBanner';

export const Requisitos = () => {
  const accordionItems = [
    {
      title: '¿Por qué no puedo usar mi propia cuenta bancaria para el depósito?',
      content:
        'Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.',
    },
    {
      title: '¿Qué pasa si me asignan un monto menor al que solicité?',
      content:
        'Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.',
    },
    {
      title: '¿Qué pasa si mi Obligado Solidario no puede responder las preguntas en el momento?',
      content:
        'Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.',
    },
    {
      title: '¿Por qué no aceptan solicitud de Personas Físicas?',
      content:
        'Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.',
    },
    {
      title: '¿Qué puedo hacer si me rechazan mi solicitud?',
      content:
        'Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.',
    },
    {
      title: '¿En cuánto tiempo recibo mi dinero?',
      content:
        'Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.',
    },
    {
      title: '¿Cómo puedo subir un documento corregido?',
      content:
        'Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.',
    },
    {
      title: '¿Cómo protegen mis datos personales?',
      content:
        'Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.',
    },
    {
      title: '¿Cuánto es lo máximo que puedo solicitar?',
      content: 'podrás solicitar un Máximo de $12 MDP.',
    },
  ];

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
      <Banner
        backgroundImage="/requisitos/banner.png"
        textBlock={requistosBannerTextBlock}
        imageBlock={requistosBannerImageBlock}
      />
      <Section className="section-blue-storm">
        <div className={`mx-auto mb-4 ${styles.title}`}>
          <h2 className="text-white text-center">
            Documentación
            <br />
            <span>por tipo de persona</span>
          </h2>
        </div>
        <div className={`mx-auto ${styles['section-1']}`}>
          <p className="body2 text-white text-center">
            Estos documentos aplican tanto para ti, como para la persona que vayas a designar como tu Obligado
            Solidario, dependiendo el tipo de persona.
          </p>
          <p className="body2 text-white text-center">
            Ten en cuenta que hay algunas zonas del país de donde no podrás solicitar un crédito Pyme ni podrá residir
            tu Obligado Solidario.
          </p>
          <button type="button" className="btn-link text-white mx-auto">
            Conoce las zonas aquí
          </button>
        </div>
      </Section>
      <div className="row mx-0 justify-content-center">
        <div className="col-12 card-simple-white"></div>
        <div className={`col-auto body2 ${styles['security-note']}`}>
          Tus datos estarán protegidos y nunca almacenaremos tu FIEL o tu CIEC.
        </div>
      </div>
      <div className="section-blue-light">
        <Title linea1="Para tu información" />
        <div className="body2 text-center">Consulta nuestros videos para conocer más sobre los requisitos.</div>
      </div>
      <article>
        <section className="section-white">
          <div className="container">
            <div className="row p-lg-5 p-md-4 p-sm-2 p-xs-2 no-gutters">
              <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                <div className={styles['title-line-left']}>
                  <h2>
                    <span>¿AÚN QUEDAN</span>
                    <br />
                    <span>DUDAS?</span>
                  </h2>
                  <p>Estas son algunas preguntas y respuestas que podrían ayudarte.</p>
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
                <div className="card-accordion">
                  {accordionItems.map(({ title, content }) => (
                    <Accordion key={title} type="blue" title={title} expanded={false}>
                      <div>
                        <p>{content}</p>
                      </div>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      <div className="row mx-0">
        <div className="col-md-12 col-lg-6 p-5 section-blue-light">
          <div className={`mx-auto mb-3 ${styles.title}`}>
            <h2 className="text-secondary text-center">
              ¿No resolvimos
              <br />
              <span>tu duda?</span>
            </h2>
          </div>
          <button type="button" className="btn-link text-secondary mx-auto">
            Quiero que me contacten
          </button>
        </div>
        <div className="col-md-12 col-lg-6 p-5 section-blue-storm">
          <div className={`mx-auto mb-3 ${styles.title}`}>
            <h2 className="text-white text-center">
              Da el siguiente
              <br />
              <span>gran salto</span>
            </h2>
          </div>
          <button type="button" className="btn-link text-white mx-auto">
            Solicitar mi crédito
          </button>
        </div>
      </div>
    </>
  );
};

export default Requisitos;
