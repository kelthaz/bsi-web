import React, { useState } from 'react';
import Tabla from '../../../components/features/privado/shared/tabla/Tabla';
import Paginador from '../../../components/features/privado/shared/tabla/paginador/Paginador';
import SelectorFilas from '../../../components/features/privado/shared/tabla/selector-filas/SelectorFilas';

const TablaCasosPLD = () => {
  const COLUMNS = [
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
      name: 'Relacionados por revisar',
      selector: 'relacionados',
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
              persona: 'PFAE',
              relacionados: '4',
            },
            {
              nombre: 'Alberto Abad Gómez',
              persona: 'Moral',
              relacionados: '2',
            },
            {
              nombre: 'Paletas S.A.',
              persona: 'Moral',
              relacionados: '4',
            },
            {
              nombre: 'Diana Flores Cantú',
              persona: 'Moral',
              relacionados: '5',
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
export default TablaCasosPLD;
