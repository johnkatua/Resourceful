import { GET_SUBCATEGORIES, GET_SUBCATEGORIES_SUCCESS, GET_SUBCATEGORIES_FAIL } from "../types/Types";

export const getAllSubCategoriesReducer = (state = { subCategories: [] }, action) => {
  switch (action.type) {
    case GET_SUBCATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case GET_SUBCATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        subCategories: [...action.subCategories],
      };
    case GET_SUBCATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
