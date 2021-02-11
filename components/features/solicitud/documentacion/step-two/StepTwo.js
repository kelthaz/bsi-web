import { useSelector } from 'react-redux';
import StepTwoPFAE from './pfae/StepTwoPFAE';
import StepTwoPm from './pm/StepTwoPm';

const StepTwo = () => {
  const { datosPersonales: tipoPersona } = useSelector((state) => state.solicitud);
  return tipoPersona.value === 'MORAL' ? <StepTwoPm /> : <StepTwoPFAE />;
};

export default StepTwo;
