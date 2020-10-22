import React from 'react';
import Link from 'next/link';
import SvgDocumentos from '../../../../svgs/SvgDocumentos';
import SvgOferta from '../../../../svgs/SvgOferta';
import SvgPersona from '../../../../svgs/SvgPersona';
import SvgPersonaMoral from '../../../../svgs/SvgPersonaMoral';
import styles from './bienvenido.module.scss';

const Bienvenida = () => (
  <div className="container">
    <div className="contedor-solicitud">
      <div className="row">
        <h2 className="color-blue-storm">¡Te damos la bienvenida!</h2>
        <p className="body2 color-gray-dark">
          Nos da mucho gusto que inicies tu solicitud, no podemos esperar a escuchar qué grandes planes tienes para tu
          crédito.
        </p>
        <p className="body2 color-gray-dark">
          Nuestro proceso se divide en cuatro bloques y te tomará aproximadamente 30 minutos completarlo todo:
        </p>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className="card-simple-transparent-img">
            <SvgPersona />
            <p>Datos Personales</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className={`card-simple-transparent-img ${styles['disabled-card']}`}>
            <SvgPersonaMoral />
            <p>Datos de tu empresa</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className={`card-simple-transparent-img ${styles['disabled-card']}`}>
            <SvgOferta />
            <p>Oferta</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <div className={`card-simple-transparent-img ${styles['disabled-card']}`}>
            <SvgDocumentos />
            <p>Datos Personales</p>
          </div>
        </div>
      </div>
      <div className="row flex-column-start-config">
        <p className="body2 color-gray-dark">En este primer bloque deberás contar con:</p>
        <div className={`card-simple-blue-light ${styles['list-style']}`}>
          <ul>
            <li>RFC</li>
          </ul>
        </div>
        <p className="sub color-gray-dark">
          Si quieres ver o cambiar las características de tu crédito,&nbsp;
          <a className="color-blue-sky">haz clic aquí.</a>
        </p>
        <Link href="/solicitud/[tab]/[step]" as="/solicitud/datos-personales/1">
          <button type="button" className="btn-medium flex-align-self-center">
            ¡Comencemos!
          </button>
        </Link>
      </div>
    </div>
  </div>
);

Bienvenida.getContentTypeIdentifier = () => 'bienvenido';
export default Bienvenida;
