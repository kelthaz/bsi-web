import React, { useState } from 'react';
import styles from './requisitos.module.scss';
import Accordion from '../../components/shared/accordion/Accordion';
import Banner from '../../components/shared/banners/banner/Banner';
import { Section } from '../../components/shared/section/Section';
import Tab from '../../components/shared/tab/Tab';
import TabItem from '../../components/shared/tab/TabItem';
import Title from '../../components/shared/titles/title/Title';
import TitleBanner from '../../components/shared/titles/title-banner/TitleBanner';
import VideoSelector from '../../components/shared/video-selector/VideoSelector';
import Modal from '../../components/shared/modal/Modal';

const Check = () => <img src="/check.svg" alt="Check" />;

export const Requisitos = () => {
  const [openModal, setOpenModal] = useState(false);

  const zonas = [
    { estado: 'Aguascalientes', municipios: ['Aguascalientes'] },
    { estado: 'Chihuahua', municipios: ['Ciudad Juárez', 'Chihuahua'] },
    {
      estado: 'Ciudad de México',
      municipios: [
        'Tlalpan',
        'Venustiano Carranza',
        'Azcapotzalco',
        'Iztapalapa',
        'Iztacalco',
        'Miguel Hidalgo',
        'La Magdalena Contreras',
        'Coyoacán',
        'Milpa Alta',
        'Tláhuac',
        'Benito Juárez',
        'Cuajimalpa de Morelos',
        'Gustavo A. Madero',
        'Cuauhtémoc',
        'Álvaro Obregón',
        'Xochimilco',
      ],
    },
    { estado: 'Coahuila de Zaragoza', municipios: ['Torreón'] },
    {
      estado: 'Estado de México',
      municipios: [
        'Toluca',
        'Metepec',
        'Naucalpan de Juárez',
        'Tlalnepantla de Baz',
        'Atizapán de Zaragoza',
        'Tultitlán',
        'Coacalco de  Berriozábal',
        'Huixquilucan',
        'Cuautitlán',
        'Tultepec',
        'Cuautitlán Izcalli',
        'Nicolás Romero',
        'Tepoztlán',
        'Ixtapaluca',
        'Valle de Chalco',
        'Chalco',
        'Nezahualcoyotl',
        'Chimalhuacán',
        'La Paz',
        'Texcoco',
        'Ecatepec de Morelos',
        'Tecámac',
      ],
    },
    { estado: 'Guanajuato', municipios: ['León', 'Guanajuato'] },
    { estado: 'Jalisco', municipios: ['Guadalajara', 'Zapopan', 'Tlaquepaque', 'Tonalá', 'Tlajomulco de Zúñiga'] },
    { estado: 'Nuevo León', municipios: ['Monterrey', 'Guadalupe', 'Apodaca'] },
    {
      estado: 'Puebla',
      municipios: [
        'Puebla',
        'San Andrés Cholula',
        'La Paz',
        'Santiago',
        'Centro',
        'Las ánimas',
        'San Pedro Cholula',
        'Cuautlancingo',
      ],
    },
    { estado: 'Sonora', municipios: ['Hermosillo'] },
    { estado: 'Tamaulipas', municipios: ['Tampico', 'Altamira', 'Ciudad Madero'] },
  ];

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

  const documentosSolicitante = [
    { documento: 'Ser representante legal de la empresa', fisica: false, moral: true },
    { documento: 'RFC con el que facturas', fisica: true, moral: true },
    { documento: 'CURP', fisica: true, moral: true },
    { documento: 'e-firma y CIEC', fisica: true, moral: true },
    { documento: 'Un obligado solidario', fisica: true, moral: true },
    { documento: 'Acta de matrimonio e INE de tu pareja', fisica: true, moral: false },
    { documento: 'Acta constitutiva más reciente', fisica: false, moral: true },
    { documento: 'Poderes notariales', fisica: false, moral: true },
    { documento: 'Escrituras con reformas', fisica: false, moral: true },
    { documento: 'Comprobante de domicilio', fisica: true, moral: true },
    { documento: 'INE', fisica: true, moral: true },
  ];

  const documentosObligado = [
    { documento: 'Ser representante legal de la empresa', fisica: false, moral: true },
    { documento: 'RFC con el que facturas', fisica: true, moral: true },
    { documento: 'CURP', fisica: true, moral: true },
    { documento: 'e-firma y CIEC', fisica: false, moral: true },
    { documento: 'Un obligado solidario', fisica: false, moral: false },
    { documento: 'Acta de matrimonio e INE de tu pareja', fisica: true, moral: false },
    { documento: 'Acta constitutiva más reciente', fisica: false, moral: true },
    { documento: 'Poderes notariales', fisica: false, moral: true },
    { documento: 'Escrituras con reformas', fisica: false, moral: true },
    { documento: 'Comprobante de domicilio', fisica: true, moral: true },
    { documento: 'INE', fisica: true, moral: true },
  ];

  return (
    <>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h4 className="color-blue-storm">Zonas Crédito Pyme disponibles</h4>
        <table className="table-horizontal-dividers-two-column">
          <thead>
            <tr>
              <th>Estado</th>
              <th>Municipio</th>
            </tr>
          </thead>
          <tbody>
            {zonas.map(({ estado, municipios }) => (
              <React.Fragment key={estado}>
                <tr>
                  <td rowSpan={municipios.length}>{estado}</td>
                  <td>{municipios[0]}</td>
                </tr>
                {municipios.length > 1 &&
                  municipios.slice(1).map((municipio) => (
                    <tr key={municipio}>
                      <td>{municipio}</td>
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </Modal>
      <Banner
        backgroundImage="/requisitos/banner.png"
        textBlock={requistosBannerTextBlock}
        imageBlock={requistosBannerImageBlock}
      />
      <article>
        {/* Encabezado documentación por tipo de persona */}
        <section className="section-blue-storm">
          <div className="container">
            <div className={`pt-5 mx-auto mb-4 ${styles.title}`}>
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
                Ten en cuenta que hay algunas zonas del país de donde no podrás solicitar un crédito Pyme ni podrá
                residir tu Obligado Solidario.
              </p>
              <button type="button" className="btn-link text-white mx-auto" onClick={() => setOpenModal(true)}>
                Conoce las zonas aquí
              </button>
            </div>
          </div>
        </section>
        {/* Tabla de requisitos */}
        <section className="section-white">
          <div className="container">
            <div className="row justify-content-center d-flex flex-row">
              <div className={`col-11 p-5 card-simple-white ${styles.table}`}>
                <Tab>
                  <TabItem tab="Solicitante" keyTab="1">
                    {/* Desktop */}
                    <div className="d-none d-md-block px-4 pt-4">
                      <table>
                        <thead>
                          <tr>
                            <th width="50%">
                              <h4 className="text-primary">Documentos para cargar</h4>
                            </th>
                            <th className="text-center align-top" width="20%">
                              <img src="/requisitos/PFAE.svg" alt="PFAE" />
                              <h4 className="text-primary">Persona física con actividad empresarial</h4>
                            </th>
                            <th className="text-center align-top" width="20%">
                              <img src="/requisitos/PM.svg" alt="PM" />
                              <h4 className="text-primary">Personal moral</h4>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {documentosSolicitante.map(({ documento, fisica, moral }) => (
                            <tr key={documento}>
                              <td className="body2">{documento}</td>
                              <td className="body2 text-center">{fisica ? <Check /> : '-'}</td>
                              <td className="body2 text-center">{moral ? <Check /> : '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* Mobile */}
                    <div className="d-block d-md-none mx-3">
                      <Accordion
                        title="Persona física con actividad empresarial"
                        expanded={false}
                        color="blue"
                        icon="arrow"
                      >
                        <ul className={styles['requirement-list']}>
                          {documentosSolicitante.map(({ documento, fisica }) => (
                            <li className="d-flex" key={documento}>
                              <div className="col-2 px-0 text-center my-auto">{fisica ? <Check /> : '-'}</div>
                              <div className="col-10 px-0 body3">{documento}</div>
                            </li>
                          ))}
                        </ul>
                      </Accordion>
                      <Accordion title="Persona moral" expanded={false} color="blue" icon="arrow">
                        <ul className={styles['requirement-list']}>
                          {documentosSolicitante.map(({ documento, moral }) => (
                            <li className="d-flex" key={documento}>
                              <div className="col-2 px-0 text-center my-auto">{moral ? <Check /> : '-'}</div>
                              <div className="col-10 px-0 body3">{documento}</div>
                            </li>
                          ))}
                        </ul>
                      </Accordion>
                    </div>
                    <div className={`d-flex my-5 mx-auto col-auto body2 ${styles.note} ${styles['w-800']}`}>
                      <img
                        className="d-none d-md-block pr-3"
                        src="/requisitos/natural-person-note.svg"
                        alt="Nota de persona física"
                      />
                      <div>
                        Si eres <span className="sub">Persona Física con Actividad Empresarial (PFAE)</span> te
                        recomendamos antes de iniciar tu proceso, acudir a una Sucursal Bancoppel y aperturar una Cuenta
                        de Cheques para que te podamos desembolsar tu crédito cuando sea aprobado.{' '}
                        <u className="sub">Conoce más</u>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem tab="Obligado solidario" keyTab="2">
                    {/* Desktop */}
                    <div className="d-none d-md-block px-4 pt-4">
                      <table>
                        <thead>
                          <tr>
                            <th width="50%">
                              <h4 className="text-primary">Documentos para cargar</h4>
                            </th>
                            <th className="text-center" width="20%">
                              <img src="/requisitos/PFAE.svg" alt="PFAE" />
                              <h4 className="text-primary">Persona física con actividad empresarial</h4>
                            </th>
                            <th className="text-center" width="20%">
                              <img src="/requisitos/PM.svg" alt="PM" />
                              <h4 className="text-primary">Personal moral</h4>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {documentosObligado.map(({ documento, fisica, moral }) => (
                            <tr key={documento}>
                              <td className="body2">{documento}</td>
                              <td className="body2 text-center">{fisica ? <Check /> : '-'}</td>
                              <td className="body2 text-center">{moral ? <Check /> : '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* Mobile */}
                    <div className="d-block d-md-none mx-3">
                      <Accordion
                        title="Persona física con actividad empresarial"
                        expanded={false}
                        color="blue"
                        icon="arrow"
                      >
                        <ul className={styles['requirement-list']}>
                          {documentosObligado.map(({ documento, fisica }) => (
                            <li className="d-flex" key={documento}>
                              <div className="col-2 px-0 text-center my-auto">{fisica ? <Check /> : '-'}</div>
                              <div className="col-10 px-0 body3">{documento}</div>
                            </li>
                          ))}
                        </ul>
                      </Accordion>
                      <Accordion title="Persona moral" expanded={false} color="blue" icon="arrow">
                        <ul className={styles['requirement-list']}>
                          {documentosObligado.map(({ documento, moral }) => (
                            <li className="d-flex" key={documento}>
                              <div className="col-2 px-0 text-center my-auto">{moral ? <Check /> : '-'}</div>
                              <div className="col-10 px-0 body3">{documento}</div>
                            </li>
                          ))}
                        </ul>
                      </Accordion>
                    </div>
                  </TabItem>
                </Tab>
              </div>
              <div className="mb-5 col-12 body2">
                <div className={`d-flex mx-auto ${styles.note} ${styles['w-490']}`}>
                  <img className="d-none d-md-block pr-3" src="/requisitos/security-note.svg" alt="Nota de seguridad" />
                  <div>
                    Tus datos estarán protegidos y nunca almacenaremos tu e.firma o tu CIEC.{' '}
                    <u className="sub">¿Por qué te pedimos esto?</u>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Videos - para tu información */}
        <section className="section-blue-light py-5">
          <Title linea1="Para tu información" />
          <VideoSelector />
        </section>
        {/* Acordeón - aún quedan dudas */}
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
                    <Accordion key={title} color="blue" icon="cross" title={title} expanded={false}>
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
        {/* No resolvimos tu duda - Da el siguiente gran salto */}
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-6 p-5 section-blue-light">
                <div className={`mx-auto mb-3 ${styles.title}`}>
                  <h2 className="text-primary text-center">
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
          </div>
        </section>
      </article>
    </>
  );
};

export default Requisitos;
