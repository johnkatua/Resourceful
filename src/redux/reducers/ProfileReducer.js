import { GET_PROFILE_BY_ACCOUNT, GET_PROFILE_BY_ACCOUNT_SUCCESS, GET_PROFILE_BY_ACCOUNT_FAIL } from "../types/Types";

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
  };
};