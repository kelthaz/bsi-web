import { useSelector } from 'react-redux';
import StepFourPFAE from './pfae/StepFourPFAE';
import StepFourPM from './pm/StepFourPM';

const StepFour = () => {
  const { datosPersonales: tipoPersona } = useSelector((state) => state.solicitud);
  return tipoPersona.value === 'MORAL' ? <StepFourPM /> : <StepFourPFAE />;
};

export default StepFour;
