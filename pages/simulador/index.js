import React from 'react';
import { SimpleBanner } from '../../components/simple-banner/SimpleBanner';
import styles from './simulador.module.scss';
import { useState } from 'react';


export const Simulador = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
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
      <div className={`container ${styles['simulator-info']}`}>

        <span className={styles['chunk-box']}></span>
        <h1 className={styles['title-top']}>
          ¿Cuánto dinero necesitas?
        </h1>
        <div className="row justify-content-center mx-0 mb-5 mt-4">
          <div className="col-sm-5">
            <h1 className={styles['title-input']}>
              ¿En cuántos meses quieres pagarlo?
              </h1>
            <div className={styles['input-text']}>
              Quiero pagarlo en
              </div>
          </div>
          <div className="col-sm-5">
            <h2 className={styles['title-input']}>
              ¿Cómo quieres que sean tus plazos?
              </h2>
            <div className={styles['input-text']}>
              Quiero plazos
              </div>
          </div>
          <div className="col-sm-5">
            <h2 className={styles['title-input']}>
              ¿Cuál es la antigüedad de tu empresa ?
              </h2>
            <div className={styles['input-text']}>
              Mi empresa tiene
              </div>
          </div>
          <div className="col-sm-5">
            <h2 className={styles['title-input']}>
              ¿Cuánto vendes anualmente?
            </h2>
            <div className={styles['input-text']}>
              Al año vendo
              </div>
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
      </div >
    </div >
  )
};

export default Simulador;
