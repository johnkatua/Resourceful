import { put, call } from "redux-saga/effects";
import { loginUserApi } from "../../../api/User";
import { userLoginSuccess, userLoginFail } from "../../action/Login";

export function* LoginSaga(action) {
  try {
    const user = yield call(loginUserApi, action.user);
    yield put(userLoginSuccess(user));
  } catch (error) {
    yield put(userLoginFail("Login failed try again!!..."));
  }
}
