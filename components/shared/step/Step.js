import React from 'react';

const Step = (props) => {
  const { show } = props;
  return show && <div>Step</div>;
};

export default Step;
