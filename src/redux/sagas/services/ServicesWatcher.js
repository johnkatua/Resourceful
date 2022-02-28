import { takeLatest } from "@redux-saga/core/effects";
import {
  GET_SERVICES,
  GET_SERVICE_BY_SUBCATEGORY,
  GET_SINGLE_SERVICE,
  GET_SERVICE_BY_ACCOUNT,
  DELETE_SERVICE,
} from "../../types/Types";
import {
  getServicesByAccountSaga,
  getServicesBySubCategoriesSaga,
  getServicesSaga,
  getSingleServiceSaga,
  // deleteServiceSaga,
} from "./ServicesSaga";

export default function* watchServicesSaga() {
  // takeLatest keyword tells the saga to only run the latest action
  yield takeLatest(GET_SINGLE_SERVICE, getSingleServiceSaga);
  yield takeLatest(GET_SERVICES, getServicesSaga);
  yield takeLatest(GET_SERVICE_BY_SUBCATEGORY, getServicesBySubCategoriesSaga);
  yield takeLatest(GET_SERVICE_BY_ACCOUNT, getServicesByAccountSaga);
  // yield takeLatest(DELETE_SERVICE, deleteServiceSaga);
}
