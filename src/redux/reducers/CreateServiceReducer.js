import { CREATE_SERVICE, CREATE_SERVICE_SUCCESS, CREATE_SERVICE_FAIL } from "../types/Types";

const initState = {
  postedService: null,
  error: "",
  loading: false,
}

const createServiceReducer = (state = initState, action) => {
  console.log('john', action);
  switch (action.type) {
    case CREATE_SERVICE:
      return {
        ...state,
        loading: true,
      };
    case CREATE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        postedService: action.payload.service,
      };
    case CREATE_SERVICE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createServiceReducer;