/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabla from '../tabla/Tabla';
import SvgMiniElipse from '../../../../svgs/SvgMiniElipse';

import styles from './tabla-prospectos.module.scss';
import Paginador from '../tabla/paginador/Paginador';
import SelectorFilas from '../tabla/selector-filas/SelectorFilas';

// ESTADOS: 0: En espera, 1: Revisión, 2: Rechazo jurídico
const TablaProspecto = ({ data, compact }) => {

  const [totalRows, setTotalRows] = useState(0);
  const [totalPages, setTotalPages] = useState(5);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const COLUMNS = [
    { name: 'Nombre', selector: 'nombre', sortable: true },
    { name: 'Por revisar', selector: 'porRevisar', sortable: true },
    { name: 'Estatus', selector: 'estatus', sortable: true },
    { name: 'Persona', selector: 'persona', sortable: true },
    { name: 'Tiempo de espera', selector: 'tiempoEspera', sortable: true },
    { name: 'Región', selector: 'region', sortable: true },
    { name: '', selector: 'accion', sortable: false }
  ];

  const obtenerEstatus = (estatus) => {
    switch (estatus) {
      case 0:
        return <><SvgMiniElipse color="#FCDA47" /> En espera</>;
      case 1:
        return <><SvgMiniElipse color="#39C6AC" /> Revisión</>;
      case 2:
        return <><SvgMiniElipse color="#F3685F" /> Rechazo jurídico</>;
      default:
        return <></>;
    }
  };

  const setData = () => data.map((item) => {
      item.estatus = obtenerEstatus(item.estatus);
      item.accion = <button className="btn-mini-secondary" type="button">Revisar</button>;
      return item;
    });

  return (
    <div>
      <div className={!compact && styles['table-margin']}>
        <Tabla
          columns={COLUMNS}
          data={setData()}
          compact={compact}
        />
      </div>
      {compact ?
        <div className={styles.footer}>
          <div className="float-right my-2">
            <a className="link" href="/nuevos-componentes/tabla-prospecto">Ver todos los prospectos</a>
          </div>
        </div>
        :
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
              onChange={setCurrentPage}
            />
          </div>
        </div>
      }
    </div>
  );
};

TablaProspecto.propTypes = {
  data: PropTypes.array.isRequired,
  compact: PropTypes.bool
};

TablaProspecto.defaultProps = {
  compact: false
};

export default TablaProspecto;
