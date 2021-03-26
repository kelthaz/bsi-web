import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardBackOffices from '../../shared/back-office-card/BackOfficeCard';
import ResultSimulador from '../../../../core/simulador/ResultSimulador';
import NextStepsTable from '../../shared/next-steps-table/NextStepsTable';
import IndividualVideo from '../../shared/back-office-video/BackOfficeVideo';

const ClienteTablero = () => {
  const inicio = 'inicio';
  return (
    <div className="container-fluid px-0">
      <div className="mt-4">
        <h3 className="color-blue-storm">¡Hola, Alejandra!</h3>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="col-12 ml-3 pl-0 pb-2">
            <CardBackOffices title="Validación de expediente" subTitle="Siguiente paso" />
          </div>
          <div className="col-12 mt-4 ml-3 pl-0">
            <CardBackOffices
              title="$1,500,000.00"
              subTitle="Monto autorizado"
              haveButton={false}
              iconoAgendar={false}
            />
          </div>
        </div>
        <div className="col-8">
          <div className="card-simple-blue-light pb-0">
            <div className="card-simple-blue-light pt-0 pb-1 px-0">
              <h4 className="pb-2 color-blue-storm  bot-line">Características del crédito</h4>
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
      <div className="row mt-3">
        <div className="col-12 px-4">
          <h3 className="color-blue-storm row  bot-line pl-2">Próximos pasos</h3>
        </div>
        <div className="mt-1 col-md-12 col-xs-12 px-3">
          <NextStepsTable />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 px-4">
          <h3 className="color-blue-storm row bot-line pl-2">Haz crecer tu empresa</h3>
        </div>
        <div className="col-md-4 px-3 mt-2 mb-3 ">
          <IndividualVideo width={330} idVideo={1} src="https://www.youtube.com/embed/PMP6zcY6Fcc" />
          <h4 className="color-blue-storm sub">Los mejores usos para un crédito</h4>
        </div>
        <div className="col-md-4 pl-1 mt-2 mb-3">
          <IndividualVideo width={330} idVideo={2} src="https://www.youtube.com/embed/ppIJmaa9ue8" />
          <h4 className="color-blue-storm sub">Características de un buen líder</h4>
        </div>
        <div className="col-md-4 mt-2 mb-3">
          <IndividualVideo width={330} idVideo={3} src="https://www.youtube.com/embed/VayHlVwGmGs" />
          <h4 className="color-blue-storm sub">Herramientas gratuitas para administración</h4>
        </div>
      </div>
    </div>
  );
};

export default ClienteTablero;
