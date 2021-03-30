import React from 'react';
import CardBackOfficesSmall from '../../../shared/back-office-card-small/BackOfficeCardSmall';
import SvgPerfilBackOffice from '../../../../../svgs/SvgPerfilBackOffice';
import SvgRevisionBackOffice from '../../../../../svgs/SvgRevisionBackOffice';
import SvgOfertaBackOffice from '../../../../../svgs/SvgOfertaBackOffice';
import SvgSolicitudBackOffice from '../../../../../svgs/SvgSolicitudBackOffice';

const SupervisorSeguimientoTablero = () => {
  const SupervisorSeguimientoTablero = 'SupervisorSeguimientoTablero';
  return (
    <div className="container-fluid">
      <div className="row mt-4 pl-3">
        <h3 className="color-blue-storm pr-3">Mi tablero</h3>
        <p className="color-blue-storm body2 mt-2">Superadministrador</p>
      </div>
      <div className="row mt-2">
        <div className="col-2">
          <div className="col-6 ml-3 pl-0 pb-2">
            <CardBackOfficesSmall title="2" subTitle="Total de casos por revisar " />
          </div>
          <div className="col-12 mt-3 ml-3 pl-0">
            <CardBackOfficesSmall title="2" subTitle="Total de líneas y cuentas por generar " iconoLista={false} />
          </div>
          <div className="col-6 mt-4 ml-3 pl-0">
            <CardBackOfficesSmall title="11:39 m." subTitle="Tiempo promedio de analistas en tarea" yellow />
          </div>
        </div>
        <div className="col-8 pl-4">
          <div className="card-simple-blue-light pb-0">
            <div className="card-simple-blue-light pt-0 pb-1 px-0">
              <h4 className="pb-2 color-blue-storm  bot-line">Estatus de procesos por tren de línea de crédito</h4>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="row">
                  <div className="col-1">
                    <SvgPerfilBackOffice />
                  </div>
                  <div className="col-md-6">
                    <h4 className="color-blue-night">12</h4>
                    <span className="body3 color-gray">Total de casos en jurídico</span>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-1">
                    <SvgRevisionBackOffice />
                  </div>
                  <div className="col-6">
                    <h4 className="color-blue-night">54</h4>
                    <span className="body3 color-gray">Total de casos en visita ocular</span>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-1">
                    <SvgOfertaBackOffice />
                  </div>
                  <div className="col-7">
                    <h4 className="color-blue-night">23</h4>
                    <span className="body3 color-gray">Total de casos en medios de pagos</span>
                  </div>
                </div>
              </div>

              <div className="col-4 mt-4">
                <div className="row">
                  <div className="col-1">
                    <SvgRevisionBackOffice />
                  </div>
                  <div className="col-7">
                    <h4 className="color-blue-night">24</h4>
                    <span className="body3 color-gray">Total de casos en mesa de control </span>
                  </div>
                </div>
              </div>
              <div className="col-4 mt-4">
                <div className="row">
                  <div className="col-1">
                    <SvgSolicitudBackOffice />
                  </div>
                  <div className="col-6">
                    <h4 className="color-blue-night">39</h4>
                    <span className="body3 color-gray">Total de cuentas generadas </span>
                  </div>
                </div>
              </div>
              <div className="col-4 mt-4 mb-4">
                <div className="row">
                  <div className="col-1">
                    <SvgOfertaBackOffice />
                  </div>
                  <div className="col-8">
                    <h4 className="color-blue-night">20</h4>
                    <span className="body3 color-gray">Total de desembolsos generados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-3">Componente faltante</div>
      </div>
    </div>
  );
};

export default SupervisorSeguimientoTablero;
