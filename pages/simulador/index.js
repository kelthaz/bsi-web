import { useState } from 'react';
import SimpleBanner from '../../components/shared/banners/simple-banner/SimpleBanner';
import Select from '../../components/shared/select/Select';
import Slider from '../../components/shared/slider/Slider';
import styles from './simulador.module.scss';

export const Simulador = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [valueSlider, setValueSlider] = useState(6200000);

  const items = ['12 meses', '18 meses', '24 meses', '30 meses', '36 meses'];
  const itemsPaymentTimes = ['Mensuales', 'Bimestrales'];
  const companiesTime = ['Más de 2 años', 'Menos de 2 años'];
  const salesYear = ['Más de $2 MDP', 'Menos de $2 MDP'];

  const [item, setItem] = useState('Seleccione...');
  const [itemsPaymentTime, setItemPayment] = useState('Seleccione...');
  const [itemsPaymentTimeResult, setItemPaymentResult] = useState('');
  const [companyTime, setItemCompany] = useState('Seleccione...');
  const [saleYear, setItemSale] = useState('Más de $2 MDP');

  const [resultState, setResulState] = useState(false);
  return (
    <div>
      <SimpleBanner className="overflow-hidden">
        <div className="row justify-content-center">
          <div className={`col-auto my-auto ${styles['banner-title']}`}>
            <h1 className={styles['color-white']}>¡TÚ DISEÑAS</h1>
            <h1 className={styles['color-blue-morning']}>TU CRÉDITO!</h1>
          </div>
        </div>
        <div className="row justify-content-center mx-0">
          <div className="col-md-6">
            <div className={`body1 text-center ${styles['color-white']}`}>
              Elige el monto, plazo y pagos que más se adapte a ti y tu empresa
            </div>
          </div>
        </div>
        <div className="row justify-content-center mx-0 mt-4">
          <div className="col-md-7">
            <div className={`d-none d-sm-block body2 text-center ${styles['color-white']}`}>
              Ten en cuenta que hay algunas zonas del país de donde no podrás solicitar un crédito PyME ni podrá residir
              tu Obligado Solidario.
            </div>
          </div>
        </div>
        <div className="row  justify-content-center mx-0 mb-5 mt-4">
          <button type="button" className={`d-none d-sm-block btn-link ${styles['color-white']}`}>
            Conoce las zonas aquí
          </button>
        </div>
      </SimpleBanner>
      <div className={`container col-xs-11 col-md-8 px-xs-0 px-md-5 ${styles['simulator-info']}`}>
        <span className={styles['chunk-box']}></span>
        <h1 className={` ${styles['title-top']}`}>¿Cuánto dinero necesitas?</h1>
        {itemsPaymentTimeResult}
        <div className="row mx-md-0 mb-5 mt-2">
          <div className="justify-content-center col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-2">
            <div className="d-flex justify-content-center ">
              <div className={` col-xs-6 col-sm-6 col-md-6 col-lg-12 ${styles['value-side']}`}>
                <div className="row justify-content-center ">
                  <div className={`d-none d-sm-block col-lg-2 ${styles['title-value-simulator']} `}>Necesito </div>
                  <p> ${valueSlider}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Slider value={valueSlider} setValue={setValueSlider} min={300000} max={12000000} step={100000} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
            <h1 className={`d-none d-md-block ${styles['title-input']}`}>¿En cuántos meses quieres pagarlo?</h1>

            <div className="d-flex align-items-start ">
              <div className={`col-xs-4 col-md-5 	d-none d-md-block  ${styles['input-text']}`}>Quiero pagarlo en</div>
              <div className="col-xs-12 col-md-7 ">
                <h1 className={`d-block col-xs-12 d-sm-none text-center ${styles['title-input']}`}>
                  ¿En qué periodo quieres pagarlo?
                </h1>
                <Select item={item} setItem={setItem} items={items} />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
            <h2 className={`d-none d-md-block ${styles['title-input']}`}>¿Cómo quieres que sean tus plazos?</h2>
            <div className="d-flex align-items-start ">
              <div className={`col-xs-4 col-md-5 d-none d-md-block ${styles['input-text']}`}>Quiero plazos</div>
              <div className="col-xs-12 col-md-7">
                <h2 className={`d-block d-sm-none text-center ${styles['title-input']}`}>
                  ¿Qué tipo de plazos quieres?
                </h2>
                <Select item={itemsPaymentTime} setItem={setItemPayment} items={itemsPaymentTimes} />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
            <h2 className={`d-none d-md-block  ${styles['title-input']}`}>¿Cuál es la antigüedad de tu empresa ?</h2>
            <div className="d-flex align-items-start ">
              <div className={`col-xs-4 col-md-5 d-none d-md-block ${styles['input-text']}`}>Mi empresa tiene</div>
              <div className="col-xs-12 col-md-7">
                <h2 className={`d-block d-sm-none text-center ${styles['title-input']}`}>
                  ¿Cuántos años tiene tu empresa?
                </h2>
                <Select item={companyTime} setItem={setItemCompany} items={companiesTime} />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
            <h2 className={` d-none d-md-block ${styles['title-input']}`}>¿Cuánto vendes anualmente?</h2>
            <div className="d-flex align-items-start ">
              <div className={`col-xs-4 col-sm-6 col-md-5 d-none d-md-block ${styles['input-text']}`}>Al año vendo</div>
              <div className="col-xs-12 col-sm-6 col-md-7 ">
                <h2 className={`d-block d-sm-none text-center text-xs-center ${styles['title-input']}`}>
                  ¿Cuánto vendes anualmente?
                </h2>
                <Select item={saleYear} setItem={setItemSale} items={salesYear} />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5 mt-4">
          <div className="order-xs-2 order-md-1  col-xs-6 col-sm-5 col-md-4 col-lg-3 mb-5 mr-1 text-right">
            <button type="button" className={`${menuOpen ? 'btn-medium-secondary-inverted' : 'btn-medium-secondary'}`}>
              Retoma tu proceso
            </button>
          </div>
          <div className="order-xs-1 order-md-2 col-xs-6 col-sm-5 col-md-4 col-lg-3 mb-3 ">
            <button
              type="button"
              onClick={() => setResulState(resultState => !resultState)}
              className={`col-xs-12 ${menuOpen ? 'btn-medium-yellow' : 'btn-medium'}`}
            >
              Simula tu crédito
            </button>
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
            <div className={`container px-0   ${styles['result-info']}`}>
              <div className="row mx-0 mb-4 mt-4">
                <div className="text-left col-xs-6 col-sm-6 col-md-9  col-lg-3">
                  <h1 className={styles['title-input']}>${valueSlider}</h1>
                  <div className={styles['input-text']}>Solicitado</div>
                </div>
                <div className="text-left col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                  <h1 className={styles['title-input']}>25% anual</h1>
                  <div className={styles['input-text']}>Tasa ordinaria</div>
                </div>
                <div className="text-left col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-3 mt-md-0">
                  <h1 className={styles['title-input']}>50%</h1>
                  <div className={styles['input-text']}>Tasa moratoria</div>
                </div>
                <div className="text-left col-xs-6 col-sm-6 col-md-4 col-lg-3 mt-xs-3 mt-md-0">
                  <h1 className={styles['title-input']}>2%</h1>
                  <div className={styles['input-text']}>Comisión por apertura</div>
                </div>
                <div className="text-left col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4">
                  <h1 className={styles['title-input']}>{item}</h1>
                  <div className={styles['input-text']}>Plazo del crédito</div>
                </div>
                <div className="text-left col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4">
                  <h1 className={styles['title-input']}>
                    {itemsPaymentTime === 'Bimestrales' ? 'Bimestral' : itemsPaymentTime}
                  </h1>
                  <div className={styles['input-text']}>Esquema de pago</div>
                </div>
                <div className="text-left col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4">
                  <h1 className={styles['title-input']}>$ 31,250</h1>
                  <div className={styles['input-text']}>Pagos bimestrales</div>
                </div>
                <div className="text-left col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-xs-4 mt-md-4">
                  <h1 className={styles['title-input']}>29.1%</h1>
                  <div className={styles['input-text']}>CAT</div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mx-0  mt-4">
              <button className="btn-link-blue-sky " type="button">
                Mira tu tabla de amortización
              </button>
            </div>
          </div>
          <div className={'container col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <div className={`row  mx-0 mb-5 mt-2 `}>
              <div
                className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-4 px-0 ${styles['resume-text']} ${styles['container-flex']}`}
              >
                <div className="col-md-4 d-none d-md-block" />
                <div className="col-md-6 col-xs-9 pr-md-0 px-xs-1">
                  <p className="col-md-10 col-xs-12  px-md-0 px-xs-0 mx-md-4 ml-md-4">
                    ¿Ya habías comenzado tu solicitud? ¡Retómalo aquí!
                  </p>
                  <button
                    className="col-xs-9 col-md-7 btn-link-blue-sky mx-md-4 pl-xs-0 px-md-1  mr-md-4 mb-xs-5"
                    type="button"
                  >
                    Retomar proceso
                  </button>
                </div>
                <div className="col-md-2 mt-md-1 px-0">
                  <img alt="" src="/Sesion.png" />
                </div>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-md-4 px-0 ${styles['container-flex']}`}>
                <div className="col-md-6 col-xs-9 px-xs-0">
                  <p className="d-none d-md-block mx-md-3  mb-md-0 col-md-12 ml-4">
                    ¿Te gusta este esquema de crédito? <br></br> ¡Inicia tu solicitud ahora!
                  </p>
                  <p className="d-block d-sm-none px-0 ml-md-0 mb-md-0 mt-xs-4 col-md-12 ml-2">
                    ¿Te gusta este esquema ? <br></br> ¡Inicia tu solicitud ahora!
                  </p>
                  <button
                    type="button"
                    onClick={() => setResulState(resultState => !resultState)}
                    className={`d-none d-md-block ml-md-4 col-md-6 mt-3 ${
                      menuOpen ? 'btn-medium-yellow' : 'btn-medium'
                    }`}
                  >
                    Comienza tu solicitud
                  </button>
                  <button
                    type="button"
                    onClick={() => setResulState(resultState => !resultState)}
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
            <div className={`row justify-content-center mb-md-4 `}>
              <div className="d-flex justify-content-center col-xs-12 col-sm-12 col-md-3 mb-md-5 mb-xs-5">
                <h1 className={`${styles['last-title']}`}>
                  ¡Ya queremos saber qué grandes <br></br> &nbsp;planes tienes para tu negocio!
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
