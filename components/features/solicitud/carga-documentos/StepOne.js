import React from 'react';
import Link from 'next/link';

import SvgINE from '../../../svgs/SvgINE';

import styles from './carga-documentos.module.scss';

const Test = () => (
  <div className="contedor-fixed">
    <div className="contedor-solicitud">
      <div className="container p-0">
        <div className="col-xs-12 col-sm-12 my-3">
          <div className={`mx-auto ${styles.elipse}`}>
            <SvgINE />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12">
          <p className="body2">
            Comenzaremos por tu identificación.
            Necesitas tomar fotos del frente y reverso.
          </p>
          <p className="body2">
            Deberás tener a la mano:
          </p>
        </div>
        <div className="card-simple-blue-light">
          <ul className="mb-0">
            <li className="body2 color-blue-storm">Identificación oficial (INE)</li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-12 my-3">
          <div className="center-second-button">
            <Link href="/solicitud/[tab]/[step]" as="/solicitud/carga-documentos/captura-ine" replace>
              <button type="submit" className="btn-medium">
                Continuar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Test;
