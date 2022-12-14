import React from 'react';
import Link from 'next/link';

import SvgOkElipse from '../../../../svgs/oferta/SvgOkElipse';

const RechazoSinCuentaPersona = () => (
  <div className="contedor-fixed">
    <div className="contedor-solicitud">
      <div className="container p-0">
        <div className="row d-block d-sm-none">
          <div className="col-12 pb-3 text-center">
            <SvgOkElipse />
          </div>
        </div>
        <div className="row">
          <div className="col-12 pb-3">
            <h2 className="color-blue-storm">¡Puedes adquirir una cuenta BanCoppel!</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9 col-xs-12">
            <p className="body2">
              Alejandra, después de analizar tu solicitud, no podremos otorgarte un crédito por el
              momento, sin embargo podemos aperturar tu cuenta bancaria BanCoppel.
            </p>
            <p className="body2">
              Te recomendamos volver a hacer tu solicitud en XX meses, ¡Estamos seguros que en tu
              siguiente visita podremos otorgarte el crédito que te ayudará a elevar tu empresa!
            </p>
          </div>
          <div className="col-3 d-none d-sm-block">
            <SvgOkElipse />
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-12 text-center">
            <Link href="/solicitud/[tab]/[step]" as="/solicitud/datos-personales/bienvenida">
              <button className="btn-medium" type="button">
                Abre una cuenta
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RechazoSinCuentaPersona;
