import React, { useState } from 'react';
import Step1 from './steps/Step1';

const DatosPersonales = (props) => {
  const { currentStep, setCurrentStep } = props;

  let step;
  switch (currentStep) {
    case 1:
      step = <Step1 />;
      break;

    case 2:
      break;

    default:
      break;
  }

  return (
    <div className="container">
      <div className="contedor-solicitud">{step}</div>
    </div>
  );
};

export default DatosPersonales;
