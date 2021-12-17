import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../types/Types";

export const userLogin = (user) => {
  return {
    type: LOGIN,
    user,
  };
};

export const userLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

export const userLoginFail = (error) => {
  return {
    type: LOGIN_FAIL,
    error,
  };
};
