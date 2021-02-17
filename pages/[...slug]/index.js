import { useRouter } from 'next/router';
import React from 'react';

const index = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push('/solicitud/datos-empresa/9/10/11')}>oli</button>
      <button onClick={() => router.push('/solicitud/datos-empresa/1')}>oli2</button>
      <button onClick={() => router.push('/simulador')}>oli3</button>
    </div>
  );
};

export default index;
