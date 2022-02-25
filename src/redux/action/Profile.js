import { GET_PROFILE_BY_ACCOUNT, GET_PROFILE_BY_ACCOUNT_SUCCESS, GET_PROFILE_BY_ACCOUNT_FAIL } from "../types/Types";

export const getProfileByAccount = (id) => {
  return {
    type: GET_PROFILE_BY_ACCOUNT,
    id,
  };
};

export const getProfileByAccountSuccess = (profile) => {
  console.log(profile);
  return {
    type: GET_PROFILE_BY_ACCOUNT_SUCCESS,
    profile,
  };
};

export const getProfileByAccountFail = (error) => {
  return {
    type: GET_PROFILE_BY_ACCOUNT_FAIL,
    error,
  };
};