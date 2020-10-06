import { useState, useEffect, Fragment } from 'react';
import SimpleBanner from '../../components/shared/banners/simple-banner/SimpleBanner';
import Select from '../../components/shared/select/Select';
import Slider from '../../components/shared/slider/Slider';
import styles from './simulador.module.scss';
import Modal from '../../components/shared/modal/Modal';
import mexicanWeightFormatter from '../../helpers/moneyFormatter';

export const Simulador = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalZona, setOpenModalZona] = useState(false);
  const [valueSlider, setValueSlider] = useState(2000000);
  const [minValue, setMinValue] = useState(0);
  const [descriptionValue, setDescriptionValue] = useState('');
  const items = ['12 meses', '18 meses', '24 meses', '30 meses', '36 meses'];
  const itemsPaymentTimes = ['Mensuales', 'Bimestrales'];
  const companiesTime = ['Más de 2 años', 'Menos de 2 años'];
  const salesYear = ['Más de $2 MDP', 'Menos de $2 MDP'];

  const [item, setItem] = useState('Seleccione...');
  const [itemsPaymentTime, setItemPayment] = useState('Seleccione...');
  const [itemsPaymentTimeResult, setItemPaymentResult] = useState('');
  const [companyTime, setItemCompany] = useState('Seleccione...');
  const [saleYear, setItemSale] = useState('Más de $2 MDP');

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

  const [resultState, setResulState] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (item === 'Seleccione...' || itemsPaymentTime === 'Seleccione...' || companyTime === 'Seleccione...') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });

  return (
    <div>
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
                    <tr>
                      <td className={`body2 ${styles.td}`}>Disposición</td>
                      <td className={`body2 ${styles.td}`}>22/Feb/2020</td>
                      <td className={`body2 ${styles.td}`}>-</td>
                      <td className={`body2 ${styles.td}`}>-</td>
                      <td className={`body2 ${styles.td}`}>11,791,126.63</td>
                      <td className={`body2 ${styles.td}`}>493,272.54</td>
                    </tr>
                    <tr>
                      <td className={`${styles.td}`}>1</td>
                      <td className={`${styles.td}`}>22/Mar/2020</td>
                      <td className={`${styles.td}`}>208,873.37</td>
                      <td className={`${styles.td}`}>208,873.37</td>
                      <td className={`${styles.td}`}>11,791,126.63</td>
                      <td className={`${styles.td}`}>493,272.54</td>
                    </tr>
                    <tr>
                      <td className={`${styles.td}`}>2</td>
                      <td className={`${styles.td}`}>22/Abr/2020</td>
                      <td className={`${styles.td}`}>208,873.37</td>
                      <td className={`${styles.td}`}>208,873.37</td>
                      <td className={`${styles.td}`}>11,791,126.63</td>
                      <td className={`${styles.td}`}>493,272.54</td>
                    </tr>
                    <tr>
                      <td className={`${styles.td}`}>3</td>
                      <td className={`${styles.td}`}>22/May/2020</td>
                      <td className={`${styles.td}`}>208,873.37</td>
                      <td className={`${styles.td}`}>208,873.37</td>
                      <td className={`${styles.td}`}>11,791,126.63</td>
                      <td className={`${styles.td}`}>493,272.54</td>
                    </tr>
                    <tr>
                      <td className={`${styles.td}`}>4</td>
                      <td className={`${styles.td}`}>22/Jun/2020</td>
                      <td className={`${styles.td}`}>208,873.37</td>
                      <td className={`${styles.td}`}>208,873.37</td>
                      <td className={`${styles.td}`}>11,791,126.63</td>
                      <td className={`${styles.td}`}>493,272.54</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-1 px-md-0" />
              <div className="col-md-12 mt-3  text-center">
                <button type="button" className={` ${menuOpen ? 'btn-medium-yellow' : 'btn-medium'}`}>
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
            <h1 className={styles['color-white']}>¡TÚ DISEÑAS</h1>
            <h1 className={styles['color-blue-morning']}>TU CRÉDITO!</h1>
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
          <button type="button" className={` btn-link ${styles['color-white']}`} onClick={() => setOpenModalZona(true)}>
            Conoce las zonas aquí
          </button>
        </div>
      </SimpleBanner>
      <div className={`container col-xs-11 col-md-8 px-xs-0 px-md-5 ${styles['simulator-info']}`}>
        <span className={styles['chunk-box']}></span>
        <span className={`d-block d-sm-none  ${styles['mobile-box-simulator']}`}></span>
        <div className={styles['simulator-content']}>
          <h1 className={` ${styles['title-top']}`}>¿Cuánto dinero necesitas?</h1>
          {itemsPaymentTimeResult}
          <div className="row mx-md-0 mb-5 mt-2">
            <div className="justify-content-center col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-2">
              <div className="d-flex justify-content-center ">
                <div className={` col-xs-6 col-sm-6 col-md-6 col-lg-12 ${styles['value-side']}`}>
                  <div className="row justify-content-center ">
                    <div className={`d-none d-sm-block mr-md-4  ${styles['title-value-simulator']} `}>Necesito </div>
                    <p>{mexicanWeightFormatter(valueSlider)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 px-xs-4 p-md-0 py-xs-0">
              <Slider value={valueSlider} setValue={setValueSlider} min={minValue} max={12000000} step={100000} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 pr-0">
              <h1 className={`text-xs-center text-md-left  ${styles['title-input']}`}>
                ¿En cuántos meses quieres pagarlo?
              </h1>

              <div className="d-flex align-items-start ">
                <div className={`col-xs-4 col-md-4 p-md-0	d-none d-md-block ${styles['input-text']}`}>
                  Quiero pagarlo en
                </div>
                <div className="col-xs-12 col-md-7 p-md-0">
                  <Select item={item} setItem={setItem} items={items} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 ">
              <h2 className={`text-xs-center text-md-left ${styles['title-input']}`}>
                ¿Cómo quieres que sean tus plazos?
              </h2>
              <div className="d-flex align-items-start ">
                <div className={`col-xs-4 col-md-4 p-md-0 d-none d-md-block  ${styles['input-text']}`}>
                  Quiero plazos
                </div>
                <div className="col-xs-12 col-md-7 p-md-0">
                  <Select item={itemsPaymentTime} setItem={setItemPayment} items={itemsPaymentTimes} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 pr-0 ">
              <h2 className={`text-xs-center text-md-left  ${styles['title-input']}`}>
                ¿Cuál es la antigüedad de tu empresa ?
              </h2>
              <div className="d-flex align-items-start ">
                <div className={`col-xs-4 col-md-4 p-md-0 d-none d-md-block ${styles['input-text']}`}>
                  Mi empresa tiene
                </div>
                <div className="col-xs-12 col-md-7 p-md-0">
                  <Select item={companyTime} setItem={setItemCompany} items={companiesTime} />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4 ">
              <h2 className={`text-xs-center  text-md-left ${styles['title-input']}`}>¿Cuánto vendes anualmente?</h2>
              <div className="d-flex align-items-start ">
                <div className={`col-xs-4 col-sm-6 col-md-4 p-md-0 d-none d-md-block ${styles['input-text']}`}>
                  Al año vendo
                </div>
                <div className="col-xs-12 col-sm-6 col-md-7 p-md-0">
                  <Select item={saleYear} setItem={setItemSale} items={salesYear} />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mb-5 mt-4 ">
            <div className="order-xs-2 text-xs-center  order-md-1 mr-md-5 mr-lg-0 col-xs-12 col-sm-5 col-md-4 col-lg-3 mb-5 mr-xs-0 ">
              <button
                type="button"
                className={` ${menuOpen ? 'btn-medium-secondary-inverted' : 'btn-medium-secondary'}`}
              >
                Retoma tu proceso
              </button>
            </div>
            <div className="order-xs-1 text-xs-center order-md-2 col-xs-12 col-sm-5 col-md-4 col-lg-3 mb-3 ">
              <button
                type="button"
                onClick={() => setResulState((resultState) => !resultState)}
                disabled={disabled}
                className={` ${menuOpen ? 'btn-medium-yellow' : 'btn-medium'}`}
              >
                Simula tu crédito
              </button>
            </div>
          </div>
        </div>
      </div>
      {resultState && (
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
                  <h1 className={styles['title-input']}>{descriptionValue}</h1>
                  <div className={styles['input-text']}>Solicitado</div>
                </div>
                <div className="text-left order-md-2 col-xs-6 col-sm-6 col-md-5 col-lg-3 ">
                  <h1 className={styles['title-input']}>25% anual</h1>
                  <div className={styles['input-text']}>Tasa ordinaria</div>
                </div>
                {/* <div className="text-left col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-3 mt-md-0">
                  <h1 className={styles['title-input']}>50%</h1>
                  <div className={styles['input-text']}>Tasa moratoria</div>
                </div> */}

                <div className="text-left order-md-3 col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4 mt-lg-0">
                  <h1 className={styles['title-input']}>{item}</h1>
                  <div className={styles['input-text']}>Plazo del crédito</div>
                </div>
                <div className="text-left order-md-4  order-5 col-xs-6 col-sm-6 col-md-3 col-lg-3 mt-xs-4 mt-md-4 mt-lg-0">
                  <h1 className={styles['title-input']}>29.10%</h1>
                  <div className={styles['input-text']}>CAT</div>
                </div>
                <div className="text-left order-md-5 col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4">
                  <h1 className={styles['title-input']}>2%</h1>
                  <div className={styles['input-text']}>Comisión por apertura</div>
                </div>
                <div className="text-left order-xs-4 order-md-5 col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4">
                  <h1 className={styles['title-input']}>
                    {itemsPaymentTime === 'Bimestrales' ? 'Bimestral' : itemsPaymentTime}
                  </h1>
                  <div className={styles['input-text']}>Esquema de pago</div>
                </div>
                <div className="text-left order-md-7 col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4">
                  <h1 className={styles['title-input']}>$ 31,25</h1>
                  <div className={styles['input-text']}>
                    Pagos {itemsPaymentTime === 'Bimestrales' ? 'bimestrales' : itemsPaymentTime}
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mx-0  mt-4">
              <button className="btn-link-blue-sky " type="button" onClick={() => setOpenModal(true)}>
                Mira tu tabla de amortización
              </button>
            </div>
          </div>
          <div className="container col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row  mx-0 mb-5 mt-2 ">
              <div
                className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-4 px-0 ${styles['resume-text']} ${styles['container-flex']}`}
              >
                <div className="col-md-1 col-lg-4 d-none d-md-block" />
                <div className="col-md-6 col-xs-9 pr-md-0 px-xs-1">
                  <p className="col-md-12 col-lg-10 col-xs-12  px-md-0 px-xs-0 mx-md-4 ml-md-4 ">
                    ¿Ya habías comenzado tu solicitud? <br></br> ¡Retómala aquí!
                  </p>
                  <button
                    className="col-xs-9 col-md-12 col-lg-7 btn-link-blue-sky mx-md-4 pl-xs-0 px-md-1  mr-md-4 mb-xs-5"
                    type="button"
                  >
                    Retoma tu proceso
                  </button>
                </div>
                <div className="col-md-2 mt-md-1 px-0">
                  <img alt="" src="/Sesion.png" />
                </div>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-md-4 px-0 ${styles['container-flex']}`}>
                <div className="col-md-6 col-xs-9 px-xs-0">
                  <p className="d-none d-md-block mx-md-3 pr-md-0  mb-md-0 col-md-12 col-lg-12  ml-4">
                    ¿Te gusta este esquema de crédito? <br></br> ¡Inicia tu solicitud ahora!
                  </p>
                  <p className="d-block d-sm-none px-0 ml-md-0 mb-md-0 mt-xs-4 col-md-12 ml-2">
                    ¿Te gusta este esquema ? <br></br> ¡Inicia tu solicitud ahora!
                  </p>
                  <button
                    type="button"
                    className={`d-none d-md-block ml-md-4 col-md-12 col-lg-6 mt-3 ${
                      menuOpen ? 'btn-medium-yellow' : 'btn-medium'
                    }`}
                  >
                    Comienza tu solicitud
                  </button>
                  <button
                    type="button"
                    onClick={() => setResulState((resultState) => !resultState)}
                    className={`d-block d-sm-none col-xs-8 col-md-8 mt-3 ml-xs-5 mt-xs-4 ${
                      menuOpen ? 'btn-medium-yellow' : 'btn-medium'
                    }`}
                  >
                    Solicitar mi crédito
                  </button>
                </div>
                <div className="col-md-6 col-sm-3 mt-md-0 mt-xs-4 px-0">
                  <img alt="" src="/Solicitud.svg" />
                </div>
              </div>
            </div>
            <div className="row justify-content-center mb-md-4 ">
              <div className="d-flex justify-content-center col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-md-5 mb-xs-5">
                <h1 className={`${styles['last-title']}`}>
                  ¡Ya queremos saber qué grandes
                  <br></br>
                  &nbsp;planes tienes para tu negocio!
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Simulador;
