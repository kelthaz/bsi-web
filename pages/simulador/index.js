import React from 'react';
import { SimpleBanner } from '../../components/simple-banner/SimpleBanner';
import styles from './simulador.module.scss';

export const Simulador = () => (
  <>
    <SimpleBanner style={{ overflow: 'hidden' }}>
      <div className="row justify-content-center">
        <div className="col-auto my-auto">
          <h1 style={{ paddingTop: '100px', color: '#FFF' }}>¡TU DISEÑAS</h1>
          <h1 style={{ paddingBottom: '40px', color: '#81C1EA' }}>TU CRÉDITO!</h1>
        </div>
      </div>
      <div className="row justify-content-center mx-0">
        <div className="col-md-6">
          <div style={{ color: '#FFF', textAlign: 'center' }} className={`body1 ${styles.bt1}`}>
            Elige el monto, plazo y pagos que más se adapte a ti y tu empresa
          </div>
        </div>
      </div>
      <div className="row justify-content-center mx-0 mt-4">
        <div className="col-md-7">
          <div style={{ color: '#FFF', textAlign: 'center' }} className={`body2 ${styles.bt1}`}>
            Ten en cuenta que hay algunas zonas del país de donde no podrás solicitar un crédito PyME ni podrá residir
            tu Obligado Solidario.
          </div>
        </div>
      </div>
      <div className="row justify-content-center mx-0 mb-5 mt-4">
        <button type="button" className="btn-link" style={{ color: '#FFF' }}>
          Conoce las zonas aquí
        </button>
      </div>
    </SimpleBanner>
  </>
);

export default Simulador;
