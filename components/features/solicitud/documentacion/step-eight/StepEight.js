import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UltimoPaso from '../../shared/ultimo-paso/UltimoPaso';

const StepEight = () => {
  const { datosPersonales: tipoPersona } = useSelector((state) => state.solicitud);
  const router = useRouter();

  useEffect(() => {
    if (tipoPersona.value !== 'MORAL') {
      router.replace('/inicio');
    }
  }, []);

  return <UltimoPaso />;
};

export default StepEight;
