import { call, put } from "@redux-saga/core/effects";
import { getProfileByAccountSuccess, getProfileByAccountFail } from "../../action/Profile";
import { getProfileByAccountApi } from "../../../api/Profile";

export function* getProfileByAccountSaga(action) {
  try {
    const profile = yield call(getProfileByAccountApi, action.id);
    yield put(getProfileByAccountSuccess(profile));
  } catch (error) {
    yield put(getProfileByAccountFail("Could not retrieve profile..."));
  }
};