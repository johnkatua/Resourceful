import { takeLatest } from "redux-saga/effects";
import { GET_PROFILE_BY_ACCOUNT, GET_PROFILE_BY_SERVICE } from "../../types/Types";
import { getProfileByAccountSaga, getProfileByServiceSaga } from "./ProfileSaga";

export default function* watchProfileSaga() {
  // takeLatest keyword tells the saga to only run the latest action
  yield takeLatest(GET_PROFILE_BY_ACCOUNT, getProfileByAccountSaga);
  yield takeLatest(GET_PROFILE_BY_SERVICE, getProfileByServiceSaga);
}