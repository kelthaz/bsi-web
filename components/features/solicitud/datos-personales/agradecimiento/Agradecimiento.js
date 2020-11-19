import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../../../shared/validate-password/validate-password.module.scss';

const Agradecimientos = () => {
  const { datosPersonales } = useSelector((state) => state.solicitud);

  return (
    <div className="contedor-fixed">
      <div className={`contedor-solicitud `}>
        <div className="container">
          <div className="row mt-xs-5 mt-md-0">
            <div className="col-md-10 mt-xs-5 mt-md-0">
              <div className="d-block d-md-none col-md-2 col-xs-12 text-xs-center mt-4">
                <img src="/ok.svg" alt="Imagen del banner" />
              </div>
              <h2 className="text-xs-center text-md-left color-blue-storm mt-5">¡Gracias, {datosPersonales.name}!</h2>
              <p className="body2 text-xs-center text-md-left color-dark-gray sub">
                Por favor revisa tu correo electrónico, te hemos enviado un enlace para verificar y activar tu cuenta.
              </p>
            </div>
            <div className="d-none d-md-block  col-md-2 col-xs-12 text-xs-center mt-4">
              <img src="/ok.svg" alt="Imagen del banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Agradecimientos;
