import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from './requisitos.module.scss';
import Accordion from '../../components/shared/accordion/Accordion';
import Tab from '../../components/shared/tab/Tab';
import TabItem from '../../components/shared/tab/TabItem';
import Title from '../../components/shared/titles/title/Title';
import VideoSelector from '../../components/shared/video-selector/VideoSelector';
import Modal from '../../components/shared/modal/Modal';
import BannerRequisitos from '../../components/core/banners/BannerRequisitos';
import Tooltip from '../../components/shared/tooltip/Tooltip';
import AccordionRepositorio from '../../services/simulador/acordeon.repositorio';

const Check = () => <img src="/check.svg" alt="Check" />;

export const Requisitos = ({ accordionItems }) => {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

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

  const documentosSolicitante = [
    { documento: 'Ser representante legal de la empresa', info: null, fisica: false, moral: true },
    { documento: 'RFC con el que facturas', info: null, fisica: true, moral: true },
    { documento: 'CURP', info: null, fisica: true, moral: true },
    {
      documento: 'e.firma y CIEC',
      info: {
        msg:
          'Esta información nos servirá únicamente para autorización y consulta de la actividad de tu negocio. No resguardaremos ninguna de estas contraseñas.',
        type: 'tooltip',
      },
      fisica: true,
      moral: true,
    },
    {
      documento: 'Un obligado solidario',
      info: {
        msg:
          'Es la persona física o moral que fungirá como responsable de cumplir con las obligaciones del acreditado en caso de que éste no cumpla con sus responsabilidades del crédito.',
        type: 'tooltip',
      },
      fisica: true,
      moral: true,
    },
    {
      documento: 'Acta de matrimonio e INE de tu pareja',
      info: { msg: 'Estos documentos te servirán como respaldo en caso de estar casado.', type: 'tooltip' },
      fisica: true,
      moral: false,
    },
    { documento: 'Acta constitutiva más reciente', info: null, fisica: false, moral: true },
    {
      documento: 'Poderes notariales',

      info: {
        msg: 'Sólo si no vienen en tu acta constitutiva',
        type: 'text',
      },
      fisica: false,
      moral: true,
    },
    {
      documento: 'Escrituras con reformas',
      info: { msg: 'Sólo si no vienen en tu acta constitutiva', type: 'text' },
      fisica: false,
      moral: true,
    },
    { documento: 'Comprobante de domicilio', fisica: true, moral: true },
    {
      documento: 'INE',
      info: { msg: 'Identificación oficial vigente (INE o IFE).', type: 'tooltip' },
      fisica: true,
      moral: true,
    },
  ];

  const documentosObligado = [
    { documento: 'Ser representante legal de la empresa', info: null, fisica: false, moral: true },
    { documento: 'RFC con el que facturas', info: null, fisica: true, moral: true },
    { documento: 'CURP', info: null, fisica: true, moral: true },
    {
      documento: 'e.firma y CIEC',
      info: {
        msg:
          'Esta información nos servirá únicamente para autorización y consulta de la actividad de tu negocio. No resguardaremos ninguna de estas contraseñas.',
        type: 'tooltip',
      },
      fisica: false,
      moral: true,
    },
    {
      documento: 'Un obligado solidario',
      info: {
        msg:
          'Es la persona física o moral que fungirá como responsable de cumplir con las obligaciones del acreditado en caso de que éste no cumpla con sus responsabilidades del crédito.',
        type: 'tooltip',
      },
      fisica: false,
      moral: false,
    },
    {
      documento: 'Acta de matrimonio e INE de tu pareja',
      info: {
        msg: 'Estos documentos te servirán como respaldo en caso de estar casado.',
        type: 'tooltip',
      },
      fisica: true,
      moral: false,
    },
    { documento: 'Acta constitutiva más reciente', info: null, fisica: false, moral: true },
    {
      documento: 'Poderes notariales',
      info: { msg: 'Sólo si no vienen en tu acta constitutiva', type: 'text' },
      fisica: false,
      moral: true,
    },
    {
      documento: 'Escrituras con reformas',
      info: {
        msg: 'Sólo si no vienen en tu acta constitutiva',
        type: 'text',
      },
      fisica: false,
      moral: true,
    },
    { documento: 'Comprobante de domicilio', info: null, fisica: true, moral: true },
    {
      documento: 'INE',
      info: { msg: 'Identificación oficial vigente (INE o IFE).', type: 'tooltip' },
      fisica: true,
      moral: true,
    },
  ];

  return (
    <>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h4 className="color-blue-storm">Zonas de cobertura de Crédito Digital Pymes</h4>
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
      <BannerRequisitos />
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
                Ten en cuenta que hay algunas zonas del país de donde no podrás solicitar un Crédito Digital Pymes ni
                podrá residir tu Obligado Solidario.
              </p>
              <button
                type="button"
                className="btn-link-arrow-right-inverted mx-auto"
                onClick={() => setOpenModal(true)}
              >
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
                  <TabItem tab="Requisitos Solicitante" keyTab="1">
                    {/* Desktop */}
                    <div className="d-none d-md-block px-4 pt-4">
                      <table>
                        <thead>
                          <tr>
                            <th width="50%">
                              <h4 className="text-primary">Documentos para cargar</h4>
                            </th>
                            <th className="text-center align-top" width="30%">
                              <img src="/requisitos/PFAE.svg" alt="PFAE" />
                              <h4 className="text-primary">Persona Física con Actividad Empresarial</h4>
                            </th>
                            <th className="text-center align-top" width="20%">
                              <img src="/requisitos/PM.svg" alt="PM" />
                              <h4 className="text-primary">Personal Moral</h4>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {documentosSolicitante.map(({ documento, info, fisica, moral }) => (
                            <tr key={documento}>
                              <td className="body2 position-relative">
                                {documento}{' '}
                                {info &&
                                  (info.type === 'tooltip' ? (
                                    <Tooltip message={info.msg} />
                                  ) : (
                                    <span className={styles['text-info']}>{info.msg}</span>
                                  ))}
                              </td>
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
                        title="Persona Física con Actividad Empresarial"
                        expanded={false}
                        color="blue"
                        icon="arrow"
                      >
                        <ul className={styles['requirement-list']}>
                          {documentosSolicitante.map(({ documento, info, fisica }) => (
                            <li className="row" key={documento}>
                              <div className="col-2 px-0 text-center my-auto">{fisica ? <Check /> : '-'}</div>
                              <div className="col-10 px-0 body2">
                                {documento}
                                {info &&
                                  (info.type === 'tooltip' ? (
                                    <Tooltip message={info.msg} />
                                  ) : (
                                    <span className={styles['text-info']}>{info.msg}</span>
                                  ))}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </Accordion>
                      <Accordion title="Persona Moral" expanded={false} color="blue" icon="arrow">
                        <ul className={styles['requirement-list']}>
                          {documentosSolicitante.map(({ documento, info, moral }) => (
                            <li className="row" key={documento}>
                              <div className="col-2 px-0 text-center my-auto">{moral ? <Check /> : '-'}</div>
                              <div className="col-10 px-0 body2">
                                {documento}
                                {info &&
                                  (info.type === 'tooltip' ? (
                                    <Tooltip message={info.msg} />
                                  ) : (
                                    <span className={styles['text-info']}>{info.msg}</span>
                                  ))}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </Accordion>
                    </div>
                    <div className={`d-flex my-4 mx-auto col-auto body2 ${styles['note-light']} ${styles['w-800']}`}>
                      <img
                        className="d-none d-md-block pr-3"
                        src="/requisitos/natural-person-note.svg"
                        alt="Nota de persona física"
                      />
                      <div>
                        <p>
                          Si eres <span className="sub">Persona Física con Actividad Empresarial (PFAE)</span> te
                          recomendamos antes de iniciar tu proceso, acudir a una Sucursal Bancoppel y aperturar una
                          <strong> Cuenta Bancaria Bancoppel </strong>para que te podamos desembolsar tu crédito cuando
                          sea aprobado.{' '}
                          <a
                            className="sub"
                            href="https://www.bancoppel.com/ahorro_bcopp/cuenta_efectiva.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Conoce más
                          </a>
                        </p>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem tab="Requisitos Obligado Solidario" keyTab="2">
                    {/* Desktop */}
                    <div className="d-none d-md-block px-4 pt-4">
                      <table>
                        <thead>
                          <tr>
                            <th width="50%">
                              <h4 className="text-primary">Documentos para cargar</h4>
                            </th>
                            <th className="text-center align-top" width="30%">
                              <img src="/requisitos/PFAE.svg" alt="PFAE" />
                              <h4 className="text-primary">Persona Física</h4>
                            </th>
                            <th className="text-center align-top" width="20%">
                              <img src="/requisitos/PM.svg" alt="PM" />
                              <h4 className="text-primary">Personal Moral</h4>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {documentosObligado.map(({ documento, info, fisica, moral }) => (
                            <tr key={documento}>
                              <td className="body2 position-relative">
                                {documento}{' '}
                                {info &&
                                  (info.type === 'tooltip' ? (
                                    <Tooltip message={info.msg} />
                                  ) : (
                                    <span className={styles['text-info']}>{info.msg}</span>
                                  ))}
                              </td>
                              <td className="body2 text-center">{fisica ? <Check /> : '-'}</td>
                              <td className="body2 text-center">{moral ? <Check /> : '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* Mobile */}
                    <div className="d-block d-md-none mx-3">
                      <Accordion title="Persona Física" expanded={false} color="blue" icon="arrow">
                        <ul className={styles['requirement-list']}>
                          {documentosObligado.map(({ documento, info, fisica }) => (
                            <li className="row" key={documento}>
                              <div className="col-2 px-0 text-center my-auto">{fisica ? <Check /> : '-'}</div>
                              <div className="col-10 px-0 body2">
                                {documento}
                                {info &&
                                  (info.type === 'tooltip' ? (
                                    <Tooltip message={info.msg} />
                                  ) : (
                                    <span className={styles['text-info']}>{info.msg}</span>
                                  ))}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </Accordion>
                      <Accordion title="Persona Moral" expanded={false} color="blue" icon="arrow">
                        <ul className={styles['requirement-list']}>
                          {documentosObligado.map(({ documento, info, moral }) => (
                            <li className="row" key={documento}>
                              <div className="col-2 px-0 text-center my-auto">{moral ? <Check /> : '-'}</div>
                              <div className="col-10 px-0 body2">
                                {documento}
                                {info &&
                                  (info.type === 'tooltip' ? (
                                    <Tooltip message={info.msg} />
                                  ) : (
                                    <span className={styles['text-info']}>{info.msg}</span>
                                  ))}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </Accordion>
                    </div>
                  </TabItem>
                </Tab>
              </div>
              <div className="mb-5 col-12 body2">
                <div className={`d-flex mx-auto ${styles['note-storm']} ${styles['w-490']}`}>
                  <img className="d-none d-md-block pr-3" src="/requisitos/security-note.svg" alt="Nota de seguridad" />
                  <div>
                    Tus datos estarán protegidos y nunca almacenaremos tu e.firma.{' '}
                    <a
                      className="sub"
                      href="https://www.youtube.com/channel/UCiLO44Yr96fpdkv-ZN-duqg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ¿Por qué te pedimos esto?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Videos - para tu información */}
        <section className="section-blue-light py-5">
          <Title linea1="Para tu información" />
          <div className="container">
            <div className="row">
              <div className="body2 pb-5 pt-3 mx-auto text-center">
                Consulta nuestros videos para conocer más sobre los requisitos.
              </div>
            </div>
            <div className="row">
              <VideoSelector color="blue-storm" />
            </div>
          </div>
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
                  {accordionItems.map(({ titulo, contenido, enlace }) => (
                    <Accordion key={titulo} color="blue" icon="cross" title={titulo} expanded={false}>
                      {enlace ? (
                        <p>
                          {contenido.split('<<<')[0]}
                          <a target="_blank" rel="noreferrer" href={enlace}>
                            {contenido.split('<<<')[1].replace('>>>', '')}
                          </a>
                        </p>
                      ) : (
                        <p>{contenido}</p>
                      )}
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
                <button
                  type="button"
                  className="btn-link-arrow-right mx-auto"
                  onClick={() => router.push('/ayuda').then(() => window.scrollTo(0, 0))}
                >
                  Contáctate con nosotros
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
                <button
                  type="button"
                  className="btn-link-arrow-right-inverted mx-auto"
                  onClick={() => router.push('/simulador')}
                >
                  Solicita tu crédito
                </button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

Requisitos.propTypes = {
  accordionItems: PropTypes.any.isRequired,
};

export const getStaticProps = async () => {
  const accordionItems = await AccordionRepositorio.getAccordionPorSector('requisitos').then((res) => res.data);

  return {
    props: {
      accordionItems,
    },
  };
};

export default Requisitos;
