import React from 'react';
import CardBackOfficesSmall from '../../../shared/back-office-card-small/BackOfficeCardSmall';
import SvgAprobado from '../../../../../svgs/SvgAprobado';
import Tabla from '../../../shared/tabla/Tabla';
import SvgRechazadoBackOffice from '../../../../../svgs/SvgRechazadoBackOffice';

const SupervisorJuridicoTablero = () => {
  const COLUMNS = [
    {
      name: 'Nombre',
      selector: 'nombre',
      sortable: true,
    },
    {
      name: 'Revisó',
      selector: 'reviso',
      sortable: true,
    },
    {
      name: 'Tiempo de espera',
      selector: 'tiempoEspera',
      sortable: true,
    },
    {
      name: 'Región',
      selector: 'region',
      sortable: true,
    },
    {
      name: 'ID solicitud',
      selector: 'idSolicitud',
      sortable: true,
    },
    {
      name: 'Fecha de solicitud',
      selector: 'fechaSolicitud',
      sortable: true,
    },
    {
      name: 'Accion',
      selector: 'accion',
      sortable: true,
    },
  ];

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
        <div className="col-10 pl-4">
          <div className="card-simple-blue-light pb-4">
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
      <div>
        <h3 className="color-blue-storm pr-3 mt-3">Dictamenes pendientes</h3>
        <div className="table-margin mb-4">
          <Tabla
            columns={COLUMNS}
            data={[
              {
                nombre: 'Fernanda Rodriguez',
                reviso: 'Salvador Elizondo',
                tiempoEspera: '10 min',
                region: 'Norte',
                idSolicitud: 31232,
                fechaSolicitud: '01/Enero/2020',
                accion: (
                  <button className="btn-mini-secondary" type="button">
                    Revisar
                  </button>
                ),
              },
              {
                nombre: 'Daniela Fernanda',
                reviso: 'Salvador Rodriguez',
                tiempoEspera: '3 min',
                region: 'Oeste',
                idSolicitud: 12345,
                fechaSolicitud: '01/Enero/2020',
              },
              {
                nombre: 'Daniela Ramírez',
                reviso: 'Jaquelinne Meller',
                tiempoEspera: '3 min',
                region: 'Oeste',
                idSolicitud: 12345,
                fechaSolicitud: '01/Enero/2020',
              },
              {
                nombre: 'Alejandro Ramírez ',
                reviso: 'Sergio Villaleth',
                tiempoEspera: '3 min',
                region: 'Oeste',
                idSolicitud: 12345,
                fechaSolicitud: '01/Enero/2020',
              },
              {
                nombre: 'José Lima Rodríguez',
                reviso: 'Sergio Villaleth',
                tiempoEspera: '3 días',
                region: 'Oeste',
                idSolicitud: 12345,
                fechaSolicitud: '01/Enero/2020',
              },
            ]}
          />
        </div>
        <div className="footer-paginator">
          <div className="footer">
            <div className="float-right mb-4">
              <a className="link pb-4" href="/nuevos-componentes/tabla-prospectos-juridico">
                Ver todos los prospectos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorJuridicoTablero;
