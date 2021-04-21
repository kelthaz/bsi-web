import React from 'react';
import CardBackOfficesSmall from '../../../shared/back-office-card-small/BackOfficeCardSmall';
import SvgPerfilBackOffice from '../../../../../svgs/SvgPerfilBackOffice';
import SvgRevisionBackOffice from '../../../../../svgs/SvgRevisionBackOffice';
import SvgOfertaBackOffice from '../../../../../svgs/SvgOfertaBackOffice';
import SvgSolicitudBackOffice from '../../../../../svgs/SvgSolicitudBackOffice';
import SvgMiniElipse from '../../../../../svgs/SvgMiniElipse';
import Tab from '../../../../../shared/tab/Tab';
import TabItem from '../../../../../shared/tab/TabItem';
import Tabla from '../../../shared/tabla/Tabla';
import AsignarCasos from '../../../../privado/shared/asignacion-casos/AsignarCasos';

const SupervisorSeguimientoTablero = () => {
  const COLUMNS = [
    {
      name: 'Nombre',
      selector: 'nombre',
      sortable: true,
    },
    {
      name: 'Por revisar',
      selector: 'porRevisar',
      sortable: true,
    },
    {
      name: 'Estatus de la solicitud',
      selector: 'estatusSolicitud',
      sortable: true,
    },
    {
      name: 'Persona',
      selector: 'persona',
      sortable: true,
    },
    {
      name: 'Tiempo de espera',
      selector: 'tiempoEspera',
      sortable: true,
    },
    {
      name: 'Accion',
      selector: 'accion',
      sortable: true,
    },
  ];

  const COLUMNS2 = [
    {
      name: 'Nombre',
      selector: 'nombre',
      sortable: true,
    },
    {
      name: 'Persona',
      selector: 'persona',
      sortable: true,
    },
    {
      name: 'Tiempo de espera',
      selector: 'tiempoEspera',
      sortable: true,
    },
    {
      name: 'Acción',
      selector: 'accion',
      sortable: true,
    },
  ];

  const COLUMNS3 = [
    {
      name: 'Nombre',
      selector: 'nombre',
      sortable: true,
    },
    {
      name: 'Persona',
      selector: 'persona',
      sortable: true,
    },
    {
      name: 'Tiempo de espera',
      selector: 'tiempoEspera',
      sortable: true,
    },
    {
      name: 'Acción',
      selector: 'accion',
      sortable: true,
    },
  ];

  const COLUMNS4 = [
    {
      name: 'Nombre',
      selector: 'nombre',
      sortable: true,
    },
    {
      name: 'Persona',
      selector: 'persona',
      sortable: true,
    },
    {
      name: 'Tiempo de espera',
      selector: 'tiempoEspera',
      sortable: true,
    },
    {
      name: 'Número de cliente',
      selector: 'numeroCliente',
      sortable: true,
    },
    {
      name: 'Desembolsar',
      selector: 'desembolsar',
      sortable: true,
    },
    {
      name: 'Acción',
      selector: 'accion',
      sortable: true,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row mt-4 pl-3">
        <h3 className="color-blue-storm pr-3">Mi tablero</h3>
        <p className="color-blue-storm body2 mt-2">Seguimiento</p>
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
        <div className="col-10 pl-4">
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
      <div>
        <h3 className="color-blue-storm pr-3 mt-3">Actividades</h3>
        <div className="table-margin mb-4">
          <Tab>
            <TabItem tab="Documentos por revisar" keyTab="1">
              <Tabla
                columns={COLUMNS}
                data={[
                  {
                    nombre: 'Fernanda Rodriguez',
                    porRevisar: '3 documentos',
                    estatusSolicitud: (
                      <>
                        <SvgMiniElipse color="#39C6AC" /> Revisón
                      </>
                    ),
                    persona: 'PFAE',
                    tiempoEspera: '10 min',
                    accion: <AsignarCasos tableButton />,
                  },
                  {
                    nombre: 'Alejandro Ramírez ',
                    porRevisar: '3 documentos',
                    estatusSolicitud: (
                      <>
                        <SvgMiniElipse color="yellow" /> En espera
                      </>
                    ),
                    persona: 'PFAE',
                    tiempoEspera: '10 min',
                    accion: <AsignarCasos tableButton />,
                  },
                  {
                    nombre: 'Daniela Fernanda ',
                    porRevisar: '3 documentos',
                    estatusSolicitud: (
                      <>
                        <SvgMiniElipse color="red" /> Rechazo jurídico
                      </>
                    ),
                    persona: 'Moral',
                    tiempoEspera: '2 días',
                    accion: <AsignarCasos tableButton />,
                  },
                ]}
              />
            </TabItem>
            <TabItem tab="Generar alta de cliente" keyTab="2">
              <Tabla
                columns={COLUMNS2}
                data={[
                  {
                    nombre: 'Fernanda Rodriguez',
                    persona: 'PFAE',
                    tiempoEspera: '10 min',
                    accion: <AsignarCasos tableButton />,
                  },
                  {
                    nombre: 'Paletas S.A.',
                    persona: 'Moral',
                    tiempoEspera: '2 días',
                    accion: <AsignarCasos tableButton />,
                  },
                ]}
              />
            </TabItem>
            <TabItem tab="Generar alta de línea" keyTab="3">
              <Tabla
                columns={COLUMNS3}
                data={[
                  {
                    nombre: 'Fernanda Rodriguez',
                    persona: 'PFAE',
                    tiempoEspera: '10 min',
                    accion: <AsignarCasos tableButton />,
                  },
                  {
                    nombre: 'Paletas S.A.',
                    persona: 'Moral',
                    tiempoEspera: '2 días',
                    accion: <AsignarCasos tableButton />,
                  },
                ]}
              />
            </TabItem>
            <TabItem tab="Desembolsos" keyTab="4">
              <Tabla
                columns={COLUMNS4}
                data={[
                  {
                    nombre: 'Fernanda Rodriguez',
                    persona: 'PFAE',
                    tiempoEspera: '10 min',
                    numeroCliente: '12345',
                    desembolsar: '$2,000,000',
                    accion: <AsignarCasos tableButton />,
                  },
                  {
                    nombre: 'Paletas S.A.',
                    persona: 'Moral',
                    tiempoEspera: '2 días',
                    numeroCliente: '12345',
                    desembolsar: '$2,000,000',
                    accion: <AsignarCasos tableButton />,
                  },
                ]}
              />
            </TabItem>
          </Tab>
        </div>
        <div className="footer-paginator">
          <div className="footer">
            <div className="float-right mb-4">
              <a className="link pb-4" href="/supervisor/seguimiento/actividades">
                Ver todos los prospectos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorSeguimientoTablero;
