import { useSelector } from 'react-redux';
import UltimoPaso from '../../shared/ultimo-paso/UltimoPaso';
import StepSixPM from './pm/StepSixPM';

const StepSix = () => {
  const { datosPersonales: tipoPersona } = useSelector((state) => state.solicitud);
  return tipoPersona.value === 'MORAL' ? <StepSixPM /> : <UltimoPaso />;
};

export default StepSix;
