import React from 'react';
import { useRouter } from 'next/router';
import SvgArrow from '../../../../svgs/pdf-visor/SvgArrow';
import TableFilter from './table-filter/TableFilter';
import AltaLineaClienteDesembolso from './alta-linea-cliente-desembolso/AltaLineaClienteDesembolso';
import MediosHeader from './medios/MediosHeader';
import MesaHeader from './mesa/MesaHeader';

const HeaderPrivado = ({
  currentPage = { text: 'Perfil', subText: 'fdgdfg' },
  previus = { label: 'Todos', route: '/' },
  rightComponent: rightComponentIndex,
}) => {
  const { push } = useRouter();
  const FILTER_SEARCH = 0;
  const FILTER_SEARCH_RANGE = 1;
  const ALTA = 2;
  const MEDIOS = 3;
  const MESA = 4;

  const rightComponent = (() => {
    switch (rightComponentIndex) {
      case FILTER_SEARCH_RANGE:
        return <TableFilter hasDatepicker />;
      case FILTER_SEARCH:
        return <TableFilter />;
      case ALTA:
        return <AltaLineaClienteDesembolso />;
      case MEDIOS:
        return <MediosHeader />;
      case MESA:
        return <MesaHeader />;
      default:
        return <></>;
    }
  })();

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
          {currentPage && (
            <h3 className="color-blue-storm mb-3">
              {currentPage.text}
              <span className="body2"> {currentPage.subText}</span>
            </h3>
          )}
        </div>
        <div className="col-6 d-flex align-items-end flex-column justify-content-center">
          {rightComponent && <MesaHeader />}
        </div>
      </div>
    </div>
  );
};

export default HeaderPrivado;
