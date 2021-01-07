import { CHANGE_PAGE, RESET_CHANGE_PAGE } from '../types/types';

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

    case RESET_CHANGE_PAGE:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default formularioReducer;
