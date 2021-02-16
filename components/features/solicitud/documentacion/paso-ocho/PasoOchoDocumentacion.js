import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ULTIMA_ETAPA_DOCUMENTACION_ROUTE } from '../../../../../constants/routes/solicitud/documentacion';
import UltimoPaso from '../../shared/ultimo-paso/UltimoPaso';

const StepEight = () => {
  const {
    datosPersonales: { tipoPersona },
  } = useSelector((state) => state.solicitud);
  const router = useRouter();

  useEffect(() => {
    if (tipoPersona.value !== 'MORAL') {
      router.push(ULTIMA_ETAPA_DOCUMENTACION_ROUTE);
    }
  }, []);

  return <UltimoPaso />;
};

export default StepEight;
