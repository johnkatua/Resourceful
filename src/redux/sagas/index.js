import { fork } from "redux-saga/effects";
import watchSubCategoriesSaga from "./subcategories/SubCategoriesWatcher";
import watchServicesSaga from "./services/ServicesWatcher";
import watchProfileSaga from "./profile/ProfileWatcher";

export default function* rootSaga() {
  // fork keyword tells the saga to run the function in the background
  yield fork(watchSubCategoriesSaga);
  yield fork(watchServicesSaga);
  yield fork(watchProfileSaga);
}
