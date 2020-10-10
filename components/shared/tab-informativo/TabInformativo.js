import React from 'react';

const TabInformativo = (props) => {
  const { show } = props;
  return (
    show && (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 flex-row-start-config">volver</div>
          <div className="col-8 flex-row-center-config">centro</div>
          <div className="col-2 flex-row-end-config">volver</div>
        </div>
      </div>
    )
  );
};

export default TabInformativo;
