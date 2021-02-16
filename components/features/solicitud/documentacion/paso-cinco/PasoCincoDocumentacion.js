import { useSelector } from 'react-redux';
import PasoCincoDocumentacionPFAE from './pfae/PasoCincoDocumentacionPFAE';
import StepFivePM from './pm/PasoCincoDocumentacionPM';

const PasoCincoDocumentacion = () => {
  const {
    datosPersonales: { tipoPersona },
  } = useSelector((state) => state.solicitud);
  return tipoPersona.value === 'MORAL' ? <StepFivePM /> : <PasoCincoDocumentacionPFAE />;
};

export default PasoCincoDocumentacion;
