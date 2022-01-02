import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL } from "../types/Types";
import { initState } from "../../auth/utils";

export const logoutReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("TOKEN");
      return {
        ...state,
        loading: false,
        user: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}