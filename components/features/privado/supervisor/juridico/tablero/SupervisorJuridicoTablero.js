import React from 'react';
import CardBackOfficesSmall from '../../../shared/back-office-card-small/BackOfficeCardSmall';
import SvgAprobado from '../../../../../svgs/SvgAprobado';
import SvgRechazadoBackOffice from '../../../../../svgs/SvgRechazadoBackOffice';

const SupervisorJuridicoTablero = () => {
  const SupervisorJuridicoTablero = 'SupervisorJuridicoTablero';
  return (
    <div className="container-fluid">
      <div className="row mt-4 pl-3">
        <h3 className="color-blue-storm pr-3">Mi tablero</h3>
        <p className="color-blue-storm body2 mt-2">Supervisor jurídico</p>
      </div>
      <div className="row mt-2">
        <div className="col-2">
          <div className="col-6 ml-3 pl-0 pb-2">
            <CardBackOfficesSmall title="2" subTitle="Total de casos por revisar " />
          </div>
          <div className="col-12 mt-3 ml-3 pl-0">
            <CardBackOfficesSmall title="2" subTitle="Total de casos aprobados" iconoLista={false} />
          </div>
          <div className="col-6 mt-4 ml-3 pl-0">
            <CardBackOfficesSmall title="11:39 m." subTitle="Tiempo promedio de analistas en tarea" yellow />
          </div>
        </div>
        <div className="col-8 pl-4">
          <div className="card-simple-blue-light pb-0">
            <div className="card-simple-blue-light pt-0 pb-1 px-0">
              <h4 className="pb-2 color-blue-storm  bot-line">Indicadores del proceso de Jurídico</h4>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="row">
                  <div className="col-1">
                    <SvgRechazadoBackOffice />
                  </div>
                  <div className="col-md-7">
                    <h4 className="color-blue-night">14</h4>
                    <span className="body3 color-gray">Casos rechazados por dictamen </span>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-1">
                    <SvgRechazadoBackOffice />
                  </div>
                  <div className="col-7">
                    <h4 className="color-blue-night">34</h4>
                    <span className="body3 color-gray">Casos rechazados por documento</span>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-1">
                    <SvgRechazadoBackOffice />
                  </div>
                  <div className="col-8">
                    <h4 className="color-blue-night">Acta constitutiva</h4>
                    <span className="body3 color-gray">Documento más rechazado</span>
                  </div>
                </div>
              </div>

              <div className="col-4 mt-4">
                <div className="row">
                  <div className="col-1">
                    <SvgRechazadoBackOffice />
                  </div>
                  <div className="col-7">
                    <h4 className="color-blue-night">48</h4>
                    <span className="body3 color-gray">Total de casos rechazados</span>
                  </div>
                </div>
              </div>
              <div className="col-4 mt-4 mb-4">
                <div className="row">
                  <div className="col-1">
                    <SvgAprobado />
                  </div>
                  <div className="col-8">
                    <h4 className="color-blue-night">23</h4>
                    <span className="body3 color-gray">Total de casos aprobados hoy</span>
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

export default SupervisorJuridicoTablero;
