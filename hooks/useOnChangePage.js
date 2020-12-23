import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useOnChangePage = (formulario, route, currentStep) => {
  const { push, query } = useRouter();
  const { changePage, routePage } = useSelector((state) => state.formulario);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (changePage) {
      if (formulario.dirty) {
        console.log('abrio');
        setOpenModal(true);
      } else {
        push('/solicitud/[tab]/[step]', routePage);
      }
    }
  }, [changePage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentStep.step === query.step) {
      formulario.handleSubmit();
      push('/solicitud/[tab]/[step]', route);
    } else if (formulario.dirty) {
      setOpenModal(true);
    } else {
      push('/solicitud/[tab]/[step]', route);
    }
  };

  return { openModal, setOpenModal, handleSubmit };
};

export default useOnChangePage;
