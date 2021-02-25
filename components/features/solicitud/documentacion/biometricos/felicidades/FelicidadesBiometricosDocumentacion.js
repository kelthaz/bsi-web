import React from 'react';
import Link from 'next/link';


import styles from '../biometricos.module.scss';
import SvgOkElipse from '../../../../../svgs/carga-documentos/SvgOkElipse';

const FelicidadesBiometricosDocumentacion = () => (
  <div className="contedor-fixed">
    <div className="contedor-solicitud">
      <div className="container p-0 text-center">
        <div className="col-xs-12 col-sm-12 my-3">
          <div className="mx-auto">
            <SvgOkElipse />
          </div>
        </div>
        <h2 className={`color-blue-storm ${styles['line-height-h2']}`}>¡Felicidades!</h2>
        <h2 className="color-blue-storm">Concluimos el proceso</h2>
        <div className="col-xs-12 col-sm-12">
          <p className="body2">
            ¡En BanCoppel agradecemos tu confianza y esperamos este crédito te ayude a dar
            el siguiente gran salto para tu empresa!
          </p>
          <p className="body2">
            Te notificaremos en los próximos días con los siguientes pasos del proceso, mientras
            tanto, te invitamos acceder a tu perfil desde aquí o tu computadora.
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 my-4">
          <div className="text-center">
            <Link href="/login/iniciar-sesion">
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

export default FelicidadesBiometricosDocumentacion;
