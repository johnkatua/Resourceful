import { call, put } from "@redux-saga/core/effects";
import { getProfileByAccountSuccess, getProfileByAccountFail, getProfileByServiceSuccess, getProfileByServiceFail } from "../../action/Profile";
import { getProfileByAccountApi, getProfileByServiceApi } from "../../../api/Profile";

export function* getProfileByAccountSaga(action) {
  try {
    const profile = yield call(getProfileByAccountApi, action.id);
    yield put(getProfileByAccountSuccess(profile));
  } catch (error) {
    yield put(getProfileByAccountFail("Could not retrieve profile..."));
  }
};

export function* getProfileByServiceSaga(action) {
  try {
    const serviceProfile = yield call(getProfileByServiceApi, action.id);
    yield put(getProfileByServiceSuccess(serviceProfile));
  } catch (error) {
    yield put(getProfileByServiceFail(error));
  }
}