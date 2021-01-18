import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onShowModal, resetChangePage } from '../redux/actions/formulario';

const useOnChangePage = (formulario, route, currentStep, validation = () => true) => {
  const { push, query, beforePopState, asPath, replace } = useRouter();
  const dispatch = useDispatch();
  const { changePage, routePage, handleSubmit } = useSelector((state) => state.formulario);

  const changeRoute = async (newRoute, reset) => {
    if (formulario.dirty) {
      const resultValidation = await validation();
      dispatch(onShowModal(true, resultValidation && formulario.isValid, newRoute));
    } else {
      push('/solicitud/[tab]/[step]', newRoute);
      if (reset) {
        dispatch(resetChangePage());
      }
    }
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    if (currentStep.step === query.step) {
      const resultValidation = await validation();
      if (resultValidation) {
        formulario.handleSubmit();
        push('/solicitud/[tab]/[step]', route);
      }
    } else {
      changeRoute(route, false);
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

  return [onHandleSubmit];
};

export default useOnChangePage;
