import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import SvgDeposito from '../../../../svgs/oferta/SvgDeposito';
import SvgDocumentos from '../../../../svgs/oferta/SvgDocumentos';
import SvgSesion from '../../../../svgs/oferta/SvgSesion';
import SvgPersona from '../../../../svgs/oferta/SvgPersona';

const FormalizaCuentaPersonal = () => {
  const { oferta: { conCuenta } } = useSelector((state) => state.solicitud);

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud">
        <div className="container text-center">
          <div className="row">
            <h2 className="color-blue-storm pb-3">
              ¡Ahora formaliza tu oferta de crédito <br className="only-lg-inline" /> por $1,500,000.00!
            </h2>
            <p className="body2 color-gray-dark">
              Alejandra, en los siguientes pasos tendrás que validar tu cuenta, designar a un
              obligado solidario, cargar documentos y realizar tu toma de biométricos.
            </p>
          </div>
          <div className="row no-gutters justify-content-center">
            { conCuenta &&
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="card-simple-transparent-img">
                  <SvgSesion />
                  <p>Validación de cuenta</p>
                </div>
              </div>
            }
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img">
                <SvgPersona />
                <p>Designa un obligado solidario</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img">
                <SvgDocumentos />
                <p>Carga de documentos</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img">
                <SvgDeposito />
                <p>Toma de biometricos</p>
              </div>
            </div>
          </div>
          <div className="row flex-column-start-config">
            <p className="body2 color-gray-dark">
              Si no puedes continuar en este momento, podrás guardar tu proceso hasta este
              punto y salir para retomarlo después. Tu oferta se guardará durante 15 días a partir de hoy.
            </p>
          </div>
          <div className="row">
            <div className="col-12">
              <Link href="/solicitud/[tab]/[step]" as="/solicitud/datos-personales/1">
                <button type="button" className="btn-medium-secondary my-3 mx-3">
                  Guarda tu proceso
                </button>
              </Link>
              <Link href="/solicitud/[tab]/[step]" as="/solicitud/oferta/validacion">
                <button type="button" className="btn-medium my-3 mx-3">
                  Continua tu solicitud
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormalizaCuentaPersonal;
