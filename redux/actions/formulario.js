import * as types from '../types/types';

export const onChangePage = (changePage, routePage) => ({
  type: types.CHANGE_PAGE,
  payload: { changePage, routePage },
});

export const resetChangePage = () => ({
  type: types.RESET_CHANGE_PAGE,
});
