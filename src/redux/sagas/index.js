import { fork } from "redux-saga/effects";
import watchUserRegistration from "./register/RegisterWatcher";
import watchUserLogin from "./login/LoginWatcher";
import watchSubCategoriesSaga from "./subcategories/SubCategoriesWatcher";
import watchServicesSaga from "./services/ServicesWatcher";

export default function* rootSaga() {
  yield fork(watchUserRegistration);
  yield fork(watchUserLogin);
  yield fork(watchSubCategoriesSaga);
  yield fork(watchServicesSaga);
}
