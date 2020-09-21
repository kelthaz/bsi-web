import React from 'react';
import { SimpleBanner } from '../../components/simple-banner/SimpleBanner';
import styles from './simulador.module.scss';

export const Simulador = () => (
  <>
    <SimpleBanner className="overflow-hidden">
      <div className="row justify-content-center">
        <div className={`col-auto my-auto ${styles['banner-title']}`}>
          <h1 className={`m-0 ${styles['color-white']} ${styles['h-55']}`}>¡TÚ DISEÑAS</h1>
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
  </>
);

export default Simulador;
