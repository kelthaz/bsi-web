import React from 'react';
import { useSelector } from 'react-redux';
import SvgOk from '../../../../svgs/SvgOk';

const AgradecimientoDatosPersonales = () => {
  const { datosPersonales } = useSelector((state) => state.solicitud);

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud ">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="d-block d-md-none col-md-2 col-xs-12 text-xs-center mt-4">
                <SvgOk />
              </div>
              <h2 className="text-xs-center text-md-left color-blue-storm mt-5">
                ¡Gracias, {datosPersonales.primerNombre}!
              </h2>
              <p className="body2 text-xs-center text-md-left color-dark-gray sub">
                Por favor revisa tu correo electrónico, te hemos enviado un enlace para verificar y activar tu cuenta.
              </p>
            </div>
            <div className="d-none d-md-block  col-md-2 col-xs-12 text-xs-center mt-4">
              <SvgOk />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgradecimientoDatosPersonales;
