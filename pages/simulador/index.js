import { useState } from 'react';
import SimpleBanner from '../../components/shared/banners/simple-banner/SimpleBanner';
import Select from '../../components/shared/select/Select';
import Slider from '../../components/shared/slider/Slider';
import styles from './simulador.module.scss';

export const Simulador = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [valueSlider, setValueSlider] = useState(6200000);

  const items = ['12 meses', '24 meses', '36 meses'];
  const itemsPaymentTimes = ['Mensuales', 'Bimestrables'];
  const companiesTime = ['Más de 2 años', 'Menos de 2 años'];
  const salesYear = ['Más de $2 MDP', 'Menos de $2 MDP'];

  const [item, setItem] = useState('Seleccione...');
  const [itemsPaymentTime, setItemPayment] = useState('Seleccione...');
  const [companyTime, setItemCompany] = useState('Seleccione...');
  const [saleYear, setItemSale] = useState('Seleccione...');

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
            <div className={`body2 text-center ${styles['color-white']}`}>
              Ten en cuenta que hay algunas zonas del país de donde no podrás solicitar un crédito PyME ni podrá residir
              tu Obligado Solidario.
            </div>
          </div>
        </div>
        <div className="row justify-content-center mx-0 mb-5 mt-4">
          <button type="button" className={`btn-link ${styles['color-white']}`}>
            Conoce las zonas aquí
          </button>
        </div>
      </SimpleBanner>
      <div className={`container col-md-8 ${styles['simulator-info']}`}>
        <span className={styles['chunk-box']}></span>
        <h1 className={styles['title-top']}>¿Cuánto dinero necesitas?</h1>
        <p>
          Necesito
          <strong>{valueSlider}</strong>
        </p>
        <Slider value={valueSlider} setValue={setValueSlider} min={300000} max={12000000} step={100000} />
        <div className="row justify-content-center mx-0 mb-5 mt-4">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
            <h1 className={styles['title-input']}>¿En cuántos meses quieres pagarlo?</h1>
            <div className="d-flex align-items-start ">
              <div className={`col-xs-4 col-md-4 ${styles['input-text']}`}>Quiero pagarlo en</div>
              <div className="col-xs-8 col-md-6">
                <Select item={item} setItem={setItem} items={items} />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
            <h2 className={styles['title-input']}>¿Cómo quieres que sean tus plazos?</h2>
            <div className="d-flex align-items-start ">
              <div className={`col-xs-4 col-md-4  ${styles['input-text']}`}>Quiero plazos</div>
              <div className="col-xs-8 col-md-6">
                <Select item={itemsPaymentTime} setItem={setItemPayment} items={itemsPaymentTimes} />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
            <h2 className={styles['title-input']}>¿Cuál es la antigüedad de tu empresa ?</h2>
            <div className="d-flex align-items-start ">
              <div className={`col-xs-4 col-md-4  ${styles['input-text']}`}>Mi empresa tiene</div>
              <div className="col-xs-8 col-md-6">
                <Select item={companyTime} setItem={setItemCompany} items={companiesTime} />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
            <h2 className={styles['title-input']}>¿Cuánto vendes anualmente?</h2>
            <div className="d-flex align-items-start ">
              <div className={`col-xs-4 col-sm-6 col-md-4 ${styles['input-text']}`}>Al año vendo</div>
              <div className="col-xs-8 col-sm-6 col-md-6 ">
                <Select item={saleYear} setItem={setItemSale} items={salesYear} />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mx-0 mb-5 mt-4">
          <div className="col-xs-6 col-sm-5 col-md-4 col-lg-3 mb-5 mr-1 text-right">
            <button type="button" className={menuOpen ? 'btn-medium-secondary-inverted' : 'btn-medium-secondary'}>
              Retoma tu proceso
            </button>
          </div>
          <div className="col-xs-6 col-sm-5 col-md-4 col-lg-3 mb-5 ">
            <button
              type="button"
              onClick={() => setResulState((resultState) => !resultState)}
              className={menuOpen ? 'btn-medium-yellow' : 'btn-medium'}
            >
              ¡Comencemos!
            </button>
          </div>
        </div>
      </div>
      {resultState && (
        <div className={`container col-sm-8 col-md-8 col-lg-6 ${styles['title-info']}`}>
          <h2>TU CRÉDITO PYME</h2>
          <p>A continuación te presentamos el resultado de tu simulación:</p>
          <div className={`container ${styles['result-info']}`}>
            <div className="row justify-content-center mx-0 mb-5 mt-4">
              <div className="col-xs-6 col-sm-6 col-md-6  col-lg-3">
                <h1 className={styles['title-input']}>$2,000,000.00</h1>
                <div className={styles['input-text']}>Solicitado</div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                <h1 className={styles['title-input']}>25% anual</h1>
                <div className={styles['input-text']}>Tasa orninaria</div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                <h1 className={styles['title-input']}>50%</h1>
                <div className={styles['input-text']}>Tasa monetaria</div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ">
                <h1 className={styles['title-input']}>2%</h1>
                <div className={styles['input-text']}>Comisión por apertura</div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-5">
                <h1 className={styles['title-input']}>{item}</h1>
                <div className={styles['input-text']}>Plazo del crédito</div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-5">
                <h1 className={styles['title-input']}>{itemsPaymentTime}</h1>
                <div className={styles['input-text']}>Esquema de pago</div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-5">
                <h1 className={styles['title-input']}>$ 31,250</h1>
                <div className={styles['input-text']}>Pagos bimestrales</div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-5">
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
          <div className={'container col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <div className={`row p-lg-5 mx-0 mb-5 mt-4 `}>
              <div
                className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-5 ${styles['resume-text']} ${styles['container-flex']}`}
              >
                <div>
                  <p>
                    ¿Ya habías comenzado tu solicitud? <br></br>¡Retómalo aquí!
                  </p>
                  <button className="btn-link-blue-sky " type="button">
                    Retomar proceso
                  </button>
                </div>
                <div className="mt-3">
                  <img alt="" src="/ready-sheet.svg" />
                </div>
              </div>
              <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-5 ${styles['container-flex']}`}>
                <div>
                  <p>
                    ¿Te gusta este esquema de crédito? <br></br>¡Inicia tu solicitud ahora!
                  </p>
                  <button
                    type="button"
                    onClick={() => setResulState((resultState) => !resultState)}
                    className={menuOpen ? 'btn-medium-yellow' : 'btn-medium'}
                  >
                    Solicitar mi crédito
                  </button>
                </div>
                <div className=" col-sm-3 mt-2 mr-6">
                  <img alt="" src="/ready-sheet.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Simulador;
