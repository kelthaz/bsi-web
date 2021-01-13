import { CHANGE_PAGE, HANDLE_SUBMIT, RESET_CHANGE_PAGE, SHOW_MODAL } from '../types/types';

const initialState = {
  changePage: false,
  routePage: '',
  isValid: false,
  showModal: false,
  handleSubmit: false,
};

const formularioReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_PAGE:
      return {
        ...state,
        ...payload,
      };

    case SHOW_MODAL:
      return {
        ...state,
        ...payload,
      };

    case HANDLE_SUBMIT:
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
