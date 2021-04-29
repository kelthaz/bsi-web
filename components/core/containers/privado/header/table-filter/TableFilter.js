import React from 'react';
import RangeDatepickerInput from '../../../../../shared/datepicker/range-datepicker-input/RangeDatepickerInput';
import SvgBuscar from '../../../../../svgs/iconos/SvgBuscar';

const TableFilter = ({ hasDatepicker }) => {
  return (
    <div className="d-flex flex-row">
      {hasDatepicker && <RangeDatepickerInput orientation="left" />}
      <button type="button" className="btn-mini-secondary-h100 ml-3 svg-button-search">
        <SvgBuscar />
      </button>
    </div>
  );
};

export default TableFilter;
