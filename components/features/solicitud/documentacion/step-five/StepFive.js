import { useSelector } from 'react-redux';
import StepFivePFAE from './pfae/StepFivePFAE';
import StepFivePM from './pm/StepFivePM';

const StepFive = () => {
  const { datosPersonales: tipoPersona } = useSelector((state) => state.solicitud);
  return tipoPersona.value === 'MORAL' ? <StepFivePM /> : <StepFivePFAE />;
};

export default StepFive;
