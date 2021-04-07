import React from 'react';
import CardBackOfficesSmall from '../../../shared/back-office-card-small/BackOfficeCardSmall';
import Tabla from '../../../shared/tabla/Tabla';
import SvgAprobado from '../../../../../svgs/SvgAprobado';
import SvgOfertaBackOffice from '../../../../../svgs/SvgOfertaBackOffice';

const SupervisorMesaDeControlTablero = () => {
  const COLUMNS = [
    {
      name: 'Nombre',
      selector: 'nombre',
      sortable: true,
    },
    {
      name: 'Teléfono',
      selector: 'telefono',
      sortable: true,
    },
    {
      name: 'Crédito aprobado',
      selector: 'creditoAprobado',
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
      name: 'Región',
      selector: 'region',
      sortable: true,
    },
  ];

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
        <div className="col-10 pl-4">
          <div className="card-simple-blue-light pb-4">
            <div className="card-simple-blue-light pt-0 pb-1 px-0">
              <h4 className="pb-2 color-blue-storm  bot-line">Indicadores del proceso de mesa de control</h4>
            </div>
            <div className="row">
              <div className="col-6 mt-4">
                <div className="row">
                  <div className="col-1">
                    <SvgAprobado />
                  </div>
                  <div className="col-8">
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
              <div className="col-6 my-4">
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
      <div>
        <h3 className="color-blue-storm pr-3 mt-3">Autorizar línea</h3>
        <div className="table-margin mb-4">
          <Tabla
            columns={COLUMNS}
            data={[
              {
                nombre: 'Fernanda Rodriguez',
                telefono: '5512345678',
                creditoAprobado: '$2,000,000.00',
                idSolicitud: 12345,
                fechaSolicitud: '01/Enero/2020',
                region: 'Norte',
              },
              {
                nombre: 'Daniela Fernanda',
                telefono: '5512345678',
                creditoAprobado: '$20,000,000.00',
                idSolicitud: 12345,
                fechaSolicitud: '01/Enero/2020',
                region: 'Oeste',
              },
              {
                nombre: 'Paletas S.A.',
                telefono: '5512345678',
                creditoAprobado: '$6,500,000.00',
                idSolicitud: 12345,
                fechaSolicitud: '01/Enero/2020',
                region: 'Sur',
              },
              {
                nombre: 'Paletas S.A.',
                telefono: '5512345678',
                creditoAprobado: '$12,000,000.00',
                idSolicitud: 12345,
                fechaSolicitud: '01/Enero/2020',
                region: 'Norte',
              },
              {
                nombre: 'Tu maleta S.A.',
                telefono: '5512345678',
                creditoAprobado: '$2.500,000.00',
                idSolicitud: 12345,
                fechaSolicitud: '01/Enero/2020',
                region: 'Oeste',
              },
              {
                nombre: 'Tornillos y tuercas S.A.',
                telefono: '5512345678',
                creditoAprobado: '$12,000,000.00',
                idSolicitud: 12345,
                fechaSolicitud: '01/Enero/2020',
                region: 'Oeste',
              },
            ]}
          />
        </div>
        <div className="footer-paginator">
          <div className="footer">
            <div className="float-right mb-4">
              <a className="link pb-4" href="/nuevos-componentes/tabla-casos">
                Ver todos los casos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorMesaDeControlTablero;
