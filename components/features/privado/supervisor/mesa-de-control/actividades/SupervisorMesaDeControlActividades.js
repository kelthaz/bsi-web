import React, { useState } from 'react';
import Tabla from '../../../shared/tabla/Tabla';
import Paginador from '../../../shared/tabla/paginador/Paginador';
import SelectorFilas from '../../../shared/tabla/selector-filas/SelectorFilas';
import AsignarCasos from '../../../../privado/shared/asignacion-casos/AsignarCasos';

const SupervisorMesaDeControlActividades = () => {
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
              telefono: '5512345678',
              creditoAprobado: '$2,000,000.00',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              region: 'Norte',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Daniela Fernanda',
              telefono: '5512345678',
              creditoAprobado: '$20,000,000.00',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              region: 'Oeste',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Paletas S.A.',
              telefono: '5512345678',
              creditoAprobado: '$6,500,000.00',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              region: 'Sur',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Paletas S.A.',
              telefono: '5512345678',
              creditoAprobado: '$12,000,000.00',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              region: 'Norte',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Tu maleta S.A.',
              telefono: '5512345678',
              creditoAprobado: '$2.500,000.00',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              region: 'Oeste',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Tornillos y tuercas S.A.',
              telefono: '5512345678',
              creditoAprobado: '$12,000,000.00',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              region: 'Oeste',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Tu maleta S.A.',
              telefono: '5512345678',
              creditoAprobado: '$2.500,000.00',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              region: 'Oeste',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Tornillos y tuercas S.A.',
              telefono: '5512345678',
              creditoAprobado: '$12,000,000.00',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              region: 'Oeste',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Tu maleta S.A.',
              telefono: '5512345678',
              creditoAprobado: '$2.500,000.00',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              region: 'Oeste',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Tornillos y tuercas S.A.',
              telefono: '5512345678',
              creditoAprobado: '$12,000,000.00',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              region: 'Oeste',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Tu maleta S.A.',
              telefono: '5512345678',
              creditoAprobado: '$2.500,000.00',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              region: 'Oeste',
              accion: <AsignarCasos tableButton />,
            },
            {
              nombre: 'Tornillos y tuercas S.A.',
              telefono: '5512345678',
              creditoAprobado: '$12,000,000.00',
              idSolicitud: 12345,
              fechaSolicitud: '01/Enero/2020',
              region: 'Oeste',
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
export default SupervisorMesaDeControlActividades;
