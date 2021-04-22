import React, { useState } from 'react';
import Tab from '../../../../../shared/tab/Tab';
import TabItem from '../../../../../shared/tab/TabItem';
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

  const [totalRows, setTotalRows] = useState(0);
  const [totalPages, setTotalPages] = useState(5);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container-fluid">
      <div className="table-margin">
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
