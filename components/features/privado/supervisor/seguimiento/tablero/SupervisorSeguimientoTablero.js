import React from 'react';
import CardBackOfficesSmall from '../../../shared/back-office-card-small/BackOfficeCardSmall';
import SvgPerfilBackOffice from '../../../../../svgs/SvgPerfilBackOffice';
import SvgRevisionBackOffice from '../../../../../svgs/SvgRevisionBackOffice';
import SvgOfertaBackOffice from '../../../../../svgs/SvgOfertaBackOffice';
import SvgSolicitudBackOffice from '../../../../../svgs/SvgSolicitudBackOffice';
import SvgMiniElipse from '../../../../../svgs/SvgMiniElipse';
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
      name: 'Estatus',
      selector: 'estatus',
      sortable: true,
    },
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Casos asignados',
      selector: 'casosAsignados',
      sortable: true,
    },
    {
      name: 'Lineas y cuentas por generar',
      selector: 'lineasPorGenerar',
      sortable: true,
    },
    {
      name: 'Desembolsos',
      selector: 'desembolsos',
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
          <Tabla
            columns={COLUMNS}
            data={[
              {
                nombre: 'Fernanda Rodriguez',
                estatus: (
                  <>
                    <SvgMiniElipse color="#39C6AC" /> Activo
                  </>
                ),
                id: 123213,
                casosAsignados: 12,
                lineasPorGenerar: 2,
                desembolsos: '01',
                accion: <AsignarCasos tableButton />,
              },
              {
                nombre: 'Alejandra Aguilar Ruiz',
                estatus: (
                  <>
                    <SvgMiniElipse color="#39C6AC" /> Activo
                  </>
                ),
                id: 2213123,
                casosAsignados: 4,
                lineasPorGenerar: 23,
                desembolsos: '02',
                accion: <AsignarCasos tableButton />,
              },
              {
                nombre: 'Fernanda Rodriguez',
                estatus: (
                  <>
                    <SvgMiniElipse color="#39C6AC" /> Activo
                  </>
                ),
                id: 123213,
                casosAsignados: 12,
                lineasPorGenerar: 2,
                desembolsos: '05',
                accion: <AsignarCasos tableButton />,
              },
            ]}
          />
        </div>
        <div className="footer-paginator">
          <div className="footer">
            <div className="float-right mb-4">
              <a className="link pb-4" href="/supervisor/seguimiento/actividades">
                Ver todos los casos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorSeguimientoTablero;
