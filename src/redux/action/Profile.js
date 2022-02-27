import {
  GET_PROFILE_BY_ACCOUNT,
  GET_PROFILE_BY_ACCOUNT_SUCCESS,
  GET_PROFILE_BY_ACCOUNT_FAIL,
  GET_PROFILE_BY_SERVICE,
  GET_PROFILE_BY_SERVICE_SUCCESS,
  GET_PROFILE_BY_SERVICE_FAIL,
} from "../types/Types";

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

export const getProfileByService = (id) => {
  return {
    type: GET_PROFILE_BY_SERVICE,
    id,
  };
};

export const getProfileByServiceSuccess = (serviceProfile) => {
  console.log(serviceProfile);
  return {
    type: GET_PROFILE_BY_SERVICE_SUCCESS,
    serviceProfile,
  };
};

export const getProfileByServiceFail = (error) => {
  console.log(error);
  return {
    type: GET_PROFILE_BY_SERVICE_FAIL,
    error,
  };
};
