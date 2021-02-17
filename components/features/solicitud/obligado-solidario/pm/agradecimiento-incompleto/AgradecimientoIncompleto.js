import Link from 'next/link';
import React from 'react';
import SvgOk from '../../../../../svgs/SvgOk';

const AgradecimientoIncompleto = () => (
  <div className="contedor-fixed">
    <div className="contedor-solicitud ">
      <div className="container px-md-2 px-xs-0">
        <div className="row pb-3">
          <div className="col-md-10 px-md-4 px-xs-0">
            <div className="d-block d-md-none col-md-2 col-xs-12 text-xs-center mt-4">
              <SvgOk />
            </div>
            <div className="col-md-10 px-xs-0 px-md-2">
              <h2 className="text-xs-center text-md-left color-blue-storm">¡Gracias, José!</h2>
            </div>
            <div className="col-md-12 px-xs-0 px-md-2">
              <p className="body2 text-xs-center text-md-left color-dark-gray sub pt-2">
                La información que nos has compartido nos ha ayudado a conocerte mejor.
              </p>
            </div>
            <div className="col-md-12 px-xs-0 px-md-2">
              <p className="text-xs-center text-md-left pt-2">
                Le enviaremos un correo electrónico a Alejandra para indicarle que has terminado y hacerle saber los
                próximos pasos.
              </p>
            </div>
            <div className="col-md-12 px-xs-0 px-md-2">
              <p className="text-xs-center text-md-left pt-2">¡En BanCoppel agradecemos tu confianza!</p>
            </div>
          </div>

          <div className="d-none d-md-block  col-md-2 col-xs-12 text-xs-center mt-5">
            <SvgOk />
          </div>
        </div>
        <Link href="/simulador" replace>
          <button type="submit" className="btn-medium offset-md-4 offset-xs-3">
            Terminar
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default AgradecimientoIncompleto;
