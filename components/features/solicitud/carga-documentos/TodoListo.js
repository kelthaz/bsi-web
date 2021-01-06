import React from 'react';
import Link from 'next/link';

import SvgCargaDocumento from '../../../svgs/SvgCargaDocumento';

import styles from './carga-documentos.module.scss';

const Test = () => (
  <div className="contedor-fixed">
    <div className="contedor-solicitud">
      <div className="container p-0 text-center">
        <div className="col-xs-12 col-sm-12 my-3">
          <div className={`mx-auto ${styles.elipse}`}>
            <SvgCargaDocumento />
          </div>
        </div>
        <h2 className="color-blue-storm">¡Todo listo, Alejandra!</h2>
        <div className="col-xs-12 col-sm-12">
          <p className="body2">
            Hemos recibido tu documentación, la cual podrás revisar en tu carpeta de documentos de tu perfil de usuario.
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 my-3">
          <div className="center-second-button">
            <Link href="/solicitud/[tab]/[step]" as="/solicitud/carga-documentos/felicidades" replace>
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

export default Test;
