import React from 'react';
import Link from 'next/link';

import styles from '../biometricos.module.scss';
import SvgUsuario from '../../../../../svgs/SvgUsuario';
import { CAPTURA_BIOMETRICO_DOCUMENTACION_ROUTE } from '../../../../../../constants/routes/solicitud/documentacion';

const PasoDosBiometricosDocumentacion = () => (
  <div className="contedor-fixed">
    <div className="contedor-solicitud">
      <div className="container p-0">
        <div className="col-xs-12 col-sm-12 my-3">
          <div className={`mx-auto ${styles.elipse}`}>
            <SvgUsuario />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12">
          <p className="body2">
            Ahora realizaremos una toma de biométricos por fotografía. Asegúrate que la
            cámara de tu teléfono esté limpia y haya buena iluminación para capturar:
          </p>
        </div>
        <div className="card-simple-blue-light">
          <ul className="mb-0">
            <li className="body2 color-blue-storm">Foto de tu rostro</li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-12 my-4">
          <div className="text-center">
            <Link href="/solicitud/[tab]/[step]" as={CAPTURA_BIOMETRICO_DOCUMENTACION_ROUTE} replace>
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

export default PasoDosBiometricosDocumentacion;
