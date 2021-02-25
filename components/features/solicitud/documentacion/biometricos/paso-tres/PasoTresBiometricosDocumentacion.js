import React from 'react';
import Link from 'next/link';

import styles from '../biometricos.module.scss';
import SvgVideo from '../../../../../svgs/SvgVideo';
import { LISTO_BIOMETRICO_DOCUMENTACION_ROUTE } from '../../../../../../constants/routes/solicitud/documentacion';

const PasoTresBiometricosDocumentacion = () => (
  <div className="contedor-fixed">
    <div className="contedor-solicitud">
      <div className="container p-0">
        <div className="col-xs-12 col-sm-12 my-3">
          <div className={`mx-auto ${styles.elipse}`}>
            <SvgVideo />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12">
          <p className="body2">
            En este último paso debes realizar una grabación de ti mencionando que aceptas esta solicitud de crédito.
          </p>
          <p className="body2">
            Leer el texto que aparecerá cuando inicies tu grabación y confirmala.
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 my-4">
          <div className="text-center">
            <Link href="/solicitud/[tab]/[step]" as={LISTO_BIOMETRICO_DOCUMENTACION_ROUTE} replace>
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

export default PasoTresBiometricosDocumentacion;
