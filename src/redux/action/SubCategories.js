import { GET_SUBCATEGORIES, GET_SUBCATEGORIES_SUCCESS, GET_SUBCATEGORIES_FAIL } from "../types/Types";

export const getAllSubCategories = () => {
  return {
    type: GET_SUBCATEGORIES,
  };
};

export const getAllSubCategoriesSuccess = (subCategories) => {
  return {
    type: GET_SUBCATEGORIES_SUCCESS,
    subCategories,
  };
};

export const getAllSubCategoriesFail = (error) => {
  return {
    type: GET_SUBCATEGORIES_FAIL,
    error,
  };
};
