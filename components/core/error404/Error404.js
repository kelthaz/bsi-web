import React from 'react';
import SvgError404 from '../../svgs/publico/SvgError404';

const Error404 = () => (
  <div className="contedor-fixed-error">
    <div className="contedor-solicitud ">
      <div className="d-flex flex-column align-items-center">
        <h1 className="color-blue-morning ">Error 404</h1>
        <p className="input2 color-gray ">¡Ups! Esta página no existe.</p>
        <SvgError404 />
      </div>
    </div>
  </div>
);

export default Error404;
