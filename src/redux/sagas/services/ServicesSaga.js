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
import { getServicesApi, getServicesBySubcategoryApi, getSingleServiceApi, getServicesByAccountApi, deleteServiceApi } from "../../../api/Services";

export function* getSingleServiceSaga(action) {
  try {
    // yield keyword tells the function to wait for the result of the call before continuing
    // call keyword is used to call an async function
    const service = yield call(getSingleServiceApi, action.id);
    // put keyword tells the saga to dispatch an action
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
};

// export function* deleteServiceSaga(action) {
//   try {
//     const deletedService = yield call(deleteServiceApi, action.id);
//     yield put(deleteServiceSuccess(deletedService));
//   } catch (error) {
//     yield put(deleteServiceFail(error));
//   };  
// };


