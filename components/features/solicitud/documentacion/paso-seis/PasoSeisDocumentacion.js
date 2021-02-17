import { useSelector } from 'react-redux';
import UltimoPaso from '../../shared/ultimo-paso/UltimoPaso';
import PasoSeisDocumentacionPM from './pm/PasoSeisDocumentacionPM';

const PasoSeisDocumentacion = () => {
  const {
    datosPersonales: { tipoPersona },
  } = useSelector((state) => state.solicitud);
  return tipoPersona.value === 'MORAL' ? <PasoSeisDocumentacionPM /> : <UltimoPaso />;
};

export default PasoSeisDocumentacion;
