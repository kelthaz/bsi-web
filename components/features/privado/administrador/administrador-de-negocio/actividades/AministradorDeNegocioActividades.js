import React, { useState } from 'react';
import Tabla from '../../../shared/tabla/Tabla';
import Paginador from '../../../shared/tabla/paginador/Paginador';
import SelectorFilas from '../../../shared/tabla/selector-filas/SelectorFilas';
import SvgMiniElipse from '../../../../../svgs/SvgMiniElipse';
import AsignarCasos from '../../../../privado/shared/asignacion-casos/AsignarCasos';

const AministradorDeNegocioActividades = () => {
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

  const [totalRows, setTotalRows] = useState(0);
  const [totalPages, setTotalPages] = useState(5);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container-fluid">
      <div className="table-margin">
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
        <div className="float-left my-4">
          <SelectorFilas rowsPerPage={perPage} currentPage={currentPage} totalRows={totalRows} onChange={setPerPage} />
        </div>
        <div className="float-right d-inline my-3">
          <Paginador numberOfPages={totalPages} currentPage={currentPage} onChange={(page) => fetchData(page)} />
        </div>
      </div>
    </div>
  );
};
export default AministradorDeNegocioActividades;
