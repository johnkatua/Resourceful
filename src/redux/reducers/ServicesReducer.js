import {
  GET_SERVICES,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_FAIL,
  GET_SERVICE_BY_SUBCATEGORY,
  GET_SERVICE_BY_SUBCATEGORY_SUCCESS,
  GET_SERVICE_BY_SUBCATEGORY_FAIL,
  GET_SINGLE_SERVICE,
  GET_SINGLE_SERVICE_SUCCESS,
  GET_SINGLE_SERVICE_FAIL,
  GET_SERVICE_BY_ACCOUNT,
  GET_SERVICE_BY_ACCOUNT_FAIL,
  GET_SERVICE_BY_ACCOUNT_SUCCESS,
  DELETE_SERVICE,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAIL,
} from "../types/Types";

const initialState = {
  services: [],
  loading: false,
  error: "",
  deletedService: [],
};



// get single service
export const getSingleServiceReducer = (state = { service: [] }, action) => {
  switch (action.type) {
    case GET_SINGLE_SERVICE:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_SERVICE_SUCCESS:
      return {
        ...state,
        service: [...action.service],
        loading: false,
      };
    case GET_SINGLE_SERVICE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// get all services
export const getServicesReducer = (state = { services: [] }, action) => {
  console.log("red", state);
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        loading: true,
      };
    case GET_SERVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        services: [action.services],
      };
    case GET_SERVICES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        services: [],
      };
    case DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        services: [...state.services.filter((service) => service.id !== action.id)],
      }
    default:
      return state;
  }
};

// get service based on sub category
export const getServicesBySubcategoryReducer = (state = { serviceBySubcategories: [] }, action) => {
  console.log("reducer", state);
  switch (action.type) {
    case GET_SERVICE_BY_SUBCATEGORY:
      return {
        ...state,
        loading: true,
      };
    case GET_SERVICE_BY_SUBCATEGORY_SUCCESS:
      console.log("action***", action);
      return {
        ...state,
        loading: false,
        serviceBySubcategories: [action.serviceBySubcategories],
      };
    case GET_SERVICE_BY_SUBCATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// get service by account
export const getServicesByAccountReducer = (state = { servicesByAccount: [] }, action) => {
  console.log("myState", state);
  switch (action.type) {
    case GET_SERVICE_BY_ACCOUNT:
      return {
        ...state,
        loading: true,
      };
    case GET_SERVICE_BY_ACCOUNT_SUCCESS:
      console.log("action***", action);
      return {
        ...state,
        loading: false,
        servicesByAccount: [action.servicesByAccount],
      };
    case GET_SERVICE_BY_ACCOUNT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// delete service reducer
// export const deleteServiceReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case DELETE_SERVICE:
//       return {
//         ...state,
//         loading: true,
//         deletedService: action.payload,
//       };
//     case DELETE_SERVICE_SUCCESS:
//       console.log("delete", initialState.deletedService);
//       return {
//         ...state,
//         loading: false,
//         services: state.services.filter(service => service.id !== state.deletedService),
//         deletedService: [],
//       };
//     case DELETE_SERVICE_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       }
//     default:
//       return state;
//   }
// };