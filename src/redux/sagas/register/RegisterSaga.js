import { put, call } from "redux-saga/effects";
import { registerUserApi } from "../../../api/User";
import { userRegisterSuccess, userRegisterFail } from "../../action/Register";

export function* RegisterSaga(action) {
  try {
    const response = yield call(registerUserApi, action.user);
    console.log(response);
    yield put(userRegisterSuccess(response));
  } catch (error) {
    yield put(userRegisterFail("Failed to register user"));
  }
};
