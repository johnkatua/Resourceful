import { DELETE_SERVICE, DELETE_SERVICE_SUCCESS, DELETE_SERVICE_FAIL } from "../types/Types";

const initialState = {
  deletedService: [],
  loading: false,
  error: "",
};

export const deleteServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SERVICE:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SERVICE_SUCCESS:
      console.log("delete", initialState.deletedService);
      return {
        ...state,
        loading: false,
        deletedService: state.deletedService.filter(service => service.id !== action.id),
      };
    case DELETE_SERVICE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}