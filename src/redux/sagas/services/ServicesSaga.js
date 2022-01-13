import { call, put } from "@redux-saga/core/effects";
import {
  getServicesSuccess,
  getServicesFail,
  getServicesBySubcategorySuccess,
  getServicesBySubcategoryFail,
  getSingleServiceSuccess,
  getSingleServiceFail,
  getServicesByAccountSuccess,
  getServicesByAccountFail,
} from "../../action/Services";
import { getServicesApi, getServicesBySubcategoryApi, getSingleServiceApi, getServicesByAccountApi } from "../../../api/Services";

export function* getSingleServiceSaga(action) {
  try {
    const service = yield call(getSingleServiceApi, action.id);
    yield put(getSingleServiceSuccess(service));
  } catch (error) {
    yield put(getSingleServiceFail("Fail to load service..."));
  }
}

export function* getServicesSaga() {
  try {
    const services = yield call(getServicesApi);
    yield put(getServicesSuccess(services));
  } catch (error) {
    yield put(getServicesFail("Could not retrieve all services"));
  }
}

export function* getServicesBySubCategoriesSaga(action) {
  try {
    const serviceBySubcategories = yield call(getServicesBySubcategoryApi, action.id);
    yield put(getServicesBySubcategorySuccess(serviceBySubcategories));
    console.log(action.id);
  } catch (error) {
    yield put(getServicesBySubcategoryFail("Failed to load services..."));
  }
}

export function* getServicesByAccountSaga(action) {
  try {
    const servicesByAccount = yield call(getServicesByAccountApi, action.id);
    yield put(getServicesByAccountSuccess(servicesByAccount));
    console.log(servicesByAccount);
  } catch (error) {
    yield put(getServicesByAccountFail("Could not retrieve all services"));
  }
}
