import React from 'react';
import Link from 'next/link';

const Gracias = () => (
  <div className="contedor-fixed">
    <div className="contedor-solicitud">
      <div className="container ">
        <div className="col-9">
          <h2 className="color-blue-storm">¡Gracias por tu tiempo, Alejandra!</h2>
          <p className="body2 color-gray-dark">
            La información que nos has compartido hasta ahora nos ha ayudado a conocerte mejor y a determinar que el
            tipo de crédito que tú necesitas.
          </p>
          <p className="body2 color-gray-dark">
            Un asesor BanCoppel se pondrá en contacto contigo en muy poco tiempo para ayudarte con los siguientes pasos
            y darte la atención que necesitas.
          </p>
        </div>
        <div className="flex-column-start-config">
          <Link href="/solicitud/[tab]/[step]" as="/solicitud/documentacion/5">
            <button type="submit" className="btn-medium flex-align-self-center my-3">
              Terminar
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Gracias;
