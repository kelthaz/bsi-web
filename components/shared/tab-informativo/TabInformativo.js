import React from 'react';

const TabInformativo = (props) => {
  const { show } = props;
  return show && <div>TabInformativo</div>;
};

export default TabInformativo;
