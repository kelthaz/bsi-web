import { useSelector } from 'react-redux';
import PasoCuatroDocumentacionPFAE from './pfae/PasoCuatroDocumentacionPFAE';
import PasoCuatroDocumentacionPM from './pm/PasoCuatroDocumentacionPM';

const PasoCuatroDocumentacion = () => {
  const {
    datosPersonales: { tipoPersona },
  } = useSelector((state) => state.solicitud);
  return tipoPersona.value === 'MORAL' ? <PasoCuatroDocumentacionPM /> : <PasoCuatroDocumentacionPFAE />;
};

export default PasoCuatroDocumentacion;
