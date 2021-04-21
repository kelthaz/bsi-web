import React from 'react';
import CardBackOfficesSmall from '../../../shared/back-office-card-small/BackOfficeCardSmall';
import SvgUsuarioBackOffice from '../../../../../svgs/SvgUsuarioBackOffice';
import SvgRevisionBackOffice from '../../../../../svgs/SvgRevisionBackOffice';
import SvgSolicitudBackOffice from '../../../../../svgs/SvgSolicitudBackOffice';
import SvgAprobado from '../../../../../svgs/SvgAprobado';
import SvgMiniElipse from '../../../../../svgs/SvgMiniElipse';
import SvgOfertaBackOffice from '../../../../../svgs/SvgOfertaBackOffice';
import Tab from '../../../../../shared/tab/Tab';
import TabItem from '../../../../../shared/tab/TabItem';
import Tabla from '../../../shared/tabla/Tabla';
import AsignarCasos from '../../../../privado/shared/asignacion-casos/AsignarCasos';

const AdministradorDeNegocioTablero = () => {
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
        <p className="color-blue-storm body2 mt-2">Administrador de negocio</p>
      </div>
      <div className="row mt-2">
        <div className="col-2">
          <div className="col-6 ml-3 pl-0 pb-2">
            <CardBackOfficesSmall title="2" subTitle="Total de casos por revisar " admin />
          </div>
        </div>
        <div className="col-10 pl-4">
          <div className="card-simple-blue-light pt-3 pb-2">
            <div className="row">
              <div className="col-3">
                <div className="row">
                  <div className="col-1">
                    <SvgUsuarioBackOffice />
                  </div>
                  <div className="col-7">
                    <h4 className="color-blue-night">14</h4>
                    <span className="body3 color-gray">Nuevos usuarios</span>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row">
                  <div className="col-1">
                    <SvgOfertaBackOffice />
                  </div>
                  <div className="col-7">
                    <h4 className="color-blue-night">2</h4>
                    <span className="body3 color-gray">Desembolso hoy</span>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row">
                  <div className="col-1">
                    <SvgSolicitudBackOffice />
                  </div>
                  <div className="col-7">
                    <h4 className="color-blue-night">4</h4>
                    <span className="body3 color-gray">En digtamen</span>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row">
                  <div className="col-1">
                    <SvgAprobado />
                  </div>
                  <div className="col-7">
                    <h4 className="color-blue-night">1</h4>
                    <span className="body3 color-gray">En firma </span>
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
              <a className="link pb-4" href="/admin/casos">
                Ver todos los casos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministradorDeNegocioTablero;
