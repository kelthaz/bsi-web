import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import SvgOk from '../../../../svgs/SvgOk';

const GraciasIncompletaDocumentacion = () => {
  const { datosPersonales } = useSelector((state) => state.solicitud);

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud ">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="d-block d-md-none col-md-2 col-xs-12 text-xs-center mt-4">
                <SvgOk />
              </div>
              <h2 className="text-xs-center text-md-left color-blue-storm mt-5">
                ¡Gracias por tu tiempo {datosPersonales.primerNombre}!
              </h2>
              <p className="body2 color-gray-dark">
                La información que nos has compartido hasta ahora nos ha ayudado a conocerte mejor y a determinar que el
                tipo de crédito que tú necesitas.
              </p>
              <p className="body2 color-gray-dark">
                Un asesor BanCoppel se pondrá en contacto contigo en muy poco tiempo para ayudarte con los siguientes
                pasos y darte la atención que necesitas.
              </p>
            </div>
            <div className="d-none d-md-block  col-md-2 col-xs-12 text-xs-center mt-4">
              <SvgOk />
            </div>
          </div>
          <div className="flex-column-center-config pt-sm-5 pt-xs-5 pt-md-0 pt-lg-0">
            <Link href="/solicitud/[tab]/[step]" as="/solicitud/datos-empresa/cuenta-activa">
              <button className="btn-medium" type="submit" aria-label="Avanzar">
                <span>avanzar temporal</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GraciasIncompletaDocumentacion;
