import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import SvgCargaDocumento from '../../../../../svgs/SvgCargaDocumento';
import SvgEmpresa from '../../../../../svgs/SvgEmpresa';

const RevisarCorreoObligadoSolidario = () => {
  const { datosPersonales, obligadoSolidario } = useSelector((state) => state.solicitud);

  return (
    <div className="contedor-fixed-tab">
      <div className="contedor-solicitud">
        <div className="container px-xs-0 px-md-3">
          <h2 className="color-blue-storm">¡Gracias, {datosPersonales.primerNombre}!</h2>
          <p className="body2 color-gray-dark">
            {obligadoSolidario.primerNombre} deberá revisar su correo electrónico para acceder a la plataforma donde
            podrá responder un formulario similar al tuyo:
          </p>

          <div className="justify-content-between">
            <div className="row">
              <div className="text-md-center icon-card">
                <div>
                  <img src="/buro.png" alt="Buro de crédito" />
                </div>
                <div className="col-md-12 px-md-0">
                  <h4 className="mb-0 color-blue-storm sub">Consultamos con Buró de crédito</h4>
                  <p className="color-gray body3">Requerirá responder unas preguntas de sus créditos</p>
                </div>
              </div>
              <div className="mt-2 text-md-center icon-card">
                <div className="container-svg-card">
                  <SvgCargaDocumento />
                </div>
                <div className="col-12 mt-2">
                  <h4 className="color-blue-storm sub">Carga de documentos</h4>
                </div>
                <div className="col-12">
                  <p className="color-gray body3">Requerirá documentos</p>
                </div>
              </div>
              <div className="text-md-center icon-card">
                <div className="container-svg-card">
                  <SvgEmpresa />
                </div>
                <div className="col-12 px-0">
                  <h4 className="color-blue-storm sub">Responder unas preguntas</h4>
                  <p className="color-gray body3">Requerirá contestar con algunos datos personales</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex-column-start-config ml-xs-1 ml-md-0 ">
            <p className="body2 color-gray-dark">
              Te enviaremos un correo cuando {obligadoSolidario.primerNombre} termine su proceso. De igual manera te
              notificaremos en caso de que tu obligado solidario no haya realizado el proceso en un periodo de tres
              días.
            </p>
          </div>
          <div className="flex-column-start-config">
            <Link href="/solicitud/[tab]/[step]" as="/solicitud/documentacion/3">
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

export default RevisarCorreoObligadoSolidario;
