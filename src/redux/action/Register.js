import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from "../types/Types";

export const userRegister = () => {
  return {
    type: REGISTER_USER,
  };
};

export const userRegisterSuccess = (user) => {
  return {
    type: REGISTER_USER_SUCCESS,
    user
  };
};

export const userRegisterFail = (error) => {
  return {
    type: REGISTER_USER_FAIL,
    error,
  };
};
