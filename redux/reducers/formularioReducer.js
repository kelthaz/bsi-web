import { CHANGE_PAGE, UPDATE_SHOW_MODAL } from '../types/types';

const initialState = {
  changePage: false,
  routePage: '',
};

const formularioReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_PAGE:
      return {
        ...state,
        ...payload,
      };

    case UPDATE_SHOW_MODAL:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default formularioReducer;
