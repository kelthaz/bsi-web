import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import SvgDocumento from '../../../svgs/SvgDocumento';
import SvgOferta from '../../../svgs/SvgOferta';
import SvgPersona from '../../../svgs/SvgPersona';
import SvgPersonaMoralColor from '../../../svgs/SvgPersonaMoralColor';

const UltimaEtapa = () => {
  const { datosPersonales } = useSelector((state) => state.solicitud);

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud">
        <div className="container px-xs-0 ">
          <h2 className="color-blue-storm">¡Ya estamos en la última etapa!</h2>
          <p className="body2 color-gray-dark">
            {`${datosPersonales.primerNombre}, para terminar, en este último bloque designarás a tu Obligado Solidario, subirás algunos documentos y realizarás tu toma de Biométricos.`}
          </p>

          <div className="row no-gutters">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img disabled-card-svg">
                <SvgPersona />
                <p className="py-md-3 py-xs-0">Datos personales</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img disabled-card-svg">
                <SvgPersonaMoralColor />
                <p className="py-md-3 py-xs-0">Datos de tu empresa</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img disabled-card-svg">
                <SvgOferta />
                <p className="py-md-3 py-xs-0">Oferta</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="card-simple-transparent-img">
                <SvgDocumento />
                <p className="py-md-3 py-xs-0">Documentación</p>
              </div>
            </div>
          </div>
          <div className="row flex-column-start-config">
            <p className="body2 color-gray-dark">Deberás tener a la mano:</p>
            <div className="card-simple-blue-light list-onboarding">
              <ul>
                {
                  datosPersonales.tipoPersona === 'Persona Moral' ?
                    <li>Acta constitutiva </li> :
                    <li>Comprobante de domicilio comercial
                      <span className="color-gray"> (No mayor a tres meses)</span>
                    </li>
                }
                {datosPersonales.tipoPersona === 'Persona Moral' ?
                  <li className="position-relative">Poderes notariales</li> :
                  <li className="position-relative">Comprobante de domicilio fiscal
                    <span className="color-gray"> (No mayor a tres meses) </span>
                  </li>
                }
                {datosPersonales.tipoPersona === 'Persona Moral' ?
                  <li className="position-relative">Escrituras con reformas <span className="color-gray">(Opcional)</span></li> :
                  <li className="position-relative">Tu INE</li>
                }
                {datosPersonales.tipoPersona === 'Persona Moral' ?
                  <li className="position-relative">Comprobante de domicilio comercial <span className="color-gray">(No mayor a tres meses)</span></li> :
                  <li className="position-relative">
                    Acta de matrimonio <span className="color-gray">(Si estás casado)</span>
                  </li>
                }
                {datosPersonales.tipoPersona === 'Persona Moral' ?
                  <li className="position-relative">Comprobante de domicilio fiscal <span className="ml-xs-1 color-gray">(No mayor a tres meses)</span></li> :
                  <li className="position-relative">INE de tu pareja <span className="color-gray">(Si estás casado)</span></li>
                }
                {datosPersonales.tipoPersona === 'Persona Moral' ?
                  <li className="position-relative">INE del representante legal</li> :
                  <span className="color-gray"></span>}
              </ul>
            </div>
          </div>
          <div className="flex-column-start-config">
            <Link href="/solicitud/[tab]/[step]" as="/solicitud/documentacion/1">
              <button type="submit" className="btn-medium flex-align-self-center my-3">
                Continuar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimaEtapa;
