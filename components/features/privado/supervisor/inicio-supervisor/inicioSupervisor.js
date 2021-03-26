import React from 'react';
import CardBackOffices from '../../shared/back-office-card/BackOfficeCard';
import CardBackOfficesSmall from '../../shared/back-office-card-small/BackOfficeCardSmall';
import ResultSimulador from './../../../../core/simulador/ResultSimulador';
import NextStepsTable from '../../shared/next-steps-table/NextStepsTable';
import IndividualVideo from '../../shared/back-office-video/BackOfficeVideo';

const InicioSupervisor = () => {
  const inicio = 'inicio';
  return (
    <div className="container-fluid px-0">
      <div className="row mt-4">
        <div className="col-2 pr-0">
          <h3 className="color-blue-storm">Mi tablero</h3>
        </div>
        <div className="col-6 pl-0 mt-1">
          <p className="color-blue-storm body2">Superadministrador</p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-3">
          <div className="col-6 ml-3 pl-0 pb-2">
            <CardBackOfficesSmall title="2" subTitle="Total de casos por revisar " />
          </div>
          <div className="col-12 mt-3 ml-3 pl-0">
            <CardBackOfficesSmall title="2" subTitle="Total de líneas y cuentas por generar " iconoLista={false} />
          </div>
          <div className="col-6 mt-3 ml-3 pl-0">
            <CardBackOfficesSmall title="11:39 m." subTitle="Tiempo promedio de analistas en tarea" yellow />
          </div>
        </div>
        <div className="col-6">
          <div className="card-simple-blue-light pb-0">
            <div className="card-simple-blue-light pt-0 pb-1 px-0">
              <h4 className="pb-2 color-blue-storm  bot-line">Estatus de procesos por tren de línea de crédito</h4>
            </div>
            <ResultSimulador
              dataSimulador={{ plazo: { label: '24 meses' }, periodicidad: { label: 'Bimestrales' } }}
              resultSimulador={{
                tasaOrdinaria: '25%',
                comisionApertura: '5%',
                cat: '3%',
                pago: '$31,250',
                tasaMoratoria: '63%',
              }}
              color="night"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InicioSupervisor;
