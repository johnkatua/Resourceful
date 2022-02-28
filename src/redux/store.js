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
import { getProfileByAccountReducer, getProfileByServiceReducer } from "./reducers/ProfileReducer";
import { deleteServiceReducer } from "./reducers/DeleteServiceReducer";

import authentication from "../redux/reducers/AuthenticationReducer";
import createServiceReducer from "../redux/reducers/CreateServiceReducer";

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
      createServiceReducer,
      deleteServiceReducer,
      subCategories: getAllSubCategoriesReducer,
      services: getServicesReducer,
      serviceBySubcategories: getServicesBySubcategoryReducer,
      service: getSingleServiceReducer,
      servicesByAccount: getServicesByAccountReducer,
      profile: getProfileByAccountReducer,
      serviceProfile: getProfileByServiceReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, thunk, logger))
  );
  sagaMiddleware.run(rootSaga);

  console.log('store', initialState)

  return store;
}
