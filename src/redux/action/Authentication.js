import axios from "axios";

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

const signUpUrl = "http://localhost:5000/createAccount";
const signInUrl = "http://localhost:5000/login";

const userRegister = () => {
  return {
    type: REGISTER_USER
  }
};

const userRegisterSuccess = (user) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: {
      user,
    }
  }
};

const userRegisterFailure = (error) => {
  return {
    type: REGISTER_USER_FAIL,
    payload: error,
  }
};

export const signUp = (user, navigate) => {
  return function (dispatch) {
    dispatch(userRegister());
    axios({
      method: "POST",
      url: signUpUrl,
      data: user
    })
    .then((response) => {
      const { data } = response.data;
      dispatch(userRegisterSuccess(data));
      navigate("/login")
    })
    .catch((error) => {
      dispatch(userRegisterFailure(error))
    })
  }
}

export const userLogin = () => {
  return {
    type: LOGIN,
  }
};

export const userLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
    }
  }
};

export const userLoginFailure = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: error
  }
};

export const signIn = (payload, navigate) => {
  console.log(payload)
  return function (dispatch) {
    dispatch(userLogin());
    axios({
      method: "POST",
      url: signInUrl,
      data: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
      }
    })
    .then((response) => {
      console.log(response);
      const { token, user } = response.data.data;
      localStorage.setItem("DATA", user.name);
      localStorage.setItem("TOKEN", token);
      dispatch(userLoginSuccess(user.name));
      navigate("/")
    })
    .catch((error) => {
      dispatch(userLoginFailure(error));
    })
  }
};

export const userLogout = () => {
  return {
    type: LOGOUT,
  }
};

export const userLogoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  }
};

export const userLogoutFailure = () => {
  return {
    type: LOGOUT_FAIL,
  }
};

export const signOut = () => {
  return function (dispatch) {
    dispatch(userLogout());
    localStorage.clear();
    if(localStorage.getItem("TOKEN")) {
      dispatch(userLogoutFailure());
    } else {
      dispatch(userLogoutSuccess());
    }
  }
}