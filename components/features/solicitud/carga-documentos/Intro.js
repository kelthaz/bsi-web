import React from 'react';
import Link from 'next/link';

import SvgCargaDocumento from '../../../svgs/SvgCargaDocumento';

import styles from './carga-documentos.module.scss';

const Intro = () => (
  <div className="contedor-fixed">
    <div className="contedor-solicitud">
      <div className="container p-0 text-center">
        <div className="col-xs-12 col-sm-12 my-3">
          <div className={`mx-auto ${styles.elipse}`}>
            <SvgCargaDocumento />
          </div>
        </div>
        <h2 className="color-blue-storm">Crédito Pyme BanCoppel</h2>
        <div className="col-xs-12 col-sm-12">
          <p className="body2">
            ¡Te damos la bienvenida al proceso de carga de documentos BanCoppel!
          </p>
          <p className="body2">
            En BanCoppel estamos felices de que estés haciendo una solicitud de crédito
            con nosotros.
          </p>
          <p className="body2">
            En este proceso de dos pasos recolectaremos unos documentos para conocerte mejor
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 my-3">
          <div className="center-second-button">
            <Link href="/solicitud/[tab]/[step]" as="/solicitud/carga-documentos/1" replace>
              <button type="submit" className="btn-medium">
                Comenzar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
