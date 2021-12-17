import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../types/Types";

export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
