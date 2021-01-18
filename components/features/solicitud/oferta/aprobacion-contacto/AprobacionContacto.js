import React from 'react';
import Link from 'next/link';

const AprobacionContacto = () => (
  <div className="contedor-fixed">
    <div className="contedor-solicitud">
      <div className="container p-0 text-center">
        <div className="row">
          <div className="col-12 pb-3">
            <h2 className="color-blue-storm">¡Felicidades, Alejandra!</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="body2">
              Hemos analizado tu solicitud y un ejecutivo se pondrá en contacto contigo a la
              brevedad al teléfono que nos proporcionaste para guiarte en la siguiente parte del proceso.
            </p>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-12 text-center">
            <Link href="/solicitud/[tab]/[step]" as="/solicitud/datos-personales/bienvenida">
              <button className="btn-medium" type="button">
                Entendido
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AprobacionContacto;
