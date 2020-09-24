import { useState } from 'react';
import SimpleBanner from '../../components/shared/banners/simple-banner/SimpleBanner';
import Select from '../../components/shared/select/Select';
import Slider from '../../components/shared/slider/Slider';
import styles from './simulador.module.scss';

export const Simulador = () => {
  const items = ['24 meses', '25 meses'];
  const [menuOpen, setMenuOpen] = useState(false);
  const [valueSlider, setValueSlider] = useState(6200000);
  const [item, setItem] = useState('Seleccione...');
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
      <div className={`container ${styles['simulator-info']}`}>
        <span className={styles['chunk-box']}></span>
        <h1 className={styles['title-top']}>¿Cuánto dinero necesitas?</h1>
        <p>
          Necesito
          <strong>{valueSlider}</strong>
        </p>
        <Slider value={valueSlider} setValue={setValueSlider} min={300000} max={12000000} step={100000} />
        <div className="row justify-content-center mx-0 mb-5 mt-4">
          <div className="col-sm-5">
            <h1 className={styles['title-input']}>¿En cuántos meses quieres pagarlo?</h1>
            <div className="flex-row-start-config">
              <div className={`${styles['input-text']}`}>Quiero pagarlo en</div>
              <Select item={item} setItem={setItem} items={items} />
            </div>
          </div>
          <div className="col-sm-5">
            <h2 className={styles['title-input']}>¿Cómo quieres que sean tus plazos?</h2>
            <div className={styles['input-text']}>Quiero plazos</div>
          </div>
          <div className="col-sm-5">
            <h2 className={styles['title-input']}>¿Cuál es la antigüedad de tu empresa ?</h2>
            <div className={styles['input-text']}>Mi empresa tiene</div>
          </div>
          <div className="col-sm-5">
            <h2 className={styles['title-input']}>¿Cuánto vendes anualmente?</h2>
            <div className={styles['input-text']}>Al año vendo</div>
          </div>
        </div>
        <div className="row justify-content-center mx-0 mb-5 mt-4">
          <div className="col-xs-6 mb-5 text-right">
            <button type="button" className={menuOpen ? 'btn-medium-secondary-inverted' : 'btn-medium-secondary'}>
              Retoma tu proceso
            </button>
          </div>
          <div className="col-xs-6 mb-5 ">
            <button type="button" className={menuOpen ? 'btn-medium-yellow' : 'btn-medium'}>
              ¡Comencemos!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulador;
