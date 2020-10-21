import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

const DatosPersonales = (props) => {
  const { datosPersonales } = useSelector((state) => state.solicitud);
  const { currentStep, setCurrentStep } = props;

  let step;
  switch (datosPersonales.currentStep) {
    case 1:
      step = <Step1 />;
      break;

    case 2:
      step = <Step2 />;
      break;

    case 3:
      step = <Step3 />;
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
