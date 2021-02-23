import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onShowModal, resetChangePage } from '../redux/actions/formulario';

const useOnChangePage = (formulario, route, validacion, validation = () => true) => {
  const { push, beforePopState, asPath } = useRouter();
  const dispatch = useDispatch();
  const { changePage, routePage, handleSubmit } = useSelector((state) => state.formulario);

  const changeRoute = async (newRoute, reset) => {
    if (formulario.dirty) {
      const resultValidation = await validation();
      dispatch(onShowModal(true, resultValidation && formulario.isValid, newRoute));
    } else {
      push(newRoute);
      if (reset) {
        dispatch(resetChangePage());
      }
    }
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    if (validacion) {
      const resultValidation = await validation();
      if (resultValidation) {
        formulario.handleSubmit();
        push(route);
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
  //   beforePopState(({ as }) => {
  //     if (as !== asPath) {
  //       window.history.forward();
  //       dispatch(onChangePage(true, as));
  //     }
  //     return false;
  //   });
  // }, []);

  return [onHandleSubmit];
};

export default useOnChangePage;
