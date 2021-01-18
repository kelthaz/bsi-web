import React from 'react';
import Link from 'next/link';

import SvgWarningPaperElipse from '../../../../svgs/oferta/SvgWarningPaperElipse';

const RechazoCuentaPersona = () => (
  <div className="contedor-fixed">
    <div className="contedor-solicitud">
      <div className="container p-0">
        <div className="row d-block d-sm-none">
          <div className="col-12 pb-3 text-center">
            <SvgWarningPaperElipse />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9 col-xs-12">
            <div className="row">
              <div className="col-12 pb-3">
                <h2 className="color-blue-storm">Tu solicitud fue rechazada…</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-9 col-xs-12">
                <p className="body2">
                  Alejandra, después de analizar tu solicitud, no podremos otorgarte un crédito por el momento.
                </p>
                <p className="body2">
                  Agradecemos tu interés en un Crédito Pyme así como tu tiempo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 d-none d-sm-block pt-4">
            <SvgWarningPaperElipse />
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-12 text-center">
            <Link href="/solicitud/[tab]/[step]" as="/solicitud/datos-personales/bienvenida">
              <button className="btn-medium" type="button">
                Finaliza
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RechazoCuentaPersona;
