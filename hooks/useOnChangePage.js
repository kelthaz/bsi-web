import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetChangePage } from '../redux/actions/formulario';

const useOnChangePage = (formulario, route, currentStep) => {
  const { push, query } = useRouter();
  const dispatch = useDispatch();
  const { changePage, routePage } = useSelector((state) => state.formulario);
  const [openModal, setOpenModal] = useState(false);

  const changeRoute = (newRoute) => {
    if (formulario.dirty) {
      setOpenModal(true);
    } else {
      push('/solicitud/[tab]/[step]', newRoute);
      dispatch(resetChangePage());
    }
  };

  useEffect(() => {
    if (changePage) {
      changeRoute(routePage);
    }
  }, [changePage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentStep.step === query.step) {
      formulario.handleSubmit();
      push('/solicitud/[tab]/[step]', route);
    } else {
      changeRoute(route);
    }
  };

  return { openModal, setOpenModal, handleSubmit };
};

export default useOnChangePage;
