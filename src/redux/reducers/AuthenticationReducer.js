import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from "../types/Types";

export const isValidToken = (token) => {
  let tok = token;
  return new Date(tok.exp * 1000) > new Date() ? tok : null;
};

const initState = {
  currentUser: localStorage.getItem("TOKEN") ? isValidToken(localStorage.getItem("TOKEN")) : null,
  token: localStorage.getItem("TOKEN") ? localStorage.getItem("TOKEN") : null,
  error: "",
  loading: false,
  isAuthenticated: localStorage.getItem("TOKEN") ? true : false,
};

const authenticationReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN:
    case LOGOUT:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case REGISTER_USER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        currentUser: action.payload.user,
        isAuthenticated: true,
      };
    case REGISTER_USER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        currentUser: null,
        isAuthenticated: false
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("TOKEN");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        currentUser: null,
        token: ""
      }
    default:
      return {
        ...state
      }
  }
};

export default authenticationReducer;