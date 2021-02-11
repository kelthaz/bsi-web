import { useSelector } from 'react-redux';
import StepOnePFAE from './pfae/StepOnePFAE';
import StepOnePM from './pm/StepOnePM';

const StepOne = () => {
  const { datosPersonales: tipoPersona } = useSelector((state) => state.solicitud);
  return tipoPersona.value === 'MORAL' ? <StepOnePM /> : <StepOnePFAE />;
};

export default StepOne;
