import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onShowModal, resetChangePage } from '../redux/actions/formulario';

const useOnChangePage = (formulario, route, currentStep) => {
  const { push, query, beforePopState, asPath, replace } = useRouter();
  const dispatch = useDispatch();
  const { changePage, routePage, handleSubmit } = useSelector((state) => state.formulario);

  const changeRoute = (newRoute, reset) => {
    if (formulario.dirty) {
      dispatch(onShowModal(true, formulario.isValid, newRoute));
    } else {
      push('/solicitud/[tab]/[step]', newRoute);
      if (reset) {
        dispatch(resetChangePage());
      }
    }
  };

  useEffect(() => {
    if (changePage) {
      changeRoute(routePage, true);
    }
  }, [changePage]);

  useEffect(() => {
    if (handleSubmit) {
      formulario.handleSubmit();
    }
  }, [handleSubmit]);

  // useEffect(() => {
  //   beforePopState(({ url, as, options }) => {
  //     console.log(url, as, options, asPath);
  //     push('/solicitud/[tab]/[step]', asPath);
  //     return false;
  //   });
  // }, []);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (currentStep.step === query.step) {
      formulario.handleSubmit();
      push('/solicitud/[tab]/[step]', route);
    } else {
      changeRoute(route, false);
    }
  };

  return [onHandleSubmit];
};

export default useOnChangePage;
