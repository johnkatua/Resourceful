import { takeLatest } from "@redux-saga/core/effects";
import { GET_SUBCATEGORIES } from "../../types/Types";
import { getSubCategoriesSaga } from "./SubCategoriesSaga";

export default function* watchSubCategoriesSaga() {
  yield takeLatest(GET_SUBCATEGORIES, getSubCategoriesSaga);
}
