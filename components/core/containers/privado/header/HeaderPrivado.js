import React from 'react';
import { useRouter } from 'next/router';
import SvgArrow from '../../../../svgs/pdf-visor/SvgArrow';
import TableFilter from './table-filter/TableFilter';

const HeaderPrivado = ({
  currentPage = { text: 'Perfil', subText: 'fdgdfg' },
  previus = { label: 'Todos', route: '' },
  rightComponent = () => {},
}) => {
  const { push } = useRouter();

  return (
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-6 d-flex align-items-start flex-column justify-content-center ">
          {previus && (
            <button type="button" className="btn-link-arrow-left mb-3" onClick={() => push(previus.route)}>
              <SvgArrow />
              <span>{previus.label}</span>
            </button>
          )}
          <h3 className="color-blue-storm mb-3">
            {currentPage.text}
            <span className="body2"> {currentPage.subText}</span>
          </h3>
        </div>
        <div className="col-6 d-flex align-items-end flex-column justify-content-center">
          {rightComponent && <TableFilter />}
        </div>
      </div>
    </div>
  );
};

export default HeaderPrivado;
