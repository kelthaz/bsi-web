import React from 'react';
import CardBackOfficesSmall from '../../../shared/back-office-card-small/BackOfficeCardSmall';
import SvgAprobado from '../../../../../svgs/SvgAprobado';
import SvgOfertaBackOffice from '../../../../../svgs/SvgOfertaBackOffice';

const SupervisorMesaDeControlTablero = () => {
  const SupervisorMesaDeControlTablero = 'SupervisorMesaDeControlTablero';
  return (
    <div className="container-fluid">
      <div className="row mt-4 pl-3">
        <h3 className="color-blue-storm pr-3">Mi tablero</h3>
        <p className="color-blue-storm body2 mt-2">Mesa de control</p>
      </div>
      <div className="row mt-2">
        <div className="col-2">
          <div className="col-6 ml-3 pl-0 pb-2">
            <CardBackOfficesSmall title="2" subTitle="Total de casos por revisar " />
          </div>
          <div className="col-12 mt-3 ml-3 pl-0">
            <CardBackOfficesSmall title="2" subTitle="Total de líneas autorizadas" iconoLista={false} />
          </div>
          <div className="col-6 mt-4 ml-3 pl-0">
            <CardBackOfficesSmall title="11:39 m." subTitle="Tiempo promedio de analistas en tarea" yellow />
          </div>
        </div>
        <div className="col-8 pl-4">
          <div className="card-simple-blue-light pb-0">
            <div className="card-simple-blue-light pt-0 pb-1 px-0">
              <h4 className="pb-2 color-blue-storm  bot-line">Indicadores del proceso de mesa de control</h4>
            </div>
            <div className="row">
              <div className="col-6 mt-4">
                <div className="row">
                  <div className="col-1">
                    <SvgAprobado />
                  </div>
                  <div className="col-md-8">
                    <h4 className="color-blue-night">14</h4>
                    <span className="body3 color-gray">Total de líneas autorizadas hoy</span>
                  </div>
                </div>
              </div>
              <div className="col-6 mt-4">
                <div className="row">
                  <div className="col-1">
                    <SvgOfertaBackOffice />
                  </div>
                  <div className="col-6">
                    <h4 className="color-blue-night">$2,000,000.00</h4>
                    <span className="body3 color-gray">Desembolso más grande del día</span>
                  </div>
                </div>
              </div>

              <div className="col-6 mt-4">
                <div className="row">
                  <div className="col-1">
                    <SvgOfertaBackOffice />
                  </div>
                  <div className="col-8">
                    <h4 className="color-blue-night">48</h4>
                    <span className="body3 color-gray">Desembolsos realizados hoy</span>
                  </div>
                </div>
              </div>
              <div className="col-6 mt-4 mb-4">
                <div className="row">
                  <div className="col-1">
                    <SvgOfertaBackOffice />
                  </div>
                  <div className="col-8">
                    <h4 className="color-blue-night">$50,000,000.00</h4>
                    <span className="body3 color-gray">Total de desembolsos realizados </span>
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

export default SupervisorMesaDeControlTablero;
