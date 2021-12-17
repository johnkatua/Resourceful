import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from "../types/Types";

export const registerReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        registerMessage: action.message,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
