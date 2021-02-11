import { useSelector } from 'react-redux';
import StepThreePFAE from './pfae/StepThreePFAE';
import StepThreePM from './pm/StepThreePM';

const StepThree = () => {
  const { datosPersonales: tipoPersona } = useSelector((state) => state.solicitud);
  return tipoPersona.value === 'MORAL' ? <StepThreePM /> : <StepThreePFAE />;
};

export default StepThree;
