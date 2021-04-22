import React, { useState } from 'react';
import Tabla from '../../../shared/tabla/Tabla';
import Paginador from '../../../shared/tabla/paginador/Paginador';
import SelectorFilas from '../../../shared/tabla/selector-filas/SelectorFilas';
import AsignarCasos from '../../../../privado/shared/asignacion-casos/AsignarCasos';

const SupervisorJuridicoActividades = () => {
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
              reviso: 'Salvador Elizondo',
              tiempoEspera: '10 min',
              idSolicitud: 31232,
              fechaSolicitud: '01/Enero/2020',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Daniela Fernanda',
              reviso: 'Salvador Rodriguez',
              tiempoEspera: '3 min',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Daniela Ramírez',
              reviso: 'Jaquelinne Meller',
              tiempoEspera: '3 min',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Alejandro Ramírez ',
              reviso: 'Sergio Villaleth',
              tiempoEspera: '3 min',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'José Lima Rodríguez',
              reviso: 'Sergio Villaleth',
              tiempoEspera: '3 días',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
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
export default SupervisorJuridicoActividades;
