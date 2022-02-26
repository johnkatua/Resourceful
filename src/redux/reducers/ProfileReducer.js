import {
  GET_PROFILE_BY_ACCOUNT,
  GET_PROFILE_BY_ACCOUNT_SUCCESS,
  GET_PROFILE_BY_ACCOUNT_FAIL,
  GET_PROFILE_BY_SERVICE_FAIL,
  GET_PROFILE_BY_SERVICE_SUCCESS,
  GET_PROFILE_BY_SERVICE,
} from "../types/Types";

// get profile by account
export const getProfileByAccountReducer = (state = { profile: [] }, action) => {
  switch (action.type) {
    case GET_PROFILE_BY_ACCOUNT:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_BY_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: [action.profile],
      };
    case GET_PROFILE_BY_ACCOUNT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        profile: [],
      };
    default:
      return state;
  }
};

// get profile by service
export const getProfileByServiceReducer = (state = { serviceProfile: [] }, action) => {
  switch (action.type) {
    case GET_PROFILE_BY_SERVICE:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_BY_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        serviceProfile: [action.serviceProfile],
      };
    case GET_PROFILE_BY_SERVICE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        serviceProfile: [],
      };
    default:
      return state;
  }
};
