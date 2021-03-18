import { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import SimpleBanner from '../../../shared/banners/simple-banner/SimpleBanner';
import styles from './simulador.module.scss';
import Modal from '../../../shared/modal/Modal';
import SelectorSimulador from '../../../core/simulador/SelectorSimulador';
import SimuladorRepositorio from '../../../../services/simulador/simulador.repositorio';
import downloadFile from '../../../../helpers/downloadFile';
import dateFormatter from '../../../../helpers/dateFormatter';
import ResultSimulador from '../../../core/simulador/ResultSimulador';
import SvgLoginCheck from '../../../svgs/icons-cards/SvgLoginCheck';
import SvgDocumentoCheck from '../../../svgs/icons-cards/SvgDocumentoCheck';
import { nextStepDatosPersonales } from '../../../../redux/actions/solicitud';
import { BIENVENIDA_DATOS_PERSONA_ROUTE } from '../../../../constants/routes/solicitud/persona';
import { INICIAR_SESION } from '../../../../constants/routes/login/login';

const Simulador = ({ catalogo }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalZona, setOpenModalZona] = useState(false);
  const dispatch = useDispatch();
  const { push } = useRouter();

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

  const { showResult, dataSimulador, resultSimulador, resultSimuladorTabla } = useSelector((state) => state.simulador);

  const { monto, plazo, periodicidad } = dataSimulador;

  const handleDownloadTable = async () => {
    const tablaPdf = await SimuladorRepositorio.postSimuladorTablaPdf({
      monto,
      plazo: plazo.value,
      periodicidad: periodicidad.value,
    }).then((resp) => resp);
    downloadFile(tablaPdf.data, `Tabla_de_Amortización_${dateFormatter(new Date())}`, 'pdf');
  };

  const handleComienzaSolicitud = async () => {
    dispatch(
      nextStepDatosPersonales({
        sincronizado: true,
      })
    );
    await push(BIENVENIDA_DATOS_PERSONA_ROUTE);
  };

  return (
    <div id="inicio">
      <div className="row justify-content-center">
        <Modal openModal={openModalZona} setOpenModal={setOpenModalZona}>
          <h4 className="color-blue-storm">Zonas Crédito Digital Pymes disponibles</h4>
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
                      <th className={` ${styles.th}`}>Pago</th>
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
            <h1 className={`${styles['color-blue-morning']} text-center`}>CRÉDITO DIGITAL PYMES!</h1>
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
              Ten en cuenta que hay algunas zonas del país de donde no podrás solicitar un Crédito Digital Pymes ni
              podrá residir tu Obligado Solidario.
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
          <SelectorSimulador catalogo={catalogo} />
        </div>
      </section>
      <div id="result-simulador">
        {showResult && (
          <>
            <div className="container">
              <div className="row justify-content">
                <div className="col-xs-12">
                  <h2 className="text-center color-blue-storm">
                    TU CRÉDITO <br /> DIGITAL PYME
                  </h2>
                </div>
                <div className="col-xs-1" />
                <div className="text-center col-xs-10">
                  <p className={`${styles['sub-title']}`}>
                    A continuación te presentamos el resultado de tu simulación:
                  </p>
                </div>
              </div>
              <div className="px-lg-5">
                <div className="card-simple-border-blue-storm">
                  <ResultSimulador dataSimulador={dataSimulador} resultSimulador={resultSimulador} />
                </div>
              </div>

              <div className="row justify-content-center mx-0  mt-4">
                <button className="btn-link-arrow-right " type="button" onClick={() => setOpenModal(true)}>
                  Mira tu tabla de amortización
                </button>
              </div>
              <div className="row p-lg-4 py-md-5 px-md-0 p-sm-4 no-gutters">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 my-2 py-xs-4 line-card">
                  <div className="card-transparent-only-row ">
                    <div className="flex-row-center-config">
                      <p className="body2 gray-dark">¿Ya habías comenzado tu solicitud? ¡Retómala aquí!</p>
                      <div className="container-svg-left-card">
                        <SvgLoginCheck />
                      </div>
                    </div>

                    <Link href={INICIAR_SESION}>
                      <button className="btn-link-arrow-right" type="button">
                        Retoma tu proceso
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 py-xs-4 my-2">
                  <div className="card-transparent-only-row">
                    <div className="flex-row-center-config">
                      <p className="body2 gray-dark">¿Te gusta éste esquema de crédito? ¡Inicia tu solicitud ahora!</p>
                      <div className="container-svg-left-card">
                        <SvgDocumentoCheck />
                      </div>
                    </div>
                    <div className="w-100 d-flex justify-content-md-start justify-content-xs-center">
                      <button className="btn-big" type="button" onClick={handleComienzaSolicitud}>
                        Comienza tu solicitud
                      </button>
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
          </>
        )}
      </div>
    </div>
  );
};

Simulador.propTypes = {
  catalogo: PropTypes.any.isRequired,
};

// export const getStaticProps = async () => {
//   const catalogo = await SimuladorRepositorio.getSimuladorCatalogo().then((res) => res.data);

//   return {
//     props: {
//       catalogo,
//     },
//   };
// };

export default Simulador;
