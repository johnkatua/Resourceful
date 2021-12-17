import { takeLatest } from "@redux-saga/core/effects";
import { LOGIN } from "../../types/Types";
import { LoginSaga } from "./LoginSaga";

export default function* watchUserLogin() {
  yield takeLatest(LOGIN, LoginSaga);
}
