import React from 'react';
import ProgressBar from '../progressbar/ProgressBar';
import SvgAgendarVerde from '../../../../svgs/SvgAgendarVerde';
import Avatar from '../../../../svgs/sidebar/SvgAvatar';

const Perfil = () => {
  const DashboardCliente = 'DashboardCliente';
  return (
    <div className="container-fluid px-0">
      <div className="mt-4 mb-5">
        <h3 className="color-blue-storm">Mi perfil</h3>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="card-simple-blue-light">
            <div className="row">
              <div className="col-2 pr-0">
                <SvgAgendarVerde />
              </div>
              <div className="col-10 pl-0">
                <div className="color-gray body3">Proceso actual:</div>
                <div className="body3">Visita al obligado solidario</div>
                <ProgressBar value="50" />
              </div>
            </div>
          </div>
          <div className="card-simple-blue-light mt-3">
            <div className="row">
              <div className="col-2 pr-0">
                <Avatar />
              </div>
              <div className="col-10 pl-0">
                <h3 className="color-blue-storm sub pb-auto mt-2">Alejandra Ramírez Hernández</h3>
              </div>
            </div>
            <div className="row justify-content-end mt-3">
              <div className="col-6 pr-5">
                <p className="text-right body3">ID de solicitud</p>
                <p className="text-right body3">Fecha de aprobación de crédito</p>
                <p className="text-right body3">Número de cuenta</p>
                <p className="text-right body3">Fecha alta de usuario</p>
              </div>
              <div className="col-6">
                <h3 className="color-blue-storm body3">123</h3>
                <div className="color-blue-storm body3 mt-4 pb-4">04/05/2020</div>
                <div className="color-blue-storm body3 mt-3 pb-3">-</div>
                <h3 className="color-blue-storm body3">-</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">Componente faltante</div>
      </div>
    </div>
  );
};

export default Perfil;
