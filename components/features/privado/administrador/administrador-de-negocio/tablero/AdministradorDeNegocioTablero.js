import React from 'react';
import CardBackOfficesSmall from '../../../shared/back-office-card-small/BackOfficeCardSmall';
import SvgUsuarioBackOffice from '../../../../../svgs/SvgUsuarioBackOffice';
import SvgRevisionBackOffice from '../../../../../svgs/SvgRevisionBackOffice';
import SvgSolicitudBackOffice from '../../../../../svgs/SvgSolicitudBackOffice';
import SvgAprobado from '../../../../../svgs/SvgAprobado';
import SvgMiniElipse from '../../../../../svgs/SvgMiniElipse';
import SvgOfertaBackOffice from '../../../../../svgs/SvgOfertaBackOffice';
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
