import { call, put } from "redux-saga/effects";
import { getAllSubCategoriesSuccess, getAllSubCategoriesFail } from "../../action/SubCategories";
import { getSubCategoriesApi } from "../../../api/SubCategories";

export function* getSubCategoriesSaga() {
  try {
    const subCategories = yield call(getSubCategoriesApi);
    yield put(getAllSubCategoriesSuccess(subCategories));
  } catch (error) {
    yield put(getAllSubCategoriesFail("Failed to service sub-categories"));
  }
};