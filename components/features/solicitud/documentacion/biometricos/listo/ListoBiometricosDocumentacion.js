import React from 'react';
import Link from 'next/link';

import styles from '../biometricos.module.scss';
import SvgCargaDocumento from '../../../../../svgs/SvgCargaDocumento';
import { FELICIDADES_BIOMETRICO_DOCUMENTACION_ROUTE } from '../../../../../../constants/routes/solicitud/documentacion';

const ListoBiometricosDocumentacion = () => (
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
        <div className="col-xs-12 col-sm-12 my-4">
          <div className="text-center">
            <Link href="/solicitud/[tab]/[step]" as={FELICIDADES_BIOMETRICO_DOCUMENTACION_ROUTE} replace>
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

export default ListoBiometricosDocumentacion;
