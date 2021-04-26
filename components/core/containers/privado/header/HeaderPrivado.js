import React from 'react';
import { useRouter } from 'next/router';
import SvgArrow from '../../../../svgs/pdf-visor/SvgArrow';

const HeaderPrivado = ({ currentPage = 'Perfil', route = { label: 'Todos' } }) => {
  const { push } = useRouter();

  return (
    <div className="container-fluid p-0">
      <div className="row no-gutters">
        <div className="col-6 d-flex align-items-start flex-column justify-content-center ">
          {route && (
            <button type="button" className="btn-link-arrow-left mb-3">
              <SvgArrow />
              <span>{route.label}</span>
            </button>
          )}
          <h3 className="color-blue-storm mb-3">{currentPage}</h3>
        </div>
        <div className="col-6 d-flex align-items-start flex-column justify-content-center"></div>
      </div>
    </div>
  );
};

export default HeaderPrivado;
