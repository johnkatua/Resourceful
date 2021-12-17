import { takeLatest } from "redux-saga/effects";
import { REGISTER_USER } from "../../types/Types";
import { RegisterSaga } from "./RegisterSaga";

export default function* watchUserRegistration() {
  yield takeLatest(REGISTER_USER, RegisterSaga);
}
