import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import logger from "redux-logger";

import createSagaMiddleware from "redux-saga";
import rootSaga from "../redux/sagas/index";
import { getAllSubCategoriesReducer } from "./reducers/SubCategoriesReducer";
import {
  getServicesBySubcategoryReducer,
  getServicesReducer,
  getSingleServiceReducer,
  getServicesByAccountReducer,
} from "./reducers/ServicesReducer";

import authentication from "../redux/reducers/AuthenticationReducer";

const initState = {
  authentication: {
    currentUser: null,
    token: "",
    error: "",
    loading: false,
    isAuthenticated: localStorage.getItem("TOKEN") ? true :  false,
  }
}

export default function configureStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers({
      authentication,
      subCategories: getAllSubCategoriesReducer,
      services: getServicesReducer,
      serviceBySubcategories: getServicesBySubcategoryReducer,
      service: getSingleServiceReducer,
      servicesByAccount: getServicesByAccountReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, thunk, logger))
  );
  sagaMiddleware.run(rootSaga);

  return store;
}
