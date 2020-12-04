import React from 'react';
import { useSelector } from 'react-redux';
import SvgOffer from '../../../../svgs/SvgOffer';

const Agradecimientos = () => {
  const { datosEmpresa } = useSelector((state) => state.solicitud);

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud ">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="d-block d-md-none col-md-2 col-xs-12 text-xs-center mt-4">
                <SvgOffer />
              </div>
              <h2 className="text-xs-center text-md-left color-blue-storm mt-5">
                ¡Gracias, {datosEmpresa.primerNombreRecibe}!
              </h2>
              <p className="body2 text-xs-center text-md-left color-dark-gray sub">
                ¡Estamos analizando tu solicitud y en breve nos comunicaremos contigo por correo electrónico para que
                puedas regresar y conocer tu oferta!
              </p>
            </div>
            <div className="d-none d-md-block  col-md-2 col-xs-12 text-xs-center mt-4">
              <SvgOffer />
            </div>
            <div className="text-center offset-md-4 offset-xs-3 my-3 ">
              <button className="btn-medium" type="submit" aria-label="Avanzar">
                <span>Guardar y salir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Agradecimientos;
