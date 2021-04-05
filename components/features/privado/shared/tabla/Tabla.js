import PropTypes from 'prop-types';
import SvgOrdenar from '../../../../svgs/iconos/SvgOrdenar';

import styles from './tabla.module.scss';

const Tabla = ({columns, data, compact}) => {

  function sortTable(index) {
    let posI;
    let shouldSwitch;
    let switchcount = 0;
    const table = document.getElementById('tabla-resultados');
    let switching = true;
    let dir = 'asc';
    while (switching) {
      switching = false;
      const {rows} = table;
      for (posI = 1; posI < (rows.length - 1); posI++) {
        shouldSwitch = false;
        const posX = rows[posI].getElementsByTagName('TD')[index];
        const posY = rows[posI + 1].getElementsByTagName('TD')[index];
        if (dir === 'asc') {
          if (posX.innerHTML.toLowerCase() > posY.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir === 'desc') {
          if (posX.innerHTML.toLowerCase() < posY.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[posI].parentNode.insertBefore(rows[posI + 1], rows[posI]);
        switching = true;
        switchcount += 1;
      } else if (switchcount === 0 && dir === 'asc') {
        dir = 'desc';
        switching = true;
      }
    }
  }

  return (
    <div className={`my-3 ${compact ? styles['table-compact'] : ''}`}>
      <table id="tabla-resultados" className="w-100">
        <thead className={styles['table-head']}>
          <tr>
            {columns.map((item, index) =>
              item.sortable !== false ?
                <th key={item.selector} className={`overline color-gray px-3 ${styles['table-column-sortable']}`}
                  id={item.selector} onClick={() => sortTable(index)}>
                  <SvgOrdenar />
                  {item.name}
                </th>
                :
                <th key={item.selector} className="overline color-gray px-3" id={item.selector}>
                  {item.name}
                </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) =>
            // eslint-disable-next-line react/no-array-index-key
            <tr className={styles['table-row']} key={index}>
              {columns.map((col) =>
                <td key={col.selector} headers={col.selector} className="body2 color-gray py-2 px-3">{item[col.selector]}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

Tabla.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  compact: PropTypes.bool
};

Tabla.defaultProps = {
  compact: false
};

export default Tabla;
