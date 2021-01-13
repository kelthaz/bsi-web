import * as types from '../types/types';

export const onChangePage = (changePage, routePage) => ({
  type: types.CHANGE_PAGE,
  payload: { changePage, routePage },
});

export const onShowModal = (showModal, isValid, routePage) => ({
  type: types.SHOW_MODAL,
  payload: { showModal, routePage, isValid },
});

export const onHandleSubmit = (handleSubmit) => ({
  type: types.HANDLE_SUBMIT,
  payload: { handleSubmit },
});

export const resetChangePage = () => ({
  type: types.RESET_CHANGE_PAGE,
});
