import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Paginador from '../../../components/features/privado/shared/tabla/paginador/Paginador';
import SelectorFilas from '../../../components/features/privado/shared/tabla/selector-filas/SelectorFilas';
import Tabla from '../../../components/features/privado/shared/tabla/Tabla';
import Loader from '../../../components/shared/loader/Loader';

import styles from './prueba-paginador.module.scss';

const PruebaPaginador = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const COLUMNS = [
    {
      name: 'First Name',
      selector: 'first_name',
      sortable: true
    },
    {
      name: 'Last Name',
      selector: 'last_name',
      sortable: true
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true
    }
  ];

  const fetchData = async (page, size = perPage) => {
    setLoading(true);
    const response = await Axios.get(
      `https://reqres.in/api/users?page=${page}&per_page=${size}`
    );
    setData(response.data.data);
    setTotalRows(response.data.total);
    setTotalPages(response.data.total_pages);
    setCurrentPage(response.data.page);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <>
        <div>
          <div className={styles['table-margin']}>
            { loading ?
              <Loader />
              :
              <Tabla
                columns={COLUMNS}
                data={data}
                />
            }
          </div>
          <div className={styles['footer-paginator']}>
            <div className="float-left my-4">
              <SelectorFilas
                rowsPerPage={perPage}
                currentPage={currentPage}
                totalRows={totalRows}
                onChange={setPerPage}
              />
            </div>
            <div className="float-right d-inline my-3">
              <Paginador
                numberOfPages={totalPages}
                currentPage={currentPage}
                onChange={((page) => fetchData(page))}
              />
            </div>
          </div>
        </div>
    </>
  );
};
export default PruebaPaginador;
