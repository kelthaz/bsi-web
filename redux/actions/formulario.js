import * as types from '../types/types';

export const onChangePage = (changePage, routePage) => ({
  type: types.CHANGE_PAGE,
  payload: { changePage, routePage },
});

export const updateShowModal = (showModal, route) => ({
  type: types.CHANGE_PAGE,
  payload: { showModal, route },
});
