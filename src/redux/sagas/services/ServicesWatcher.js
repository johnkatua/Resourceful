import { takeLatest } from "@redux-saga/core/effects";
import { GET_SERVICES, GET_SERVICE_BY_SUBCATEGORY, GET_SINGLE_SERVICE } from "../../types/Types";
import { getServicesBySubCategoriesSaga, getServicesSaga, getSingleServiceSaga } from "./ServicesSaga";

export default function* watchServicesSaga() {
  yield takeLatest(GET_SINGLE_SERVICE, getSingleServiceSaga);
  yield takeLatest(GET_SERVICES, getServicesSaga);
  yield takeLatest(GET_SERVICE_BY_SUBCATEGORY, getServicesBySubCategoriesSaga);
}