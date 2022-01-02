import { fork } from "redux-saga/effects";
import watchSubCategoriesSaga from "./subcategories/SubCategoriesWatcher";
import watchServicesSaga from "./services/ServicesWatcher";

export default function* rootSaga() {
  yield fork(watchSubCategoriesSaga);
  yield fork(watchServicesSaga);
}
