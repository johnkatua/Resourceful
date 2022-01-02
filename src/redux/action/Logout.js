import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL } from "../types/Types";

export const userLogout = () => {
  return {
    type: LOGOUT
  }
};

export const userLogoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  }
};

export const userLogoutFail = () => {
  return {
    type: LOGOUT_FAIL
  }
};

export const signOut = () => {
  return function (dispatch) {
    dispatch(userLogout());
    localStorage.clear();
    if(localStorage.getItem("TOKEN")) {
      dispatch(userLogoutFail());
    } else {
      dispatch(userLogoutSuccess());
    }
  }
}