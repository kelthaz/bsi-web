import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import styles from '../datos-empresa/step-nine/StepNine.module.scss';
import SvgCargaDocumento from '../../../svgs/SvgCargaDocumento';
import SvgEmpresa from '../../../svgs/SvgEmpresa';

const RevisarCorreo = () => {
  const { datosPersonales } = useSelector((state) => state.solicitud);

  return (
    <div className="contedor-fixed">
      <div className="contedor-solicitud">
        <div className="container ">
          <h2 className="color-blue-storm">¡Gracias, Alejandra!</h2>
          <p className="body2 color-gray-dark">
            José deberá revisar su correo electrónico para acceder a la plataforma donde podrá responder un formulario
            similar al tuyo:
          </p>

          <div className="row justify-content-between">
            <div className={`card-white text-md-center ${styles['icon-card']} `}>
              <div>
                <img src="/buro.png" alt="Buro de crédito" />
              </div>
              <h4 className="color-blue-storm sub">Consultamos con Buró de crédito</h4>
              <p className="color-gray body3">Requerirá responder unas preguntas de sus créditos</p>
            </div>
            <div className={`text-md-center ${styles['icon-card']}`}>
              <div className="container-svg-card">
                <SvgCargaDocumento />
              </div>
              <div>
                <h4 className="color-blue-storm sub">Carga de documentos</h4>
                <p className="color-gray body3">Requerirá documentos</p>
              </div>
            </div>
            <div className={` text-md-center ${styles['icon-card']}`}>
              <div className="container-svg-card">
                <SvgEmpresa />
              </div>
              <div>
                <h4 className="color-blue-storm sub">Responder unas preguntas</h4>
                <p className="color-gray body3">Requerirá contestar con algunos datos personales</p>
              </div>
            </div>
          </div>
          <div className="row flex-column-start-config">
            <p className="body2 color-gray-dark">
              Te enviaremos un correo cuando José termine su proceso. De igual manera te notificaremos en caso de que tu
              obligado solidario no haya realizado el proceso en un periodo de tres días.
            </p>
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

export default RevisarCorreo;
