import { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
import SimpleBanner from '../../components/shared/banners/simple-banner/SimpleBanner';
import styles from './simulador.module.scss';
import Modal from '../../components/shared/modal/Modal';
import mexicanWeightFormatter from '../../helpers/moneyFormatter';
import Simulador from '../../components/core/simulador/Simulador';
import SimuladorRepositorio from '../../services/simulador/simulador.repositorio';
import downloadFile from '../../helpers/downloadFile';
import dateFormatter from '../../helpers/dateFormatter';

export const PageSimulador = ({ catalogo }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalZona, setOpenModalZona] = useState(false);

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
        'Coacalco de Berriozábal',
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

  const {
    showResult,
    dataSimulador: { monto, plazo, periodicidad },
    resultSimulador: { tasaOrdinaria, comisionApertura, cat },
    resultSimuladorTabla,
  } = useSelector((state) => state.simulador);

  const handleDownloadTable = async () => {
    const tablaPdf = await SimuladorRepositorio.postSimuladorTablaPdf({
      monto,
      plazo: plazo.value,
      periodicidad: periodicidad.value,
    }).then((resp) => resp);
    downloadFile(tablaPdf.data, `Tabla_de_Amortización_${dateFormatter(new Date())}`, 'pdf');
  };

  return (
    <div id="inicio">
      <div className="row justify-content-center">
        <Modal openModal={openModalZona} setOpenModal={setOpenModalZona}>
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
                <Fragment key={estado}>
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
                </Fragment>
              ))}
            </tbody>
          </table>
        </Modal>
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <div className="container px-xs-0 px-md-0">
            <div className="row justify-content-center mx-0 ">
              <div className="px-3 col-md-12 col-xs-12">
                <h4 className={`${styles['title-input']}`}>Tu tabla de amortización</h4>

                <div className={` ${styles['text-container']}`}>
                  Nuestros clientes son lo más importante para nosotros, por lo que siempre estarás asesorado y
                  acompañado por nuestro equipo para cualquiera de tus dudas o necesidades. Ya sea por teléfono, correo
                  electrónico o chat siempre estaremos pendientes de ti.
                </div>
              </div>
              <div className={`px-0 col-md-12 col-xs-12 mt-4 ${styles['modal-container']}`}>
                <table>
                  <thead className={`${styles.thead}`}>
                    <tr>
                      <th className={` ${styles.th}`}>Num. Amort.</th>
                      <th className={` ${styles.th}`}>Fecha</th>
                      <th className={` ${styles.th}`}>Capital</th>
                      <th className={` ${styles.th}`}>Intereses</th>
                      <th className={` ${styles.th}`}>Saldo</th>
                      <th className={` ${styles.th}`}>Pago Mensual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultSimuladorTabla.map(({ numeroAmortizacion, fecha, capital, interes, saldo, pagoMensual }) => (
                      <tr key={numeroAmortizacion}>
                        <td className={`body2 ${styles.td}`}>{numeroAmortizacion}</td>
                        <td className={`body2 ${styles.td}`}>{fecha}</td>
                        <td className={`body2 ${styles.td}`}>{capital}</td>
                        <td className={`body2 ${styles.td}`}>{interes}</td>
                        <td className={`body2 ${styles.td}`}>{saldo}</td>
                        <td className={`body2 ${styles.td}`}>{pagoMensual}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-md-1 px-md-0" />
              <div className="col-md-12 mt-3  text-center">
                <button type="button" className="btn-medium" onClick={handleDownloadTable}>
                  Descargar tabla
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <SimpleBanner className="overflow-hidden">
        <div className="row justify-content-center">
          <div className={`col-auto my-auto ${styles[('banner-title', 'title-mb')]}`}>
            <h1 className={`${styles['color-white']} text-center`}>¡SIMULA TU </h1>
            <h1 className={`${styles['color-blue-morning']} text-center`}>CRÉDITO DIGITAL PYME!</h1>
          </div>
        </div>
        <div className="row justify-content-center mx-0">
          <div className="col-md-8 col-xs-10">
            <div className={`sub text-center ${styles['color-white']}`}>
              Elige el monto, plazo y pagos que más se adapte a ti y tu empresa
            </div>
          </div>
        </div>
        <div className="row justify-content-center mx-0 mt-4">
          <div className="col-md-8">
            <div className={`body2 text-center ${styles['color-white']}`}>
              Ten en cuenta que hay algunas zonas del país de donde no podrás solicitar un crédito PyME ni podrá residir
              tu Obligado Solidario.
            </div>
          </div>
        </div>
        <div className="row  justify-content-center mx-0 mb-5 mt-4">
          <button type="button" className="btn-link-arrow-right-inverted" onClick={() => setOpenModalZona(true)}>
            Conoce las zonas aquí
          </button>
        </div>
      </SimpleBanner>

      <section className="section-white-relative">
        <div className={styles['simulador-container']}>
          <Simulador catalogo={catalogo} />
        </div>
      </section>

      {showResult && (
        <div>
          <div className={`container col-sm-8 col-md-6 col-lg-6 px-0  ${styles['title-info']}`}>
            <div className="row justify-content">
              <div className="col-xs-12">
                <h2>TU CRÉDITO PYME</h2>
              </div>
              <div className="col-xs-1" />
              <div className="text-center col-xs-10">
                <p className={`${styles['sub-title']}`}>A continuación te presentamos el resultado de tu simulación:</p>{' '}
              </div>
            </div>
            <div className={`container ${styles['result-info']}`}>
              <div className="row mx-0 mb-4 mt-4">
                <div className="text-left order-md-1  col-xs-6 col-sm-6 col-md-6 col-lg-3">
                  <h1 className={styles['title-input']}>{mexicanWeightFormatter(monto)}</h1>
                  <div className={styles['input-text']}>Monto solicitado</div>
                </div>
                <div className="text-left order-md-2 col-xs-6 col-sm-6 col-md-5 col-lg-3 ">
                  <h1 className={styles['title-input']}>{tasaOrdinaria} anual</h1>
                  <div className={styles['input-text']}>Tasa ordinaria</div>
                </div>

                <div className="text-left order-md-3 col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4 mt-lg-0">
                  <h1 className={styles['title-input']}>{plazo.label}</h1>
                  <div className={styles['input-text']}>Plazo del crédito</div>
                </div>

                <div className="text-left order-md-4  order-5 col-xs-6 col-sm-6 col-md-3 col-lg-3 mt-xs-4 mt-md-4 mt-lg-0">
                  <h1 className={styles['title-input']}>{cat}</h1>
                  <div className={styles['input-text']}>CAT</div>
                </div>
                <div className="text-left order-md-5 col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4">
                  <h1 className={styles['title-input']}>{comisionApertura}</h1>
                  <div className={styles['input-text']}>Comisión por apertura</div>
                </div>

                <div className="text-left order-xs-4 order-md-5 col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4">
                  <h1 className={styles['title-input']}>{periodicidad.label}</h1>
                  <div className={styles['input-text']}>Esquema de pago</div>
                </div>
                <div className="text-left order-md-7 col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4">
                  <h1 className={styles['title-input']}>$ 31,25</h1>
                  <div className={styles['input-text']}>{periodicidad.label}</div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mx-0  mt-4">
              <button className="btn-link-arrow-right " type="button" onClick={() => setOpenModal(true)}>
                Mira tu tabla de amortización
              </button>
            </div>
          </div>
          <div className="container col-xs-11 col-sm-11 col-md-9 col-lg-8">
            <div className="row mx-0 mb-5 mt-2">
              <div
                className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 pr-md-4 pr-lg-0 mt-4 px-0 ${styles['resume-text']}`}
              >
                <div className="px-md-0 px-xs-3 px-lg-5">
                  <div className="row mb-sm-4">
                    <p className="col-md-8 col-lg-9 col-sm-9 col-xs-8 px-0">
                      ¿Ya habías comenzado tu solicitud? ¡Retómala aquí!
                    </p>
                    <div className="col-md-4 col-lg-3 col-sm-3 col-xs-4 text-right">
                      <img alt="" src="/Sesion.png" />
                    </div>
                    <div className="col-md-12 mt-md-1 mb-xs-4 px-0">
                      <button className="btn-link-arrow-right" type="button">
                        Retoma tu proceso
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-md-4 px-0">
                <div className="px-md-4">
                  <div className="row mt-sm-4 mt-md-0 mt-xs-4 mb-xs-4">
                    <p className="col-md-9 col-sm-9 col-xs-8 col-lg-8">
                      ¿Te gusta este esquema
                      <span className="d-none d-md-inline">de crédito?</span>
                      <span className={`d-block ${styles['start-request-button']}`}>¡Inicia tu solicitud ahora!</span>
                    </p>
                    <div className="col-md-3 col-sm-3 col-xs-4 col-lg-2 pr-xs-5 pr-sm-0 pr-md-0 text-md-right">
                      <img className={styles['img-solicitud']} alt="" src="/Solicitud.svg" />
                    </div>
                  </div>
                  <div className="col-md-10 col-sm-9 col-xs-8 offset-xs-2 offset-md-0 col-lg-8">
                    <div className="row">
                      <Link href="/solicitud/[tab]/[step]" as="/solicitud/datos-personales/bienvenida">
                        <button type="button" className={`col-md-12 ${styles['solicitud-button']} btn-medium`}>
                          <span className="d-none d-md-block">Comienza tu solicitud</span>
                          <span className="d-sm-block d-md-none">Comienza tu solicitud</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`row justify-content-center mb-md-4 ${styles['slogan-solicitud']}`}>
              <div className="d-flex justify-content-center col-xs-12 col-sm-8 col-md-6 col-lg-6 mb-md-5 mb-xs-5">
                <h1 className={`${styles['last-title']}`}>
                  ¡Ya queremos saber qué grandes planes tienes para tu negocio!
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

PageSimulador.propTypes = {
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

export default PageSimulador;
